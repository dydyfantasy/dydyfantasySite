import { Link } from "react-router";
import ScrollReveal from "./ScrollReveal";
import LoopVideo from "./LoopVideo";
import { CATEGORY_LABELS, COLORS, HOME_CLIPS } from "../../data/galerie";

// Mosaïque d’extraits muets de 6 s des vidéos de la galerie dont le nom contient « accueil »
// (générés par `npm run videos`), affichée dans « Mais c’est qui Dydy Fantasy ? » sur l’accueil.
// Chaque extrait mène à sa catégorie de la galerie. Rien n’est téléchargé avant l’arrivée
// sur la section (LoopVideo : preload="none").
export const CLIPS = HOME_CLIPS.slice(0, 6);

// `clips` : liste à afficher (par défaut, la sélection de l’accueil)

export default function GalleryClips({ clips = CLIPS, className = "grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4" }) {
	if (!clips.length) return null;

	return (
		<ul className={className}>
			{clips.map((c, i) => (
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
	);
}
