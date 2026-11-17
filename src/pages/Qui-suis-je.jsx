import { Link } from "react-router";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import {
	CodeBracketIcon,
	MicrophoneIcon,
	CheckIcon,
	TrophyIcon,
	MusicalNoteIcon,
	PuzzlePieceIcon,
	LightBulbIcon,
	ChatBubbleLeftRightIcon,
	SparklesIcon,
	BoltIcon,
} from "@heroicons/react/24/outline";
import Seo from "../components/Seo";
import StageLights from "../components/led/StageLights";
import SectionTitle from "../components/led/SectionTitle";
import ScrollReveal from "../components/led/ScrollReveal";
import LedFinal from "../components/led/LedFinal";
import portraitSrcSet from "../assets/PhotoPresentation.webp?w=480;900&format=webp&quality=80&as=srcset";
import portrait from "../assets/PhotoPresentation.webp?w=900&format=webp&quality=80";
import tete64 from "../assets/brand/perso-tete-64.webp";
import tete128 from "../assets/brand/perso-tete-128.webp";
import videoPresentation from "../assets/C'est qui dydy fantasy.webm";
import videoPoster from "../assets/C'est qui dydy fantasy image.webp";

// Textes repris mot pour mot de l'ancienne page (Presentation.jsx) ; seule la mise en scène change.

const STATS = [
	{ value: "Live", label: "animation au micro", color: "var(--pink)" },
	{ value: "31", label: "Toulouse & alentours", color: "var(--cyan)" },
	{ value: "100%", label: "ambiance interactive", color: "var(--gold)" },
];

const IDEAS = [
	{ icon: LightBulbIcon, title: "Une idée simple", text: "Créer des soirées où les invités ne restent pas spectateurs, mais deviennent acteurs de l’ambiance." },
	{ icon: BoltIcon, title: "Un univers interactif", text: "Mélanger musique, jeux, humour, micro, buzzers, scores et moments spontanés." },
	{ icon: ChatBubbleLeftRightIcon, title: "Une animation vivante", text: "Adapter le rythme, relancer le public, faire participer tout le monde et garder une vraie énergie." },
];

const STRENGTHS = [
	"Blind tests musicaux",
	"Quiz interactifs à thème",
	"Karaokés conviviaux",
	"Soirées privées, anniversaires et mariages",
	"Animations pour bars et restaurants",
	"Événements professionnels",
];

const SERVICES = [
	{ icon: MusicalNoteIcon, color: "#ff4d6d", title: "Blind tests", text: "Des manches musicales pour faire chanter, buzzer et challenger les invités.", to: "/prestations/blind-test-quiz" },
	{ icon: TrophyIcon, color: "#19d3f0", title: "Quiz interactifs", text: "Des questions, des scores, du rythme et une vraie dynamique de jeu.", to: "/prestations/blind-test-quiz" },
	{ icon: MicrophoneIcon, color: "#3ddc84", title: "Karaokés", text: "Un moment convivial pour chanter, rire et créer des souvenirs.", to: "/prestations/karaoke" },
	{ icon: PuzzlePieceIcon, color: "#ffc93c", title: "Sur mesure", text: "Une animation adaptée au lieu, au public et à l’ambiance recherchée.", to: "/prestations/sur-mesure" },
];

function QuiSuisje() {
	return (
		<div className="led relative isolate overflow-hidden bg-[var(--ink)] text-white">
			<StageLights />
			<Seo
				path="/qui-suis-je"
				title="Dydy Fantasy | Qui suis-je ? Animateur événementiel à Toulouse"
				description="Découvrez Dydy Fantasy, animateur événementiel à Toulouse spécialisé en blind tests, quiz interactifs, karaokés et animations sur mesure pour soirées privées, bars, restaurants et événements professionnels."
				ogTitle="Dydy Fantasy | Animateur événementiel à Toulouse"
				ogDescription="Blind tests, quiz interactifs, karaokés et animations sur mesure pour vos événements à Toulouse et en Occitanie."
			/>

			{/* ---- Hero : l'accroche + le portrait ---- */}
			<section className="px-4 pb-16 pt-10 md:pt-14">
				<div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
					<div>
						<p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[var(--pink)]">
							<span className="live-dot h-2 w-2 rounded-full bg-[var(--pink)]" aria-hidden="true" />
							Qui suis-je ?
						</p>
						<h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-6xl">
							<span className="text-[var(--cyan)]">Ingénieur développeur</span> le jour,{" "}
							<span className="text-[var(--pink)]">animateur</span> le soir.
						</h1>
						<p className="mt-6 text-lg leading-relaxed text-white/85">
							Derrière Dydy Fantasy, il y a une envie simple : je suis ingénieur développeur le jour et
							animateur d’événements le soir. Avec Dydy Fantasy, je crée des blind tests, quiz
							interactifs, karaokés et animations sur mesure à Toulouse et en Occitanie.
						</p>
						<p className="mt-4 text-lg font-semibold text-white">
							Mon objectif : transformer une soirée classique en un moment vivant, participatif et
							mémorable.
						</p>
						<div className="mt-8 flex flex-col gap-3 sm:flex-row">
							<Link to="/contact" className="btn-neon inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--pink)] px-6 py-3.5 font-bold text-white">
								Me contacter
								<ArrowRightIcon className="h-5 w-5" />
							</Link>
							<Link to="/prestations" className="btn-outline-neon inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--cyan)] px-6 py-3.5 font-semibold text-[var(--cyan)]">
								Voir mes prestations
							</Link>
						</div>
					</div>

					{/* Portrait dans un cadre néon, signé par la mascotte */}
					<div className="relative mx-auto w-full max-w-sm">
						<div className="portrait-frame rounded-[2rem] p-[3px]">
							<img
								src={portrait}
								srcSet={portraitSrcSet}
								sizes="(min-width: 1024px) 24rem, 80vw"
								alt="Dydy Fantasy, animateur blind test, quiz et karaoké à Toulouse"
								width="900"
								height="1600"
								fetchPriority="high"
								className="aspect-[4/5] w-full rounded-[1.85rem] object-cover"
							/>
						</div>
						<div className="neon-card absolute -bottom-5 left-1/2 flex w-max -translate-x-1/2 items-center gap-3 rounded-full py-2 pl-2 pr-5" style={{ "--c": "var(--cyan)" }}>
							<img src={tete64} srcSet={`${tete64} 1x, ${tete128} 2x`} alt="" width="64" height="64" className="h-10 w-10 rounded-full ring-2 ring-[var(--pink)]" />
							<span className="leading-tight">
								<span className="block font-extrabold">Dydy Fantasy</span>
								<span className="block text-xs text-white/65">Animateur blind test, quiz & karaoké</span>
							</span>
						</div>
					</div>
				</div>
			</section>

			{/* ---- Chiffres ---- */}
			<section aria-label="En chiffres" className="px-4 py-10">
				<ul className="mx-auto grid max-w-4xl grid-cols-3 gap-4 text-center">
					{STATS.map((s, i) => (
						<ScrollReveal as="li" key={s.label} variant="zoom" delay={i * 100} style={{ "--c": s.color }}>
							<p className="stat-value text-4xl font-extrabold md:text-6xl">{s.value}</p>
							<p className="mt-1 text-sm text-white/65 md:text-base">{s.label}</p>
						</ScrollReveal>
					))}
				</ul>
			</section>

			{/* ---- Les deux casquettes ---- */}
			<section aria-labelledby="casquettes" className="px-4 py-16">
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="casquettes" label="Mon histoire" title="Une animation pensée pour faire" accent="participer tout le monde." />

					<div className="mt-10 grid gap-6 md:grid-cols-2">
						<ScrollReveal variant="left" className="neon-card rounded-3xl p-7" style={{ "--c": "var(--cyan)" }}>
							<CodeBracketIcon aria-hidden="true" className="h-9 w-9 text-[var(--cyan)]" />
							<h3 className="mt-4 text-2xl font-extrabold">Mon côté développeur</h3>
							<p className="mt-1 font-semibold text-[var(--cyan)]">La technologie au service de l’ambiance.</p>
							<p className="mt-4 text-white/80">
								Mon métier de développeur me permet d’imaginer des animations plus interactives : quiz en
								direct, scores, buzzers, écrans, mécaniques de jeu et formats personnalisés.
							</p>
						</ScrollReveal>

						<ScrollReveal variant="right" className="neon-card rounded-3xl p-7" style={{ "--c": "var(--pink)" }}>
							<MicrophoneIcon aria-hidden="true" className="h-9 w-9 text-[var(--pink)]" />
							<h3 className="mt-4 text-2xl font-extrabold">Mon côté animateur</h3>
							<ul className="mt-4 grid gap-2 sm:grid-cols-2">
								{STRENGTHS.map((item) => (
									<li key={item} className="flex items-start gap-2 text-sm text-white/85">
										<CheckIcon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--pink)]" />
										{item}
									</li>
								))}
							</ul>
							<p className="mt-4 text-sm text-white/65">
								Basé à Toulouse, je me déplace aussi à Blagnac, Colomiers, Tournefeuille, Balma,
								Ramonville, Saint-Orens et plus largement en Occitanie.
							</p>
						</ScrollReveal>
					</div>

					{/* La synthèse = la différence Dydy Fantasy */}
					<ScrollReveal className="mx-auto mt-12 max-w-3xl text-center">
						<SparklesIcon aria-hidden="true" className="mx-auto h-8 w-8 text-[var(--gold)]" />
						<blockquote className="mt-4 text-2xl font-semibold leading-snug md:text-3xl">
							C’est ce mélange entre <span className="text-[var(--pink)]">animation</span>,{" "}
							<span className="text-[var(--gold)]">musique</span> et{" "}
							<span className="text-[var(--cyan)]">technologie</span> qui donne à Dydy Fantasy son
							identité : une expérience fun, claire et engageante.
						</blockquote>
					</ScrollReveal>
				</div>
			</section>

			{/* ---- Philosophie en 3 idées ---- */}
			<section aria-labelledby="idees" className="px-4 py-16">
				<div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
					<div className="lg:sticky lg:top-28 lg:self-start">
						<SectionTitle id="idees" label="Ma philosophie" title="Trois idées" accent="qui guident chaque soirée" />
					</div>
					<ol>
						{IDEAS.map((idea, i) => (
							<ScrollReveal as="li" variant="right" key={idea.title} delay={i * 80} className="flex gap-5 border-b border-white/10 py-6 first:pt-0" style={{ "--c": ["var(--cyan)", "var(--pink)", "var(--gold)"][i] }}>
								<span className="w-10 shrink-0 text-3xl font-extrabold text-[var(--c)]">0{i + 1}</span>
								<div>
									<h3 className="flex items-center gap-2 text-xl font-extrabold">
										<idea.icon aria-hidden="true" className="h-6 w-6 text-[var(--c)]" />
										{idea.title}
									</h3>
									<p className="mt-2 text-white/75">{idea.text}</p>
								</div>
							</ScrollReveal>
						))}
					</ol>
				</div>
			</section>

			{/* ---- Ce que je propose (liens vers les pages détaillées) ---- */}
			<section aria-labelledby="propose" className="px-4 py-16">
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="propose" label="Ce que je propose" title="Mes" accent="animations" />
					<ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
						{SERVICES.map((s, i) => (
							<ScrollReveal as="li" key={s.title} delay={i * 90}>
								<Link to={s.to} style={{ "--c": s.color }} className="neon-card neon-card-hover group flex h-full flex-col rounded-3xl p-6">
									<s.icon aria-hidden="true" className="h-8 w-8 text-[var(--c)]" />
									<h3 className="mt-3 text-lg font-extrabold">{s.title}</h3>
									<p className="mt-2 flex-1 text-white/75">{s.text}</p>
									<span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--c)]">
										Découvrir
										<ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
									</span>
								</Link>
							</ScrollReveal>
						))}
					</ul>
				</div>
			</section>

			{/* ---- Me voir en action : la vidéo ---- */}
			<section aria-labelledby="action" className="px-4 py-16">
				<div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[minmax(0,1fr)_18rem]">
					<SectionTitle id="action" label="En vidéo" title="Mais c’est qui" accent="Dydy Fantasy ?" />
					<ScrollReveal variant="zoom" className="video-frame mx-auto w-full max-w-[18rem] rounded-[2.2rem] p-2">
						{/* preload="none" : la vidéo n'est téléchargée qu'au clic sur lecture */}
						<video
							src={videoPresentation}
							controls
							preload="none"
							playsInline
							poster={videoPoster}
							aria-label="Présentation de Dydy Fantasy, animateur événementiel à Toulouse"
							className="aspect-[9/16] w-full rounded-[1.8rem] bg-black object-cover"
						/>
					</ScrollReveal>
				</div>
			</section>

			<LedFinal
				title={
					<>
						Vous voulez créer une soirée qui <span className="text-[var(--pink)]">marque les esprits</span> ?
					</>
				}
				text="Parlez-moi de votre événement, du lieu, du public et de l’ambiance que vous voulez créer. Je vous proposerai une animation adaptée."
			/>
		</div>
	);
}

export default QuiSuisje;
