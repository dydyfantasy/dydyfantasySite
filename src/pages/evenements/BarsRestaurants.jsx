import {
	CalendarDaysIcon,
	MegaphoneIcon,
	UsersIcon,
	ArrowTrendingUpIcon,
	TrophyIcon,
	MicrophoneIcon,
	MusicalNoteIcon,
	SparklesIcon,
} from "@heroicons/react/24/outline";
import ServicePage from "../../components/led/ServicePage";
import { relatedTo } from "../../data/navigation";
import { photoFor } from "../../data/evenementsPhotos";

const PATH = "/evenements/bars-restaurants";

// Cible B2B : gérants de bars / restaurants. Références réelles : La Ville en Rose (Colomiers),
// Taverne Heidelberg (Blagnac), Le Cul de Bouteille (Aussonne), La Table Ronde (Tarn)…
export default function BarsRestaurants() {
	return (
		<ServicePage
			path={PATH}
			name="Bars & restaurants"
			seo={{
				title: "Blind test & karaoké pour bars à Toulouse | Dydy Fantasy",
				description:
					"Animateur de soirées blind test, quiz et karaoké pour bars et restaurants autour de Toulouse. Des soirées régulières qui remplissent votre établissement.",
			}}
			breadcrumb={[]}
			title={
				<>
					Soirées <span className="text-[#7cff6b]">blind test & karaoké</span> pour bars et restaurants
				</>
			}
			intro="Des soirées régulières ou ponctuelles qui remplissent votre salle en semaine et fidélisent vos clients. C’est le cœur de mon activité : je suis animateur résident toute l’année dans 4 bars autour de Toulouse, avec 12 à 15 soirées par mois."
			photo={photoFor("bars")}
			color="#7cff6b"
			pointsTitle={{ label: "Pour votre établissement", title: "Une soirée qui", accent: "fait venir du monde" }}
			points={[
				{ icon: ArrowTrendingUpIcon, color: "#7cff6b", title: "Remplir les soirs calmes", text: "Un rendez-vous ludique qui donne une bonne raison de sortir en semaine." },
				{ icon: CalendarDaysIcon, color: "var(--cyan)", title: "Des soirées régulières", text: "Une date fixe chaque semaine ou chaque mois : vos clients prennent l’habitude de revenir." },
				{ icon: MegaphoneIcon, color: "var(--pink)", title: "Une visibilité en plus", text: "Vos soirées apparaissent dans mon agenda public et sur mes réseaux." },
				{ icon: UsersIcon, color: "var(--gold)", title: "Une clientèle fidèle", text: "Les équipes reviennent pour défendre leur place au classement." },
			]}
			formatsTitle={{ label: "Les formats", title: "Ce qui marche", accent: "en bar" }}
			formats={[
				{ icon: TrophyIcon, title: "Blind’Quiz + Karaoké", text: "Le format star : blind test et quiz pour s’échauffer, puis karaoké géant." },
				{ icon: MusicalNoteIcon, title: "Blind test", text: "Années 80/90/2000, chansons françaises, films et séries : des manches rapides et rythmées." },
				{ icon: MicrophoneIcon, title: "Karaoké", text: "Micros ouverts, duos et chansons cultes pour une ambiance festive." },
				{ icon: SparklesIcon, title: "Soirées à thème", text: "Soirée spéciale, événement saisonnier ou concept original pour votre établissement." },
			]}
			related={relatedTo(PATH)}
			faq={[
				{ q: "Dans quels établissements animez-vous déjà ?", a: "Je suis animateur résident toute l’année dans 4 établissements : La Ville en Rose à Colomiers, la Taverne Heidelberg à Blagnac, le Biergarten by Saint-Orens à Saint-Orens-de-Gameville et La Table Ronde à Saint-Lieux-lès-Lavaur, dans le Tarn. J’anime aussi des soirées ponctuelles ailleurs, par exemple au Cul de Bouteille à Aussonne." },
				{ q: "Faut-il du matériel sur place ?", a: "Non, j’apporte tout : sono, lumières, machine à fumée, micros, écran et vidéoprojecteur. Mes devis sont tout compris." },
				{ q: "Proposez-vous des soirées régulières ?", a: "Oui, c’est le format idéal pour fidéliser votre clientèle : hebdomadaire, mensuel ou ponctuel selon vos besoins." },
			]}
		/>
	);
}
