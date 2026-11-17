import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";
import { StarIcon } from "@heroicons/react/24/solid";
import SectionTitle from "./SectionTitle";

// Avis Google : note réelle (72 avis, 5/5) + carrousel Featurable.
// (Étape 5 prévue : récupérer les avis à la compilation pour les afficher sans attente.)
export default function LedReviews() {
	return (
		<section id="avis" aria-labelledby="avis-titre" className="scroll-mt-24 px-4 py-20">
			<div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[18rem_minmax(0,1fr)] lg:items-center">
				<div>
					<SectionTitle id="avis-titre" label="Avis clients" title="Ils en" accent="parlent" />
					<div className="neon-card mt-6 rounded-3xl p-6 text-center" style={{ "--c": "var(--gold)" }}>
						<p className="glow-gold text-6xl font-extrabold leading-none">5,0</p>
						<p className="mt-2 flex justify-center text-[var(--gold)]" aria-label="5 étoiles sur 5">
							{[0, 1, 2, 3, 4].map((i) => (
								<StarIcon key={i} className="h-6 w-6" />
							))}
						</p>
						<p className="mt-2 font-semibold text-white/80">72 avis Google</p>
					</div>
				</div>

				<div className="neon-card min-w-0 rounded-3xl p-3 md:p-5" style={{ "--c": "var(--cyan)" }}>
					<ReactGoogleReviews
						layout="carousel"
						featurableId="07455073-608e-491d-94e1-433314951082"
						theme="dark"
					/>
				</div>
			</div>
		</section>
	);
}
