// Vidéos déposées SANS CODE dans src/assets/videos/ (voir LISEZ-MOI.txt du dossier) :
//   dydy-quiz-accueil.mp4 / .webm      boucle muette de 15 s max (accueil, section Dydy Quiz)
//   dydy-quiz-presentation.mp4 / .webm « C’est quoi Dydy Quiz ? », ~1 min avec le son (page /dydy-quiz)
//   + image d’attente facultative, même nom en .jpg / .png / .webp (ex. dydy-quiz-presentation.jpg)
// Les fichiers sont copiés tels quels dans le build (nom avec empreinte, mis en cache 1 an).
const videoFiles = import.meta.glob("../../assets/videos/*.{mp4,webm,MP4,WEBM}", {
	eager: true,
	query: "?url",
	import: "default",
});
const posterFiles = import.meta.glob("../../assets/videos/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
	eager: true,
	query: { w: "1280", format: "webp", quality: "80" },
	import: "default",
});

const baseName = (p) => p.split("/").pop().replace(/\.[^.]+$/, "").toLowerCase();
const extension = (p) => p.split(".").pop().toLowerCase();

// { sources: [{ src, type }], poster } ou null si la vidéo n’a pas encore été déposée.
// WebM d’abord (plus léger), MP4 ensuite (lu partout, notamment sur iPhone).
export function getVideo(name) {
	const sources = Object.keys(videoFiles)
		.filter((p) => baseName(p) === name)
		.sort((a, b) => (extension(a) === "webm" ? -1 : extension(b) === "webm" ? 1 : 0))
		.map((p) => ({ src: videoFiles[p], type: `video/${extension(p)}` }));
	if (!sources.length) return null;
	const posterPath = Object.keys(posterFiles).find((p) => baseName(p) === name);
	return { sources, poster: posterPath ? posterFiles[posterPath] : undefined };
}
