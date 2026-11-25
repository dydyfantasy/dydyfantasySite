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
import {
	SpeakerWaveIcon as ISpeaker,
	CameraIcon as ICamera,
	LightBulbIcon as IBulb,
	UserGroupIcon as IGroup,
} from "@heroicons/react/24/outline";
import SurMesureScene from "../../components/scenes/SurMesureScene";
import ServicePage from "../../components/led/ServicePage";
import { relatedTo } from "../../data/navigation";
import { photoFor } from "../../data/evenementsPhotos";

const PATH = "/prestations/sur-mesure";

// Contenu à enrichir avec des exemples réels de soirées sur mesure.
export default function SurMesure() {
	return (
		<ServicePage
			path={PATH}
			subject={{ votre: "votre animation sur mesure", sur: "l’animation sur mesure" }}
			gallery={{ words: ["soiree-speciale", "fete", "chenille"], label: "fêtes de village et soirées spéciales" }}
			name="Animation sur mesure"
			photo={photoFor("sur-mesure")}
			// Avis Google cité mot pour mot (sélection de Dydy, 25/11/2026)
			testimonial={{
				label: "Avis client",
				title: "Une soirée à son image,",
				accent: "racontée par l’organisatrice",
				highlight: "C’est bien plus qu’un simple DJ : c’est un véritable animateur qui sait capter l’énergie de la salle.",
				quote: [
					"Une soirée mémorable, incroyable et formidable grâce à Dydy Fantasy !",
					"On a fait appel à lui pour le Noël de nos bénévoles samedi dernier et c'était le feu !!!",
					"C’est bien plus qu’un simple DJ : c’est un véritable animateur qui sait capter l’énergie de la salle. Le blind test était ultra bien ficelé et a mis une ambiance de dingue dès le début, il a enchaîné sur un karaoké déjanté, tout le monde se battait pour chanter, même ceux qui n'aiment pas chanter ! Puis il a enchaîné sur un set DJ festif qui a plu à toute la salle, toutes générations confondues !",
					"Côté animation, rien à redire, tout était fluide et pro. Une réactivité et une communication aux petits oignons pour préparer le jour J en événement à votre image.",
					"Si vous cherchez quelqu’un pour transformer votre fête en moment inoubliable, foncez les yeux fermés !",
					"Encore MERCI Dydy Fantasy !",
				],
				author: "Esther G.",
				rating: 5,
				source: "Avis Google",
			}}
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
			intro="Loto revisité, soirée casino, murder party, escape game, jeux d’équipe ou soirée à thème : je construis un format adapté à votre lieu, à votre public et à votre objectif. Ingénieur le jour, je développe moi-même mon application et j’aime créer des mécaniques de jeu originales."
			color="var(--gold)"
			// Mise en scène propre à la page (points et formats), à la place des listes du modèle
			scene={SurMesureScene}
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
				{ icon: TicketIcon, title: "Soirée casino", text: "L’ambiance d’un casino le temps d’une soirée, adaptée à votre lieu et à vos invités." },
				{ icon: PuzzlePieceIcon, title: "Murder party & escape game", text: "Une enquête ou des énigmes à résoudre en équipes pendant la soirée." },
				{ icon: UserGroupIcon, title: "Jeux d’équipe", text: "Défis, manches et classement en direct pour créer de l’émulation." },
				{ icon: SparklesIcon, title: "Soirée à thème", text: "Années 80, cinéma, séries… un univers complet, de la musique aux questions." },
				{ icon: HeartIcon, title: "Soirée célibataires", text: "Avec la Match Machine de Dydy Quiz, un algorithme de rencontre qui crée des duos entre participants, puis un DJ set pour faire danser tout le monde." },
			]}
			// « Ce que je peux apporter » propre à cette page (contenu unique pour le SEO)
			included={[
				{ icon: IBulb, title: "Des jeux créés pour vous", text: "Ingénieur le jour, je développe moi-même mon application, Dydy Quiz, et j’adapte ses mécaniques à votre concept : quiz, votes, défis photo, Match Machine…", to: "/dydy-quiz" },
				{ icon: IGroup, title: "Un maître du jeu", text: "J’explique les règles, je fais avancer l’intrigue et je garde le rythme du début à la fin." },
				{ icon: ISpeaker, title: "Ambiance complète", text: "Sono, lumières, lyres, machine à fumée et écran pour plonger vos invités dans l’univers de la soirée." },
				{ icon: ICamera, title: "Contenus réseaux", text: "Selon la soirée, quelques photos ou vidéos réutilisables pour votre communication." },
			]}
			related={relatedTo(PATH)}
			faq={[
				{ q: "Comment se construit une animation sur mesure ?", a: "On échange sur votre événement, votre public et votre objectif ; je vous propose ensuite un format et on l’ajuste ensemble avant le jour J." },
				{ q: "Combien de temps faut-il pour la préparer ?", a: "Cela dépend du format : contactez-moi le plus tôt possible avec votre date, je vous dirai ce qui est faisable." },
				{ q: "Où intervenez-vous ?", a: "Basé à Fonsorbes, à l’ouest de Toulouse, j’interviens à Toulouse et partout en Occitanie : Haute-Garonne, Gers, Tarn…" },
			]}
		/>
	);
}
