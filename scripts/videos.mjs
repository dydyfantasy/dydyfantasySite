// npm run videos : allège les vidéos déposées dans src/assets/videos/ (voir GUIDE.md).
//
// Pour chaque vidéo (mp4, mov, webm, m4v) pas encore compressée :
//   1. l’original est rangé dans medias-sources/videos/ (jamais publié, ignoré par git) ;
//   2. une version MP4 (H.264, lue partout, iPhone compris) la remplace :
//      - boucles muettes (tout nom sans « presentation ») : son retiré, 1280 px max ;
//      - vidéo de présentation (nom contenant « presentation ») : son gardé, 1920 px max.
// Les vidéos déjà compressées sont reconnues (medias-sources/videos/compressees.json) et ignorées :
// on peut lancer la commande autant de fois qu’on veut.
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const DOSSIER = "src/assets/videos";
const ORIGINAUX = "medias-sources/videos";
const REGISTRE = path.join(ORIGINAUX, "compressees.json");
const EXTENSIONS = /\.(mp4|mov|webm|m4v)$/i;

const ffmpegOk = spawnSync("ffmpeg", ["-version"], { stdio: "ignore" }).status === 0;
if (!ffmpegOk) {
	console.error(
		"ffmpeg est introuvable. Installez-le une fois avec : winget install Gyan.FFmpeg\n" +
			"puis fermez et rouvrez le terminal. (Sans compression, les vidéos marchent quand même, juste plus lourdes.)",
	);
	process.exit(1);
}

const empreinte = (fichier) => createHash("md5").update(fs.readFileSync(fichier)).digest("hex");
const mo = (octets) => `${(octets / 1024 / 1024).toFixed(1)} Mo`;

fs.mkdirSync(ORIGINAUX, { recursive: true });
const registre = fs.existsSync(REGISTRE) ? JSON.parse(fs.readFileSync(REGISTRE, "utf8")) : {};

const videos = fs.readdirSync(DOSSIER).filter((f) => EXTENSIONS.test(f));
if (!videos.length) console.log(`Aucune vidéo dans ${DOSSIER}.`);

for (const nom of videos) {
	const source = path.join(DOSSIER, nom);
	const base = nom.replace(EXTENSIONS, "");
	const sortie = path.join(DOSSIER, `${base}.mp4`);

	if (registre[nom] === empreinte(source)) {
		console.log(`= ${nom} : déjà compressée, rien à faire.`);
		continue;
	}

	// 1. Ranger l’original (on écrase l’ancien original du même nom : c’est la nouvelle version)
	const original = path.join(ORIGINAUX, nom);
	fs.copyFileSync(source, original);

	// 2. Compresser
	const presentation = /presentation/i.test(base);
	const max = presentation ? 1920 : 1280;
	// Fichier temporaire hors du dossier des vidéos (sinon il serait pris pour une nouvelle vidéo)
	const temporaire = path.join(ORIGINAUX, `${base}.compression-en-cours.mp4`);
	const args = [
		"-nostdin", "-v", "error", "-y", "-i", original,
		"-vf", `scale=${max}:${max}:force_original_aspect_ratio=decrease:force_divisible_by=2`,
		"-c:v", "libx264", "-preset", "slow", "-crf", presentation ? "23" : "26", "-pix_fmt", "yuv420p",
		...(presentation ? ["-c:a", "aac", "-b:a", "128k"] : ["-an"]),
		"-movflags", "+faststart", temporaire,
	];
	console.log(`… ${nom} : compression (${presentation ? "avec le son" : "sans le son"})…`);
	const r = spawnSync("ffmpeg", args, { stdio: ["ignore", "inherit", "inherit"] });
	if (r.status !== 0) {
		fs.rmSync(temporaire, { force: true });
		console.error(`✗ ${nom} : échec de la compression, la vidéo est laissée telle quelle.`);
		continue;
	}

	const avant = fs.statSync(original).size;
	const apres = fs.statSync(temporaire).size;
	if (apres >= avant && sortie === source) {
		// Déjà légère : on garde l’original
		fs.rmSync(temporaire);
		console.log(`= ${nom} : déjà légère (${mo(avant)}), gardée telle quelle.`);
	} else {
		// Copie par-dessus (et non déplacement) : marche même si « npm run dev » lit la vidéo
		try {
			fs.copyFileSync(temporaire, sortie);
		} catch {
			fs.rmSync(temporaire, { force: true });
			console.error(`✗ ${nom} : fichier bloqué. Arrêtez « npm run dev » (Ctrl+C) puis relancez « npm run videos ».`);
			continue;
		}
		fs.rmSync(temporaire);
		if (sortie !== source) fs.rmSync(source); // .mov / .webm remplacé par le .mp4
		console.log(`✓ ${nom} : ${mo(avant)} → ${mo(apres)}${sortie !== source ? ` (devient ${base}.mp4)` : ""}`);
	}
	registre[path.basename(sortie)] = empreinte(sortie);
	fs.writeFileSync(REGISTRE, JSON.stringify(registre, null, "\t"));
}

console.log(`\nOriginaux rangés dans ${ORIGINAUX}/ (non publiés).`);
