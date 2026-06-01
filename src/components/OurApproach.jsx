import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
	ArrowRightIcon,
	CheckCircleIcon,
	ClipboardDocumentListIcon,
	ComputerDesktopIcon,
	EnvelopeIcon,
	LightBulbIcon,
	MicrophoneIcon,
	RocketLaunchIcon,
	SparklesIcon,
	UserGroupIcon,
	WrenchScrewdriverIcon,
	ChatBubbleBottomCenterTextIcon,
	HeartIcon,
} from "@heroicons/react/24/outline";

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

const steps = [
	{
		number: "01",
		title: "Premier échange",
		subtitle: "Comprendre votre événement",
		description:
			"On échange sur le lieu, le public, la durée, l’ambiance souhaitée et les contraintes techniques. L’objectif est de comprendre précisément ce que vous voulez faire vivre aux participants.",
		icon: ChatBubbleBottomCenterTextIcon,
		gradient: "from-pink-500 via-rose-500 to-red-400",
		points: [
			"Type d’événement",
			"Public attendu",
			"Ambiance recherchée",
			"Contraintes du lieu",
		],
	},
	{
		number: "02",
		title: "Proposition du format",
		subtitle: "Choisir la bonne animation",
		description:
			"Je vous oriente vers le format le plus adapté : blind test, quiz interactif, karaoké, animation musicale ou concept sur mesure.",
		icon: LightBulbIcon,
		gradient: "from-yellow-300 via-orange-400 to-pink-500",
		points: [
			"Blind test",
			"Quiz interactif",
			"Karaoké",
			"Animation personnalisée",
		],
	},
	{
		number: "03",
		title: "Personnalisation",
		subtitle: "Adapter le contenu à votre public",
		description:
			"Je prépare les thèmes, les manches, les musiques, les questions ou les mécaniques de jeu pour que l’animation colle à votre événement.",
		icon: ClipboardDocumentListIcon,
		gradient: "from-blue-500 via-cyan-400 to-emerald-400",
		points: [
			"Thèmes adaptés",
			"Questions personnalisées",
			"Playlist cohérente",
			"Déroulé clair",
		],
	},
	{
		number: "04",
		title: "Préparation technique",
		subtitle: "Anticiper pour une soirée fluide",
		description:
			"Je vérifie le matériel nécessaire, le son, l’écran, les micros, la connexion éventuelle et l’installation pour éviter les mauvaises surprises.",
		icon: WrenchScrewdriverIcon,
		gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
		points: [
			"Sonorisation",
			"Micros",
			"Écran / vidéoprojecteur",
			"Application Dydy Quiz",
		],
	},
	{
		number: "05",
		title: "Animation le jour J",
		subtitle: "Créer le rythme et l’ambiance",
		description:
			"Je gère l’animation au micro, les règles, les relances, les transitions, l’énergie de la salle et l’interaction avec les participants.",
		icon: MicrophoneIcon,
		gradient: "from-emerald-400 via-lime-400 to-green-500",
		points: [
			"Animation au micro",
			"Interaction avec le public",
			"Gestion du rythme",
			"Ambiance conviviale",
		],
	},
	{
		number: "06",
		title: "Retour et évolution",
		subtitle: "Améliorer les prochaines soirées",
		description:
			"Après la prestation, je reste à l’écoute de vos retours pour ajuster les prochains formats et améliorer l’expérience.",
		icon: CheckCircleIcon,
		gradient: "from-sky-400 via-blue-500 to-indigo-500",
		points: [
			"Débrief simple",
			"Retours clients",
			"Ajustements",
			"Prochaines idées",
		],
	},
];

const promises = [
	{
		title: "Une animation claire",
		text: "Les règles sont simples, le public comprend vite et peut participer sans prise de tête.",
		icon: CheckCircleIcon,
	},
	{
		title: "Une ambiance adaptée",
		text: "Je module le rythme selon le public : calme, familial, festif, compétitif ou complètement décalé.",
		icon: HeartIcon,
	},
	{
		title: "Une vraie interaction",
		text: "Le but n’est pas seulement de lancer un jeu, mais de faire vivre un moment collectif.",
		icon: UserGroupIcon,
	},
	{
		title: "Un format moderne",
		text: "Je peux intégrer des outils interactifs, des scores, des buzzers, des écrans et des supports personnalisés.",
		icon: ComputerDesktopIcon,
	},
];

const scrollingWords = [
	"Écoute",
	"Personnalisation",
	"Ambiance",
	"Interaction",
	"Rythme",
	"Micro",
	"Quiz",
	"Blind test",
	"Karaoké",
	"Souvenirs",
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
				className="flex w-max items-center gap-4"
			>
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

function StepCard({ step, index }) {
	const Icon = step.icon;
	const isEven = index % 2 === 0;

	return (
		<motion.article
			initial={{
				opacity: 0,
				x: isEven ? -45 : 45,
				y: 25,
				filter: "blur(10px)",
			}}
			whileInView={{
				opacity: 1,
				x: 0,
				y: 0,
				filter: "blur(0px)",
			}}
			viewport={{ once: false, amount: 0.2 }}
			transition={{
				duration: 0.65,
				delay: index * 0.06,
				ease: [0.16, 1, 0.3, 1],
			}}
			className="relative"
		>
			<div className="hidden md:block">
				<div className="absolute left-1/2 top-8 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-gray-900 bg-pink-400 shadow-[0_0_20px_rgba(244,114,182,0.9)]" />
			</div>

			<div
				className={`relative md:w-[calc(50%-2.5rem)] ${
					isEven ? "md:mr-auto md:pr-2" : "md:ml-auto md:pl-2"
				}`}
			>
				<motion.div
					whileHover={{ y: -8, scale: 1.02 }}
					transition={{ type: "spring", stiffness: 260, damping: 22 }}
					className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-pink-300/30 hover:bg-white/[0.075]"
				>
					<div
						className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${step.gradient}`}
					/>

					<div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-pink-500/15 blur-3xl transition duration-500 group-hover:scale-125" />

					<div className="relative z-10">
						<div className="flex items-start justify-between gap-4">
							<div
								className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${step.gradient} shadow-lg`}
							>
								<Icon className="h-7 w-7 text-white" />
							</div>

							<span className="text-3xl font-black text-white/10">
								{step.number}
							</span>
						</div>

						<p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-white/45">
							{step.subtitle}
						</p>

						<h2 className="mt-2 text-2xl font-black text-white">
							{step.title}
						</h2>

						<p className="mt-3 text-sm leading-relaxed text-gray-400">
							{step.description}
						</p>

						<ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
							{step.points.map((point) => (
								<li
									key={point}
									className="flex items-start gap-2 text-sm text-gray-300"
								>
									<CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-pink-300" />
									<span>{point}</span>
								</li>
							))}
						</ul>
					</div>
				</motion.div>
			</div>
		</motion.article>
	);
}

const OurApproach = () => {
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
							className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-pink-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-pink-200"
						>
							<RocketLaunchIcon className="h-4 w-4" />
							Mon approche
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
							animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
							transition={{
								duration: 0.8,
								delay: 0.15,
								ease: [0.16, 1, 0.3, 1],
							}}
							className="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl"
						>
							Une animation réussie, ça se prépare
							<span className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
								{" "}
								avant le jour J.
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
							className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg"
						>
							Mon approche est simple : comprendre votre événement, choisir le
							bon format, personnaliser l’animation et créer une ambiance fluide,
							conviviale et participative.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.65,
								delay: 0.45,
								ease: [0.16, 1, 0.3, 1],
							}}
							className="mt-8 flex flex-col gap-3 sm:flex-row"
						>
							<Link
								to="/contact"
								className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-700 px-6 py-3 text-sm font-black text-white shadow-[0_0_28px_rgba(236,72,153,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_42px_rgba(236,72,153,0.65)]"
							>
								<EnvelopeIcon className="h-5 w-5" />
								Me parler de mon événement
							</Link>

							<a
								href="#methode"
								className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.055] px-6 py-3 text-sm font-black text-white/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-pink-300/30 hover:bg-pink-500/10 hover:text-white"
							>
								Voir la méthode
								<ArrowRightIcon className="h-4 w-4" />
							</a>
						</motion.div>
					</motion.div>

					<motion.div
						variants={fadeRight}
						initial="hidden"
						animate="visible"
						className="relative"
					>
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
								className="relative z-10 rounded-3xl border border-white/10 bg-black/25 p-6"
							>
								<p className="text-xs font-black uppercase tracking-[0.22em] text-pink-200">
									Objectif
								</p>

								<h2 className="mt-3 text-3xl font-black text-white">
									Créer une expérience simple à comprendre, fun à vivre et facile
									à partager.
								</h2>

								<div className="mt-6 space-y-4">
									{[
										"Une animation adaptée au public",
										"Un rythme clair du début à la fin",
										"Une participation naturelle",
										"Une ambiance conviviale",
										"Un souvenir positif pour les invités",
									].map((item) => (
										<div
											key={item}
											className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-3"
										>
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

				{/* PROMESSES */}
				<div className="mt-16">
					<motion.div
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: false, amount: 0.25 }}
						className="mb-10 text-center"
					>
						<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-300/20 bg-purple-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-purple-200">
							<SparklesIcon className="h-4 w-4" />
							Ma priorité
						</div>

						<h2 className="text-3xl font-black tracking-tight md:text-4xl">
							Une animation fluide, claire et adaptée.
						</h2>
					</motion.div>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: false, amount: 0.2 }}
						className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
					>
						{promises.map((promise) => {
							const Icon = promise.icon;

							return (
								<motion.article
									key={promise.title}
									variants={fadeUp}
									whileHover={{ y: -8, scale: 1.02 }}
									className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-pink-300/30 hover:bg-white/[0.075]"
								>
									<div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />

									<div className="grid h-14 w-14 place-items-center rounded-2xl bg-pink-500/15 text-pink-200">
										<Icon className="h-7 w-7" />
									</div>

									<h3 className="mt-5 text-xl font-black text-white">
										{promise.title}
									</h3>

									<p className="mt-3 text-sm leading-relaxed text-gray-400">
										{promise.text}
									</p>
								</motion.article>
							);
						})}
					</motion.div>
				</div>

				{/* TIMELINE */}
				<div id="methode" className="scroll-mt-24 pt-20">
					<motion.div
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: false, amount: 0.25 }}
						className="mb-12 text-center"
					>
						<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-pink-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-pink-200">
							<ClipboardDocumentListIcon className="h-4 w-4" />
							Ma méthode
						</div>

						<h2 className="text-3xl font-black tracking-tight md:text-4xl">
							De l’idée à l’animation le jour J.
						</h2>

						<p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 md:text-base">
							Chaque étape permet de construire une animation cohérente, adaptée
							et agréable à vivre pour vous comme pour vos invités.
						</p>
					</motion.div>

					<div className="relative mx-auto max-w-6xl">
						<div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 md:block" />

						<div className="space-y-8">
							{steps.map((step, index) => (
								<StepCard key={step.number} step={step} index={index} />
							))}
						</div>
					</div>
				</div>

				{/* CTA FINAL */}
				<motion.div
					initial={{ opacity: 0, y: 45, scale: 0.96, filter: "blur(10px)" }}
					whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
					viewport={{ once: false, amount: 0.25 }}
					transition={{
						duration: 0.7,
						ease: [0.16, 1, 0.3, 1],
					}}
					className="mt-20 overflow-hidden rounded-[2rem] border border-pink-300/20 bg-gradient-to-br from-pink-500/15 via-purple-500/10 to-blue-500/15 p-6 text-center shadow-2xl backdrop-blur-xl md:p-10"
				>
					<h2 className="text-3xl font-black text-white">
						Vous avez une idée de soirée ?
					</h2>

					<p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 md:text-base">
						Parlez-moi de votre projet, du lieu, du public et de l’ambiance
						souhaitée. Je vous aiderai à trouver le format le plus adapté.
					</p>

					<Link
						to="/contact"
						className="mt-7 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-black text-gray-950 transition hover:-translate-y-1 hover:bg-pink-100"
					>
						<EnvelopeIcon className="h-5 w-5" />
						Me contacter
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default OurApproach;