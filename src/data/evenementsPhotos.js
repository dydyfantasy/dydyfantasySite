// Photos des événements, déposées SANS CODE dans src/assets/evenements/ : un fichier dont le nom
// commence par « mariage », « entreprise », « anniversaire » ou « bars » (ex. mariage-premiere-danse.jpg).
// Utilisées par les tuiles « Vos événements » de l’accueil ET par le haut des pages événement
// (même photo, rien à copier). Redimensionnées et converties en WebP à la compilation ;
// le nom du fichier sert de texte alternatif (SEO).
const photoSets = import.meta.glob("../assets/evenements/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
	eager: true,
	query: { w: "480;640;800;1200", format: "webp", quality: "78", as: "srcset" },
	import: "default",
});
const photoFallbacks = import.meta.glob("../assets/evenements/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
	eager: true,
	query: { w: "800", format: "webp", quality: "78" },
	import: "default",
});

// Tuiles de l’accueil (cadre 3:2) : même photo recadrée au centre en 3:2 à la compilation,
// comme l’affichage (object-cover centré). Une photo prise à la verticale n’envoie plus
// les pixels haut et bas que la tuile ne montre jamais. Même qualité.
const tileSets = import.meta.glob("../assets/evenements/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
	eager: true,
	query: { w: "480;640;800;1200", aspect: "3:2", format: "webp", quality: "78", as: "srcset" },
	import: "default",
});
const tileFallbacks = import.meta.glob("../assets/evenements/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
	eager: true,
	query: { w: "800", aspect: "3:2", format: "webp", quality: "78" },
	import: "default",
});

/** Comme photoFor, mais recadrée en 3:2 pour les tuiles « Vos événements » */
export function tileFor(slug) {
	const photo = photoFor(slug);
	if (!photo) return null;
	return { ...photo, srcSet: tileSets[photo.path], src: tileFallbacks[photo.path] };
}

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
	return { srcSet: photoSets[path], src: photoFallbacks[path], alt, path };
}
