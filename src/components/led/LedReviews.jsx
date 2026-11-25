import { GOOGLE } from "../../data/avis";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
// Styles du widget chargés AVEC la page (et non avec le widget différé) : ils sont prêts
// avant que le carrousel ne mesure sa largeur.
import "react-google-reviews/dist/index.css";
import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";

// Le carrousel Featurable est chargé UNIQUEMENT dans le navigateur, quand on approche de la section :
// - il calcule le nombre d'avis visibles d'après la vraie largeur de l'écran (pré-rendu dans Node.js,
//   sans écran, il affichait 3 colonnes de 84 px sur mobile) ;
// - ses ~45 Ko de JavaScript ne pèsent plus sur le chargement de l'accueil.
const ReviewsWidget = lazy(() => import("./ReviewsWidget"));

function LazyReviewsWidget() {
	const ref = useRef(null);
	const [show, setShow] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setShow(true);
					io.disconnect();
				}
			},
			{ rootMargin: "600px 0px" },
		);
		io.observe(el);
		return () => io.disconnect();
	}, []);

	return (
		// Hauteur réservée pour éviter que la page « saute » à l'arrivée du widget
		<div ref={ref} className="min-h-[24rem]">
			{show && (
				<Suspense fallback={null}>
					<ReviewsWidget />
				</Suspense>
			)}
		</div>
	);
}

// Avis Google : note réelle (src/data/avis.js) + liens vers la fiche + carrousel Featurable.
export default function LedReviews() {
	return (
		<section id="avis" aria-labelledby="avis-titre" className="scroll-mt-24 px-4 py-20">
			<div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[18rem_minmax(0,1fr)] lg:items-center">
				<div>
					<SectionTitle id="avis-titre" label="Avis clients" title="Ils en" accent="parlent" />
					<ScrollReveal variant="zoom" delay={100} className="neon-card mt-6 rounded-3xl p-6 text-center" style={{ "--c": "var(--gold)" }}>
						<p className="glow-gold text-6xl font-extrabold leading-none">{GOOGLE.note}</p>
						<p className="mt-2 flex justify-center text-[var(--gold)]" role="img" aria-label={`Note de ${GOOGLE.note} sur 5`}>
							{[0, 1, 2, 3, 4].map((i) => (
								<StarIcon key={i} className="h-6 w-6" />
							))}
						</p>
						<p className="mt-2 font-semibold text-white/80">
							{GOOGLE.nombre.charAt(0).toUpperCase() + GOOGLE.nombre.slice(1)} avis Google
						</p>
						<div className="mt-4 flex flex-col gap-2 text-sm font-semibold">
							<a href={GOOGLE.ficheUrl} target="_blank" rel="noopener noreferrer" className="text-white/75 underline-offset-2 hover:text-white hover:underline">
								Voir tous les avis
							</a>
							<a href={GOOGLE.avisUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--gold)] underline-offset-2 hover:underline">
								Laisser un avis
							</a>
						</div>
					</ScrollReveal>
				</div>

				<ScrollReveal variant="right" delay={150} className="neon-card min-w-0 rounded-3xl p-3 md:p-5" style={{ "--c": "var(--cyan)" }}>
					<LazyReviewsWidget />
				</ScrollReveal>
			</div>
		</section>
	);
}
