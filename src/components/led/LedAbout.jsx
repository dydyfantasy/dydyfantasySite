import { Link } from "react-router";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import SectionTitle from "./SectionTitle";
import PhotoCarousel from "./PhotoCarousel";
import ScrollReveal from "./ScrollReveal";
import GalleryClips, { CLIPS } from "./GalleryClips";

// « Mais c’est qui Dydy Fantasy ? » : texte + extraits vidéo de vraies soirées (galerie).
// S’il n’y a aucune vidéo marquée « accueil », le carrousel de photos (src/assets/carrousel/) prend le relais.
export default function LedAbout() {
	return (
		<section aria-labelledby="about-titre" className="px-4 py-20">
			<div className="mx-auto max-w-6xl">
				<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
					<SectionTitle id="about-titre" label="Présentation" title="Mais c’est qui" accent="Dydy Fantasy ?">
						Animateur et DJ basé à Fonsorbes, à l’ouest de Toulouse. Résident dans 4 bars, je fais
						jouer, chanter et danser plus de 12 soirées par mois.
					</SectionTitle>
					<div className="flex shrink-0 flex-col gap-3 sm:flex-row">
						<Link
							to="/qui-suis-je"
							className="btn-outline-neon inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--cyan)] px-6 py-3 font-semibold text-[var(--cyan)]">
							En savoir plus sur moi
							<ArrowRightIcon className="h-4 w-4" />
						</Link>
						{CLIPS.length > 0 && (
							<Link
								to="/galerie"
								className="btn-outline-neon inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--pink)] px-6 py-3 font-semibold text-[var(--pink)]">
								Voir la galerie
								<ArrowRightIcon className="h-4 w-4" />
							</Link>
						)}
					</div>
				</div>

				<div className="mt-10">
					{CLIPS.length > 0 ? (
						<GalleryClips />
					) : (
						<ScrollReveal delay={120}>
							<PhotoCarousel />
						</ScrollReveal>
					)}
				</div>
			</div>
		</section>
	);
}
