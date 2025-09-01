import "../css/Prestations.css";
import PresentationCard from "../components/PresentationCard";
import { CheckIcon } from "@heroicons/react/24/outline";
import ZoneMap from "./ZoneMap";
const Prestations = () => {
	const cards = [
		{
			title: "Types de prestations",
			description: "Nous proposons divers types d'évènements : ",
			icon: "🎉",
			items: [
				{
					text: "Quiz à thème",
					icon: <CheckIcon className="w-5 h-5 flex-shrink-0 text-purple-400" />,
				},
				{
					text: "Blind tests",
					icon: <CheckIcon className="w-5 h-5 flex-shrink-0 text-purple-400" />,
				},
				{
					text: "Jeux interactifs",
					icon: <CheckIcon className="w-5 h-5 flex-shrink-0 text-purple-400" />,
				},
				{
					text: "Karaoké",
					icon: <CheckIcon className="w-5 h-5 flex-shrink-0 text-purple-400" />,
				},
				{
					text: "Soirées à thème",
					icon: <CheckIcon className="w-5 h-5 flex-shrink-0 text-purple-400" />,
				},
				{
					text: "Animations sur mesure",
					icon: <CheckIcon className="w-5 h-5 flex-shrink-0 text-purple-400" />,
				},
			],
			color: "red-500",
		},
		{
			title: "Public visé",
			description:
				"Nous nous adaptons à tous types de clientèle et à tous vos besoins :",
			icon: "📣",
			items: [
				{
					text: "Bars & Pubs",
					icon: <CheckIcon className="w-5 h-5 flex-shrink-0 text-purple-400" />,
				},
				{
					text: "Restaurants & Brasseries",
					icon: <CheckIcon className="w-5 h-5 flex-shrink-0 text-purple-400" />,
				},
				{
					text: "Guinguettes",
					icon: <CheckIcon className="w-5 h-5 flex-shrink-0 text-purple-400" />,
				},
				{
					text: "Soirées privées (mariage, EVG/EVJF, anniversaire, etc.)",
					icon: <CheckIcon className="w-5 h-5 flex-shrink-0 text-purple-400" />,
				},
				{
					text: "Evènements d'entreprise (soirée de fin d'année, afterwork, team building, pot d'arrivée, etc.)",
					icon: <CheckIcon className="w-5 h-5 flex-shrink-0 text-purple-400" />,
				},
				{
					text: "Centres culturels & Associations",
					icon: <CheckIcon className="w-5 h-5 flex-shrink-0 text-purple-400" />,
				},
			],
			color: "blue-500",
		},
		{
			title: "Format",
			description:
				"Nous utilisons une plateforme développée sur mesure, accessible sur téléphone et sans limite du nombre d'utilisateurs.",
			icon: "🎮",
			items: [],
			color: "green-500",
		},
		{
			title: "Bonus",
			description:
				"Nous vous mettons en avant sur nos réseaux sociaux et vous fournissons des contenus que vous pouvez réutiliser pour attirer de nouveaux clients :",
			icon: "🌟",
			items: [
				{
					text: "Visibilité de votre établissement ainsi que de l'évènement sur les réseaux sociaux",
					icon: <CheckIcon className="w-5 h-5 flex-shrink-0 text-purple-400" />,
				},
				{
					text: "Captation de photos et de vidéos pendant la soirée",
					icon: <CheckIcon className="w-5 h-5 flex-shrink-0 text-purple-400" />,
				},
				{
					text: "100% clé en main",
					icon: <CheckIcon className="w-5 h-5 flex-shrink-0 text-purple-400" />,
				},
				{
					text: "Aucun matériel à fournir, nous mettons à disposition du matériel professionnel (micros sans fil, vidéoprojecteur, écran, ordinateur, système son)",
					icon: <CheckIcon className="w-5 h-5 flex-shrink-0 text-purple-400" />,
				},
				{
					text: "Flexible et personnalisable",
					icon: <CheckIcon className="w-5 h-5 flex-shrink-0 text-purple-400" />,
				},
			],
			color: "yellow-400",
		},
	];
	return (
		<section className="min-h-screen py-16 bg-gray-900 text-white">
			<div className="max-w-5xl mx-auto flex flex-col">
				<h1 className="title-site title-page font-bold text-center">
					Nos prestations
				</h1>
				<PresentationCard cards={cards} />
				<ZoneMap />
			</div>
		</section>
	);
};

export default Prestations;
