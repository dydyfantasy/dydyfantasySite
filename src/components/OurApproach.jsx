const OurApproach = () => {
	const steps = [
		{
			title: "Premier contact – Découverte et échange",
			description: `🔹 Rencontre pour comprendre vos besoins, le public visé et vos envies. 
🔹 Identification des contraintes et des idées pour créer votre animation parfaite. 
🔹 Discussion sur le format : soirée ponctuelle ou animation récurrente.`,
			icon: "👋",
			color: "#F472B6",
		},
		{
			title: "Proposition et personnalisation",
			description: `🔹 Élaboration d'une proposition sur mesure pour votre événement : 
• Prestation à l'unité 
• Pack d'animations 
• Abonnement pour plusieurs soirées
🔹 Ajustement selon vos retours pour une soirée sur mesure à Toulouse et ses environs.`,
			icon: "📝",
			color: "#fcf832ff",
		},
		{
			title: "Préparation et organisation",
			description: `🔹 Planification complète du déroulé : animations, timing et matériel nécessaire. 
🔹 Coordination avec vos équipes pour garantir une soirée fluide et mémorable. 
🔹 Vérification technique : audio, vidéo et matériel spécifique. 
🔹 Création de supports visuels et communication sur les réseaux sociaux.`,
			icon: "🗂️",
			color: "#38BDF8",
		},
		{
			title: "Animation de l'événement",
			description: `🔹 Mise en place et gestion technique de l'animation.
🔹 Captation photos et vidéos pour immortaliser votre soirée.
🔹 Interaction avec le public pour créer une ambiance unique et conviviale.`,
			icon: "🎉",
			color: "#A3E635",
		},
		{
			title: "Débrief post-prestation",
			description: `🔹 Écoute de vos retours pour améliorer nos prestations.
🔹 Ajustements pour vos prochaines animations.
🔹 Toujours dans l'esprit de rendre chaque événement plus fun, mémorable et unique !`,
			icon: "✅",
			color: "#f89a20ff",
		},
	];

	return (
		<section className="min-h-screen py-16 bg-gray-900 text-white">
			<div className="max-w-4xl mx-auto px-4">
				<h1 className="title-site title-page text-4xl font-bold mb-12 text-neon-pink text-center">
					Notre approche – Dydy Fantasy, animateur d’événements à Toulouse
				</h1>
				<p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
					Découvrez notre méthode pour créer des animations sur mesure à
					Toulouse et ses environs. Chaque étape est pensée pour vous garantir
					une expérience mémorable, fun et conviviale !
				</p>
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
