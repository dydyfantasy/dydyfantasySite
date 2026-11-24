import {
	MicrophoneIcon,
	UsersIcon,
	FireIcon,
	MusicalNoteIcon,
	HeartIcon,
	BriefcaseIcon,
	CakeIcon,
	BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";
import ServicePage from "../../components/led/ServicePage";
import { relatedTo } from "../../data/navigation";

const PATH = "/prestations/karaoke";

// Contenu à enrichir (photos, chiffres réels, exemples de soirées).
export default function Karaoke() {
	return (
		<ServicePage
			path={PATH}
			name="Karaoké"
			seo={{
				title: "Animation karaoké à Toulouse | Dydy Fantasy",
				description:
					"Animateur karaoké à Toulouse : micros ouverts, duos, battles et chansons cultes pour mariages, anniversaires, entreprises et bars. Devis sous 24 h.",
			}}
			breadcrumb={[{ name: "Prestations", to: "/prestations" }]}
			title={
				<>
					Animation <span className="text-[var(--pink)]">karaoké</span> à Toulouse
				</>
			}
			intro="Micros ouverts, duos, battles et chansons cultes : une animation conviviale où tout le monde peut participer, des plus timides aux stars de la soirée. Je gère les passages, les relances au micro et l’ambiance."
			color="var(--pink)"
			pointsTitle={{ label: "Pour qui ?", title: "Un karaoké pour chaque", accent: "soirée" }}
			points={[
				{ icon: BuildingStorefrontIcon, color: "#7cff6b", title: "Bars & restaurants", text: "Des soirées karaoké qui font chanter toute la salle et donnent envie de revenir." },
				{ icon: HeartIcon, color: "var(--pink)", title: "Mariages", text: "Le moment où les invités se lâchent : duos des mariés, chansons cultes en chœur." },
				{ icon: BriefcaseIcon, color: "var(--cyan)", title: "Soirées d’entreprise", text: "Un format fédérateur pour finir un séminaire ou une soirée d’équipe dans la bonne humeur." },
				{ icon: CakeIcon, color: "var(--gold)", title: "Anniversaires", text: "La playlist de la personne fêtée, des défis et des souvenirs à partager." },
			]}
			formatsTitle={{ label: "Les formats", title: "Chanter, oui, mais", accent: "en mode show", text: "Des formats à mélanger selon votre public." }}
			formats={[
				{ icon: MicrophoneIcon, title: "Karaoké libre", text: "Chacun choisit sa chanson, je gère l’ordre des passages et les relances pour garder le rythme." },
				{ icon: UsersIcon, title: "Duos & chœurs", text: "Des chansons à chanter à plusieurs pour embarquer aussi ceux qui n’osent pas seuls." },
				{ icon: FireIcon, title: "Battles", text: "Équipe contre équipe : l’ambiance monte d’un cran." },
				{ icon: MusicalNoteIcon, title: "Blind’Quiz + Karaoké", text: "Le format star de mes soirées : on s’échauffe avec un blind quiz, puis karaoké géant." },
			]}
			related={relatedTo(PATH)}
			faq={[
				{ q: "Faut-il savoir chanter ?", a: "Pas du tout ! Le karaoké est fait pour s’amuser. Duos et chansons en chœur permettent à chacun de participer à son rythme." },
				{ q: "Quel matériel apportez-vous ?", a: "Tout : micros, sono, lumières, machine à fumée, et écran ou vidéoprojecteur pour afficher les paroles. Mes devis sont tout compris." },
				{ q: "Peut-on combiner avec un blind test ou un DJ ?", a: "Oui, c’est même le format le plus demandé : blind quiz pour lancer la soirée, karaoké, puis DJ pour danser." },
				{ q: "Où intervenez-vous ?", a: "Basé à Fonsorbes, à l’ouest de Toulouse, j’interviens à Toulouse et partout en Occitanie : Haute-Garonne, Gers, Tarn…" },
			]}
		/>
	);
}
