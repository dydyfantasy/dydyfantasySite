import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

// Widget Featurable seul, chargé à la demande par LedReviews (fichier JS séparé).
// Version figée à 1.7.4 (voir CLAUDE.md).

// Dates relatives en français (« il y a 2 semaines ») au lieu de l'anglais par défaut
const rtf = new Intl.RelativeTimeFormat("fr", { numeric: "auto" });
const UNITS = [
	["year", 31536000],
	["month", 2592000],
	["week", 604800],
	["day", 86400],
	["hour", 3600],
	["minute", 60],
];
function relativeDate(date) {
	const diff = (date.getTime() - Date.now()) / 1000;
	for (const [unit, seconds] of UNITS) {
		if (Math.abs(diff) >= seconds) return rtf.format(Math.round(diff / seconds), unit);
	}
	return "à l’instant";
}

export default function ReviewsWidget() {
	return (
		<ReactGoogleReviews
			layout="carousel"
			featurableId="07455073-608e-491d-94e1-433314951082"
			theme="dark"
			// Texte original uniquement (retire « (Translated by Google) » et la traduction anglaise)
			disableTranslation
			// Pas de points de navigation (un par avis : trop nombreux) ; flèches + défilement auto
			// Prénoms seuls (les initiales donnaient « Michel “. » pour certains noms)
			nameDisplay="firstNamesOnly"
			showDots={false}
			carouselSpeed={5000}
			readMoreLabel="Lire la suite"
			readLessLabel="Réduire"
			getRelativeDate={relativeDate}
			loadingMessage="Chargement des avis…"
			errorMessage="Les avis n’ont pas pu être chargés. Retrouvez-les sur Google."
		/>
	);
}
