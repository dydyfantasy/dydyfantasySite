import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
	ArrowRightIcon,
	CheckCircleIcon,
	CodeBracketIcon,
	EnvelopeIcon,
	HeartIcon,
	MapPinIcon,
	MicrophoneIcon,
	MusicalNoteIcon,
	RocketLaunchIcon,
	SparklesIcon,
	UserCircleIcon,
	BoltIcon,
	ComputerDesktopIcon,
	PlayCircleIcon,
} from "@heroicons/react/24/outline";
import myPhoto from "../assets/PhotoPresentation.webp";
import VideoPresentation from "./videoPresentation";

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
			duration: 0.7,
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
			staggerChildren: 0.12,
		},
	},
};

const stats = [
	{
		value: "Live",
		label: "animation au micro",
	},
	{
		value: "31",
		label: "Toulouse & alentours",
	},
	{
		value: "100%",
		label: "ambiance interactive",
	},
];

const services = [
	{
		title: "Blind tests",
		text: "Des manches musicales pour faire chanter, buzzer et challenger les invités.",
		icon: MusicalNoteIcon,
	},
	{
		title: "Quiz interactifs",
		text: "Des questions, des scores, du rythme et une vraie dynamique de jeu.",
		icon: BoltIcon,
	},
	{
		title: "Karaokés",
		text: "Un moment convivial pour chanter, rire et créer des souvenirs.",
		icon: MicrophoneIcon,
	},
	{
		title: "Sur mesure",
		text: "Une animation adaptée au lieu, au public et à l’ambiance recherchée.",
		icon: SparklesIcon,
	},
];

const timeline = [
	{
		title: "Une idée simple",
		text: "Créer des soirées où les invités ne restent pas spectateurs, mais deviennent acteurs de l’ambiance.",
		icon: HeartIcon,
	},
	{
		title: "Un univers interactif",
		text: "Mélanger musique, jeux, humour, micro, buzzers, scores et moments spontanés.",
		icon: PlayCircleIcon,
	},
	{
		title: "Une animation vivante",
		text: "Adapter le rythme, relancer le public, faire participer tout le monde et garder une vraie énergie.",
		icon: RocketLaunchIcon,
	},
];

const strengths = [
	"Blind tests musicaux",
	"Quiz interactifs à thème",
	"Karaokés conviviaux",
	"Soirées privées, anniversaires et mariages",
	"Animations pour bars et restaurants",
	"Événements professionnels",
];

const scrollingWords = [
	"Blind test",
	"Quiz interactif",
	"Karaoké",
	"DJ",
	"Blind'Quiz",
	"Soirée privée",
	"Mariage",
	"Animation bar",
	"Événement entreprise",
	"Toulouse",
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
					duration: 12,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="absolute left-[-140px] top-16 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl"
			/>

			<motion.div
				animate={{
					x: [0, -60, 0],
					y: [0, 50, 0],
					scale: [1, 1.2, 1],
				}}
				transition={{
					duration: 14,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="absolute right-[-160px] top-44 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
			/>

			<motion.div
				animate={{
					x: [0, 45, 0],
					y: [0, 35, 0],
					scale: [1, 1.12, 1],
				}}
				transition={{
					duration: 16,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="absolute bottom-10 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl"
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
					duration: 22,
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

const Presentation = () => {
	return (
		<>
			<section className="relative overflow-hidden bg-gray-900 text-white">
				<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />

				<FloatingBackground />

				<div className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:py-20">
					{/* HERO */}
					<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
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
								<UserCircleIcon className="h-4 w-4" />
								Qui suis-je ?
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
								Derrière Dydy Fantasy, il y a une envie simple :
								<span className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
									{" "}
									créer des soirées qui rassemblent.
								</span>
							</motion.h1>

							<motion.div
								initial={{ opacity: 0, y: 35 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.75,
									delay: 0.3,
									ease: [0.16, 1, 0.3, 1],
								}}
								className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-gray-300 md:text-lg">
								<p>
									Je suis ingénieur développeur le jour et animateur
									d’événements le soir. Avec Dydy Fantasy, je crée des blind
									tests, quiz interactifs, karaokés et animations sur mesure à
									Toulouse et en Occitanie.
								</p>

								<p>
									Mon objectif : transformer une soirée classique en un moment
									vivant, participatif et mémorable.
								</p>
							</motion.div>

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
									Me contacter
								</Link>

								<Link
									to="/prestations"
									className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.055] px-6 py-3 text-sm font-black text-white/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-pink-300/30 hover:bg-pink-500/10 hover:text-white">
									Voir mes prestations
									<ArrowRightIcon className="h-4 w-4" />
								</Link>
							</motion.div>

							<motion.div
								variants={containerVariants}
								initial="hidden"
								animate="visible"
								className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
								{stats.map((stat) => (
									<motion.div
										key={stat.label}
										variants={fadeUp}
										whileHover={{ y: -6, scale: 1.03 }}
										className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-center shadow-xl backdrop-blur-xl">
										<p className="text-2xl font-black text-white">
											{stat.value}
										</p>
										<p className="mt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-gray-400">
											{stat.label}
										</p>
									</motion.div>
								))}
							</motion.div>
						</motion.div>

						<motion.div
							variants={fadeRight}
							initial="hidden"
							animate="visible"
							className="relative mx-auto w-full max-w-md">
							<motion.div
								animate={{
									y: [0, -10, 0],
								}}
								transition={{
									duration: 5,
									repeat: Infinity,
									ease: "easeInOut",
								}}
								className="relative">
								<div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-pink-500/25 via-purple-500/15 to-blue-500/25 blur-2xl" />

								<motion.div
									whileHover={{
										rotate: 1.5,
										scale: 1.02,
									}}
									transition={{
										type: "spring",
										stiffness: 180,
										damping: 18,
									}}
									className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-3 shadow-2xl backdrop-blur-xl">
									<div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />

									<img
										src={myPhoto}
										alt="Dydy Fantasy, animateur événementiel à Toulouse"
										className="w-full rounded-[1.5rem] object-cover"
									/>

									<motion.div
										initial={{ opacity: 0, y: 25 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: 0.75 }}
										className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-xl">
										<p className="text-xs font-black uppercase tracking-[0.22em] text-pink-200">
											Dydy Fantasy
										</p>
										<p className="mt-1 text-sm text-gray-200">
											Animateur blind test, quiz & karaoké
										</p>
									</motion.div>
								</motion.div>
							</motion.div>
						</motion.div>
					</div>

					<ScrollingBand />

					{/* SERVICES RAPIDES */}
					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: false, amount: 0.2 }}
						className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
						{services.map((service) => {
							const Icon = service.icon;

							return (
								<motion.article
									key={service.title}
									variants={fadeUp}
									whileHover={{ y: -8, scale: 1.02 }}
									transition={{
										type: "spring",
										stiffness: 260,
										damping: 22,
									}}
									className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-pink-300/30 hover:bg-white/[0.075]">
									<div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />
									<div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-pink-500/15 blur-3xl transition duration-500 group-hover:scale-125" />

									<div className="relative z-10">
										<div className="grid h-14 w-14 place-items-center rounded-2xl bg-pink-500/15 text-pink-200">
											<Icon className="h-7 w-7" />
										</div>

										<h2 className="mt-5 text-xl font-black text-white">
											{service.title}
										</h2>

										<p className="mt-3 text-sm leading-relaxed text-gray-400">
											{service.text}
										</p>
									</div>
								</motion.article>
							);
						})}
					</motion.div>

					{/* TIMELINE */}
					<div className="mt-20">
						<motion.div
							variants={fadeUp}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: false, amount: 0.25 }}
							className="text-center">
							<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-300/20 bg-purple-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-purple-200">
								<RocketLaunchIcon className="h-4 w-4" />
								Mon histoire
							</div>

							<h2 className="text-3xl font-black tracking-tight md:text-4xl">
								Une animation pensée pour faire participer tout le monde.
							</h2>
						</motion.div>

						<div className="relative mx-auto mt-12 max-w-4xl">
							<div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 md:block" />

							<div className="space-y-6">
								{timeline.map((step, index) => {
									const Icon = step.icon;

									return (
										<motion.article
											key={step.title}
											initial={{
												opacity: 0,
												x: index % 2 === 0 ? -45 : 45,
												filter: "blur(10px)",
											}}
											whileInView={{
												opacity: 1,
												x: 0,
												filter: "blur(0px)",
											}}
											viewport={{ once: false, amount: 0.25 }}
											transition={{
												duration: 0.65,
												delay: index * 0.08,
												ease: [0.16, 1, 0.3, 1],
											}}
											className="relative rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-xl backdrop-blur-xl md:ml-16">
											<div className="absolute -left-[4.6rem] top-6 hidden h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-gray-950 text-pink-200 shadow-[0_0_25px_rgba(236,72,153,0.35)] md:grid">
												<Icon className="h-6 w-6" />
											</div>

											<div className="flex items-start gap-4 md:hidden">
												<div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-pink-500/15 text-pink-200">
													<Icon className="h-6 w-6" />
												</div>

												<div>
													<h3 className="text-xl font-black text-white">
														{step.title}
													</h3>
													<p className="mt-2 text-sm leading-relaxed text-gray-400">
														{step.text}
													</p>
												</div>
											</div>

											<div className="hidden md:block">
												<h3 className="text-xl font-black text-white">
													{step.title}
												</h3>
												<p className="mt-2 text-sm leading-relaxed text-gray-400">
													{step.text}
												</p>
											</div>
										</motion.article>
									);
								})}
							</div>
						</div>
					</div>

					{/* DOUBLE PROFIL */}
					<div className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-2">
						<motion.div
							variants={fadeLeft}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: false, amount: 0.2 }}
							className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-xl backdrop-blur-xl md:p-8">
							<div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

							<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-blue-200">
								<ComputerDesktopIcon className="h-4 w-4" />
								Mon côté développeur
							</div>

							<h2 className="text-2xl font-black text-white md:text-3xl">
								La technologie au service de l’ambiance.
							</h2>

							<p className="mt-5 text-sm leading-relaxed text-gray-300 md:text-base">
								Mon métier de développeur me permet d’imaginer des animations
								plus interactives : quiz en direct, scores, buzzers, écrans,
								mécaniques de jeu et formats personnalisés.
							</p>

							<p className="mt-4 text-sm leading-relaxed text-gray-300 md:text-base">
								C’est ce mélange entre animation, musique et technologie qui
								donne à Dydy Fantasy son identité : une expérience fun, claire
								et engageante.
							</p>
						</motion.div>

						<motion.div
							variants={fadeRight}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: false, amount: 0.2 }}
							className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-xl backdrop-blur-xl md:p-8">
							<div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-300" />

							<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-pink-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-pink-200">
								<MicrophoneIcon className="h-4 w-4" />
								Mon côté animateur
							</div>

							<ul className="space-y-3">
								{strengths.map((item) => (
									<motion.li
										key={item}
										initial={{ opacity: 0, x: 20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: false, amount: 0.3 }}
										transition={{ duration: 0.45 }}
										className="flex items-start gap-3 text-sm text-gray-300">
										<CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-pink-300" />
										<span>{item}</span>
									</motion.li>
								))}
							</ul>

							<div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-4">
								<p className="flex items-start gap-2 text-sm leading-relaxed text-gray-300">
									<MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
									Basé à Toulouse, je me déplace aussi à Blagnac, Colomiers,
									Tournefeuille, Balma, Ramonville, Saint-Orens et plus
									largement en Occitanie.
								</p>
							</div>
						</motion.div>
					</div>

					{/* CTA */}
					<motion.div
						initial={{ opacity: 0, y: 45, scale: 0.96, filter: "blur(10px)" }}
						whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
						viewport={{ once: false, amount: 0.25 }}
						transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
						className="mt-20 overflow-hidden rounded-[2rem] border border-pink-300/20 bg-gradient-to-br from-pink-500/15 via-purple-500/10 to-blue-500/15 p-6 text-center shadow-2xl backdrop-blur-xl md:p-10">
						<h2 className="text-3xl font-black text-white">
							Vous voulez créer une soirée qui marque les esprits ?
						</h2>

						<p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 md:text-base">
							Parlez-moi de votre événement, du lieu, du public et de l’ambiance
							que vous voulez créer. Je vous proposerai une animation adaptée.
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

			<VideoPresentation />
		</>
	);
};

export default Presentation;
