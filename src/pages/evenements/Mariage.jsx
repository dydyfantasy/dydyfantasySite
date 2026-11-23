import {
	TrophyIcon,
	MicrophoneIcon,
	MusicalNoteIcon,
	UsersIcon,
	HeartIcon,
	SparklesIcon,
	ChatBubbleLeftRightIcon,
	PhotoIcon,
	SpeakerWaveIcon,
} from "@heroicons/react/24/outline";
import ServicePage from "../../components/led/ServicePage";
import { relatedTo } from "../../data/navigation";
import { photoFor } from "../../data/evenementsPhotos";

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
					"Animateur et DJ mariage à Toulouse et dans le Gers : vin d’honneur, quiz des mariés, blind test, Challenge Photo, karaoké et DJ jusqu’au bout de la nuit.",
			}}
			breadcrumb={[]}
			title={
				<>
					Animateur & DJ <span className="text-[var(--pink)]">mariage</span> à Toulouse
				</>
			}
			intro="Du vin d’honneur à la dernière danse, je gère l’animation et la musique de A à Z : un quiz sur les mariés pendant le repas, un blind test qui fait chanter toutes les générations, puis un DJ pour danser jusqu’au bout de la nuit."
			photo={photoFor("mariage")}
			color="var(--pink)"
			pointsTitle={{ label: "Pourquoi moi", title: "Un mariage qui", accent: "fait participer" }}
			points={[
				{ icon: UsersIcon, color: "var(--pink)", title: "Toutes les générations", text: "Des animations accessibles pour que grands-parents, amis et enfants jouent ensemble." },
				{ icon: HeartIcon, color: "var(--cyan)", title: "Votre histoire au centre", text: "Des questions sur les mariés pour un moment drôle et touchant." },
				{ icon: ChatBubbleLeftRightIcon, color: "var(--gold)", title: "Préparé avec vous", text: "On construit le déroulé ensemble : vos envies, vos musiques, vos interdits." },
				{ icon: SpeakerWaveIcon, color: "#7cff6b", title: "Tout géré de A à Z", text: "Animation et musique, avec tout le matériel : micro, sono, lumières, lyres et machine à fumée." },
			]}
			formatsTitle={{ label: "Le déroulé", title: "Les moments", accent: "à animer", text: "À choisir et à combiner selon votre journée." }}
			formats={[
				{ icon: UsersIcon, title: "Vin d’honneur", text: "Envie d’un vin d’honneur original ? DJ d’ambiance, animation au micro ou jeux pour briser la glace entre les deux familles." },
				{ icon: TrophyIcon, title: "Quiz des mariés", text: "Qui connaît le mieux les mariés ? Un quiz en équipes de tables entre deux plats." },
				{ icon: MusicalNoteIcon, title: "Blind test", text: "Des tubes de toutes les époques, ou des thèmes sur mesure aux couleurs de votre mariage, pour faire chanter la salle avant la soirée dansante." },
				{ icon: MicrophoneIcon, title: "Karaoké", text: "Duos des mariés, chansons cultes en chœur : le moment où tout le monde se lâche." },
				{ icon: PhotoIcon, title: "Challenge Photo", text: "Le fil rouge de la soirée : des défis à relever en photo du début à la fin, avec Dydy Quiz. Les photos s’affichent sur l’écran avec les scores en direct. Des souvenirs garantis." },
				{ icon: SparklesIcon, title: "Soirée DJ", text: "Une sélection musicale adaptée à vos invités pour danser jusqu’au bout de la nuit." },
			]}
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
