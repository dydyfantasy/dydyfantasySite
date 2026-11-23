// npm run videos : allège les vidéos déposées sur le site (voir GUIDE.md).
//
// Dossiers traités :
//   - src/assets/videos/            boucles muettes (son retiré, 1280 px max),
//                                   sauf « presentation » dans le nom (son gardé, 1920 px max) ;
//   - src/assets/galerie/<catégorie>/  vidéos de la galerie (son gardé, 1280 px max).
//
// Pour chaque vidéo (mp4, mov, webm, m4v) pas encore compressée :
//   1. l’original est rangé dans medias-sources/<même chemin> (jamais publié, ignoré par git) ;
//   2. une version MP4 (H.264, lue partout, iPhone compris) la remplace (un .mov devient .mp4).
// Les vidéos déjà compressées sont reconnues (compressees.json dans chaque dossier d’originaux)
// et ignorées : on peut lancer la commande autant de fois qu’on veut.
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const ASSETS = "src/assets";
const SOURCES = "medias-sources";
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

// Dossiers à traiter, avec leurs réglages
const galerie = path.join(ASSETS, "galerie");
const DOSSIERS = [
	{ dossier: "videos", reglage: (base) => (/presentation/i.test(base) ? { son: true, max: 1920, crf: 23 } : { son: false, max: 1280, crf: 26 }) },
	...(fs.existsSync(galerie)
		? fs
				.readdirSync(galerie, { withFileTypes: true })
				.filter((d) => d.isDirectory())
				.map((d) => ({ dossier: `galerie/${d.name}`, reglage: () => ({ son: true, max: 1280, crf: 26 }) }))
		: []),
];

let total = 0;
for (const { dossier, reglage } of DOSSIERS) {
	const DOSSIER = path.join(ASSETS, dossier);
	const ORIGINAUX = path.join(SOURCES, dossier);
	const REGISTRE = path.join(ORIGINAUX, "compressees.json");
	if (!fs.existsSync(DOSSIER)) continue;

	const videos = fs.readdirSync(DOSSIER).filter((f) => EXTENSIONS.test(f));
	if (!videos.length) continue;
	total += videos.length;

	fs.mkdirSync(ORIGINAUX, { recursive: true });
	const registre = fs.existsSync(REGISTRE) ? JSON.parse(fs.readFileSync(REGISTRE, "utf8")) : {};

	for (const nom of videos) {
		const affiche = `${dossier}/${nom}`;
		const source = path.join(DOSSIER, nom);
		const base = nom.replace(EXTENSIONS, "");
		const sortie = path.join(DOSSIER, `${base}.mp4`);

		if (registre[nom] === empreinte(source)) {
			console.log(`= ${affiche} : déjà compressée, rien à faire.`);
			continue;
		}

		// 1. Ranger l’original (écrase l’ancien original du même nom : c’est la nouvelle version)
		const original = path.join(ORIGINAUX, nom);
		fs.copyFileSync(source, original);

		// 2. Compresser (fichier temporaire hors du dossier publié)
		const { son, max, crf } = reglage(base);
		const temporaire = path.join(ORIGINAUX, `${base}.compression-en-cours.mp4`);
		const args = [
			"-nostdin", "-v", "error", "-y", "-i", original,
			"-vf", `scale=${max}:${max}:force_original_aspect_ratio=decrease:force_divisible_by=2`,
			"-c:v", "libx264", "-preset", "slow", "-crf", String(crf), "-pix_fmt", "yuv420p",
			...(son ? ["-c:a", "aac", "-b:a", "128k"] : ["-an"]),
			"-movflags", "+faststart", temporaire,
		];
		console.log(`… ${affiche} : compression (${son ? "avec le son" : "sans le son"})…`);
		const r = spawnSync("ffmpeg", args, { stdio: ["ignore", "inherit", "inherit"] });
		if (r.status !== 0) {
			fs.rmSync(temporaire, { force: true });
			console.error(`✗ ${affiche} : échec de la compression, la vidéo est laissée telle quelle.`);
			continue;
		}

		const avant = fs.statSync(original).size;
		const apres = fs.statSync(temporaire).size;
		if (apres >= avant && sortie === source) {
			fs.rmSync(temporaire);
			console.log(`= ${affiche} : déjà légère (${mo(avant)}), gardée telle quelle.`);
		} else {
			// Copie par-dessus (et non déplacement) : marche même si « npm run dev » lit la vidéo
			try {
				fs.copyFileSync(temporaire, sortie);
			} catch {
				fs.rmSync(temporaire, { force: true });
				console.error(`✗ ${affiche} : fichier bloqué. Arrêtez « npm run dev » (Ctrl+C) puis relancez « npm run videos ».`);
				continue;
			}
			fs.rmSync(temporaire);
			if (sortie !== source) fs.rmSync(source); // .mov / .webm remplacé par le .mp4
			console.log(`✓ ${affiche} : ${mo(avant)} → ${mo(apres)}${sortie !== source ? ` (devient ${base}.mp4)` : ""}`);
		}
		registre[path.basename(sortie)] = empreinte(sortie);
		fs.writeFileSync(REGISTRE, JSON.stringify(registre, null, "\t"));
	}
}

console.log(total ? `\nOriginaux rangés dans ${SOURCES}/ (non publiés).` : "Aucune vidéo à traiter.");
