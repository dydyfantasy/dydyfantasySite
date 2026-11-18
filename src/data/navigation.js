// Source unique des pages « Mes prestations » et « Vos événements ».
// Utilisée par le menu, le pied de page et les liens « À découvrir aussi ».
// Toute page ajoutée ici doit aussi exister dans src/routes.js,
// react-router.config.js (prerender) et public/sitemap.xml.
// Icônes et couleurs : les mêmes que le quiz de l’accueil (A rouge, B vert, C cyan, D or).
import {
	TrophyIcon,
	MicrophoneIcon,
	MusicalNoteIcon,
	PuzzlePieceIcon,
	HeartIcon,
	BriefcaseIcon,
	CakeIcon,
	BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";

export const PRESTATIONS = [
	{ to: "/prestations/blind-test-quiz", label: "Blind test & quiz", icon: TrophyIcon, color: "#ff4d6d" },
	{ to: "/prestations/karaoke", label: "Karaoké", icon: MicrophoneIcon, color: "#3ddc84" },
	{ to: "/prestations/dj", label: "DJ", icon: MusicalNoteIcon, color: "#19d3f0" },
	{ to: "/prestations/sur-mesure", label: "Animation sur mesure", icon: PuzzlePieceIcon, color: "#ffc93c" },
];

export const EVENEMENTS = [
	{ to: "/evenements/mariage", label: "Mariage", icon: HeartIcon, color: "#ff2fae" },
	{ to: "/evenements/entreprise", label: "Entreprise & team building", icon: BriefcaseIcon, color: "#19d3f0" },
	{ to: "/evenements/anniversaire", label: "Anniversaire & soirée privée", icon: CakeIcon, color: "#ffc93c" },
	{ to: "/evenements/bars-restaurants", label: "Bars & restaurants", icon: BuildingStorefrontIcon, color: "#7cff6b" },
];

// Liens « À découvrir aussi » : toutes les pages sauf la page courante
export const APP = { to: "/dydy-quiz", label: "Dydy Quiz, mon appli" };

export function relatedTo(path) {
	return [...PRESTATIONS, ...EVENEMENTS, APP].filter((p) => p.to !== path);
}
