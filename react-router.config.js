export default {
	// On garde le dossier src/ (par défaut React Router utilise app/)
	appDirectory: "src",
	// Pas de serveur Node en production : le site reste en fichiers statiques sur Apache
	ssr: false,
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
