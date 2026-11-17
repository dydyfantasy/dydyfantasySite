import { useState } from "react";
import { Link } from "react-router";
import {
	ArrowRightIcon,
	BuildingStorefrontIcon,
	HeartIcon,
	BriefcaseIcon,
	CakeIcon,
	MusicalNoteIcon,
	LightBulbIcon,
	PuzzlePieceIcon,
	MicrophoneIcon,
	ChatBubbleLeftRightIcon,
	PencilSquareIcon,
	DevicePhoneMobileIcon,
	TrophyIcon,
	ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Seo from "../components/Seo";
import StageLights from "../components/led/StageLights";
import SectionTitle from "../components/led/SectionTitle";
import LedAgenda from "../components/led/LedAgenda";
import LedReviews from "../components/led/LedReviews";
import LedFinal from "../components/led/LedFinal";

const PAGE_URL = "https://dydyfantasy.fr/prestations/blind-test-quiz";

// Question de démonstration du hero (fait réel : « Alors on danse », Stromae, 2009)
const DEMO = {
	question: "Qui chante « Alors on danse » ?",
	answers: [
		{ letter: "A", label: "Stromae", color: "#ff4d6d", correct: true },
		{ letter: "B", label: "Angèle", color: "#3ddc84" },
		{ letter: "C", label: "Orelsan", color: "#19d3f0" },
		{ letter: "D", label: "Indila", color: "#ffc93c" },
	],
};

const AUDIENCES = [
	{
		icon: BuildingStorefrontIcon,
		color: "#7cff6b",
		title: "Bars & restaurants",
		text: "Des soirées blind test régulières qui remplissent votre salle en semaine et fidélisent vos clients.",
	},
	{
		icon: HeartIcon,
		color: "var(--pink)",
		title: "Mariages",
		text: "Un blind test ou un quiz sur les mariés pour animer le repas et faire jouer toutes les générations.",
	},
	{
		icon: BriefcaseIcon,
		color: "var(--cyan)",
		title: "Entreprises & team building",
		text: "Un quiz en équipes pour fédérer vos collaborateurs lors d'un séminaire ou d'une soirée d'entreprise.",
	},
	{
		icon: CakeIcon,
		color: "var(--gold)",
		title: "Anniversaires & soirées privées",
		text: "Un quiz personnalisé autour de la personne fêtée, avec des questions que seuls les proches connaissent.",
	},
];

const FORMATS = [
	{
		icon: MusicalNoteIcon,
		color: "var(--pink)",
		title: "Blind test musical",
		text: "Extraits musicaux à reconnaître : tubes des années 80 à aujourd'hui, génériques, musiques de films… Les thèmes s'adaptent à votre public.",
	},
	{
		icon: LightBulbIcon,
		color: "var(--cyan)",
		title: "Quiz culture générale",
		text: "Des manches thématiques variées pour que chacun ait sa chance : cinéma, sport, géographie, actualité, questions décalées.",
	},
	{
		icon: PuzzlePieceIcon,
		color: "var(--gold)",
		title: "Quiz sur mesure",
		text: "Des questions créées pour votre événement : les mariés, votre entreprise, la personne fêtée, votre ville…",
	},
	{
		icon: MicrophoneIcon,
		color: "#7cff6b",
		title: "Blind'Quiz + Karaoké",
		text: "Le format star de mes soirées : on s'échauffe avec le blind quiz, puis la soirée se termine en karaoké géant.",
	},
];

const STEPS = [
	{ icon: ChatBubbleLeftRightIcon, title: "On échange", text: "Vous me parlez de votre événement : lieu, public, ambiance souhaitée." },
	{ icon: PencilSquareIcon, title: "Je prépare", text: "Je construis les manches et les thèmes adaptés à vos invités." },
	{ icon: DevicePhoneMobileIcon, title: "On joue", text: "Les joueurs répondent sur leur téléphone ou avec des buzzers, je mène le jeu au micro." },
	{ icon: TrophyIcon, title: "Le podium", text: "Classement en direct, suspense jusqu'à la dernière question et victoire célébrée." },
];

// À VÉRIFIER / COMPLÉTER par Dydy (aucune donnée précise inventée ici)
const FAQ = [
	{
		q: "Combien de personnes peuvent participer ?",
		a: "Le format s'adapte à votre événement, du petit groupe entre amis à la grande salle. Les joueurs peuvent jouer seuls ou en équipes. Dites-moi votre nombre d'invités, je vous propose la formule adaptée.",
	},
	{
		q: "Comment les joueurs répondent-ils ?",
		a: "Selon la formule, depuis leur téléphone ou avec des buzzers. Les scores s'affichent en direct pour garder le suspense jusqu'au bout.",
	},
	{
		q: "Peut-on personnaliser les questions ?",
		a: "Oui : thèmes au choix, manches sur les mariés, sur votre entreprise ou sur la personne fêtée. C'est souvent le moment préféré des invités.",
	},
	{
		q: "Où intervenez-vous ?",
		a: "Je suis basé à Fonsorbes, à l'ouest de Toulouse, et j'interviens à Toulouse, en Haute-Garonne, dans le Gers et dans le Tarn. Pour d'autres lieux, contactez-moi.",
	},
	{
		q: "Peut-on combiner le blind test avec un karaoké ou un DJ ?",
		a: "Oui, c'est même le format le plus demandé : blind quiz pour lancer la soirée, puis karaoké ou DJ pour faire danser tout le monde.",
	},
];

function DemoScreen() {
	const [picked, setPicked] = useState(null);
	const answer = DEMO.answers.find((a) => a.letter === picked);

	return (
		<div className="neon-card rounded-3xl p-5 md:p-6" style={{ "--c": "var(--cyan)" }}>
			<p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[var(--pink)]">
				<span className="live-dot h-2 w-2 rounded-full bg-[var(--pink)]" aria-hidden="true" />
				Question 07 · Blind test
			</p>
			<p className="mt-3 text-xl font-extrabold md:text-2xl">{DEMO.question}</p>
			<div className={`mt-4 grid grid-cols-2 gap-3 ${picked ? "" : "is-chasing"}`}>
				{DEMO.answers.map((a, i) => (
					<button
						key={a.letter}
						type="button"
						aria-pressed={picked === a.letter}
						onClick={() => setPicked(a.letter)}
						style={{ "--c": a.color, "--i": i }}
						className="answer-btn flex items-center gap-3 rounded-2xl p-2.5 text-left text-sm font-bold uppercase tracking-wide md:text-base">
						<span className="answer-letter flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg font-extrabold">
							{a.letter}
						</span>
						{a.label}
					</button>
				))}
			</div>
			<p className="mt-4 min-h-[1.5rem] text-sm font-semibold" aria-live="polite">
				{answer ? (
					answer.correct ? (
						<span className="text-[#7cff6b]">Bonne réponse ! +10 points pour votre équipe 🎉</span>
					) : (
						<span className="text-[var(--gold)]">Raté ! C'était Stromae. Pas de panique, on se rattrape à la prochaine.</span>
					)
				) : (
					<span className="text-white/55">À vous de jouer : choisissez une réponse.</span>
				)}
			</p>
		</div>
	);
}

function IconTile({ item }) {
	return (
		<li className="neon-card rounded-3xl p-6" style={{ "--c": item.color }}>
			<item.icon aria-hidden="true" className="h-8 w-8 text-[var(--c)]" />
			<h3 className="mt-3 text-lg font-extrabold">{item.title}</h3>
			<p className="mt-2 text-white/75">{item.text}</p>
		</li>
	);
}

export default function BlindTestQuiz() {
	const jsonLd = [
		{
			"@context": "https://schema.org",
			"@type": "Service",
			name: "Animation blind test et quiz",
			serviceType: "Animation blind test et quiz",
			url: PAGE_URL,
			description:
				"Animation blind test et quiz interactif façon jeu télé pour bars, mariages, entreprises et anniversaires à Toulouse et alentours.",
			provider: { "@type": "LocalBusiness", name: "Dydy Fantasy", url: "https://dydyfantasy.fr/" },
			areaServed: ["Toulouse", "Haute-Garonne", "Gers", "Tarn"],
		},
		{
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: [
				{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://dydyfantasy.fr/" },
				{ "@type": "ListItem", position: 2, name: "Prestations", item: "https://dydyfantasy.fr/prestations" },
				{ "@type": "ListItem", position: 3, name: "Blind test & quiz", item: PAGE_URL },
			],
		},
	];

	return (
		<div className="led relative isolate overflow-hidden bg-[var(--ink)] text-white">
			<Seo
				path="/prestations/blind-test-quiz"
				title="Animation blind test & quiz à Toulouse | Dydy Fantasy"
				description="Animateur blind test et quiz à Toulouse : soirées façon jeu télé pour bars, mariages, entreprises et anniversaires. Buzzers, scores en direct, devis rapide."
				ogTitle="Blind test & quiz façon jeu télé à Toulouse | Dydy Fantasy"
			/>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			<StageLights />

			{/* ---- Hero ---- */}
			<section className="px-4 pb-16 pt-8 md:pt-12">
				<div className="mx-auto max-w-6xl">
					<nav aria-label="Fil d'Ariane" className="text-sm text-white/55">
						<ol className="flex flex-wrap items-center gap-1.5">
							<li><Link to="/" className="hover:text-white">Accueil</Link></li>
							<li aria-hidden="true">/</li>
							<li><Link to="/prestations" className="hover:text-white">Prestations</Link></li>
							<li aria-hidden="true">/</li>
							<li aria-current="page" className="text-white/85">Blind test & quiz</li>
						</ol>
					</nav>

					<div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
						<div>
							<h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
								Animation <span className="text-[var(--pink)]">blind test</span> &{" "}
								<span className="text-[var(--cyan)]">quiz</span> à Toulouse
							</h1>
							<p className="mt-5 text-lg leading-relaxed text-white/80">
								Une soirée façon jeu télé où vos invités ne regardent pas : ils jouent. Buzzers ou
								téléphone, manches thématiques, scores en direct et ambiance au micro, pour un bar,
								un mariage, une entreprise ou un anniversaire.
							</p>
							<div className="mt-7 flex flex-col gap-3 sm:flex-row">
								<Link to="/contact" className="btn-neon inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--pink)] px-6 py-3.5 font-bold text-white">
									Demander mon devis
									<ArrowRightIcon className="h-5 w-5" />
								</Link>
								<a href="#agenda" className="btn-outline-neon inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--cyan)] px-6 py-3.5 font-semibold text-[var(--cyan)]">
									Venir tester en soirée
								</a>
							</div>
						</div>
						<DemoScreen />
					</div>
				</div>
			</section>

			{/* ---- Pour qui ---- */}
			<section aria-labelledby="pour-qui" className="px-4 py-16">
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="pour-qui" label="Pour qui ?" title="Un blind test pour chaque" accent="événement">
						Du bar de quartier au grand mariage, le quiz s'adapte à votre public et à votre lieu.
					</SectionTitle>
					<ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
						{AUDIENCES.map((item) => <IconTile key={item.title} item={item} />)}
					</ul>
				</div>
			</section>

			{/* ---- Formats ---- */}
			<section aria-labelledby="formats" className="px-4 py-16">
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="formats" label="Les formats" title="Blind test, quiz ou" accent="les deux ?" />
					<ul className="mt-10 grid gap-5 sm:grid-cols-2">
						{FORMATS.map((item) => <IconTile key={item.title} item={item} />)}
					</ul>
				</div>
			</section>

			{/* ---- Déroulé ---- */}
			<section aria-labelledby="deroule" className="px-4 py-16">
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="deroule" label="Comment ça se passe" title="De votre idée au" accent="podium final" />
					<ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
						{STEPS.map((s, i) => (
							<li key={s.title} className="neon-card rounded-3xl p-6" style={{ "--c": ["var(--cyan)", "var(--pink)", "var(--gold)", "#7cff6b"][i] }}>
								<p className="glow-cyan text-4xl font-extrabold">0{i + 1}</p>
								<s.icon aria-hidden="true" className="mt-3 h-7 w-7 text-[var(--c)]" />
								<h3 className="mt-2 text-lg font-extrabold">{s.title}</h3>
								<p className="mt-1 text-white/75">{s.text}</p>
							</li>
						))}
					</ol>
				</div>
			</section>

			<LedAgenda />
			<LedReviews />

			{/* ---- FAQ ---- */}
			<section aria-labelledby="faq" className="px-4 py-16">
				<div className="mx-auto max-w-3xl">
					<SectionTitle id="faq" label="FAQ" title="Vos questions sur le" accent="blind test" />
					<div className="mt-8 space-y-3">
						{FAQ.map((f) => (
							<details key={f.q} className="faq-item neon-card group rounded-2xl" style={{ "--c": "var(--cyan)" }}>
								<summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-bold">
									{f.q}
									<ChevronDownIcon className="h-5 w-5 shrink-0 text-[var(--cyan)] transition-transform group-open:rotate-180" />
								</summary>
								<p className="px-5 pb-5 text-white/75">{f.a}</p>
							</details>
						))}
					</div>
				</div>
			</section>

			<LedFinal />
		</div>
	);
}
