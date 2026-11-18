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
import ClientOnlyZoneMap from "../components/ClientOnlyZoneMap";
import { PRESTATIONS, EVENEMENTS } from "../data/navigation";
import { STEPS } from "../data/steps";

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
	{ icon: SpeakerWaveIcon, title: "Matériel complet fourni", text: "Sono, lumières, machine à fumée, écran et vidéoprojecteur : j’apporte toujours tout. Devis tout compris, sans mauvaise surprise." },
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
		<div className="led relative isolate overflow-hidden bg-[var(--ink)] text-white">
			<StageLights />
			<Seo
				path="/prestations"
				title="Animations et prestations à Toulouse | Dydy Fantasy"
				description="Blind test, quiz, karaoké, DJ et animations sur mesure à Toulouse et dans un rayon de 50 km : mariages, entreprises, anniversaires, bars et restaurants."
			/>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

			{/* ---- Hero ---- */}
			<section className="px-4 pb-12 pt-10 md:pt-14">
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
					<ul className="mt-10 grid gap-5 md:grid-cols-2">
						{FORMATS.map((f, i) => (
							<ScrollReveal as="li" key={f.to} delay={(i % 2) * 90}>
								<Link to={f.to} style={{ "--c": f.color }} className="neon-card neon-card-hover group flex h-full flex-col rounded-3xl p-7">
									<div className="flex items-center gap-3">
										<span className="menu-icon flex h-12 w-12 items-center justify-center rounded-xl">
											<f.icon aria-hidden="true" className="h-7 w-7" />
										</span>
										<h3 className="text-2xl font-extrabold">{f.label}</h3>
									</div>
									<p className="mt-4 flex-1 text-white/80">{f.text}</p>
									<ul className="mt-4 flex flex-wrap gap-2">
										{f.tags.map((t) => (
											<li key={t} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">{t}</li>
										))}
									</ul>
									<span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-[var(--c)]">
										Découvrir
										<ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
									</span>
								</Link>
							</ScrollReveal>
						))}
					</ul>
				</div>
			</section>

			{/* ---- Pour qui : 4 événements ---- */}
			<section aria-labelledby="pour-qui" className="px-4 py-16">
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="pour-qui" label="Pour qui ?" title="Des prestations adaptées à" accent="chaque événement." />
					<ul className="mt-10 grid gap-x-12 sm:grid-cols-2">
						{AUDIENCES.map((a, i) => (
							<ScrollReveal as="li" key={a.to} delay={(i % 2) * 90} className="border-t border-white/10">
								<Link to={a.to} style={{ "--c": a.color }} className="group flex gap-4 py-6">
									<a.icon aria-hidden="true" className="h-8 w-8 shrink-0 text-[var(--c)]" />
									<div>
										<h3 className="flex items-center gap-2 text-lg font-extrabold">
											{a.title ?? a.label}
											<ArrowRightIcon className="h-4 w-4 text-[var(--c)] transition-transform group-hover:translate-x-1" />
										</h3>
										<p className="mt-1 text-white/75">{a.text}</p>
									</div>
								</Link>
							</ScrollReveal>
						))}
					</ul>
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
			<section aria-labelledby="inclus" className="px-4 py-16">
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="inclus" label="Inclus" title="Ce que je peux inclure" accent="dans la prestation" />
					<ul className="mt-10 grid gap-x-12 sm:grid-cols-2">
						{INCLUDED.map((item, i) => (
							<ScrollReveal as="li" key={item.title} delay={(i % 2) * 90} className="flex gap-4 border-t border-white/10 py-6" style={{ "--c": COLORS[i % 4] }}>
								<item.icon aria-hidden="true" className="h-7 w-7 shrink-0 text-[var(--c)]" />
								<div>
									<h3 className="font-extrabold">{item.to ? (<Link to={item.to} className="underline decoration-[var(--c)] underline-offset-4 hover:text-[var(--c)]">{item.title}</Link>) : item.title}</h3>
									<p className="mt-1 text-white/75">{item.text}</p>
								</div>
							</ScrollReveal>
						))}
					</ul>
				</div>
			</section>

			{/* ---- Déroulé ---- */}
			<section aria-labelledby="deroule" className="px-4 py-16">
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="deroule" label="Déroulé" title="Une organisation" accent="simple et claire." />
					<ol className="timeline relative mt-12 grid gap-10 md:grid-cols-4 md:gap-6">
						{STEPS.map((s, i) => (
							<ScrollReveal as="li" key={s.title} delay={i * 100} className="relative pl-16 md:pl-0 md:pt-16" style={{ "--c": COLORS[i % 4] }}>
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
