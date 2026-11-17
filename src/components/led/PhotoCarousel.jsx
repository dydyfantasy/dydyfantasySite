import { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

// Toutes les photos du dossier src/assets/carrousel/ (ordre alphabétique des noms).
// Déposez-y vos photos en pleine qualité : elles sont redimensionnées et converties
// en WebP automatiquement à la compilation (vite-imagetools).
const files = import.meta.glob("../../assets/carrousel/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
	eager: true,
	query: { w: "480;900", format: "webp", quality: "78", as: "srcset" },
	import: "default",
});
const fallbacks = import.meta.glob("../../assets/carrousel/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
	eager: true,
	query: { w: "900", format: "webp", quality: "78" },
	import: "default",
});

const PHOTOS = Object.keys(files)
	.sort()
	.map((path) => ({
		srcSet: files[path],
		src: fallbacks[path],
		// « 01-scene-salle-des-fetes.png » -> « scene salle des fetes »
		alt: `Dydy Fantasy en soirée : ${path
			.split("/")
			.pop()
			.replace(/\.[^.]+$/, "")
			.replace(/^\d+[-_ ]*/, "")
			.replace(/[-_]+/g, " ")}`,
	}));

const AUTOPLAY_MS = 2500; // une photo toutes les 2,5 s
const RESUME_MS = 5000; // reprise 5 s après la dernière interaction

// Carrousel « pellicule » : défilement natif (scroll-snap), au doigt sur mobile,
// flèches sur ordinateur, défilement automatique mis en pause pendant l’interaction
// puis relancé quelques secondes après.
export default function PhotoCarousel() {
	const trackRef = useRef(null);
	const [paused, setPaused] = useState(false);
	const resumeTimer = useRef(null);

	// Pause pendant l’interaction, reprise automatique après RESUME_MS
	const pauseThenResume = () => {
		setPaused(true);
		window.clearTimeout(resumeTimer.current);
		resumeTimer.current = window.setTimeout(() => setPaused(false), RESUME_MS);
	};

	useEffect(() => () => window.clearTimeout(resumeTimer.current), []);

	const scrollByCard = (direction) => {
		const track = trackRef.current;
		if (!track) return;
		const card = track.querySelector("li");
		const step = card ? card.getBoundingClientRect().width + 16 : track.clientWidth;
		const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
		if (direction > 0 && atEnd) track.scrollTo({ left: 0, behavior: "smooth" });
		else track.scrollBy({ left: direction * step, behavior: "smooth" });
	};

	useEffect(() => {
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (paused || reduce || PHOTOS.length < 2) return;
		const id = window.setInterval(() => scrollByCard(1), AUTOPLAY_MS);
		return () => window.clearInterval(id);
	}, [paused]);

	if (PHOTOS.length === 0) return null;

	return (
		<div
			className="relative"
			onPointerDown={pauseThenResume}
			onWheel={pauseThenResume}
			onFocus={pauseThenResume}>
			<ul
				ref={trackRef}
				aria-label="Photos de soirées Dydy Fantasy"
				className="carousel-track flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
				{PHOTOS.map((photo, i) => (
					<li
						key={photo.src}
						className="carousel-card w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[31%]"
						style={{ "--c": ["var(--cyan)", "var(--pink)", "var(--gold)"][i % 3] }}>
						<img
							src={photo.src}
							srcSet={photo.srcSet}
							sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 78vw"
							alt={photo.alt}
							loading="lazy"
							decoding="async"
							className="aspect-[4/5] w-full rounded-2xl object-cover"
						/>
					</li>
				))}
			</ul>

			{PHOTOS.length > 1 && (
				<div className="mt-4 hidden justify-end gap-2 md:flex">
					<button
						type="button"
						onClick={() => {
							pauseThenResume();
							scrollByCard(-1);
						}}
						aria-label="Photo précédente"
						className="social-btn flex h-11 w-11 items-center justify-center rounded-full"
						style={{ "--c": "var(--cyan)" }}>
						<ChevronLeftIcon className="h-5 w-5" />
					</button>
					<button
						type="button"
						onClick={() => {
							pauseThenResume();
							scrollByCard(1);
						}}
						aria-label="Photo suivante"
						className="social-btn flex h-11 w-11 items-center justify-center rounded-full"
						style={{ "--c": "var(--pink)" }}>
						<ChevronRightIcon className="h-5 w-5" />
					</button>
				</div>
			)}
		</div>
	);
}
