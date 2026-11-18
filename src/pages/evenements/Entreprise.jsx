import {
	TrophyIcon,
	MicrophoneIcon,
	MusicalNoteIcon,
	UsersIcon,
	PresentationChartBarIcon,
	BuildingOffice2Icon,
	DevicePhoneMobileIcon,
	SparklesIcon,
} from "@heroicons/react/24/outline";
import ServicePage from "../../components/led/ServicePage";
import { relatedTo } from "../../data/navigation";

const PATH = "/evenements/entreprise";

// Cible : « team building toulouse », « animateur séminaire toulouse », « animateur micro toulouse ».
// Référence réelle : animation micro / speaker pour Décathlon (VitalSport Escalquens).
export default function Entreprise() {
	return (
		<ServicePage
			path={PATH}
			name="Entreprise & team building"
			seo={{
				title: "Team building & animation d’entreprise à Toulouse | Dydy Fantasy",
				description:
					"Team building quiz, animation de séminaire, animateur micro et soirée d’entreprise à Toulouse. Référence : animation speaker pour Décathlon. Devis rapide.",
			}}
			breadcrumb={[]}
			title={
				<>
					<span className="text-[var(--cyan)]">Team building</span> & animation d’entreprise à Toulouse
				</>
			}
			intro="Un quiz en équipes pour fédérer vos collaborateurs, une animation micro pour rythmer votre journée événement, puis une soirée qui marque les esprits. Des formats simples, fun et fédérateurs pour vos équipes."
			color="var(--cyan)"
			pointsTitle={{ label: "Vos besoins", title: "Un format pour chaque", accent: "objectif" }}
			points={[
				{ icon: UsersIcon, color: "var(--cyan)", title: "Fédérer les équipes", text: "Un quiz en équipes où services et collègues se mélangent et s’affrontent dans la bonne humeur." },
				{ icon: PresentationChartBarIcon, color: "var(--pink)", title: "Séminaires", text: "Une pause interactive pour relancer l’énergie entre deux sessions de travail." },
				{ icon: BuildingOffice2Icon, color: "var(--gold)", title: "Journées événement", text: "Animateur micro et speaker pour présenter, rythmer et faire participer le public toute la journée, comme pour Décathlon." },
				{ icon: SparklesIcon, color: "#7cff6b", title: "Soirées d’entreprise", text: "Blind test, karaoké et DJ pour fêter une réussite ou la fin d’année." },
			]}
			formatsTitle={{ label: "Les formats", title: "Du quiz au", accent: "dancefloor" }}
			formats={[
				{ icon: TrophyIcon, title: "Quiz team building", text: "Des manches en équipes, éventuellement sur votre entreprise ou votre secteur, avec classement en direct." },
				{ icon: DevicePhoneMobileIcon, title: "Quiz sur téléphone", text: "Avec Dydy Quiz, l’appli que j’ai développée, chacun joue depuis son smartphone via un QR code : quiz, sondages en direct, classement sur grand écran. Rien à installer ni à distribuer." },
				{ icon: MicrophoneIcon, title: "Animation micro & speaker", text: "Présentation de démonstrations, annonces et animation du public lors de vos événements." },
				{ icon: MusicalNoteIcon, title: "Soirée blind test, karaoké & DJ", text: "Pour clôturer la journée dans une ambiance festive." },
			]}
			related={relatedTo(PATH)}
			faq={[
				{ q: "Le quiz peut-il porter sur notre entreprise ?", a: "Oui : des manches sur votre entreprise, votre secteur ou votre actualité rendent le jeu encore plus fédérateur." },
				{ q: "Avez-vous déjà animé des événements d’entreprise ?", a: "Oui, par exemple une journée VitalSport chez Décathlon Escalquens, en animation micro avec présentation de démonstrations." },
				{ q: "Pouvez-vous intervenir dans nos locaux ?", a: "Oui, dans vos locaux ou dans le lieu de votre séminaire, à Toulouse et dans les départements voisins." },
				{ q: "Établissez-vous des devis pour les entreprises ?", a: "Oui, contactez-moi avec la date, le lieu, le nombre de participants et le format souhaité." },
			]}
		/>
	);
}
