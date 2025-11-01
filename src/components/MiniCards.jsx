import {
	UserCircleIcon,
	PhoneIcon,
	SparklesIcon,
	ArrowsPointingInIcon,
} from "@heroicons/react/24/outline";
import nosPrestation from "../assets/NosPrestation.webp";
import quiSuisJe from "../assets/QuiSuisje.webp";
import contactUs from "../assets/contactUs.webp";
import notreApproche from "../assets/NotreApproche.webp";

const cards = [
	{
		title: "Qui suis-je ?",
		subtitle: "Apprenez à connaître votre animateur à Toulouse et ses environs",
		icon: UserCircleIcon,
		background: quiSuisJe,
		link: "/qui-suis-je",
	},
	{
		title: "Nos prestations",
		subtitle: "Animations, quiz et soirées sur mesure pour tous vos événements",
		icon: SparklesIcon,
		background: nosPrestation,
		link: "/prestations",
	},
	{
		title: "Notre approche",
		subtitle: "Une méthode d’animation conviviale et personnalisée",
		icon: ArrowsPointingInIcon,
		background: notreApproche,
		link: "/notre-approche",
	},
	{
		title: "Contact",
		subtitle: "Demandez un devis pour votre prochaine animation à Toulouse",
		icon: PhoneIcon,
		background: contactUs,
		link: "/contact",
	},
];

const MiniCards = () => {
	return (
		<section className="py-16 bg-gray-900 text-white">
			<div className="flex flex-wrap justify-center text-center">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
					{cards.map((card, index) => {
						const Icon = card.icon; // récupère l'icône
						return (
							<a
								key={index}
								href={card.link}
								className={`relative flex flex-col items-center justify-center p-6 rounded-xl shadow-lg text-white bg-black-800 hover:scale-105 transition-transform duration-300 cursor-pointer `}>
								<img
									src={card.background}
									alt="image carte animation, prestations, qui suis-je, notre approche, contact"
									className="absolute inset-0 rounded-xl w-full h-full object-cover opacity-30"
									loading="lazy"
								/>
								{/* Icon LED-style */}
								<Icon className="w-16 h-16 text-white/50 drop-shadow-[0_0_15px_#ffffff] absolute top-1 right-1 select-none" />

								{/* Title */}
								<h3 className="text-xl font-bold mb-2 z-10">{card.title}</h3>

								{/* Subtitle */}
								<p className="text-sm text-white/90 text-center mb-4 z-10">
									{card.subtitle}
								</p>

								{/* Button */}
								<span className="mt-auto px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm hover:bg-white/40 z-10">
									En savoir plus →
								</span>
							</a>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default MiniCards;
