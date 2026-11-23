import { useState } from "react";
import {
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
} from "@heroicons/react/24/outline";
import ServicePage from "../../components/led/ServicePage";
import { relatedTo } from "../../data/navigation";

const PATH = "/prestations/blind-test-quiz";

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
		text: "Un quiz en équipes pour fédérer vos collaborateurs lors d’un séminaire ou d’une soirée d’entreprise.",
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
		text: "Extraits musicaux à reconnaître : tubes des années 80 à aujourd’hui, génériques, musiques de films… Les thèmes s’adaptent à votre public.",
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
		title: "Blind’Quiz + Karaoké",
		text: "Le format star de mes soirées : on s’échauffe avec le blind quiz, puis la soirée se termine en karaoké géant.",
	},
];

const STEPS = [
	{ icon: ChatBubbleLeftRightIcon, title: "On échange", text: "Vous me parlez de votre événement : lieu, public, ambiance souhaitée." },
	{ icon: PencilSquareIcon, title: "On construit ensemble", text: "Je vous propose des manches et des thèmes, puis on les ajuste ensemble selon vos invités et vos envies." },
	{ icon: DevicePhoneMobileIcon, title: "On joue", text: "Les joueurs répondent sur leur téléphone ou avec des buzzers, je mène le jeu au micro." },
	{ icon: TrophyIcon, title: "Le podium", text: "Classement en direct, suspense jusqu’à la dernière question et victoire célébrée." },
];

// À VÉRIFIER / COMPLÉTER par Dydy (aucune donnée précise inventée ici)
const FAQ = [
	{
		q: "Combien de personnes peuvent participer ?",
		a: "Du petit groupe entre amis aux grandes salles : j’ai déjà animé des événements de 200 personnes et plus, et même des événements publics sur toute une journée. Les joueurs jouent seuls ou en équipes. Dites-moi votre nombre d’invités, je vous propose la formule adaptée.",
	},
	{
		q: "Comment les joueurs répondent-ils ?",
		a: "Depuis leur téléphone, en scannant un QR code : c’est Dydy Quiz, l’appli que j’ai développée. Questions en audio, vidéo ou image, sondages en direct, et les scores s’affichent sur grand écran pour garder le suspense jusqu’au bout.",
	},
	{
		q: "Peut-on personnaliser les questions ?",
		a: "Oui : thèmes au choix, manches sur les mariés, sur votre entreprise ou sur la personne fêtée. C’est souvent le moment préféré des invités.",
	},
	{
		q: "Où intervenez-vous ?",
		a: "Je suis basé à Fonsorbes, à l’ouest de Toulouse, et j’interviens à Toulouse, en Haute-Garonne, dans le Gers et dans le Tarn. Pour d’autres lieux, contactez-moi.",
	},
	{
		q: "Peut-on combiner le blind test avec un karaoké ou un DJ ?",
		a: "Oui, c’est même le format le plus demandé : blind quiz pour lancer la soirée, puis karaoké ou DJ pour faire danser tout le monde.",
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
						className={`answer-btn answer-fill flex min-h-[3.75rem] items-center gap-3 rounded-2xl p-2.5 text-left text-sm font-extrabold uppercase tracking-wide md:text-base ${
							picked && picked !== a.letter ? "is-dimmed" : ""
						}`}>
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
						<span className="text-[var(--gold)]">Raté ! C’était Stromae. Pas de panique, on se rattrape à la prochaine.</span>
					)
				) : (
					<span className="text-white/65">À vous de jouer : choisissez une réponse.</span>
				)}
			</p>
		</div>
	);
}

export default function BlindTestQuiz() {
	return (
		<ServicePage
			path={PATH}
			name="Blind test & quiz"
			seo={{
				title: "Animation blind test & quiz à Toulouse | Dydy Fantasy",
				description:
					"Animateur blind test et quiz à Toulouse : soirées façon jeu télé pour bars, mariages, entreprises et anniversaires. Buzzers, scores en direct, devis rapide.",
				ogTitle: "Blind test & quiz façon jeu télé à Toulouse | Dydy Fantasy",
			}}
			breadcrumb={[{ name: "Prestations", to: "/prestations" }]}
			title={
				<>
					Animation <span className="text-[var(--pink)]">blind test</span> &{" "}
					<span className="text-[var(--cyan)]">quiz</span> à Toulouse
				</>
			}
			intro="Une soirée façon jeu télé où vos invités ne regardent pas : ils jouent. Buzzers ou téléphone, manches thématiques, scores en direct et ambiance au micro, pour un bar, un mariage, une entreprise ou un anniversaire."
			aside={<DemoScreen />}
			pointsTitle={{ label: "Pour qui ?", title: "Un blind test pour chaque", accent: "événement", text: "Du bar de quartier au grand mariage, le quiz s’adapte à votre public et à votre lieu." }}
			points={AUDIENCES}
			formatsTitle={{ label: "Les formats", title: "Blind test, quiz ou", accent: "les deux ?", text: "Quatre façons de jouer, à mélanger selon votre soirée." }}
			formats={FORMATS}
			steps={STEPS}
			related={relatedTo(PATH)}
			faq={FAQ}
		/>
	);
}
