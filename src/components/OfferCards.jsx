const OfferCards = () => {
	const cards = [
		{
			title: "Un quiz fun et interactif animé par Dydy Fantasy !",
			description:
				"Faites participer votre public grâce à une animation originale où chacun devient acteur. Idéal pour briser la glace et créer une ambiance inoubliable lors de vos soirées, mariages ou événements d’entreprise à Toulouse. Accessible via une plateforme sur téléphone ou avec des buzzers, sans limite de participants.",
			icon: "🎤",
			color: "red-500",
		},
		{
			title: "Un blind test musical 100 % digital, fluide et fun",
			description:
				"L’animation s’adapte à votre public et à tous les types d’événements : soirée d’entreprise, anniversaire, mariage ou afterwork à Toulouse. Une expérience musicale conviviale et pleine d’énergie !",
			icon: "🎶",
			color: "blue-500",
		},
		{
			title: "Jeux participatifs",
			description:
				"Du loto revisité au karaoké endiablé en passant par des soirées à thème sur mesure, chaque animation est pensée pour rassembler et faire rire votre public. L’idéal pour vos soirées à thème, fêtes ou événements d’entreprise.",
			icon: "🏆",
			color: "green-500",
		},
		{
			title:
				"Une animation personnalisée pour vos soirées à Toulouse et ses environs",
			description:
				"Mariage, entreprise, anniversaire ou fête entre amis : chaque événement est unique, et Dydy Fantasy crée une expérience à votre image. Quiz, blind test, karaoké ou activité sur mesure… tout est modulable selon vos envies !",
			icon: "✨",
			color: "yellow-400",
		},
	];
	return (
		<section className="pt-16 bg-gray-900">
			<div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
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
