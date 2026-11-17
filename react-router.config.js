export default {
	// On garde le dossier src/ (par défaut React Router utilise app/)
	appDirectory: "src",
	// Pas de serveur Node en production : le site reste en fichiers statiques sur Apache
	ssr: false,
	// Pré-rendu : un vrai fichier HTML complet par page, généré à la compilation.
	// Toute nouvelle page doit être ajoutée ici ET dans public/sitemap.xml.
	// "/404" sert de page d'erreur à Apache (ErrorDocument dans .htaccess).
	prerender: [
		"/",
		"/qui-suis-je",
		"/prestations",
		"/prestations/blind-test-quiz",
		"/mon-approche",
		"/contact",
		"/privacy",
		"/404",
	],
	// Comportements de React Router v8 activés dès maintenant
	// (prépare la future mise à jour vers la v8)
	future: {
		v8_middleware: true,
		v8_splitRouteModules: true,
		v8_viteEnvironmentApi: true,
		v8_passThroughRequests: true,
		v8_trailingSlashAwareDataRequests: true,
	},
};
