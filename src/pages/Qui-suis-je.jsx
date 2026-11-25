import { Link } from "react-router";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import {
	MicrophoneIcon,
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
import Spectrum from "../components/led/Spectrum";
import PeekingMascot from "../components/led/PeekingMascot";
import LedDivider from "../components/led/LedDivider";
import LedStats from "../components/led/LedStats";
import DayNight from "../components/scenes/DayNight";
import NeonIdeas from "../components/scenes/NeonIdeas";
import ArcadeSelect from "../components/scenes/ArcadeSelect";
// Portrait recadré au format du cadre (4:5) à la compilation : aucun pixel envoyé pour rien
import portraitSrcSet from "../assets/dydy-fantasy-animateur-dj-veste-paillettes-micro-casque.png?w=480;900&aspect=4:5&format=webp&quality=80&as=srcset";
import portrait from "../assets/dydy-fantasy-animateur-dj-veste-paillettes-micro-casque.png?w=900&aspect=4:5&format=webp&quality=80";
import tete64 from "../assets/brand/perso-tete-64.webp";
import tete128 from "../assets/brand/perso-tete-128.webp";
import videoPresentation from "../assets/C'est qui dydy fantasy.webm";
import videoPoster from "../assets/C'est qui dydy fantasy image.webp";

// Textes repris mot pour mot de l’ancienne page (Presentation.jsx) ; seule la mise en scène change.

const IDEAS = [
	{ icon: LightBulbIcon, title: "Une idée simple", text: "Créer des soirées où les invités ne restent pas spectateurs, mais deviennent acteurs de l’ambiance." },
	{ icon: BoltIcon, title: "Un univers interactif", text: "Mélanger musique, jeux, humour, micro, buzzers sur téléphone, scores et moments spontanés." },
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
		<div className="led fun relative isolate overflow-hidden bg-[var(--ink)] text-white">
			<StageLights />
			<Seo
				path="/qui-suis-je"
				title="Qui suis-je ? Animateur et DJ à Toulouse | Dydy Fantasy"
				description="Dydy Fantasy, animateur et DJ près de Toulouse : blind tests, quiz, karaokés et soirées sur mesure. Résident dans 4 bars, plus de 150 soirées animées."
				ogTitle="Dydy Fantasy | Animateur événementiel à Toulouse"
				ogDescription="Blind tests, quiz interactifs, karaokés et animations sur mesure pour vos événements à Toulouse et en Occitanie."
			/>

			{/* ---- Hero : l’accroche + le portrait ---- */}
			<section className="relative px-4 pb-16 pt-10 md:pt-14">
				<Spectrum className="absolute inset-x-0 bottom-0 -z-10 flex h-20 opacity-50 md:h-28" />
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
								alt="Dydy Fantasy, animateur blind test, quiz, karaoké et DJ à Toulouse, en veste à paillettes avec son micro-casque"
								width="900"
								height="1125"
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
			<LedStats band />

			{/* ---- Les deux casquettes ---- */}
			<section aria-labelledby="casquettes" className="px-4 py-16">
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="casquettes" label="Mon histoire" title="Une animation pensée pour faire" accent="participer tout le monde." />

					{/* Le jour (développeur, code à exécuter) / le soir (animateur) */}
					<DayNight
						strengths={STRENGTHS}
						zone="Basé à Fonsorbes, à l’ouest de Toulouse, je me déplace dans un rayon d’environ 50 km : Toulouse, Blagnac, Colomiers, Tournefeuille, Balma, Ramonville, Saint-Orens, le Gers et le Tarn voisins."
					/>

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
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="idees" label="Ma philosophie" title="Trois idées" accent="qui guident chaque soirée" center />
					<NeonIdeas ideas={IDEAS} />
				</div>
			</section>

			{/* ---- Ce que je propose (liens vers les pages détaillées) ---- */}
			<LedDivider color="var(--pink)" />

			<section aria-labelledby="propose" className="relative px-4 py-16">
				<PeekingMascot text="Moi, en version mascotte 😎" className="top-10" />
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="propose" label="Ce que je propose" title="Mes" accent="animations" />
					<ArcadeSelect items={SERVICES} />
				</div>
			</section>

			{/* ---- Me voir en action : la vidéo ---- */}
			<section aria-labelledby="action" className="px-4 py-16">
				<div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[minmax(0,1fr)_18rem]">
					<SectionTitle id="action" label="En vidéo" title="Mais c’est qui" accent="Dydy Fantasy ?" />
					<ScrollReveal variant="zoom" className="video-frame mx-auto w-full max-w-[18rem] rounded-[2.2rem] p-2">
						{/* preload="none" : la vidéo n’est téléchargée qu’au clic sur lecture */}
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
