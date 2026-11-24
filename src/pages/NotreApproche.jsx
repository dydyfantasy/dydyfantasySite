import { Link } from "react-router";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import {
	ChatBubbleLeftRightIcon,
	UserGroupIcon,
	PencilSquareIcon,
	WrenchScrewdriverIcon,
	MicrophoneIcon,
	ArrowPathIcon,
	FlagIcon,
	StarIcon,
	LightBulbIcon,
	AdjustmentsHorizontalIcon,
	HandRaisedIcon,
	DevicePhoneMobileIcon,
	CheckCircleIcon,
} from "@heroicons/react/24/outline";
import Seo from "../components/Seo";
import StageLights from "../components/led/StageLights";
import SectionTitle from "../components/led/SectionTitle";
import ScrollReveal from "../components/led/ScrollReveal";
import LedFinal from "../components/led/LedFinal";
import Spectrum from "../components/led/Spectrum";
import PeekingMascot from "../components/led/PeekingMascot";
import LedDivider from "../components/led/LedDivider";
import LevelMap from "../components/scenes/LevelMap";
import Achievements from "../components/scenes/Achievements";
import ScoreScreen from "../components/scenes/ScoreScreen";

// Textes repris de l’ancienne page (OurApproach.jsx). Seules les étapes 02 et 03
// ont été complétées pour souligner la co-construction (« ensemble »).

const COLORS = ["var(--cyan)", "var(--pink)", "var(--gold)", "#7cff6b", "#8b5cf6", "#ff4d6d"];

const METHOD = [
	{
		icon: ChatBubbleLeftRightIcon,
		title: "Premier échange",
		subtitle: "Comprendre votre événement",
		text: "On échange sur le lieu, le public, la durée, l’ambiance souhaitée et les contraintes techniques. L’objectif est de comprendre précisément ce que vous voulez faire vivre aux participants.",
		tags: ["Type d’événement", "Public attendu", "Ambiance recherchée", "Contraintes du lieu"],
	},
	{
		icon: UserGroupIcon,
		title: "Proposition du format",
		subtitle: "Choisir la bonne animation",
		text: "Je vous oriente vers le format le plus adapté : blind test, quiz interactif, karaoké, animation musicale ou concept sur mesure, puis on l’ajuste ensemble.",
		tags: ["Blind test", "Quiz interactif", "Karaoké", "Animation personnalisée"],
	},
	{
		icon: PencilSquareIcon,
		title: "Personnalisation",
		subtitle: "Adapter le contenu à votre public",
		text: "Je prépare les thèmes, les manches, les musiques, les questions ou les mécaniques de jeu pour que l’animation colle à votre événement, et on les valide ensemble.",
		tags: ["Thèmes adaptés", "Questions personnalisées", "Playlist cohérente", "Déroulé clair"],
	},
	{
		icon: WrenchScrewdriverIcon,
		title: "Préparation technique",
		subtitle: "Anticiper pour une soirée fluide",
		text: "Je vérifie le matériel nécessaire, le son, l’écran, les micros, la connexion éventuelle et l’installation pour éviter les mauvaises surprises.",
		tags: ["Sonorisation", "Micros", "Écran / vidéoprojecteur", "Application Dydy Quiz"],
	},
	{
		icon: MicrophoneIcon,
		title: "Animation le jour J",
		subtitle: "Créer le rythme et l’ambiance",
		text: "Je gère l’animation au micro, les règles, les relances, les transitions, l’énergie de la salle et l’interaction avec les participants.",
		tags: ["Animation au micro", "Interaction avec le public", "Gestion du rythme", "Ambiance conviviale"],
	},
	{
		icon: ArrowPathIcon,
		title: "Retour et évolution",
		subtitle: "Améliorer les prochaines soirées",
		text: "Après la prestation, je reste à l’écoute de vos retours pour ajuster les prochains formats et améliorer l’expérience.",
		tags: ["Débrief simple", "Retours clients", "Ajustements", "Prochaines idées"],
	},
];

const PROMISES = [
	{ icon: LightBulbIcon, title: "Une animation claire", text: "Les règles sont simples, le public comprend vite et peut participer sans prise de tête." },
	{ icon: AdjustmentsHorizontalIcon, title: "Une ambiance adaptée", text: "Je module le rythme selon le public : calme, familial, festif, compétitif ou complètement décalé." },
	{ icon: HandRaisedIcon, title: "Une vraie interaction", text: "Le but n’est pas seulement de lancer un jeu, mais de faire vivre un moment collectif." },
	{ icon: DevicePhoneMobileIcon, title: "Un format moderne", text: "Je peux intégrer des outils interactifs, des scores, le téléphone de chaque invité transformé en buzzer, des écrans et des supports personnalisés, à commencer par Dydy Quiz, l’appli que j’ai développée.", to: "/dydy-quiz" },
];

const RESULTS = [
	"Une animation adaptée au public",
	"Un rythme clair du début à la fin",
	"Une participation naturelle",
	"Une ambiance conviviale",
	"Un souvenir positif pour les invités",
];

function NotreApproche() {
	return (
		<div className="led fun relative isolate overflow-hidden bg-[var(--ink)] text-white">
			<StageLights />
			<Seo
				path="/mon-approche"
				title="Mon approche de l’animation à Toulouse | Dydy Fantasy"
				description="Mon approche de l’animation à Toulouse : écoute, préparation sur mesure et soirée interactive. Quiz, blind test, karaoké et DJ, tout le matériel fourni."
				ogTitle="Dydy Fantasy | Mon approche d’animation événementielle"
				ogDescription="Une méthode simple, claire et personnalisée pour créer une animation interactive, conviviale et adaptée à votre public."
			/>

			{/* ---- Hero ---- */}
			<section className="relative px-4 pb-14 pt-10 md:pt-14">
				<Spectrum className="absolute inset-x-0 bottom-0 -z-10 flex h-20 opacity-50 md:h-28" />
				<div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
					<div>
						<p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[var(--pink)]">
							<span className="live-dot h-2 w-2 rounded-full bg-[var(--pink)]" aria-hidden="true" />
							Mon approche
						</p>
						<h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-6xl">
							Une animation réussie, <span className="text-[var(--cyan)]">ça se prépare.</span>
						</h1>
						<p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
							Mon approche est simple : comprendre votre événement, choisir le bon format, personnaliser
							l’animation et créer une ambiance fluide, conviviale et participative.
						</p>
						<div className="mt-8 flex flex-col gap-3 sm:flex-row">
							<Link to="/contact" className="btn-neon inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--pink)] px-6 py-3.5 font-bold text-white">
								Me parler de mon événement
								<ArrowRightIcon className="h-5 w-5" />
							</Link>
							<a href="#methode" className="btn-outline-neon inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--cyan)] px-6 py-3.5 font-semibold text-[var(--cyan)]">
								Voir la méthode
							</a>
						</div>
					</div>

					<div className="space-y-4">
						<ScrollReveal variant="right" className="neon-card rounded-3xl p-6" style={{ "--c": "var(--gold)" }}>
							<p className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[var(--gold)]">
								<FlagIcon aria-hidden="true" className="h-5 w-5" />
								Objectif
							</p>
							<p className="mt-2 text-lg font-semibold">
								Créer une expérience simple à comprendre, fun à vivre et facile à partager.
							</p>
						</ScrollReveal>
						<ScrollReveal variant="right" delay={120} className="neon-card rounded-3xl p-6" style={{ "--c": "var(--pink)" }}>
							<p className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[var(--pink)]">
								<StarIcon aria-hidden="true" className="h-5 w-5" />
								Ma priorité
							</p>
							<p className="mt-2 text-lg font-semibold">Une animation fluide, claire et adaptée.</p>
						</ScrollReveal>
					</div>
				</div>
			</section>

			{/* ---- Méthode : frise verticale en 6 étapes ---- */}
			<section id="methode" aria-labelledby="methode-titre" className="scroll-mt-24 px-4 py-16">
				<div className="mx-auto max-w-5xl">
					<SectionTitle id="methode-titre" label="Ma méthode" title="De l’idée à l’animation" accent="le jour J.">
						Chaque étape permet de construire une animation cohérente, adaptée et agréable à vivre pour vous
						comme pour vos invités.
					</SectionTitle>

					<LevelMap steps={METHOD} />
				</div>
			</section>

			{/* ---- Engagements ---- */}
			<section aria-labelledby="engagements" className="relative px-4 py-16">
				<PeekingMascot text="On construit ça ensemble ! 🤝" className="top-10" />
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="engagements" label="Mes engagements" title="Ce qui fait" accent="la différence" />
					<Achievements items={PROMISES} />
				</div>
			</section>

			{/* ---- Résultat ---- */}
			<LedDivider color="var(--cyan)" reverse />

			<section aria-labelledby="resultat" className="px-4 py-12">
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="resultat" label="Le résultat" title="Ce que vivent" accent="vos invités" center />
					<ScoreScreen results={RESULTS} />
				</div>
			</section>

			<LedFinal
				title={
					<>
						Vous avez une <span className="text-[var(--pink)]">idée de soirée</span> ?
					</>
				}
				text="Parlez-moi de votre projet, du lieu, du public et de l’ambiance souhaitée. Je vous aiderai à trouver le format le plus adapté."
			/>
		</div>
	);
}

export default NotreApproche;
