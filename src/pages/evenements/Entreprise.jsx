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
import {
	SpeakerWaveIcon as ISpeaker,
	MicrophoneIcon as IMic,
	DevicePhoneMobileIcon as IPhone,
	CameraIcon as ICamera,
} from "@heroicons/react/24/outline";
import EntrepriseScene from "../../components/scenes/EntrepriseScene";
import ServicePage from "../../components/led/ServicePage";
import { relatedTo } from "../../data/navigation";
import { photoFor } from "../../data/evenementsPhotos";

const PATH = "/evenements/entreprise";

// Cible : « team building toulouse », « animateur séminaire toulouse », « animateur micro toulouse ».
// Référence réelle : animation micro / speaker pour Decathlon (VitalSport Escalquens).
export default function Entreprise() {
	return (
		<ServicePage
			path={PATH}
			subject={{ votre: "votre événement d’entreprise", sur: "l’animation d’entreprise" }}
			name="Entreprise & team building"
			seo={{
				title: "Team building & animateur micro à Toulouse | Dydy Fantasy",
				description:
					"Team building quiz, animation de séminaire, animateur micro et soirée d’entreprise à Toulouse. Référence : animation speaker pour Décathlon. Devis rapide.",
			}}
			breadcrumb={[]}
			title={
				<>
					<span className="text-[var(--cyan)]">Team building</span> & animation d’entreprise à Toulouse
				</>
			}
			intro="Un quiz en équipes pour fédérer vos collaborateurs, une animation micro pour rythmer votre journée, puis blind test, karaoké et DJ pour fêter ça. J’apporte tout le matériel : vous n’avez rien à gérer."
			photo={photoFor("entreprise")}
			// Avis Google cité mot pour mot (sélection de Dydy, 25/11/2026)
			testimonial={{
				label: "Avis client",
				title: "Ils m’ont fait confiance,",
				accent: "et ils reviennent",
				highlight: "il est certain que nous retravaillerons ensemble",
				quote: [
					"Formidable !",
					"Dylan nous a animé notre soirée blind test + karaoké à la perfection. Une superbe ambiance et le tout avec bcp de gentillesse. il est certain que nous retravaillerons ensemble :)",
				],
				author: "Vie Culturelle",
				rating: 5,
				source: "Avis Google",
			}}
			color="var(--cyan)"
			// Mise en scène propre à la page (points et formats), à la place des listes du modèle
			scene={EntrepriseScene}
			pointsTitle={{ label: "Vos besoins", title: "Un format pour chaque", accent: "objectif" }}
			points={[
				{ icon: UsersIcon, color: "var(--cyan)", title: "Fédérer les équipes", text: "Un quiz en équipes où services et collègues se mélangent et s’affrontent dans la bonne humeur." },
				{ icon: PresentationChartBarIcon, color: "var(--pink)", title: "Séminaires", text: "Une pause interactive pour relancer l’énergie entre deux sessions de travail." },
				{ icon: BuildingOffice2Icon, color: "var(--gold)", title: "Journées événement", text: "Animateur micro et speaker pour présenter, rythmer et faire participer le public toute la journée, comme pour Decathlon." },
				{ icon: SparklesIcon, color: "#7cff6b", title: "Soirées d’entreprise", text: "Blind test, karaoké et DJ pour fêter une réussite ou la fin d’année." },
			]}
			formatsTitle={{ label: "Les formats", title: "Du quiz au", accent: "dancefloor" }}
			formats={[
				{ icon: TrophyIcon, title: "Quiz team building", text: "Des manches en équipes, éventuellement sur votre entreprise ou votre secteur, avec classement en direct." },
				{ icon: DevicePhoneMobileIcon, title: "Quiz sur téléphone", text: "Avec Dydy Quiz, l’appli que j’ai développée, chacun joue depuis son smartphone via un QR code : quiz, sondages en direct, classement sur grand écran. Rien à installer ni à distribuer." },
				{ icon: MicrophoneIcon, title: "Animation micro & speaker", text: "Présentation de démonstrations, annonces et animation du public lors de vos événements." },
				{ icon: MusicalNoteIcon, title: "Soirée blind test, karaoké & DJ", text: "Pour clôturer la journée dans une ambiance festive." },
			]}
			// « Ce que je peux apporter » propre à cette page (contenu unique pour le SEO)
			included={[
				{ icon: ISpeaker, title: "Installation clé en main", text: "Sono, micros, écran et vidéoprojecteur dans vos locaux ou votre salle de séminaire : vous n’avez rien à prévoir." },
				{ icon: IMic, title: "Animation micro professionnelle", text: "Présentation, annonces et relances : je fais participer vos équipes et je tiens le rythme de la journée." },
				{ icon: IPhone, title: "Application Dydy Quiz", text: "Quiz en équipes et sondages en direct depuis les smartphones, classement sur grand écran : rien à installer.", to: "/dydy-quiz" },
				{ icon: ICamera, title: "Contenus pour votre communication", text: "Selon l’événement, quelques photos ou vidéos réutilisables pour votre communication interne ou vos réseaux." },
			]}
			gallery="entreprises"
			related={relatedTo(PATH)}
			faq={[
				{ q: "Le quiz peut-il porter sur notre entreprise ?", a: "Oui : des manches sur votre entreprise, votre secteur ou votre actualité rendent le jeu encore plus fédérateur." },
				{ q: "Avez-vous déjà animé des événements d’entreprise ?", a: "Oui, régulièrement : quiz en équipes, soirées d’entreprise, karaokés entre collègues… Par exemple une journée VitalSport chez Decathlon Escalquens, en animation micro avec présentation de démonstrations." },
				{ q: "Pouvez-vous intervenir dans nos locaux ?", a: "Oui, dans vos locaux ou dans le lieu de votre séminaire, à Toulouse et partout en Occitanie." },
				{ q: "Établissez-vous des devis pour les entreprises ?", a: "Oui, contactez-moi avec la date, le lieu, le nombre de participants et le format souhaité : je vous réponds sous 24 h avec un devis tout compris." },
			]}
		/>
	);
}
