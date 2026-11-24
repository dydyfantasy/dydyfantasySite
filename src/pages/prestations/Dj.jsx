import {
	MusicalNoteIcon,
	HeartIcon,
	BriefcaseIcon,
	CakeIcon,
	BuildingStorefrontIcon,
	AdjustmentsHorizontalIcon,
	ClockIcon,
	MicrophoneIcon,
} from "@heroicons/react/24/outline";
import {
	SpeakerWaveIcon as ISpeaker,
	MicrophoneIcon as IMic,
	DevicePhoneMobileIcon as IPhone,
	CameraIcon as ICamera,
	MusicalNoteIcon as INote,
	HomeIcon as IHome,
	LightBulbIcon as IBulb,
	UserGroupIcon as IGroup,
} from "@heroicons/react/24/outline";
import ServicePage from "../../components/led/ServicePage";
import { relatedTo } from "../../data/navigation";

const PATH = "/prestations/dj";

// Page prioritaire SEO (« dj gers », « dj mariage toulouse »). Contenu à enrichir :
// styles musicaux, matériel exact, photos de soirées dansantes.
export default function Dj() {
	return (
		<ServicePage
			path={PATH}
			name="DJ"
			seo={{
				title: "DJ mariage et soirée à Toulouse & Gers | Dydy Fantasy",
				description:
					"DJ animateur à Toulouse, en Haute-Garonne et dans le Gers : mariages, anniversaires, soirées d’entreprise et bars. Musique adaptée, devis sous 24 h.",
			}}
			breadcrumb={[{ name: "Prestations", to: "/prestations" }]}
			title={
				<>
					<span className="text-[var(--cyan)]">DJ</span> à Toulouse et dans le{" "}
					<span className="text-[var(--pink)]">Gers</span>
				</>
			}
			intro="DJ généraliste, des années 80 aux tubes d’aujourd’hui, et électro : une sélection musicale adaptée à votre public et aux temps forts de votre événement, pour faire monter l’énergie au bon moment. Et parce que je suis aussi animateur, je sais embarquer la salle au micro quand il le faut."
			color="var(--cyan)"
			pointsTitle={{ label: "Pour qui ?", title: "Un DJ pour faire danser", accent: "tout le monde" }}
			points={[
				{ icon: HeartIcon, color: "var(--pink)", title: "Mariages", text: "De l’entrée des mariés à la dernière danse, une ambiance qui suit le rythme de votre soirée." },
				{ icon: CakeIcon, color: "var(--gold)", title: "Anniversaires & soirées privées", text: "Les tubes que vos invités attendent, adaptés à toutes les générations." },
				{ icon: BriefcaseIcon, color: "var(--cyan)", title: "Soirées d’entreprise", text: "Une soirée dansante pour clôturer un séminaire ou fêter une réussite d’équipe." },
				{ icon: BuildingStorefrontIcon, color: "#7cff6b", title: "Bars & événements locaux", text: "Comités des fêtes, bars et associations : une soirée qui fait venir du monde." },
			]}
			formatsTitle={{ label: "Mon style", title: "Plus qu’une", accent: "playlist", text: "Ce qui fait la différence le jour J." }}
			formats={[
				{ icon: AdjustmentsHorizontalIcon, title: "Une musique adaptée à votre public", text: "On construit ensemble la sélection : vos incontournables, vos interdits et les styles qui font danser vos invités." },
				{ icon: ClockIcon, title: "Les temps forts au bon moment", text: "Ambiance douce au repas, montée en puissance ensuite : la musique accompagne chaque moment de l’événement." },
				{ icon: MicrophoneIcon, title: "Un DJ qui anime", text: "Annonces, relances et interaction avec le public : je ne reste pas caché derrière les platines." },
				{ icon: MusicalNoteIcon, title: "À combiner avec un jeu", text: "Blind test ou karaoké pour lancer la soirée, puis DJ set pour faire danser jusqu’au bout." },
			]}
			// « Ce que je peux apporter » propre à cette page (contenu unique pour le SEO)
			included={[
				{ icon: INote, title: "Tous les styles", text: "Années 80, 90, 2000, tubes actuels et électro : une sélection généraliste qui fait danser toutes les générations." },
				{ icon: ISpeaker, title: "Son et lumières pro", text: "Sono, lyres, lumières et machine à fumée pour transformer n’importe quelle salle en piste de danse." },
				{ icon: ICamera, title: "Contenus réseaux", text: "Selon la soirée, quelques photos ou vidéos réutilisables pour votre communication." },
			]}
			related={relatedTo(PATH)}
			faq={[
				{ q: "Quels styles de musique passez-vous ?", a: "Généraliste (années 80, 90, 2000, tubes actuels) et électro, avec une sélection adaptée à votre public : on en parle ensemble avant l’événement pour lister vos incontournables et ce que vous ne voulez pas entendre." },
				{ q: "Venez-vous avec le matériel ?", a: "Oui, toujours : sono, lumières, lyres, machine à fumée, micros, écran et vidéoprojecteur. Mes devis sont tout compris." },
				{ q: "Intervenez-vous dans le Gers ?", a: "Oui. Basé à Fonsorbes, à l’ouest de Toulouse, j’interviens à Toulouse et partout en Occitanie : Haute-Garonne, Gers, Tarn…" },
				{ q: "Peut-on ajouter un blind test ou un karaoké ?", a: "Oui, c’est ma spécialité : un jeu pour lancer la soirée, puis le DJ set pour faire danser tout le monde." },
			]}
		/>
	);
}
