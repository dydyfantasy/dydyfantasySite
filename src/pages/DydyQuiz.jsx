import { Link } from "react-router";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
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
	DevicePhoneMobileIcon,
	CodeBracketIcon,
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

// Vidéo « C’est quoi Dydy Quiz ? » (~1 min, avec le son) : src/assets/videos/dydy-quiz-presentation.mp4
// (+ image d’attente dydy-quiz-presentation.jpg). Section masquée tant qu’elle n’est pas déposée.
const PRESENTATION = getVideo("dydy-quiz-presentation");
// Données structurées VideoObject (vidéo visible dans les résultats Google) : renseigner la date
// de mise en ligne (AAAA-MM-JJ) et la durée (ex. "PT1M05S") ; sans date ni image d’attente, rien n’est publié.
const PRESENTATION_META = { uploadDate: "", duration: "" };
const SITE = "https://dydyfantasy.fr";

// Captures d'écran : tout fichier déposé dans src/assets/dydy-quiz/ (ordre alphabétique),
// optimisé à la compilation. Le nom du fichier sert de description.
const shotsSet = import.meta.glob("../assets/dydy-quiz/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
	eager: true,
	query: { w: "360;720", format: "webp", quality: "82", as: "srcset" },
	import: "default",
});
const shotsSrc = import.meta.glob("../assets/dydy-quiz/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
	eager: true,
	query: { w: "720", format: "webp", quality: "82" },
	import: "default",
});
const SHOTS = Object.keys(shotsSrc)
	.sort()
	.map((p) => ({
		src: shotsSrc[p],
		srcSet: shotsSet[p],
		alt: `Dydy Quiz : ${p.split("/").pop().replace(/\.[^.]+$/, "").replace(/^\d+[-_ ]*/, "").replace(/[-_]+/g, " ")}`,
	}));

const STEPS = [
	{ icon: QrCodeIcon, title: "Je scanne", text: "Un QR code s’affiche, chacun le scanne avec son téléphone. Aucune application à installer." },
	{ icon: PlayCircleIcon, title: "Je joue", text: "Les questions arrivent sur l’écran et sur les téléphones : en son, en vidéo ou en image." },
	{ icon: TrophyIcon, title: "Je vois le classement", text: "Les scores s’affichent en direct sur le grand écran : suspense jusqu’à la dernière question." },
];

const MODES = [
	{ icon: MusicalNoteIcon, color: "#ff4d6d", title: "Quiz & blind test", text: "Des questions en audio, vidéo ou image, à jouer en solo ou par équipes." },
	{ icon: ChartBarIcon, color: "var(--cyan)", title: "Sondages en direct", text: "La salle vote depuis son téléphone, les résultats s’affichent instantanément à l’écran." },
	{ icon: CameraIcon, color: "var(--gold)", title: "Challenge Photo", text: "Une liste de défis photo à relever : les photos s’affichent sur l’écran avec les scores en direct. Idéal pour les mariages." },
	{ icon: HeartIcon, color: "var(--pink)", title: "Match Machine", text: "Un algorithme de rencontre pour animer les soirées célibataires." },
	{ icon: PresentationChartLineIcon, color: "#7cff6b", title: "Classement en direct", text: "Sur grand écran, pour tous les modes de jeu : chaque point compte." },
];

// Emplacements vides tant que les captures ne sont pas déposées
function PhoneSlot({ shot, i }) {
	return (
		<div className="phone-shot mx-auto w-full max-w-[15rem] rounded-[2rem] p-2" style={{ "--c": ["var(--cyan)", "var(--pink)", "var(--gold)"][i % 3] }}>
			{shot ? (
				<img src={shot.src} srcSet={shot.srcSet} sizes="15rem" alt={shot.alt} loading="lazy" className="aspect-[9/19] w-full rounded-[1.6rem] bg-black object-cover" />
			) : (
				<div aria-hidden="true" className="event-visual flex aspect-[9/19] w-full items-center justify-center rounded-[1.6rem]">
					<DevicePhoneMobileIcon className="h-12 w-12 text-[var(--c)] opacity-70" />
				</div>
			)}
		</div>
	);
}

// Grande vidéo de présentation, dans le cadre « grand écran » ; rien n’est téléchargé avant le clic
function PresentationVideo({ video }) {
	return (
		<div className="big-screen rounded-2xl p-[3px]">
			<video
				controls
				playsInline
				preload="none"
				poster={video.poster}
				aria-label="Vidéo : c’est quoi Dydy Quiz ?"
				className="block aspect-video w-full rounded-[0.9rem] bg-black">
				{video.sources.map((s) => (
					<source key={s.src} src={s.src} type={s.type} />
				))}
			</video>
		</div>
	);
}

export default function DydyQuiz() {
	const shots = SHOTS.length ? SHOTS : [null, null, null];
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
				<div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
					<div>
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
					<ScrollReveal variant="zoom">
						<PhoneSlot shot={shots[0]} i={0} />
					</ScrollReveal>
				</div>
			</section>

			{/* ---- Vidéo « C’est quoi Dydy Quiz ? » (affichée dès que le fichier est déposé) ---- */}
			{PRESENTATION ? (
				<section id="video" aria-labelledby="video-titre" className="scroll-mt-24 px-4 py-16">
					<div className="mx-auto max-w-5xl">
						<SectionTitle id="video-titre" label="En vidéo" title="C’est quoi" accent="Dydy Quiz ?" center />
						<ScrollReveal variant="zoom" className="mt-10">
							<PresentationVideo video={PRESENTATION} />
						</ScrollReveal>
					</div>
				</section>
			) : (
				import.meta.env.DEV && (
					// Rappel visible uniquement en développement (npm run dev), jamais sur le site en ligne
					<section className="px-4 py-10">
						<div className="mx-auto max-w-5xl rounded-2xl border-2 border-dashed border-white/25 p-8 text-center text-white/60">
							<PlayCircleIcon aria-hidden="true" className="mx-auto h-12 w-12" />
							<p className="mt-3 font-bold">Emplacement de la vidéo « C’est quoi Dydy Quiz ? »</p>
							<p className="mt-1 text-sm">Déposez dydy-quiz-presentation.mp4 dans src/assets/videos/</p>
						</div>
					</section>
				)
			)}

			{/* ---- Comment ça marche ---- */}
			<section aria-labelledby="fonctionnement" className="px-4 py-16">
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="fonctionnement" label="Comment ça marche" title="Trois étapes," accent="zéro installation" />
					<ol className="timeline relative mt-12 grid gap-10 md:grid-cols-3 md:gap-6">
						{STEPS.map((s, i) => (
							<ScrollReveal as="li" key={s.title} delay={i * 100} className="relative pl-16 md:pl-0 md:pt-16" style={{ "--c": ["var(--cyan)", "var(--pink)", "var(--gold)"][i] }}>
								<span className="timeline-dot absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full">
									<s.icon aria-hidden="true" className="h-6 w-6 text-[var(--c)]" />
								</span>
								<p className="text-sm font-bold uppercase tracking-widest text-[var(--c)]">Étape 0{i + 1}</p>
								<h3 className="mt-1 text-lg font-extrabold">{s.title}</h3>
								<p className="mt-1 text-white/75">{s.text}</p>
							</ScrollReveal>
						))}
					</ol>
				</div>
			</section>

			<LedDivider color="var(--pink)" />

			{/* ---- Modes de jeu ---- */}
			<section id="modes" aria-labelledby="modes-titre" className="relative scroll-mt-24 px-4 py-16">
				<PeekingMascot text="Mon mode préféré ? Tous ! 😄" className="top-10" />
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="modes-titre" label="Les modes de jeu" title="Une appli," accent="mille façons de jouer" />
					<ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
						{MODES.map((m, i) => (
							<ScrollReveal as="li" key={m.title} delay={(i % 3) * 90} className="neon-card rounded-3xl p-6" style={{ "--c": m.color }}>
								<span className="menu-icon flex h-12 w-12 items-center justify-center rounded-xl">
									<m.icon aria-hidden="true" className="h-7 w-7" />
								</span>
								<h3 className="mt-4 text-xl font-extrabold">{m.title}</h3>
								<p className="mt-2 text-white/75">{m.text}</p>
							</ScrollReveal>
						))}
					</ul>
				</div>
			</section>

			{/* ---- Captures d'écran ---- */}
			<section aria-labelledby="captures" className="px-4 py-16">
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="captures" label="En images" title="Dydy Quiz" accent="en action" />
					<ul className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3">
						{shots.slice(SHOTS.length > 1 ? 1 : 0).map((shot, i) => (
							<ScrollReveal as="li" key={shot?.src ?? `vide-${i}`} delay={(i % 3) * 90}>
								<PhoneSlot shot={shot} i={i + 1} />
							</ScrollReveal>
						))}
					</ul>
				</div>
			</section>

			<LedDivider color="var(--gold)" reverse />

			{/* ---- Rassurance ---- */}
			<section aria-labelledby="rassurance" className="px-4 py-16">
				<div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
					<ScrollReveal variant="left" className="neon-card rounded-3xl p-7" style={{ "--c": "var(--cyan)" }}>
						<CodeBracketIcon aria-hidden="true" className="h-9 w-9 text-[var(--cyan)]" />
						<h2 id="rassurance" className="mt-4 text-2xl font-extrabold">Développée par moi, pour vos soirées</h2>
						<p className="mt-3 text-white/80">
							Ingénieur développeur le jour, j’ai conçu Dydy Quiz pour qu’il soit simple, fluide et fiable, y
							compris dans les conditions réelles d’un événement.
						</p>
					</ScrollReveal>
					<ScrollReveal variant="right" className="neon-card rounded-3xl p-7" style={{ "--c": "var(--gold)" }}>
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
