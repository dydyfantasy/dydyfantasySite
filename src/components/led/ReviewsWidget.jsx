import { useEffect, useRef, useState } from "react";
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

// Nombre d'avis par écran calculé par NOUS d'après la largeur réelle du cadre.
// Le carrousel (react-slick) part de 3 avis et ne s'adapte au mobile qu'après un
// redimensionnement : ouvert directement sur téléphone, il restait à 3 colonnes étroites.
function itemsFor(width) {
	if (width < 560) return 1;
	if (width < 760) return 2;
	return 3;
}

function useItemsPerView(ref) {
	const [items, setItems] = useState(() => itemsFor(window.innerWidth - 32));
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const ro = new ResizeObserver(([entry]) => setItems(itemsFor(entry.contentRect.width)));
		ro.observe(el);
		return () => ro.disconnect();
	}, [ref]);
	return items;
}

export default function ReviewsWidget() {
	const ref = useRef(null);
	const items = useItemsPerView(ref);

	return (
		<div ref={ref}>
			<ReactGoogleReviews
				// key : le carrousel est recréé quand le nombre d'avis par écran change
				key={items}
				maxItems={items}
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
