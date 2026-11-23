import { Link } from "react-router";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";
import LoopVideo from "./LoopVideo";
import { CATEGORY_LABELS, COLORS, HOME_CLIPS } from "../../data/galerie";

// Accueil, section « En images » : extraits muets de 6 s des vidéos de la galerie dont le nom
// contient « accueil » (générés par `npm run videos`). Chaque extrait mène à sa catégorie de la galerie.
// Rien n’est téléchargé avant l’arrivée sur la section (LoopVideo : preload="none").
const CLIPS = HOME_CLIPS.slice(0, 6);

export default function LedGalerie() {
	if (!CLIPS.length) return null;

	return (
		<section aria-labelledby="galerie-titre" className="px-4 py-20">
			<div className="mx-auto max-w-6xl">
				<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
					<SectionTitle id="galerie-titre" label="En images" title="L’ambiance," accent="en vrai">
						Des extraits de vraies soirées : bars, mariages, entreprises et fêtes de village.
					</SectionTitle>
					<Link
						to="/galerie"
						className="btn-outline-neon inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-[var(--cyan)] px-6 py-3 font-semibold text-[var(--cyan)]">
						Voir toute la galerie
						<ArrowRightIcon className="h-4 w-4" />
					</Link>
				</div>

				<ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
					{CLIPS.map((c, i) => (
						<ScrollReveal as="li" key={c.path} delay={(i % 3) * 80}>
							<Link
								to={`/galerie?categorie=${c.category}`}
								aria-label={`${c.alt} : voir la galerie ${CATEGORY_LABELS[c.category] ?? c.category}`}
								style={{ "--c": COLORS[i % COLORS.length] }}
								className="gallery-tile group relative block overflow-hidden rounded-2xl">
								<LoopVideo
									video={{ sources: [{ src: c.src, type: "video/mp4" }], poster: c.poster }}
									label={c.alt}
									aspect="aspect-[4/5] md:aspect-[4/3]"
									className="transition-transform duration-500 group-hover:scale-105"
								/>
								<span className="absolute bottom-2 left-2 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white">
									{CATEGORY_LABELS[c.category] ?? c.category}
								</span>
							</Link>
						</ScrollReveal>
					))}
				</ul>
			</div>
		</section>
	);
}
