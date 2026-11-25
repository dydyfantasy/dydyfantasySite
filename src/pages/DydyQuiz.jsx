import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { ArrowRightIcon, PlayIcon } from "@heroicons/react/24/solid";
import {
	QrCodeIcon,
	PlayCircleIcon,
	TrophyIcon,
	MusicalNoteIcon,
	ChartBarIcon,
	CameraIcon,
	HeartIcon,
	PresentationChartLineIcon,
	ShieldCheckIcon,
	CodeBracketIcon,
	TableCellsIcon,
} from "@heroicons/react/24/outline";
import Seo from "../components/Seo";
import StageLights from "../components/led/StageLights";
import SectionTitle from "../components/led/SectionTitle";
import ScrollReveal from "../components/led/ScrollReveal";
import LedFinal from "../components/led/LedFinal";
import Spectrum from "../components/led/Spectrum";
import PeekingMascot from "../components/led/PeekingMascot";
import LedDivider from "../components/led/LedDivider";
import { getVideo } from "../components/led/videoAssets";
import LoopVideo from "../components/led/LoopVideo";
import PhoneDemo from "../components/scenes/PhoneDemo";
import ModeSelect from "../components/scenes/ModeSelect";

// Vidéo « C’est quoi Dydy Quiz ? » (~1 min, avec le son) : src/assets/videos/dydy-quiz-presentation.mp4
// (+ image d’attente dydy-quiz-presentation.jpg). Affichée en grand en haut de page dès qu’elle est déposée ;
// en attendant, la boucle muette de l’accueil (dydy-quiz-accueil.mp4 + version -mobile) prend sa place.
const PRESENTATION = getVideo("dydy-quiz-presentation");
// Version portrait (téléphone), facultative : dydy-quiz-presentation-mobile.mp4 (+ .jpg du même nom)
const PRESENTATION_MOBILE = getVideo("dydy-quiz-presentation-mobile");
const LOOP = getVideo("dydy-quiz-accueil");
const LOOP_MOBILE = getVideo("dydy-quiz-accueil-mobile");
// Données structurées VideoObject (vidéo visible dans les résultats Google) : renseigner la date
// de mise en ligne (AAAA-MM-JJ) et la durée (ex. "PT1M05S") ; sans date ni image d’attente, rien n’est publié.
const PRESENTATION_META = { uploadDate: "", duration: "PT1M5S" }; // uploadDate : date de mise en ligne, à remplir le jour J
const SITE = "https://dydyfantasy.fr";


const STEPS = [
	{ icon: QrCodeIcon, title: "Je scanne", text: "Un QR code s’affiche, chacun le scanne avec son téléphone. Aucune application à installer." },
	{ icon: PlayCircleIcon, title: "Je joue", text: "Les questions arrivent sur l’écran et sur les téléphones : en son, en vidéo ou en image." },
	{ icon: TrophyIcon, title: "Je vois le classement", text: "Les scores s’affichent en direct sur le grand écran : suspense jusqu’à la dernière question." },
];

// Démos de l’appli déposées dans src/assets/dydy-quiz/ (voir LISEZ-MOI.txt du dossier) :
// - mini-vidéos de 5 s, muettes, en boucle : site-modes/<slug du mode>-….mp4/.webm (écran de la salle)
//   et site-etapes/etape-1…3-….mp4/.webm (téléphone d’un joueur), image d’attente « <même nom>-poster.jpg » ;
// - à défaut, une capture (image) à la racine du dossier, même règle de nom ;
// - à défaut, l’animation dessinée.
const clipFiles = import.meta.glob("../assets/dydy-quiz/site-*/*.{mp4,webm,MP4,WEBM}", {
	eager: true,
	query: "?url",
	import: "default",
});
const clipPosters = import.meta.glob("../assets/dydy-quiz/site-*/*-poster.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
	eager: true,
	query: { w: "1280", withoutEnlargement: "true", format: "webp", quality: "80" },
	import: "default",
});
const fileName = (p) => p.split("/").pop().toLowerCase();
/** { sources: [{ src, type }], poster } (format attendu par LoopVideo) ou undefined */
function clipFor(folder, prefix) {
	const paths = Object.keys(clipFiles).filter((p) => p.includes(`/${folder}/`) && fileName(p).startsWith(prefix));
	if (!paths.length) return undefined;
	// WebM d’abord (plus léger), MP4 ensuite (iPhone)
	const ext = (p) => fileName(p).split(".").pop();
	paths.sort((a, b) => (ext(a) === "webm" ? -1 : 1) - (ext(b) === "webm" ? -1 : 1));
	const stem = fileName(paths[0]).replace(/\.[^.]+$/, "");
	const poster = Object.keys(clipPosters).find((p) => p.includes(`/${folder}/`) && fileName(p).startsWith(`${stem}-poster`));
	return { sources: paths.map((p) => ({ src: clipFiles[p], type: `video/${ext(p)}` })), poster: poster && clipPosters[poster] };
}
const shotSets = import.meta.glob("../assets/dydy-quiz/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
	eager: true,
	query: { w: "480;960", format: "webp", quality: "82", as: "srcset" },
	import: "default",
});
const shotSrcs = import.meta.glob("../assets/dydy-quiz/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
	eager: true,
	query: { w: "960", format: "webp", quality: "82" },
	import: "default",
});
function shotFor(prefix) {
	const path = Object.keys(shotSrcs)
		.sort()
		.find((p) => p.split("/").pop().toLowerCase().startsWith(prefix));
	return path ? { src: shotSrcs[path], srcSet: shotSets[path] } : undefined;
}
const STEP_SHOTS = ["etape-1", "etape-2", "etape-3"].map(shotFor);
const STEP_CLIPS = ["etape-1", "etape-2", "etape-3"].map((s) => clipFor("site-etapes", s));

const MODES = [
	{ slug: "quiz", icon: MusicalNoteIcon, color: "#ff4d6d", title: "Quiz & blind test", text: "Des questions en audio, vidéo ou image, à jouer en solo ou par équipes." },
	{ slug: "bingo-musical", icon: TableCellsIcon, color: "#8b5cf6", title: "Bingo musical", text: "Le mélange d’un loto et d’un blind test : reconnaissez les morceaux pour compléter votre grille." },
	{ slug: "sondages", icon: ChartBarIcon, color: "var(--cyan)", title: "Sondages en direct", text: "La salle vote depuis son téléphone, les résultats s’affichent instantanément à l’écran." },
	{ slug: "challenge-photo", icon: CameraIcon, color: "var(--gold)", title: "Challenge Photo", text: "Une liste de défis photo à relever : les photos s’affichent sur l’écran avec les scores en direct. Idéal pour les mariages." },
	{ slug: "match-machine", icon: HeartIcon, color: "var(--pink)", title: "Match Machine", text: "Un algorithme de rencontre pour animer les soirées célibataires." },
	{ slug: "classement", icon: PresentationChartLineIcon, color: "#7cff6b", title: "Classement en direct", text: "Sur grand écran, pour tous les modes de jeu : chaque point compte." },
].map((m) => ({ ...m, clip: clipFor("site-modes", m.slug), shot: shotFor(m.slug) }));

// Grande vidéo de présentation, dans le cadre « grand écran » ; rien n’est téléchargé avant le clic
function PresentationVideo({ video, mobile }) {
	// Téléphone (< 768 px) : version portrait si elle existe. Choix fait dans le navigateur ;
	// le HTML pré-rendu montre la version paysage. preload="none" : rien n’est téléchargé avant le clic.
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		if (!mobile) return;
		const mq = window.matchMedia("(max-width: 767px)");
		const update = () => setIsMobile(mq.matches);
		update();
		mq.addEventListener("change", update);
		return () => mq.removeEventListener("change", update);
	}, [mobile]);
	const v = isMobile && mobile ? mobile : video;
	// Gros bouton lecture sur l’image d’attente (sinon on ne devine pas que c’est une vidéo) ;
	// les commandes du lecteur apparaissent une fois la vidéo lancée.
	const ref = useRef(null);
	const [started, setStarted] = useState(false);

	return (
		<div className={`big-screen relative rounded-2xl p-[3px] ${mobile ? "mx-auto max-w-[21rem] md:max-w-none" : ""}`}>
			{!started && (
				<button
					type="button"
					onClick={() => ref.current?.play()}
					className="group absolute inset-[3px] z-10 flex flex-col items-center justify-end gap-3 rounded-[0.9rem] bg-gradient-to-t from-black/70 via-transparent to-transparent pb-8 md:justify-center md:pb-0">
					<span className="btn-neon flex h-20 w-20 items-center justify-center rounded-full bg-[var(--pink)] text-white shadow-[0_0_40px_-6px_var(--pink)] transition-transform group-hover:scale-110 md:h-24 md:w-24">
						<PlayIcon aria-hidden="true" className="ml-1 h-10 w-10 md:h-12 md:w-12" />
					</span>
					<span className="rounded-full bg-black/60 px-4 py-1.5 text-sm font-bold">Voir la vidéo · 1 min · avec le son 🔊</span>
				</button>
			)}
			<video
				ref={ref}
				key={isMobile ? "mobile" : "desktop"}
				controls={started}
				onPlay={() => setStarted(true)}
				playsInline
				preload="none"
				poster={v.poster}
				aria-label="Vidéo : c’est quoi Dydy Quiz ?"
				className={`block w-full rounded-[0.9rem] bg-black ${isMobile && mobile ? "aspect-[9/16]" : "aspect-video"}`}>
				{v.sources.map((s) => (
					<source key={s.src} src={s.src} type={s.type} />
				))}
			</video>
		</div>
	);
}

export default function DydyQuiz() {
	const videoJsonLd =
		PRESENTATION && PRESENTATION.poster && PRESENTATION_META.uploadDate
			? {
					"@context": "https://schema.org",
					"@type": "VideoObject",
					name: "C’est quoi Dydy Quiz ?",
					description:
						"Dydy Quiz, l’appli développée par Dydy Fantasy : les invités scannent un QR code et jouent depuis leur téléphone, le classement s’affiche en direct sur grand écran.",
					thumbnailUrl: SITE + PRESENTATION.poster,
					contentUrl: SITE + PRESENTATION.sources[PRESENTATION.sources.length - 1].src,
					uploadDate: PRESENTATION_META.uploadDate,
					...(PRESENTATION_META.duration ? { duration: PRESENTATION_META.duration } : {}),
				}
			: null;

	return (
		<div className="led fun relative isolate overflow-hidden bg-[var(--ink)] text-white">
			<StageLights />
			<Seo
				path="/dydy-quiz"
				title="Dydy Quiz : quiz et blind test sur smartphone | Dydy Fantasy"
				description="Dydy Quiz, l’appli maison de Dydy Fantasy : quiz, blind test, sondages et défis photo sur smartphone via QR code. Utilisée dans plus de 150 soirées."
				ogTitle="Dydy Quiz : toute la salle joue depuis son téléphone"
			/>
			{videoJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }} />}

			{/* ---- Hero ---- */}
			<section className="relative px-4 pb-16 pt-10 md:pt-14">
				<Spectrum className="absolute inset-x-0 bottom-0 -z-10 flex h-20 opacity-50 md:h-28" />
				<div className="mx-auto max-w-6xl">
					<div className="max-w-4xl">
						<p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[var(--pink)]">
							<span className="live-dot h-2 w-2 rounded-full bg-[var(--pink)]" aria-hidden="true" />
							Ma marque de fabrique
						</p>
						<h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-6xl">
							<span className="text-[var(--cyan)]">Dydy Quiz</span>, l’appli qui transforme vos invités en{" "}
							<span className="text-[var(--pink)]">joueurs</span>.
						</h1>
						<p className="mt-6 text-lg leading-relaxed text-white/85">
							Un QR code à scanner, et toute la salle est dans le jeu. J’ai développé Dydy Quiz moi-même pour
							mes soirées : quiz, blind tests, sondages, défis photo… pilotés en direct au micro, avec les
							scores sur grand écran.
						</p>
						<p className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--gold)] px-4 py-2 font-bold text-[var(--gold)]">
							<ShieldCheckIcon aria-hidden="true" className="h-5 w-5" />
							Utilisée dans plus de 150 soirées
						</p>
						<div className="mt-8 flex flex-col gap-3 sm:flex-row">
							<Link to="/contact" className="btn-neon inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--pink)] px-6 py-3.5 font-bold text-white">
								Demander mon devis
								<ArrowRightIcon className="h-5 w-5" />
							</Link>
							{PRESENTATION ? (
								<a href="#video" className="btn-outline-neon inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--cyan)] px-6 py-3.5 font-semibold text-[var(--cyan)]">
									<PlayCircleIcon aria-hidden="true" className="h-5 w-5" />
									Voir la vidéo
								</a>
							) : (
								<a href="#modes" className="btn-outline-neon inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--cyan)] px-6 py-3.5 font-semibold text-[var(--cyan)]">
									Voir les modes de jeu
								</a>
							)}
						</div>
					</div>
					{/* Vidéo en grand : la présentation avec le son si elle est déposée, sinon la boucle de l’accueil */}
					{PRESENTATION ? (
						<ScrollReveal id="video" variant="zoom" className="mx-auto mt-12 max-w-5xl scroll-mt-24">
							<PresentationVideo video={PRESENTATION} mobile={PRESENTATION_MOBILE} />
						</ScrollReveal>
					) : (
						LOOP && (
							<ScrollReveal variant="zoom" className="mx-auto mt-12 max-w-5xl">
								<figure>
									<div className={`big-screen rounded-2xl p-[3px] ${LOOP_MOBILE ? "mx-auto max-w-[21rem] md:max-w-none" : ""}`}>
										<LoopVideo
											video={LOOP}
											mobile={LOOP_MOBILE}
											label="Dydy Quiz en soirée : les invités jouent sur leur téléphone, le classement s’affiche sur grand écran"
											className="rounded-[0.9rem]"
										/>
									</div>
									<figcaption className="mt-4 text-center text-sm text-white/55">
										Dydy Quiz en vrai : vos invités jouent sur leur téléphone, le classement s’affiche en direct sur grand écran.
									</figcaption>
								</figure>
							</ScrollReveal>
						)
					)}
				</div>
			</section>

			{/* ---- Comment ça marche ---- */}
			<section aria-labelledby="fonctionnement" className="px-4 py-16">
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="fonctionnement" label="Comment ça marche" title="Trois étapes," accent="zéro installation" />
					<PhoneDemo steps={STEPS} shots={STEP_SHOTS} clips={STEP_CLIPS} />
				</div>
			</section>

			<LedDivider color="var(--pink)" />

			{/* ---- Modes de jeu ---- */}
			<section id="modes" aria-labelledby="modes-titre" className="relative scroll-mt-24 px-4 py-16">
				<PeekingMascot text="Mon mode préféré ? Tous ! 😄" className="top-10" />
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="modes-titre" label="Les modes de jeu" title="Une appli," accent="mille façons de jouer" />
					<ModeSelect modes={MODES} />
				</div>
			</section>

			<LedDivider color="var(--gold)" reverse />

			{/* ---- Rassurance ---- */}
			<section aria-labelledby="rassurance" className="px-4 py-16">
				<div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
					<ScrollReveal variant="left" className="code-editor overflow-hidden rounded-3xl">
						<div aria-hidden="true" className="code-bar flex items-center gap-1.5 px-5 py-3">
							<i className="code-dot bg-[#ff5f57]" />
							<i className="code-dot bg-[#febc2e]" />
							<i className="code-dot bg-[#28c840]" />
							<span className="ml-3 font-mono text-xs text-white/50">dydy-quiz/app.js</span>
						</div>
						<div className="p-7">
						<CodeBracketIcon aria-hidden="true" className="h-9 w-9 text-[var(--cyan)]" />
						<h2 id="rassurance" className="mt-4 text-2xl font-extrabold">
							Développée par moi, <span className="text-[var(--cyan)]">testée dans plus de 150 soirées</span>
						</h2>
						<p className="mt-3 text-white/80">
							Ingénieur développeur le jour, j’ai conçu Dydy Quiz pour qu’il soit simple, fluide et fiable. Et
							il a fait ses preuves : <strong className="text-white">plus de 150 soirées</strong> en
							conditions réelles, dans des bars, des mariages et des événements d’entreprise.
						</p>
						</div>
					</ScrollReveal>
					<ScrollReveal variant="right" className="neon-card relative overflow-hidden rounded-3xl p-7" style={{ "--c": "var(--gold)" }}>
						<span aria-hidden="true" className="level-stamp is-static">Clé en main ✓</span>
						<ShieldCheckIcon aria-hidden="true" className="h-9 w-9 text-[var(--gold)]" />
						<h2 className="mt-4 text-2xl font-extrabold">Rien à gérer de votre côté</h2>
						<p className="mt-3 text-white/80">
							Dydy Quiz est utilisé uniquement pendant mes animations : vous n’avez rien à installer ni à
							préparer, je m’occupe de tout, du matériel au classement final.
						</p>
					</ScrollReveal>
				</div>
			</section>

			<LedFinal
				title={
					<>
						Envie de faire <span className="text-[var(--pink)]">jouer</span> vos invités ?
					</>
				}
				text="Parlez-moi de votre événement : je vous propose une animation sur mesure avec Dydy Quiz."
			/>
		</div>
	);
}
