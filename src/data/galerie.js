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
	// metadata : { src, width, height } (dimensions déclarées = pas de décalage de la page au chargement)
	query: { format: "webp", quality: "72", as: "metadata" },
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
const POSTER_META = byKey(posterFiles);

/** Image d’aperçu d’une vidéo de la galerie : { src, width, height } ou undefined */
export const posterMeta = (path) => POSTER_META[key(path)];
const POSTERS = Object.fromEntries(Object.entries(POSTER_META).map(([k, m]) => [k, m.src]));

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

/** Tous les extraits muets de 6 s, triés par nom */
const ALL_CLIPS = Object.entries(clipFiles)
	.sort(([a], [b]) => a.localeCompare(b))
	.map(([path, src]) => ({ path, src, poster: POSTERS[key(path)], ...describe(path) }));

/** Extraits choisis pour l’accueil (vidéos dont le nom contient « accueil ») */
export const HOME_CLIPS = ALL_CLIPS.filter((c) => /accueil/i.test(c.path.split("/").pop()));

/** Extraits d’une catégorie de la galerie (ex. « bars »), ceux marqués « accueil » d’abord */
export const clipsFor = (category, max = 3) =>
	ALL_CLIPS.filter((c) => c.category === category)
		.sort((a, b) => Number(/accueil/i.test(b.path)) - Number(/accueil/i.test(a.path)))
		.slice(0, max);

/** Extraits dont le NOM de fichier contient l’un des mots (toutes catégories), « accueil » d’abord.
 *  Ex. clipsMatching(["karaoke"]) pour la page Karaoké : le nom des vidéos doit décrire ce qu’on y voit. */
export const clipsMatching = (words, max = 4) =>
	ALL_CLIPS.filter((c) => words.some((w) => c.path.split("/").pop().toLowerCase().includes(w)))
		.sort((a, b) => Number(/accueil/i.test(b.path)) - Number(/accueil/i.test(a.path)))
		.slice(0, max);
