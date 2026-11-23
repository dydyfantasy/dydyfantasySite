import {
	TrophyIcon,
	MicrophoneIcon,
	MusicalNoteIcon,
	CakeIcon,
	UsersIcon,
	SparklesIcon,
	GiftIcon,
	CameraIcon,
	HomeIcon,
} from "@heroicons/react/24/outline";
import ServicePage from "../../components/led/ServicePage";
import { relatedTo } from "../../data/navigation";
import { photoFor } from "../../data/evenementsPhotos";

const PATH = "/evenements/anniversaire";

// À enrichir : exemples de soirées (30 ans, 40 ans…), photos, avis de clients particuliers.
export default function Anniversaire() {
	return (
		<ServicePage
			path={PATH}
			name="Anniversaire & soirée privée"
			seo={{
				title: "Animation anniversaire à Toulouse & Gers | Dydy Fantasy",
				description:
					"Animateur pour anniversaire et soirée privée à Toulouse et dans le Gers : quiz sur la personne fêtée, blind test, karaoké et DJ. Devis sous 24 h.",
			}}
			breadcrumb={[]}
			title={
				<>
					Animation <span className="text-[var(--gold)]">anniversaire</span> & soirée privée à Toulouse
				</>
			}
			intro="30 ans, 40 ans, 50 ans ou simple envie de faire la fête : un quiz sur la personne fêtée, un blind test qui fait chanter tout le monde, du karaoké et un DJ pour danser. Le cadeau, c’est la soirée."
			photo={photoFor("anniversaire")}
			color="var(--gold)"
			pointsTitle={{ label: "L’idée", title: "Une soirée qui", accent: "vous ressemble" }}
			points={[
				{ icon: CakeIcon, color: "var(--gold)", title: "La personne fêtée au centre", text: "Des questions et des souvenirs que seuls les proches connaissent." },
				{ icon: UsersIcon, color: "var(--pink)", title: "Tous les invités embarqués", text: "Famille, amis, collègues : chacun participe, même ceux qui ne se connaissent pas." },
				{ icon: HomeIcon, color: "var(--cyan)", title: "Chez vous ou en salle", text: "Je m’adapte à votre lieu : salle des fêtes, restaurant, maison." },
				{ icon: GiftIcon, color: "#7cff6b", title: "Une surprise réussie", text: "On peut tout préparer en secret avec vous pour une soirée surprise." },
			]}
			formatsTitle={{ label: "Les formats", title: "À combiner pour une", accent: "soirée complète" }}
			formats={[
				{ icon: TrophyIcon, title: "Quiz sur la personne fêtée", text: "Anecdotes, photos, souvenirs : qui la connaît le mieux ?" },
				{ icon: CameraIcon, title: "Challenge Photo & sondages", text: "Avec Dydy Quiz, vos invités relèvent des défis photo et votent en direct depuis leur téléphone, résultats sur grand écran." },
				{ icon: MusicalNoteIcon, title: "Blind test", text: "Les tubes de son époque et de ses goûts pour faire chanter toute la salle." },
				{ icon: MicrophoneIcon, title: "Karaoké", text: "Les chansons cultes en duo ou en chœur." },
				{ icon: SparklesIcon, title: "DJ", text: "Pour faire danser vos invités jusqu’au bout de la soirée." },
			]}
			related={relatedTo(PATH)}
			faq={[
				{ q: "Peut-on préparer une soirée surprise ?", a: "Oui, on prépare tout ensemble en toute discrétion, y compris les questions sur la personne fêtée." },
				{ q: "Intervenez-vous à domicile ?", a: "Oui, selon la place disponible ; on fait le point ensemble sur le lieu et le matériel nécessaire." },
				{ q: "Où intervenez-vous ?", a: "Basé à Fonsorbes, à l’ouest de Toulouse, j’interviens à Toulouse et partout en Occitanie : Haute-Garonne, Gers, Tarn…" },
			]}
		/>
	);
}
