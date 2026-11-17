// Source unique des pages « Mes prestations » et « Vos événements ».
// Utilisée par le menu, le pied de page et les liens « À découvrir aussi ».
// Toute page ajoutée ici doit aussi exister dans src/routes.js,
// react-router.config.js (prerender) et public/sitemap.xml.

export const PRESTATIONS = [
	{ to: "/prestations/blind-test-quiz", label: "Blind test & quiz" },
	{ to: "/prestations/karaoke", label: "Karaoké" },
	{ to: "/prestations/dj", label: "DJ" },
	{ to: "/prestations/sur-mesure", label: "Animation sur mesure" },
];

export const EVENEMENTS = [
	{ to: "/evenements/mariage", label: "Mariage" },
	{ to: "/evenements/entreprise", label: "Entreprise & team building" },
	{ to: "/evenements/anniversaire", label: "Anniversaire & soirée privée" },
	{ to: "/evenements/bars-restaurants", label: "Bars & restaurants" },
];

// Liens « À découvrir aussi » : toutes les pages sauf la page courante
export function relatedTo(path) {
	return [...PRESTATIONS, ...EVENEMENTS].filter((p) => p.to !== path);
}
