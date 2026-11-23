// Données communes à la page Galerie et à la section « En images » de l’accueil.
// Aperçus générés par `npm run videos` dans src/assets/galerie-apercus/<catégorie>/ :
//   <nom>.jpg pour chaque vidéo, <nom>.mp4 (extrait muet de 6 s) si le nom contient « accueil ».

// Libellés des dossiers de src/assets/galerie/ (sinon, nom du dossier)
export const CATEGORY_LABELS = {
	bars: "Bars & restaurants",
	mariages: "Mariages",
	entreprises: "Entreprises",
	anniversaires: "Anniversaires",
	soirees: "Soirées",
};

export const COLORS = ["var(--cyan)", "var(--pink)", "var(--gold)", "#7cff6b"];

const posterFiles = import.meta.glob("../assets/galerie-apercus/*/*.jpg", {
	eager: true,
	query: { format: "webp", quality: "72" },
	import: "default",
});
const clipFiles = import.meta.glob("../assets/galerie-apercus/*/*.mp4", {
	eager: true,
	query: "?url",
	import: "default",
});

// « …/bars/accueil-karaoke-ville-en-rose.mp4 » -> « bars/accueil-karaoke-ville-en-rose »
const key = (path) => path.split("/").slice(-2).join("/").replace(/\.[^.]+$/, "");
const byKey = (files) => Object.fromEntries(Object.entries(files).map(([p, url]) => [key(p), url]));
const POSTERS = byKey(posterFiles);

/** Image d’aperçu d’une vidéo de la galerie (chemin du fichier de la vidéo) */
export const posterFor = (path) => POSTERS[key(path)];

/** Catégorie + texte alternatif tirés du nom de fichier (« accueil » et numéro d’ordre retirés) */
export function describe(path) {
	const parts = path.split("/");
	const category = parts[parts.length - 2];
	const name = parts[parts.length - 1]
		.replace(/\.[^.]+$/, "")
		.replace(/^\d+[-_ ]*/, "")
		.replace(/[-_]+/g, " ")
		.replace(/\baccueil\b/gi, "")
		.replace(/\s+/g, " ")
		.trim();
	return { category, alt: `${name.charAt(0).toUpperCase()}${name.slice(1)} – Dydy Fantasy` };
}

/** Extraits choisis pour l’accueil (vidéos dont le nom contient « accueil »), triés par nom */
export const HOME_CLIPS = Object.entries(clipFiles)
	.sort(([a], [b]) => a.localeCompare(b))
	.map(([path, src]) => ({ path, src, poster: POSTERS[key(path)], ...describe(path) }));
