const OurApproach = () => {
	const steps = [
		{
			title: "Premier contact - Découverte et échange",
			description:
				"🔹 Rencontre et échange pour comprendre vos besoins, vos objectifs et le public visé. \n🔹 Identification des contraintes, des envies et des idées pour l'évènement. \n🔹 Discussion sur le format de l'animation souhaitée : ponctuelle ou régulière.",
			icon: "👋",
			color: "#F472B6", // rose-400
		},
		{
			title: "Proposition et personnalisation",
			description:
				"🔹 Élaboration d'une proposition sur mesure : \n       • Prestation à l'unité \n       • Pack (lot de prestations) \n       • Abonnement (engagement sur plusieurs mois) \n🔹 Ajustement selon vos retours pour créer un évènement à votre image.",
			icon: "📝",
			color: "#fcf832ff", // rose-400
		},
		{
			title: "Préparation et organisation",
			description:
				"🔹 Planification du déroulé : animations, timing, matériel nécessaire. \n🔹 Étroite collaboration entre les parties prenantes pour assurer le bon déroulé du jour J. \n🔹 Vérification des besoins techniques (audio / vidéo / matériel spécifique). \n🔹 Préparation d'une affiche publicitaire et communication sur les réseaux sociaux.",
			icon: "🗂️",
			color: "#38BDF8", // rose-400
		},
		{
			title: "Animation de l'évènement",
			description:
				"🔹 Mise en place. \n🔹 Gestion technique. \n🔹 Captation de photos et vidéos.",
			icon: "🎉",
			color: "#A3E635", // lime-400
		},
		{
			title: "Débrief post-prestation",
			description:
				"Parce que l'amélioration continue fait partie de nos points forts, \nnous écoutons vos retours et adaptons nos prestations afin de mieux répondre à vos attentes.",
			icon: "✅",
			color: "#f89a20ff", // sky-400
		},
	];

	return (
		<section className="min-h-screen py-16 bg-gray-900 text-white">
			<div className="max-w-4xl mx-auto px-4">
				<h1 className="title-site title-page text-4xl font-bold mb-12 text-neon-pink text-center">
					Notre approche
				</h1>

				<div className="relative flex flex-col gap-12">
					{/* Ligne verticale */}
					<div className="absolute left-5 top-0 bottom-0 w-2 bg-gray-700"></div>

					{steps.map((step, index) => (
						<div key={index} className="relative pl-12">
							{/* Cercle */}
							<div
								className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full pointer-events-none"
								style={{
									backgroundColor: step.color,
									boxShadow: `0 0 10px ${step.color}`,
								}}></div>

							{/* Card */}
							<div className="flex flex-col md:flex-row items-start gap-4 p-4 transition duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] cursor-pointer">
								<div className="text-4xl flex-shrink-0">{step.icon}</div>
								<div className="min-w-0">
									<h3
										className="text-2xl font-bold mb-2"
										style={{ color: step.color }}>
										{step.title}
									</h3>
									<p className="text-gray-200 whitespace-pre-wrap break-words">
										{step.description}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurApproach;
