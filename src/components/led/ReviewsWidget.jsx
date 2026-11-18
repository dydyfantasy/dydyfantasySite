import { useEffect, useRef } from "react";
import { ReactGoogleReviews } from "react-google-reviews";

// Widget Featurable seul, chargé à la demande par LedReviews (fichier JS séparé).
// Version figée à 1.7.4 (voir CLAUDE.md). Ses styles sont importés par LedReviews
// (chargés avec la page, donc prêts avant que le carrousel ne mesure sa largeur).

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

// Le carrousel calcule la largeur de ses cartes à son apparition : si la page n'est pas encore
// stable (polices, animation d'apparition…), la mesure est fausse jusqu'au prochain « resize ».
// On déclenche donc ce recalcul nous-mêmes : après l'apparition, puis à chaque changement de
// largeur du cadre (ResizeObserver).
function useCarouselRelayout(ref) {
	useEffect(() => {
		const relayout = () => window.dispatchEvent(new Event("resize"));
		const timers = [150, 600, 1500, 3000].map((ms) => window.setTimeout(relayout, ms));
		let lastWidth = 0;
		const ro = new ResizeObserver(([entry]) => {
			const w = Math.round(entry.contentRect.width);
			if (lastWidth && w !== lastWidth) relayout();
			lastWidth = w;
		});
		if (ref.current) ro.observe(ref.current);
		return () => {
			timers.forEach((t) => window.clearTimeout(t));
			ro.disconnect();
		};
	}, [ref]);
}

export default function ReviewsWidget() {
	const ref = useRef(null);
	useCarouselRelayout(ref);

	return (
		<div ref={ref}>
			<ReactGoogleReviews
				layout="carousel"
				featurableId="07455073-608e-491d-94e1-433314951082"
				theme="dark"
				// Texte original uniquement (retire « (Translated by Google) » et la traduction anglaise)
				disableTranslation
				// Prénoms seuls (les initiales donnaient « Michel “. » pour certains noms)
				nameDisplay="firstNamesOnly"
				// Pas de points de navigation (un par avis : trop nombreux) ; flèches + défilement auto
				showDots={false}
				carouselSpeed={5000}
				// Cartes plus compactes : « Lire la suite » au-delà de 150 caractères
				maxCharacters={150}
				readMoreLabel="Lire la suite"
				readLessLabel="Réduire"
				getRelativeDate={relativeDate}
				loadingMessage="Chargement des avis…"
				errorMessage="Les avis n’ont pas pu être chargés. Retrouvez-les sur Google."
			/>
		</div>
	);
}
