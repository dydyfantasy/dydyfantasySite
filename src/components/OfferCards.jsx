const OfferCards = () => {
	const cards = [
		{
			title: "Quiz interactif",
			description:
				"Un quiz fun et interactif où le public devient acteur ! Parfait pour briser la glace et créer une ambiance inoubliable.\nAccessible via une plateforme sur téléphone ou avec des buzzers, sans restriction du nombre de participants.",
			icon: "🎤",
			color: "red-500",
		},
		{
			title: "Blind test musical",
			description:
				"Digital, fluide et fun, avec un classement en temps réel, adapté à votre public.",
			icon: "🎶",
			color: "blue-500",
		},
		{
			title: "Jeux participatifs",
			description:
				"Des mini-jeux dynamiques, allant du loto à des karaokés endiablés, selon vos envies.",
			icon: "🏆",
			color: "green-500",
		},
	];
	return (
		<section className="pt-16 bg-gray-900">
			<div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
				{cards.map((card, index) => (
					<div
						key={index}
						className={`border-2 border-${card.color} rounded-2xl p-6 bg-gray-900 text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition duration-300 text-center`}>
						<div className="text-5xl mb-4">{card.icon}</div>
						<h3 className={`text-2xl font-bold mb-5`}>{card.title}</h3>
						<p className="text-gray-200  whitespace-pre-line">
							{card.description}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default OfferCards;
