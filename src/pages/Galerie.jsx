import { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon, PlayIcon } from "@heroicons/react/24/solid";
import Seo from "../components/Seo";
import StageLights from "../components/led/StageLights";
import SectionTitle from "../components/led/SectionTitle";
import ScrollReveal from "../components/led/ScrollReveal";
import LedFinal from "../components/led/LedFinal";
import { CATEGORY_LABELS, COLORS, describe, posterMeta } from "../data/galerie";

// Galerie : tout fichier déposé dans src/assets/galerie/<catégorie>/ apparaît ici.
// Photos optimisées à la compilation (vite-imagetools) ; vidéos servies telles quelles
// (à garder courtes et légères, idéalement < 10 Mo).
const thumbs = import.meta.glob("../assets/galerie/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
	eager: true,
	query: { w: "480;900", format: "webp", quality: "78", as: "srcset" },
	import: "default",
});
// metadata : { src, width, height } → dimensions déclarées sur les vignettes (pas de saut de mise en page)
const mediums = import.meta.glob("../assets/galerie/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
	eager: true,
	query: { w: "900", format: "webp", quality: "78", as: "metadata" },
	import: "default",
});
const larges = import.meta.glob("../assets/galerie/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
	eager: true,
	query: { w: "1600", format: "webp", quality: "80" },
	import: "default",
});
const videos = import.meta.glob("../assets/galerie/*/*.{mp4,webm,MP4,WEBM}", {
	eager: true,
	query: "?url",
	import: "default",
});

const MEDIA = [
	...Object.keys(thumbs).map((path) => ({
		type: "image",
		path,
		srcSet: thumbs[path],
		src: mediums[path].src,
		width: mediums[path].width,
		height: mediums[path].height,
		large: larges[path],
		...describe(path),
	})),
	...Object.keys(videos).map((path) => {
		const p = posterMeta(path);
		return { type: "video", path, src: videos[path], poster: p?.src, width: p?.width, height: p?.height, ...describe(path) };
	}),
].sort((a, b) => a.path.localeCompare(b.path));

const CATEGORIES = [...new Set(MEDIA.map((m) => m.category))];

// Mosaïque : taille de chaque case selon le format du média (dimensions connues à la compilation),
// avec un rythme pour éviter une grille uniforme. Les trous sont comblés automatiquement (grid-flow-dense).
// - 1 case sur 7 : mise en avant en grand (2 x 2)
// - paysage : case large sur ordinateur
// - portrait (vidéos de téléphone) : haute 2 fois sur 3, carrée sinon
function tileSize(m, i) {
	const ratio = m.width && m.height ? m.width / m.height : 1;
	if (i % 7 === 0) return { span: "col-span-2 row-span-2", sizes: "(min-width: 768px) 50vw, 100vw" };
	if (ratio >= 1.3) return { span: "md:col-span-2", sizes: "50vw" };
	if (ratio <= 0.8 && i % 3 !== 2) return { span: "row-span-2", sizes: "(min-width: 768px) 25vw, 50vw" };
	return { span: "", sizes: "(min-width: 768px) 25vw, 50vw" };
}

// Visionneuse plein écran (dialog natif) : flèches, clavier, Échap
function Lightbox({ items, index, onClose, onMove }) {
	const ref = useRef(null);
	const item = index === null ? null : items[index];

	useEffect(() => {
		const dialog = ref.current;
		if (item && dialog && !dialog.open) dialog.showModal();
	}, [item]);

	useEffect(() => {
		if (!item) return;
		const onKey = (e) => {
			if (e.key === "ArrowRight") onMove(1);
			if (e.key === "ArrowLeft") onMove(-1);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [item, onMove]);

	if (!item) return null;

	return (
		<dialog
			ref={ref}
			onClose={onClose}
			onClick={(e) => e.target === ref.current && ref.current.close()}
			aria-label={item.alt}
			className="gallery-dialog m-auto max-h-[94svh] max-w-[96vw] bg-transparent p-0">
			<div className="relative flex items-center justify-center">
				{item.type === "image" ? (
					<img src={item.large} alt={item.alt} className="max-h-[88svh] max-w-[94vw] rounded-2xl object-contain" />
				) : (
					<video src={item.src} poster={item.poster} controls autoPlay playsInline className="max-h-[88svh] max-w-[94vw] rounded-2xl bg-black" />
				)}
				<button type="button" onClick={() => ref.current.close()} aria-label="Fermer" className="gallery-btn absolute right-2 top-2">
					<XMarkIcon className="h-6 w-6" />
				</button>
				{items.length > 1 && (
					<>
						<button type="button" onClick={() => onMove(-1)} aria-label="Précédent" className="gallery-btn absolute left-2 top-1/2 -translate-y-1/2">
							<ChevronLeftIcon className="h-6 w-6" />
						</button>
						<button type="button" onClick={() => onMove(1)} aria-label="Suivant" className="gallery-btn absolute right-2 top-1/2 -translate-y-1/2">
							<ChevronRightIcon className="h-6 w-6" />
						</button>
					</>
				)}
			</div>
			<p className="mt-2 text-center text-sm text-white/70">{item.alt}</p>
		</dialog>
	);
}

export default function Galerie() {
	const [filter, setFilter] = useState("tout");
	const [opened, setOpened] = useState(null); // index dans `visible`

	// /galerie?categorie=bars (liens de l’accueil) : appliqué après le chargement (HTML pré-rendu = « Tout »)
	useEffect(() => {
		const c = new URLSearchParams(window.location.search).get("categorie");
		if (c && CATEGORIES.includes(c)) setFilter(c);
	}, []);
	const visible = filter === "tout" ? MEDIA : MEDIA.filter((m) => m.category === filter);

	const move = (step) => setOpened((i) => (i === null ? i : (i + step + visible.length) % visible.length));

	return (
		<div className="led fun relative isolate overflow-hidden bg-[var(--ink)] text-white">
			<Seo
				path="/galerie"
				title="Galerie photos et vidéos de soirées | Dydy Fantasy"
				description="Photos et vidéos des soirées Dydy Fantasy : blind tests, quiz, karaokés et DJ dans les bars, mariages et événements autour de Toulouse."
			/>
			<StageLights />

			<section className="px-4 pb-10 pt-10 md:pt-14">
				<div className="mx-auto max-w-6xl">
					<h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
						Galerie : l’ambiance des <span className="text-[var(--pink)]">soirées</span>{" "}
						<span className="text-[var(--cyan)]">Dydy Fantasy</span>
					</h1>
					<p className="mt-4 max-w-2xl text-lg text-white/75">
						Blind tests, quiz, karaokés et soirées DJ dans les bars, mariages et événements autour de
						Toulouse. Ici, on joue, on chante et on danse.
					</p>

					{/* Filtres */}
					{CATEGORIES.length > 1 && (
						<div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filtrer la galerie">
							{["tout", ...CATEGORIES].map((c, i) => (
								<button
									key={c}
									type="button"
									aria-pressed={filter === c}
									onClick={() => setFilter(c)}
									style={{ "--c": COLORS[i % COLORS.length] }}
									className="answer-btn rounded-full px-4 py-2 text-sm font-semibold">
									{c === "tout" ? "Tout" : CATEGORY_LABELS[c] ?? c}
								</button>
							))}
						</div>
					)}
				</div>
			</section>

			<section aria-label="Photos et vidéos" className="px-4 pb-16">
				<div className="mx-auto max-w-6xl">
					{visible.length === 0 ? (
						<p className="text-white/60">Les photos arrivent bientôt !</p>
					) : (
						<ul className="grid grid-flow-dense auto-rows-[9.5rem] grid-cols-2 gap-3 md:auto-rows-[13rem] md:grid-cols-4 md:gap-4">
							{visible.map((m, i) => (
								<ScrollReveal as="li" key={m.path} delay={(i % 4) * 70} className={tileSize(m, i).span}>
									<button
										type="button"
										onClick={() => setOpened(i)}
										aria-label={`Agrandir : ${m.alt}`}
										style={{ "--c": COLORS[i % COLORS.length] }}
										className="gallery-tile group relative block h-full w-full overflow-hidden rounded-2xl">
										{m.type === "image" ? (
											<img
												src={m.src}
												srcSet={m.srcSet}
												sizes={tileSize(m, i).sizes}
												alt={m.alt}
												width={m.width}
												height={m.height}
												loading="lazy"
												decoding="async"
												className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
											/>
										) : (
											<>
												{m.poster ? (
													<img
														src={m.poster}
														alt={m.alt}
														width={m.width}
														height={m.height}
														loading="lazy"
														decoding="async"
														className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
													/>
												) : (
													<video src={m.src} muted playsInline preload="metadata" className="h-full w-full object-cover" />
												)}
												<span className="absolute inset-0 flex items-center justify-center">
													<span className="gallery-btn">
														<PlayIcon className="h-7 w-7" />
													</span>
												</span>
											</>
										)}
									</button>
								</ScrollReveal>
							))}
						</ul>
					)}
				</div>
			</section>

			<LedFinal />
			<Lightbox items={visible} index={opened} onClose={() => setOpened(null)} onMove={move} />
		</div>
	);
}

