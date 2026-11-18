import {
	TrophyIcon,
	MicrophoneIcon,
	MusicalNoteIcon,
	UsersIcon,
	HeartIcon,
	SparklesIcon,
	ChatBubbleLeftRightIcon,
	CameraIcon,
	PhotoIcon,
} from "@heroicons/react/24/outline";
import ServicePage from "../../components/led/ServicePage";
import { relatedTo } from "../../data/navigation";

const PATH = "/evenements/mariage";

// Page à fort enjeu (« animateur mariage toulouse », « dj mariage toulouse »).
// À enrichir : photos de mariages, témoignages de mariés, déroulé type d’une soirée.
export default function Mariage() {
	return (
		<ServicePage
			path={PATH}
			name="Mariage"
			seo={{
				title: "Animateur & DJ mariage à Toulouse | Dydy Fantasy",
				description:
					"Animateur et DJ pour votre mariage à Toulouse et dans le Gers : blind test et quiz des mariés pendant le repas, karaoké et DJ pour faire danser vos invités.",
			}}
			breadcrumb={[]}
			title={
				<>
					Animateur & DJ <span className="text-[var(--pink)]">mariage</span> à Toulouse
				</>
			}
			intro="Un mariage où vos invités ne font pas que regarder : un quiz sur les mariés pendant le repas, un blind test qui fait chanter toutes les générations, puis un DJ pour danser jusqu’au bout de la nuit."
			color="var(--pink)"
			pointsTitle={{ label: "Pourquoi moi", title: "Un mariage qui", accent: "fait participer" }}
			points={[
				{ icon: UsersIcon, color: "var(--pink)", title: "Toutes les générations", text: "Des animations accessibles pour que grands-parents, amis et enfants jouent ensemble." },
				{ icon: HeartIcon, color: "var(--cyan)", title: "Votre histoire au centre", text: "Des questions sur les mariés pour un moment drôle et touchant." },
				{ icon: ChatBubbleLeftRightIcon, color: "var(--gold)", title: "Préparé avec vous", text: "On construit le déroulé ensemble : vos envies, vos musiques, vos interdits." },
				{ icon: CameraIcon, color: "#7cff6b", title: "Des souvenirs en plus", text: "Selon la soirée, quelques photos ou vidéos à garder et partager." },
			]}
			formatsTitle={{ label: "Le déroulé", title: "Les moments", accent: "à animer", text: "À choisir et à combiner selon votre journée." }}
			formats={[
				{ icon: TrophyIcon, title: "Quiz des mariés", text: "Qui connaît le mieux les mariés ? Un quiz en équipes de tables entre deux plats." },
				{ icon: MusicalNoteIcon, title: "Blind test", text: "Des tubes de toutes les époques pour faire chanter la salle avant la soirée dansante." },
				{ icon: MicrophoneIcon, title: "Karaoké", text: "Duos des mariés, chansons cultes en chœur : le moment où tout le monde se lâche." },
				{ icon: PhotoIcon, title: "Challenge Photo", text: "Des défis photo à relever par vos invités avec Dydy Quiz : les photos s’affichent sur l’écran avec les scores en direct. Des souvenirs garantis." },
				{ icon: SparklesIcon, title: "Soirée DJ", text: "Une sélection musicale adaptée à vos invités pour danser jusqu’au bout de la nuit." },
			]}
			related={relatedTo(PATH)}
			faq={[
				{ q: "À quel moment du mariage intervenez-vous ?", a: "Selon vos envies : pendant le repas pour les jeux, puis en soirée pour le karaoké et le DJ. On construit le déroulé ensemble." },
				{ q: "Les jeux sont-ils adaptés à tous les âges ?", a: "Oui, je mélange les thèmes et les époques pour que chaque génération ait sa chance." },
				{ q: "Intervenez-vous hors de Toulouse ?", a: "Oui : Haute-Garonne, Gers et Tarn. Basé à Fonsorbes, je me déplace dans les domaines et salles de la région." },
				{ q: "Quand faut-il réserver ?", a: "Le plus tôt possible : les dates de mariage partent vite, surtout au printemps et en été. Contactez-moi avec votre date." },
			]}
		/>
	);
}
