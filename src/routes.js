import { index, route } from "@react-router/dev/routes";

// Liste des pages du site : adresse -> fichier
// Toute nouvelle page doit aussi être ajoutée à public/sitemap.xml
export default [
	index("pages/Home.jsx"),
	route("qui-suis-je", "pages/Qui-suis-je.jsx"),
	route("prestations", "pages/NosPrestations.jsx"),
	route("prestations/blind-test-quiz", "pages/prestations/BlindTestQuiz.jsx"),
	route("prestations/karaoke", "pages/prestations/Karaoke.jsx"),
	route("prestations/dj", "pages/prestations/Dj.jsx"),
	route("prestations/sur-mesure", "pages/prestations/SurMesure.jsx"),
	route("evenements/mariage", "pages/evenements/Mariage.jsx"),
	route("evenements/entreprise", "pages/evenements/Entreprise.jsx"),
	route("evenements/anniversaire", "pages/evenements/Anniversaire.jsx"),
	route("evenements/bars-restaurants", "pages/evenements/BarsRestaurants.jsx"),
	route("mon-approche", "pages/NotreApproche.jsx"),
	route("galerie", "pages/Galerie.jsx"),
	route("dydy-quiz", "pages/DydyQuiz.jsx"),
	route("contact", "pages/Contact.jsx"),
	route("privacy", "pages/Privacy.jsx"),
	// Toute adresse inconnue
	route("*", "pages/NotFound.jsx"),
];
