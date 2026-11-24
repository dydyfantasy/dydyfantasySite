import { Link } from "react-router";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import {
	MicrophoneIcon,
	SpeakerWaveIcon,
	DevicePhoneMobileIcon,
	CameraIcon,
	CheckBadgeIcon,
	FlagIcon,
} from "@heroicons/react/24/outline";
import Seo from "../components/Seo";
import StageLights from "../components/led/StageLights";
import SectionTitle from "../components/led/SectionTitle";
import ScrollReveal from "../components/led/ScrollReveal";
import LedFinal from "../components/led/LedFinal";
import Spectrum from "../components/led/Spectrum";
import PeekingMascot from "../components/led/PeekingMascot";
import LedDivider from "../components/led/LedDivider";
import ClientOnlyZoneMap from "../components/ClientOnlyZoneMap";
import { PRESTATIONS, EVENEMENTS } from "../data/navigation";
import { STEPS } from "../data/steps";
import FestivalLineup from "../components/scenes/FestivalLineup";
import TicketStubs from "../components/scenes/TicketStubs";
import Rider from "../components/scenes/Rider";
import SoireeBuilder from "../components/scenes/SoireeBuilder";

// Page « sommaire » : aiguille vers les pages détaillées (le détail vit sur chaque page,
// pour éviter le contenu en double). Textes repris de l’ancienne page Prestations.

const byPath = (list, to) => list.find((p) => p.to === to);

const FORMATS = [
	{
		...byPath(PRESTATIONS, "/prestations/blind-test-quiz"),
		text: "Des manches dynamiques pour faire deviner les titres, les artistes, les années ou les génériques, et des quiz à thème accessibles depuis le téléphone des participants, avec scores, classements et animation en direct.",
		tags: ["Années 80/90/2000", "Chansons françaises", "Films & séries", "Quiz personnalisé", "Scores en direct"],
	},
	{
		...byPath(PRESTATIONS, "/prestations/karaoke"),
		text: "Un moment convivial pour chanter, rire, encourager les participants et finir la soirée dans une ambiance détendue.",
		tags: ["Solo ou duo", "Chansons populaires", "Relances micro", "Ambiance participative"],
	},
	{
		...byPath(PRESTATIONS, "/prestations/dj"),
		text: "Une sélection musicale adaptée à votre public et aux temps forts de votre événement, pour faire monter l’énergie au bon moment.",
		tags: ["Mariages", "Soirées privées", "Soirées d’entreprise"],
	},
	{
		...byPath(PRESTATIONS, "/prestations/sur-mesure"),
		text: "Je peux adapter le format à votre lieu, votre public et votre objectif : soirée à thème, jeu spécial, animation mariage ou événement pro.",
		tags: ["Soirées privées", "Mariages", "Bars & restaurants", "Événements professionnels"],
	},
];

const AUDIENCES = [
	{ ...byPath(EVENEMENTS, "/evenements/bars-restaurants"), title: "Bars, pubs & restaurants", text: "Créer une soirée récurrente ou ponctuelle pour attirer du monde et fidéliser vos clients." },
	{ ...byPath(EVENEMENTS, "/evenements/mariage"), title: "Mariages & soirées privées", text: "Animer un moment convivial, faire participer les invités et créer des souvenirs." },
	{ ...byPath(EVENEMENTS, "/evenements/entreprise"), title: "Entreprises & team building", text: "Proposer un format simple, fun et fédérateur pour vos équipes." },
	{ ...byPath(EVENEMENTS, "/evenements/anniversaire"), text: "Une soirée autour de la personne fêtée : quiz sur mesure, blind test, karaoké et DJ." },
];

const INCLUDED = [
	{ icon: MicrophoneIcon, title: "Animation au micro", text: "Je gère le rythme, les relances, les explications et l’ambiance tout au long de la prestation." },
	{ icon: SpeakerWaveIcon, title: "Matériel complet fourni", text: "Sono, lumières, lyres, machine à fumée, écran et vidéoprojecteur : j’apporte toujours tout. Devis tout compris, sans mauvaise surprise." },
	{ icon: DevicePhoneMobileIcon, title: "Application Dydy Quiz", text: "Pour les formats interactifs, les participants peuvent jouer directement depuis leur téléphone, grâce à l’appli que j’ai développée.", to: "/dydy-quiz" },
	{ icon: CameraIcon, title: "Contenus réseaux", text: "Selon la soirée, je peux produire quelques photos ou vidéos réutilisables pour votre communication." },
];


const COLORS = ["var(--cyan)", "var(--pink)", "var(--gold)", "#7cff6b"];

function NosPrestations() {
	const breadcrumb = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://dydyfantasy.fr/" },
			{ "@type": "ListItem", position: 2, name: "Prestations", item: "https://dydyfantasy.fr/prestations" },
		],
	};

	return (
		<div className="led fun relative isolate overflow-hidden bg-[var(--ink)] text-white">
			<StageLights />
			<Seo
				path="/prestations"
				title="Animations et prestations à Toulouse | Dydy Fantasy"
				description="Blind test, quiz, karaoké, DJ et animations sur mesure à Toulouse et dans un rayon de 50 km : mariages, entreprises, anniversaires, bars et restaurants."
			/>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

			{/* ---- Hero ---- */}
			<section className="relative px-4 pb-12 pt-10 md:pt-14">
				<Spectrum className="absolute inset-x-0 bottom-0 -z-10 flex h-20 opacity-50 md:h-28" />
				<div className="mx-auto max-w-6xl">
					<p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[var(--pink)]">
						<span className="live-dot h-2 w-2 rounded-full bg-[var(--pink)]" aria-hidden="true" />
						Mes prestations
					</p>
					<div className="mt-3 grid items-end gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.6fr)]">
						<div>
							<h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
								Des animations interactives pour faire vivre{" "}
								<span className="text-[var(--cyan)]">une vraie ambiance</span> à Toulouse.
							</h1>
							<p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
								Blind tests, quiz interactifs, karaokés et animations sur mesure : j’adapte chaque
								prestation à votre public, votre lieu et l’énergie que vous souhaitez créer.
							</p>
							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Link to="/contact" className="btn-neon inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--pink)] px-6 py-3.5 font-bold text-white">
									Demander mon devis
									<ArrowRightIcon className="h-5 w-5" />
								</Link>
								<a href="#formats" className="btn-outline-neon inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--cyan)] px-6 py-3.5 font-semibold text-[var(--cyan)]">
									Voir les formats
								</a>
							</div>
						</div>
						<ScrollReveal variant="zoom" className="neon-card rounded-3xl p-6" style={{ "--c": "var(--gold)" }}>
							<CheckBadgeIcon aria-hidden="true" className="h-9 w-9 text-[var(--gold)]" />
							<p className="mt-3 text-sm font-bold uppercase tracking-widest text-[var(--gold)]">Format clé en main</p>
							<p className="mt-1 text-xl font-extrabold">Vous profitez, je gère l’animation.</p>
						</ScrollReveal>
					</div>
				</div>
			</section>

			{/* ---- Formats : 4 tuiles vers les pages détaillées ---- */}
			<section id="formats" aria-labelledby="formats-titre" className="scroll-mt-24 px-4 py-16">
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="formats-titre" label="Formats d’animation" title="Choisissez l’ambiance," accent="je m’occupe du reste.">
						Chaque prestation peut être adaptée selon le lieu, la durée, le nombre de participants et le type
						de public.
					</SectionTitle>
					<FestivalLineup formats={FORMATS} />
				</div>
			</section>

			{/* ---- Pour qui : 4 événements ---- */}
			<section aria-labelledby="pour-qui" className="relative px-4 py-16">
				<PeekingMascot text="Vous hésitez ? Je vous conseille ! 💬" className="top-10" />
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="pour-qui" label="Pour qui ?" title="Des prestations adaptées à" accent="chaque événement." />
					<TicketStubs items={AUDIENCES} />
					<p className="mt-4 flex items-center gap-3 border-t border-white/10 pt-6 text-white/75">
						<FlagIcon aria-hidden="true" className="h-6 w-6 shrink-0 text-[var(--gold)]" />
						<span>
							<strong className="text-white">Associations & événements locaux :</strong> adapter l’animation à
							tous les âges et à différents types de publics.
						</span>
					</p>
				</div>
			</section>

			{/* ---- Inclus ---- */}
			<LedDivider color="var(--gold)" />

			<section aria-labelledby="inclus" className="px-4 py-16">
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="inclus" label="Inclus" title="Ce que je peux inclure" accent="dans la prestation" center />
					<Rider items={INCLUDED} />
				</div>
			</section>

			{/* ---- Composez votre soirée : configurateur qui pré-remplit le formulaire de contact ---- */}
			<section aria-labelledby="composer" className="px-4 py-16">
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="composer" label="À vous de jouer" title="Composez" accent="votre soirée" center>
						Choisissez votre événement et vos animations : je vous réponds sous 24 h avec une proposition.
					</SectionTitle>
					<SoireeBuilder />
				</div>
			</section>

			{/* ---- Déroulé ---- */}
			<section aria-labelledby="deroule" className="px-4 py-16">
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="deroule" label="Déroulé" title="Une organisation" accent="simple et claire." />
					<ol className="mt-8 flex flex-wrap items-center gap-3">
						{STEPS.map((s, i) => (
							<li key={s.title} className="flex items-center gap-3" style={{ "--c": COLORS[i % 4] }}>
								<span className="neon-card inline-flex items-center gap-2 rounded-full px-4 py-2 font-bold">
									<s.icon aria-hidden="true" className="h-5 w-5 text-[var(--c)]" />
									{s.title}
								</span>
								{i < STEPS.length - 1 && <ArrowRightIcon aria-hidden="true" className="h-4 w-4 text-white/40" />}
							</li>
						))}
					</ol>
					<Link to="/mon-approche" className="mt-6 inline-flex items-center gap-2 font-semibold text-[var(--cyan)] underline underline-offset-4">
						Ma façon de travailler, étape par étape
						<ArrowRightIcon className="h-4 w-4" />
					</Link>
				</div>
			</section>

			{/* ---- Zone d’intervention ---- */}
			<section aria-labelledby="zone" className="px-4 py-16">
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="zone" label="Zone d’intervention" title="J’interviens dans un rayon de" accent="50 km autour de Toulouse.">
						Basé à Fonsorbes : Toulouse, Blagnac, Colomiers, Tournefeuille, Balma, Ramonville, Saint-Orens,
						les communes voisines, le Gers et le Tarn.
					</SectionTitle>
					<ScrollReveal className="mt-10">
						<ClientOnlyZoneMap />
					</ScrollReveal>
				</div>
			</section>

			<LedFinal
				title={
					<>
						Vous avez un événement <span className="text-[var(--pink)]">à animer</span> ?
					</>
				}
				text="Parlez-moi de votre soirée, du public attendu et de l’ambiance que vous voulez créer. Je vous proposerai un format adapté."
			/>
		</div>
	);
}

export default NosPrestations;
