import {
	PuzzlePieceIcon,
	SparklesIcon,
	TicketIcon,
	UserGroupIcon,
	HeartIcon,
	BriefcaseIcon,
	CakeIcon,
	FlagIcon,
} from "@heroicons/react/24/outline";
import ServicePage from "../../components/led/ServicePage";
import { relatedTo } from "../../data/navigation";

const PATH = "/prestations/sur-mesure";

// Contenu à enrichir avec des exemples réels de soirées sur mesure.
export default function SurMesure() {
	return (
		<ServicePage
			path={PATH}
			name="Animation sur mesure"
			seo={{
				title: "Animation sur mesure à Toulouse | Dydy Fantasy",
				description:
					"Animation sur mesure à Toulouse : loto revisité, murder party, jeux d’équipe, soirée à thème. Un format créé pour votre lieu, votre public et votre objectif.",
			}}
			breadcrumb={[{ name: "Prestations", to: "/prestations" }]}
			title={
				<>
					Animation <span className="text-[var(--gold)]">sur mesure</span> à Toulouse
				</>
			}
			intro="Loto revisité, murder party, escape game, jeux d’équipe ou soirée à thème : je construis un format adapté à votre lieu, à votre public et à votre objectif. Ingénieur développeur le jour, j’aime créer des mécaniques de jeu originales."
			color="var(--gold)"
			pointsTitle={{ label: "Pour qui ?", title: "Une idée ? On la", accent: "met en scène" }}
			points={[
				{ icon: HeartIcon, color: "var(--pink)", title: "Mariages", text: "Un jeu autour de votre histoire pour impliquer tous vos invités." },
				{ icon: BriefcaseIcon, color: "var(--cyan)", title: "Entreprises", text: "Un format sur votre métier, vos valeurs ou votre actualité pour fédérer les équipes." },
				{ icon: CakeIcon, color: "var(--gold)", title: "Anniversaires", text: "Une soirée à thème autour de la personne fêtée." },
				{ icon: FlagIcon, color: "#7cff6b", title: "Associations & comités des fêtes", text: "Des animations pour tous les âges lors de vos événements locaux." },
			]}
			formatsTitle={{ label: "Exemples", title: "Quelques", accent: "idées", text: "À mélanger, à adapter, ou à inventer ensemble." }}
			formats={[
				{ icon: TicketIcon, title: "Loto revisité", text: "Le loto classique, en version animée et rythmée, avec des surprises entre les tirages." },
				{ icon: PuzzlePieceIcon, title: "Murder party & escape game", text: "Une enquête ou des énigmes à résoudre en équipes pendant la soirée." },
				{ icon: UserGroupIcon, title: "Jeux d’équipe", text: "Défis, manches et classement en direct pour créer de l’émulation." },
				{ icon: SparklesIcon, title: "Soirée à thème", text: "Années 80, cinéma, séries… un univers complet, de la musique aux questions." },
				{ icon: HeartIcon, title: "Soirée célibataires", text: "Avec la Match Machine de Dydy Quiz, un algorithme de rencontre qui crée des duos entre participants, puis un DJ set pour faire danser tout le monde." },
			]}
			related={relatedTo(PATH)}
			faq={[
				{ q: "Comment se construit une animation sur mesure ?", a: "On échange sur votre événement, votre public et votre objectif ; je vous propose ensuite un format et on l’ajuste ensemble avant le jour J." },
				{ q: "Combien de temps faut-il pour la préparer ?", a: "Cela dépend du format : contactez-moi le plus tôt possible avec votre date, je vous dirai ce qui est faisable." },
				{ q: "Où intervenez-vous ?", a: "Basé à Fonsorbes, à l’ouest de Toulouse, j’interviens à Toulouse, en Haute-Garonne, dans le Gers et dans le Tarn." },
			]}
		/>
	);
}
