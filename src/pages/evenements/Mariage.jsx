import {
	TrophyIcon,
	MicrophoneIcon,
	MusicalNoteIcon,
	SparklesIcon,
	UsersIcon,
} from "@heroicons/react/24/outline";
import {
	SpeakerWaveIcon as ISpeaker,
	MicrophoneIcon as IMic,
	DevicePhoneMobileIcon as IPhone,
	CameraIcon as ICamera,
} from "@heroicons/react/24/outline";
import WeddingReasons from "../../components/mariage/WeddingReasons";
import WeddingProgram from "../../components/mariage/WeddingProgram";
import WeddingVote from "../../components/mariage/WeddingVote";
import ServicePage from "../../components/led/ServicePage";
import { relatedTo } from "../../data/navigation";
import { photoFor } from "../../data/evenementsPhotos";
// Police calligraphiée (enseigne néon + mot « mariage » du titre), chargée sur cette page uniquement
import "@fontsource/great-vibes/latin-400.css";

const PATH = "/evenements/mariage";

// « Pourquoi moi » : cartons de table (WeddingReasons)
const REASONS = [
	{ title: "Toutes les générations", text: "Des animations accessibles pour que grands-parents, amis et enfants jouent ensemble." },
	{ title: "Votre histoire au centre", text: "Des questions sur les mariés pour un moment drôle et touchant." },
	{ title: "Préparé avec vous", text: "On se rencontre avant le jour J, en vrai ou en visio, et je viens repérer les lieux. Ensemble, on construit le déroulé : vos envies, vos musiques, vos interdits." },
	{ title: "Tout géré de A à Z", text: "Animation et musique, avec tout le matériel : micro, sono, lumières, lyres et machine à fumée." },
];

// « Le programme de votre soirée » : frise façon faire-part (WeddingProgram)
const MOMENTS = [
	{ when: "Le vin d’honneur", icon: UsersIcon, title: "Un vin d’honneur original", text: "DJ d’ambiance, animation au micro ou jeux pour briser la glace entre les deux familles." },
	{ when: "Entre les plats", icon: TrophyIcon, title: "Le quiz des mariés", text: "Qui connaît le mieux les mariés ? Un quiz en équipes de tables, sur le téléphone de chaque invité." },
	{ when: "Avant la piste", icon: MusicalNoteIcon, title: "Le blind test", text: "Des tubes de toutes les époques, ou des thèmes sur mesure aux couleurs de votre mariage, pour faire chanter la salle." },
	{ when: "La soirée", icon: MicrophoneIcon, title: "Le karaoké", text: "Duos des mariés, chansons cultes en chœur : le moment où tout le monde se lâche." },
	{ when: "Jusqu’au bout de la nuit", icon: SparklesIcon, title: "La soirée DJ", text: "Une sélection musicale adaptée à vos invités, des années 80 aux tubes d’aujourd’hui, pour danser jusqu’à la dernière chanson." },
];
const THREAD = {
	title: "Le Challenge Photo",
	text: "Des défis à relever en photo du début à la fin, avec Dydy Quiz. Les photos s’affichent sur l’écran avec les scores en direct. Des souvenirs garantis.",
};

export default function Mariage() {
	return (
		<ServicePage
			path={PATH}
			name="Mariage"
			seo={{
				title: "Animateur & DJ mariage à Toulouse | Dydy Fantasy",
				description:
					"Animateur et DJ mariage à Toulouse et dans le Gers : vin d’honneur, quiz des mariés, blind test, Challenge Photo, karaoké et DJ jusqu’au bout de la nuit.",
			}}
			breadcrumb={[]}
			title={
				<>
					Animateur & DJ <span className="script-accent">mariage</span> à Toulouse
				</>
			}
			intro="Du vin d’honneur à la dernière danse, je gère l’animation et la musique de A à Z : un quiz sur les mariés pendant le repas, un blind test qui fait chanter toutes les générations, puis un DJ pour danser jusqu’au bout de la nuit."
			photo={photoFor("mariage")}
			color="var(--pink)"
			theme="mariage"
			photoSign="Vive les mariés"
			// Mise en scène propre au mariage, à la place des listes « icône + texte » du modèle
			body={
				<>
					<WeddingReasons reasons={REASONS} />
					<WeddingProgram moments={MOMENTS} thread={THREAD} />
					<WeddingVote />
				</>
			}
			// Avis Google cité en entier, mot pour mot (ne pas le modifier)
			testimonial={{
				label: "Avis de mariés",
				title: "Ils ont dit oui…",
				accent: "à Dydy Fantasy 💍",
				highlight: "Le jour J, nous n’avons eu à nous occuper de rien",
				quote: [
					"Un immense merci dydy fantasy",
					"Nous recommandons Dylan – DYDY Fantasy – sans aucune hésitation !",
					"Il a été présent, professionnel et disponible dès nos premiers échanges, avec un vrai suivi de nos préparatifs avant le mariage pour s’assurer que tout soit parfaitement calé.",
					"Le jour J, nous n’avons eu à nous occuper de rien : Dylan a géré la musique, les animations et le rythme de la soirée de A à Z. Il a également utilisé ses propres outils pour récupérer les photos des invités et organiser différentes animations, notamment un blind test qui a beaucoup plu.",
					"Mais le meilleur retour vient surtout de nos invités : tous nous ont parlé d’un DJ au top, d’une excellente sélection musicale et d’animations réalisées avec beaucoup de goût et de tact.",
					"Il a su faire vivre notre mariage sans jamais prendre trop de place, et c’est exactement ce que nous recherchions.",
					"Un immense merci Dylan ! Nous retravaillerions avec toi avec grand plaisir pour un prochain événement… même si, normalement, ce ne sera pas pour un deuxième mariage 😄",
				],
				author: "Michel",
				rating: 5,
				source: "Avis Google",
				link: { href: "https://www.mariages.net/musique-mariage/dydy-fantasy--e431763", label: "Mon profil Mariages.net" },
				mascot: "Vive les mariés ! 🥂",
				hearts: true,
			}}
			// « Ce que je peux apporter » propre à cette page (contenu unique pour le SEO)
			included={[
				{ icon: ISpeaker, title: "Matériel pro, tout compris", text: "Sono, lumières, lyres, machine à fumée, écran et vidéoprojecteur : j’apporte et j’installe tout. Devis tout compris, sans mauvaise surprise." },
				{ icon: IMic, title: "Un seul interlocuteur", text: "L’animation et la musique avec la même personne, du vin d’honneur à la dernière danse : rien à coordonner entre un DJ et un animateur." },
				{ icon: IPhone, title: "Application Dydy Quiz", text: "Quiz des mariés et Challenge Photo depuis le téléphone de vos invités, résultats en direct sur grand écran.", to: "/dydy-quiz" },
				{ icon: ICamera, title: "Souvenirs à partager", text: "Selon la soirée, quelques photos ou vidéos à garder et à partager avec vos proches." },
			]}
			gallery="mariages"
			related={relatedTo(PATH)}
			faq={[
				{ q: "À quel moment du mariage intervenez-vous ?", a: "Du vin d’honneur à la fin de soirée, selon vos envies : ambiance et jeux pour briser la glace au vin d’honneur, quiz et blind test pendant le repas, puis karaoké et DJ. On construit le déroulé ensemble." },
				{ q: "Les jeux sont-ils adaptés à tous les âges ?", a: "Oui, je mélange les thèmes et les époques pour que chaque génération ait sa chance." },
				{ q: "Intervenez-vous hors de Toulouse ?", a: "Oui, partout en Occitanie : Haute-Garonne, Gers, Tarn… Basé à Fonsorbes, je me déplace dans les domaines et salles de la région." },
				{ q: "Combien d’invités pouvez-vous animer ?", a: "Petit comité ou grande salle, l’animation s’adapte à votre nombre d’invités. J’apporte tout le matériel, adapté à votre salle : sono, lumières, machine à fumée, écran et vidéoprojecteur. Le devis est tout compris." },
				{ q: "Quand faut-il réserver ?", a: "Le plus tôt possible : les dates de mariage partent vite, surtout au printemps et en été. Contactez-moi avec votre date." },
			]}
		/>
	);
}
