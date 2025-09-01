import Card from "./Card";
import dydyImage from "../assets/dydy_fantasy_degrade.svg";
import NeonArcadeText from "./NeonArcadeText";
const Hero = () => {
	const question = "Vous recherchez ?";
	const cards = [
		{
			color: "red",
			front: "A. Un animateur",
			back: "Une animation ponctuelle ou régulière pour un moment mémorable, avec une touche de fantaisie",
		},
		{
			color: "green",
			front: "B. Un organisateur",
			back: "Un évènement organisé sur mesure, à votre image",
		},
		{
			color: "blue",
			front: "C. Une interactivité",
			back: "Une plateforme interactive personnalisée pour animer vos soirées",
		},
		{
			color: "yellow",
			front: "D. Des évènements\n dynamiques",
			back: "Des activités variées selon vos besoins et adaptées à tout public",
		},
	];

	return (
		<section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-gray-800 pt-8">
			<img
				src={dydyImage}
				alt="DYDY FANTASY"
				className="absolute w-120 h-auto opacity-25"
				fetchpriority="high"
			/>
			<NeonArcadeText text={"DYDY FANTASY"} />
			<h1 className="sr-only"> Dydy fantasy</h1>

			{/* Phrase d'accroche */}
			<h2 className="relative soustitle text-center">
				Bien plus qu'un animateur,{" "}
			</h2>
			<h2 className="relative soustitle mb-5 text-center">
				une expérience mémorable à Toulouse
			</h2>

			{/* Question */}
			<h2 className="relative text-3xl md:text-4xl font-bold mb-8 text-center text-white">
				{question}
			</h2>

			{/* Cartes */}
			<div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 md:gap-12 mb-6 md:mb-0 px-4 md:px-0">
				{cards.map((card, index) => (
					<Card
						key={index}
						color={card.color}
						front={card.front}
						back={card.back}
					/>
				))}
			</div>
		</section>
	);
};

export default Hero;
