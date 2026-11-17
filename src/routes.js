import { index, route } from "@react-router/dev/routes";

// Liste des pages du site : adresse -> fichier
// Toute nouvelle page doit aussi être ajoutée à public/sitemap.xml
export default [
	index("pages/Home.jsx"),
	route("qui-suis-je", "pages/Qui-suis-je.jsx"),
	route("prestations", "pages/NosPrestations.jsx"),
	route("mon-approche", "pages/NotreApproche.jsx"),
	route("contact", "pages/Contact.jsx"),
	route("privacy", "pages/Privacy.jsx"),
	// Toute adresse inconnue
	route("*", "pages/NotFound.jsx"),
];
