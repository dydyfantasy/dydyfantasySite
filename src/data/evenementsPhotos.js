// Photos déposées SANS CODE, une par page :
// - src/assets/evenements/ : nom qui commence par « mariage », « entreprise », « anniversaire » ou « bars »
//   (tuiles « Vos événements » de l’accueil ET haut des pages événement, même photo)
// - src/assets/prestations/ : nom qui commence par « karaoke », « dj » ou « sur-mesure »
//   (haut des pages prestation)
// Partout la photo s’affiche dans un cadre 3:2 : elle est recadrée au centre en 3:2 à la compilation,
// comme l’affichage (object-cover centré), puis redimensionnée et convertie en WebP. Une photo prise
// à la verticale n’envoie donc pas les pixels du haut et du bas que le cadre ne montre jamais.
// Le nom du fichier sert de texte alternatif (SEO).
// (Vite exige le chemin écrit en toutes lettres dans chaque import.meta.glob.)
const photoSets = import.meta.glob("../assets/{evenements,prestations}/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
	eager: true,
	query: { w: "480;640;800;1200", aspect: "3:2", format: "webp", quality: "78", as: "srcset" },
	import: "default",
});
const photoFallbacks = import.meta.glob("../assets/{evenements,prestations}/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
	eager: true,
	query: { w: "800", aspect: "3:2", format: "webp", quality: "78" },
	import: "default",
});

/** { src, srcSet, alt } de la photo dont le nom commence par `slug`, ou null */
export function photoFor(slug) {
	const path = Object.keys(photoSets)
		.sort()
		.find((p) => p.split("/").pop().toLowerCase().startsWith(slug));
	if (!path) return null;
	// « mariage-premiere-danse-toulouse.jpg » -> « mariage premiere danse toulouse »
	const alt = path
		.split("/")
		.pop()
		.replace(/\.[^.]+$/, "")
		.replace(/[-_]+/g, " ");
	return { srcSet: photoSets[path], src: photoFallbacks[path], alt };
}
