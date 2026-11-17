import { Link } from "react-router";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import SectionTitle from "./SectionTitle";
import PhotoCarousel from "./PhotoCarousel";
import ScrollReveal from "./ScrollReveal";

// « Mais c'est qui Dydy Fantasy ? » : texte + carrousel de photos de soirées
// (remplace l'ancienne vidéo de présentation).
export default function LedAbout() {
	return (
		<section aria-labelledby="about-titre" className="px-4 py-20">
			<div className="mx-auto max-w-6xl">
				<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
					<SectionTitle id="about-titre" label="Présentation" title="Mais c'est qui" accent="Dydy Fantasy ?">
						Animateur et DJ basé à l'ouest de Toulouse : je transforme vos soirées en vrais
						moments interactifs, où le public joue, chante et danse.
					</SectionTitle>
					<div className="flex shrink-0 flex-col gap-3 sm:flex-row">
						<Link
							to="/qui-suis-je"
							className="btn-outline-neon inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--cyan)] px-6 py-3 font-semibold text-[var(--cyan)]">
							En savoir plus sur moi
							<ArrowRightIcon className="h-4 w-4" />
						</Link>
					</div>
				</div>

				<ScrollReveal className="mt-10" delay={120}>
					<PhotoCarousel />
				</ScrollReveal>
			</div>
		</section>
	);
}
