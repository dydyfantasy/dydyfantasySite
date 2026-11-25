import { StarIcon } from "@heroicons/react/24/solid";
import { GOOGLE } from "../../data/avis";

// « ★★★★★ 4,9/5 · plus de 70 avis Google » : lien vers la fiche Google (preuve vérifiable).
// Texte dans le HTML pré-rendu (lu par Google et les IA) ; pas de balisage d’avis (interdit
// pour ses propres avis affichés sur son site).
export default function GoogleRating({ className = "", withReviewLink = false }) {
	return (
		<p className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-white/75 ${className}`}>
			<a href={GOOGLE.ficheUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white">
				<span className="flex text-[var(--gold)]" aria-hidden="true">
					{[0, 1, 2, 3, 4].map((i) => (
						<StarIcon key={i} className="h-4 w-4" />
					))}
				</span>
				{GOOGLE.note}/5 · {GOOGLE.nombre} avis Google
			</a>
			{withReviewLink && (
				<a href={GOOGLE.avisUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--gold)] underline-offset-2 hover:underline">
					Laisser un avis
				</a>
			)}
		</p>
	);
}
