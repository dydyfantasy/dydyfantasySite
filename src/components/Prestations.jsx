import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
	ArrowRightIcon,
	CheckCircleIcon,
	ComputerDesktopIcon,
	EnvelopeIcon,
	MapPinIcon,
	MicrophoneIcon,
	MusicalNoteIcon,
	PlayCircleIcon,
	RocketLaunchIcon,
	SparklesIcon,
	StarIcon,
	UserGroupIcon,
	BuildingStorefrontIcon,
	HeartIcon,
	BriefcaseIcon,
	CameraIcon,
	SpeakerWaveIcon,
} from "@heroicons/react/24/outline";
import ZoneMap from "./ZoneMap";

const fadeUp = {
	hidden: {
		opacity: 0,
		y: 45,
		scale: 0.97,
		filter: "blur(10px)",
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		filter: "blur(0px)",
		transition: {
			duration: 0.65,
			ease: [0.16, 1, 0.3, 1],
		},
	},
};

const fadeLeft = {
	hidden: {
		opacity: 0,
		x: -55,
		filter: "blur(10px)",
	},
	visible: {
		opacity: 1,
		x: 0,
		filter: "blur(0px)",
		transition: {
			duration: 0.75,
			ease: [0.16, 1, 0.3, 1],
		},
	},
};

const fadeRight = {
	hidden: {
		opacity: 0,
		x: 55,
		filter: "blur(10px)",
	},
	visible: {
		opacity: 1,
		x: 0,
		filter: "blur(0px)",
		transition: {
			duration: 0.75,
			ease: [0.16, 1, 0.3, 1],
		},
	},
};

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const mainServices = [
	{
		title: "Blind tests musicaux",
		description:
			"Des manches dynamiques pour faire deviner les titres, les artistes, les années ou les génériques. Idéal pour créer une ambiance collective.",
		icon: MusicalNoteIcon,
		gradient: "from-pink-500 via-red-500 to-orange-400",
		tag: "Musique",
		items: [
			"Années 80/90/2000",
			"Chansons françaises",
			"Films & séries",
			"Manches rapides",
		],
	},
	{
		title: "Quiz interactifs",
		description:
			"Des quiz à thème accessibles depuis le téléphone des participants, avec scores, classements et animation en direct.",
		icon: ComputerDesktopIcon,
		gradient: "from-blue-500 via-cyan-400 to-emerald-400",
		tag: "Interactif",
		items: [
			"Quiz culture générale",
			"Quiz personnalisé",
			"Scores en direct",
			"Jeu sur téléphone",
		],
	},
	{
		title: "Karaokés",
		description:
			"Un moment convivial pour chanter, rire, encourager les participants et finir la soirée dans une ambiance détendue.",
		icon: MicrophoneIcon,
		gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
		tag: "Ambiance",
		items: [
			"Solo ou duo",
			"Chansons populaires",
			"Relances micro",
			"Ambiance participative",
		],
	},
	{
		title: "Animations sur mesure",
		description:
			"Je peux adapter le format à votre lieu, votre public et votre objectif : soirée à thème, jeu spécial, animation mariage ou événement pro.",
		icon: SparklesIcon,
		gradient: "from-yellow-300 via-orange-400 to-pink-500",
		tag: "Sur mesure",
		items: [
			"Soirées privées",
			"Mariages",
			"Bars & restaurants",
			"Événements professionnels",
		],
	},
];

const audiences = [
	{
		title: "Bars, pubs & restaurants",
		text: "Créer une soirée récurrente ou ponctuelle pour attirer du monde et fidéliser vos clients.",
		icon: BuildingStorefrontIcon,
	},
	{
		title: "Mariages & soirées privées",
		text: "Animer un moment convivial, faire participer les invités et créer des souvenirs.",
		icon: HeartIcon,
	},
	{
		title: "Entreprises & team building",
		text: "Proposer un format simple, fun et fédérateur pour vos équipes.",
		icon: BriefcaseIcon,
	},
	{
		title: "Associations & événements locaux",
		text: "Adapter l’animation à tous les âges et à différents types de publics.",
		icon: UserGroupIcon,
	},
];

const included = [
	{
		title: "Animation au micro",
		text: "Je gère le rythme, les relances, les explications et l’ambiance tout au long de la prestation.",
		icon: MicrophoneIcon,
	},
	{
		title: "Matériel possible",
		text: "Selon le format, je peux venir avec ordinateur, micros, système son, écran ou vidéoprojecteur.",
		icon: SpeakerWaveIcon,
	},
	{
		title: "Application Dydy Quiz",
		text: "Pour les formats interactifs, les participants peuvent jouer directement depuis leur téléphone.",
		icon: PlayCircleIcon,
	},
	{
		title: "Contenus réseaux",
		text: "Selon la soirée, je peux produire quelques photos ou vidéos réutilisables pour votre communication.",
		icon: CameraIcon,
	},
];

const steps = [
	{
		title: "On échange",
		text: "Vous me présentez le lieu, le public, le type d’événement et l’ambiance souhaitée.",
	},
	{
		title: "Je propose un format",
		text: "Je vous oriente vers le format le plus adapté : blind test, quiz, karaoké ou animation sur mesure.",
	},
	{
		title: "J’anime la soirée",
		text: "Le jour J, je m’occupe de l’animation, du rythme, de la participation et de l’ambiance.",
	},
];

const scrollingWords = [
	"Blind test",
	"Quiz interactif",
	"Karaoké",
	"Soirée privée",
	"Mariage",
	"Bar",
	"Restaurant",
	"Team building",
	"Toulouse",
	"Occitanie",
];

function FloatingBackground() {
	return (
		<div className="pointer-events-none absolute inset-0 overflow-hidden">
			<motion.div
				animate={{
					x: [0, 70, 0],
					y: [0, -40, 0],
					scale: [1, 1.15, 1],
				}}
				transition={{
					duration: 13,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="absolute left-[-150px] top-20 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl"
			/>

			<motion.div
				animate={{
					x: [0, -65, 0],
					y: [0, 45, 0],
					scale: [1, 1.18, 1],
				}}
				transition={{
					duration: 15,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="absolute right-[-160px] top-52 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
			/>

			<motion.div
				animate={{
					x: [0, 40, 0],
					y: [0, 35, 0],
					scale: [1, 1.12, 1],
				}}
				transition={{
					duration: 17,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="absolute bottom-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl"
			/>

			<div className="absolute inset-0 opacity-[0.06]">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							"radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1.5px)",
						backgroundSize: "22px 22px",
					}}
				/>
			</div>
		</div>
	);
}

function ScrollingBand() {
	const words = [...scrollingWords, ...scrollingWords];

	return (
		<div className="relative mt-16 overflow-hidden border-y border-white/10 bg-white/[0.035] py-4">
			<div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-gray-900 to-transparent" />
			<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-gray-900 to-transparent" />

			<motion.div
				animate={{ x: ["0%", "-50%"] }}
				transition={{
					duration: 24,
					repeat: Infinity,
					ease: "linear",
				}}
				className="flex w-max items-center gap-4">
				{words.map((word, index) => (
					<div key={`${word}-${index}`} className="flex items-center gap-4">
						<span className="text-sm font-black uppercase tracking-[0.22em] text-white/60">
							{word}
						</span>
						<span className="h-2 w-2 rounded-full bg-pink-400 shadow-[0_0_18px_rgba(244,114,182,0.9)]" />
					</div>
				))}
			</motion.div>
		</div>
	);
}

function ServiceCard({ service }) {
	const Icon = service.icon;

	return (
		<motion.article
			variants={fadeUp}
			whileHover={{ y: -8, scale: 1.02 }}
			transition={{
				type: "spring",
				stiffness: 260,
				damping: 22,
			}}
			className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-pink-300/30 hover:bg-white/[0.075]">
			<div
				className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${service.gradient}`}
			/>

			<div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-pink-500/15 blur-3xl transition duration-500 group-hover:scale-125" />

			<div className="relative z-10">
				<div className="flex items-start justify-between gap-4">
					<div
						className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg`}>
						<Icon className="h-7 w-7 text-white" />
					</div>

					<span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-white/60">
						{service.tag}
					</span>
				</div>

				<h2 className="mt-5 text-2xl font-black text-white">{service.title}</h2>

				<p className="mt-3 text-sm leading-relaxed text-gray-400">
					{service.description}
				</p>

				<ul className="mt-5 space-y-2">
					{service.items.map((item) => (
						<li
							key={item}
							className="flex items-start gap-2 text-sm text-gray-300">
							<CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-pink-300" />
							<span>{item}</span>
						</li>
					))}
				</ul>
			</div>
		</motion.article>
	);
}

const Prestations = () => {
	return (
		<section className="relative overflow-hidden bg-gray-900 text-white">
			<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />

			<FloatingBackground />

			<div className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:py-20">
				{/* HERO */}
				<div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
					<motion.div variants={fadeLeft} initial="hidden" animate="visible">
						<motion.div
							initial={{ opacity: 0, y: 20, scale: 0.9 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							transition={{
								duration: 0.55,
								delay: 0.1,
								ease: [0.16, 1, 0.3, 1],
							}}
							className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-pink-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-pink-200">
							<SparklesIcon className="h-4 w-4" />
							Mes prestations
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
							animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
							transition={{
								duration: 0.8,
								delay: 0.15,
								ease: [0.16, 1, 0.3, 1],
							}}
							className="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
							Des animations interactives pour faire vivre
							<span className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
								{" "}
								une vraie ambiance.
							</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 35 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.75,
								delay: 0.3,
								ease: [0.16, 1, 0.3, 1],
							}}
							className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
							Blind tests, quiz interactifs, karaokés et animations sur mesure :
							j’adapte chaque prestation à votre public, votre lieu et l’énergie
							que vous souhaitez créer.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.65,
								delay: 0.45,
								ease: [0.16, 1, 0.3, 1],
							}}
							className="mt-8 flex flex-col gap-3 sm:flex-row">
							<Link
								to="/contact"
								className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-700 px-6 py-3 text-sm font-black text-white shadow-[0_0_28px_rgba(236,72,153,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_42px_rgba(236,72,153,0.65)]">
								<EnvelopeIcon className="h-5 w-5" />
								Demander un devis
							</Link>

							<a
								href="#formats"
								className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.055] px-6 py-3 text-sm font-black text-white/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-pink-300/30 hover:bg-pink-500/10 hover:text-white">
								Voir les formats
								<ArrowRightIcon className="h-4 w-4" />
							</a>
						</motion.div>
					</motion.div>

					<motion.div
						variants={fadeRight}
						initial="hidden"
						animate="visible"
						className="relative">
						<div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl backdrop-blur-xl">
							<div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />

							<div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-pink-500/20 blur-3xl" />

							<motion.div
								animate={{
									y: [0, -8, 0],
									rotate: [0, 1, 0],
								}}
								transition={{
									duration: 5,
									repeat: Infinity,
									ease: "easeInOut",
								}}
								className="relative z-10 rounded-3xl border border-white/10 bg-black/25 p-6">
								<p className="text-xs font-black uppercase tracking-[0.22em] text-pink-200">
									Format clé en main
								</p>

								<h2 className="mt-3 text-3xl font-black text-white">
									Vous profitez, je gère l’animation.
								</h2>

								<div className="mt-6 space-y-4">
									{[
										"Préparation du format",
										"Animation au micro",
										"Gestion du rythme",
										"Interaction avec le public",
										"Adaptation à votre événement",
									].map((item) => (
										<div
											key={item}
											className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-3">
											<CheckCircleIcon className="h-5 w-5 shrink-0 text-pink-300" />
											<span className="text-sm text-gray-300">{item}</span>
										</div>
									))}
								</div>
							</motion.div>
						</div>
					</motion.div>
				</div>

				<ScrollingBand />

				{/* FORMATS */}
				<div id="formats" className="scroll-mt-24 pt-16">
					<motion.div
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: false, amount: 0.25 }}
						className="mb-10 text-center">
						<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-300/20 bg-purple-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-purple-200">
							<StarIcon className="h-4 w-4" />
							Formats d’animation
						</div>

						<h2 className="text-3xl font-black tracking-tight md:text-4xl">
							Choisissez l’ambiance, je m’occupe du reste.
						</h2>

						<p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 md:text-base">
							Chaque prestation peut être adaptée selon le lieu, la durée, le
							nombre de participants et le type de public.
						</p>
					</motion.div>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: false, amount: 0.15 }}
						className="grid grid-cols-1 gap-5 md:grid-cols-2">
						{mainServices.map((service) => (
							<ServiceCard key={service.title} service={service} />
						))}
					</motion.div>
				</div>

				{/* PUBLICS */}
				<div className="mt-20">
					<motion.div
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: false, amount: 0.25 }}
						className="mb-10 text-center">
						<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-blue-200">
							<UserGroupIcon className="h-4 w-4" />
							Pour qui ?
						</div>

						<h2 className="text-3xl font-black tracking-tight md:text-4xl">
							Des prestations adaptées à chaque événement.
						</h2>
					</motion.div>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: false, amount: 0.2 }}
						className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
						{audiences.map((audience) => {
							const Icon = audience.icon;

							return (
								<motion.article
									key={audience.title}
									variants={fadeUp}
									whileHover={{ y: -8, scale: 1.02 }}
									className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-pink-300/30 hover:bg-white/[0.075]">
									<div className="grid h-14 w-14 place-items-center rounded-2xl bg-pink-500/15 text-pink-200">
										<Icon className="h-7 w-7" />
									</div>

									<h3 className="mt-5 text-xl font-black text-white">
										{audience.title}
									</h3>

									<p className="mt-3 text-sm leading-relaxed text-gray-400">
										{audience.text}
									</p>
								</motion.article>
							);
						})}
					</motion.div>
				</div>

				{/* CE QUI EST INCLUS + PROCESS */}
				<div className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_0.9fr]">
					<motion.div
						variants={fadeLeft}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: false, amount: 0.2 }}
						className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-xl backdrop-blur-xl md:p-8">
						<div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />

						<h2 className="text-2xl font-black text-white md:text-3xl">
							Ce que je peux inclure dans la prestation
						</h2>

						<div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
							{included.map((item) => {
								const Icon = item.icon;

								return (
									<div
										key={item.title}
										className="rounded-2xl border border-white/10 bg-black/25 p-4">
										<Icon className="h-7 w-7 text-pink-300" />

										<h3 className="mt-3 text-sm font-black text-white">
											{item.title}
										</h3>

										<p className="mt-2 text-sm leading-relaxed text-gray-400">
											{item.text}
										</p>
									</div>
								);
							})}
						</div>

						<div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-4">
							<p className="text-sm leading-relaxed text-gray-300">
								Via l’application{" "}
								<a
									href="https://dydyquiz.fr"
									target="_blank"
									rel="noopener noreferrer"
									className="font-black text-pink-200 underline underline-offset-4">
									Dydy Quiz
								</a>
								, les participants peuvent jouer à des quiz et blind tests
								interactifs directement depuis leur téléphone.
							</p>
						</div>
					</motion.div>

					<motion.div
						variants={fadeRight}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: false, amount: 0.2 }}
						className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-xl backdrop-blur-xl md:p-8">
						<div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-300" />

						<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-300/20 bg-yellow-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-yellow-100">
							<RocketLaunchIcon className="h-4 w-4" />
							Déroulé
						</div>

						<h2 className="text-2xl font-black text-white md:text-3xl">
							Une organisation simple et claire.
						</h2>

						<div className="mt-6 space-y-4">
							{steps.map((step, index) => (
								<motion.div
									key={step.title}
									initial={{ opacity: 0, x: 25 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: false, amount: 0.3 }}
									transition={{
										duration: 0.45,
										delay: index * 0.08,
									}}
									className="flex gap-4 rounded-2xl border border-white/10 bg-black/25 p-4">
									<div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-pink-500/15 text-sm font-black text-pink-200">
										{index + 1}
									</div>

									<div>
										<h3 className="font-black text-white">{step.title}</h3>
										<p className="mt-1 text-sm leading-relaxed text-gray-400">
											{step.text}
										</p>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>

				{/* ZONE MAP */}
				<motion.div
					initial={{ opacity: 0, y: 45, scale: 0.97, filter: "blur(10px)" }}
					whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
					viewport={{ once: false, amount: 0.2 }}
					transition={{
						duration: 0.7,
						ease: [0.16, 1, 0.3, 1],
					}}
					className="mt-20 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-4 shadow-2xl backdrop-blur-xl md:p-6">
					<div className="mb-6 text-center">
						<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-pink-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-pink-200">
							<MapPinIcon className="h-4 w-4" />
							Zone d’intervention
						</div>

						<h2 className="text-3xl font-black tracking-tight md:text-4xl">
							J’interviens à Toulouse et en Occitanie.
						</h2>

						<p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 md:text-base">
							Toulouse, Blagnac, Colomiers, Tournefeuille, Balma, Ramonville,
							Saint-Orens et les communes voisines.
						</p>
					</div>

					<ZoneMap />
				</motion.div>

				{/* CTA FINAL */}
				<motion.div
					initial={{ opacity: 0, y: 45, scale: 0.96, filter: "blur(10px)" }}
					whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
					viewport={{ once: false, amount: 0.25 }}
					transition={{
						duration: 0.7,
						ease: [0.16, 1, 0.3, 1],
					}}
					className="mt-20 overflow-hidden rounded-[2rem] border border-pink-300/20 bg-gradient-to-br from-pink-500/15 via-purple-500/10 to-blue-500/15 p-6 text-center shadow-2xl backdrop-blur-xl md:p-10">
					<h2 className="text-3xl font-black text-white">
						Vous avez un événement à animer ?
					</h2>

					<p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 md:text-base">
						Parlez-moi de votre soirée, du public attendu et de l’ambiance que
						vous voulez créer. Je vous proposerai un format adapté.
					</p>

					<Link
						to="/contact"
						className="mt-7 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-black text-gray-950 transition hover:-translate-y-1 hover:bg-pink-100">
						<EnvelopeIcon className="h-5 w-5" />
						Me contacter
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default Prestations;
