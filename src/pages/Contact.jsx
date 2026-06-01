import { Helmet } from "react-helmet";
import { motion } from "motion/react";
import {
	ChatBubbleBottomCenterTextIcon,
	ClockIcon,
	EnvelopeIcon,
	MapPinIcon,
	SparklesIcon,
} from "@heroicons/react/24/outline";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import ContactForm from "../components/ContactForm";

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

const contactInfos = [
	{
		title: "Zone d’intervention",
		text: "Toulouse, Haute-Garonne et Occitanie",
		icon: MapPinIcon,
	},
	{
		title: "Formats possibles",
		text: "Blind test, quiz interactif, karaoké, soirée privée, mariage ou événement pro",
		icon: SparklesIcon,
	},
	{
		title: "Réponse",
		text: "Je reviens vers vous rapidement pour échanger sur votre projet",
		icon: ClockIcon,
	},
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

function Contact() {
	return (
		<>
			<Helmet>
				<title>Dydy Fantasy | Me contacter pour une animation à Toulouse</title>

				<meta
					name="description"
					content="Contactez Dydy Fantasy pour animer votre événement à Toulouse et en Occitanie : blind test, quiz interactif, karaoké, soirée privée, mariage ou événement professionnel."
				/>

				<link rel="canonical" href="https://dydyfantasy.fr/contact" />

				<meta
					property="og:title"
					content="Dydy Fantasy | Contact animation événementielle à Toulouse"
				/>

				<meta
					property="og:description"
					content="Parlez-moi de votre événement : blind test, quiz, karaoké ou animation sur mesure à Toulouse et en Occitanie."
				/>

				<meta property="og:url" content="https://dydyfantasy.fr/contact" />
				<meta property="og:type" content="website" />
			</Helmet>

			<section className="relative min-h-screen overflow-hidden bg-gray-900 text-white">
				<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />

				<FloatingBackground />

				<div className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:py-20">
					<div className="mb-12 text-center">
						<motion.div
							initial={{ opacity: 0, y: 20, scale: 0.9 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							transition={{
								duration: 0.55,
								ease: [0.16, 1, 0.3, 1],
							}}
							className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-pink-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-pink-200">
							<EnvelopeIcon className="h-4 w-4" />
							Contact
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
							animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
							transition={{
								duration: 0.8,
								delay: 0.1,
								ease: [0.16, 1, 0.3, 1],
							}}
							className="mx-auto max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
							Parlez-moi de votre événement,
							<span className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
								{" "}
								je vous propose une animation adaptée.
							</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.7,
								delay: 0.25,
								ease: [0.16, 1, 0.3, 1],
							}}
							className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
							Blind test, quiz interactif, karaoké, animation de bar, soirée
							privée, mariage ou événement professionnel : envoyez-moi votre
							demande et je vous réponds avec une proposition claire.
						</motion.p>
					</div>

					<div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr]">
						{/* Colonne infos */}
						<motion.aside
							variants={fadeLeft}
							initial="hidden"
							animate="visible"
							className="space-y-5">
							<div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl backdrop-blur-xl md:p-8">
								<div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />

								<div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-pink-500/20 blur-3xl" />

								<div className="relative z-10">
									<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-300/20 bg-purple-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-purple-200">
										<ChatBubbleBottomCenterTextIcon className="h-4 w-4" />
										Avant de m’écrire
									</div>

									<h2 className="text-2xl font-black text-white md:text-3xl">
										Quelques infos utiles à me donner.
									</h2>

									<ul className="mt-6 space-y-3">
										{[
											"La date de l’événement",
											"Le lieu ou la ville",
											"Le nombre approximatif de participants",
											"Le type d’animation souhaité",
											"L’ambiance recherchée",
										].map((item) => (
											<li
												key={item}
												className="flex items-start gap-3 text-sm text-gray-300">
												<SparklesIcon className="mt-0.5 h-5 w-5 shrink-0 text-pink-300" />
												<span>{item}</span>
											</li>
										))}
									</ul>
								</div>
							</div>

							<motion.div
								variants={{
									hidden: {},
									visible: {
										transition: {
											staggerChildren: 0.08,
										},
									},
								}}
								initial="hidden"
								animate="visible"
								className="grid grid-cols-1 gap-4">
								{contactInfos.map((info) => {
									const Icon = info.icon;

									return (
										<motion.div
											key={info.title}
											variants={fadeUp}
											whileHover={{ y: -5, scale: 1.01 }}
											className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-pink-300/30 hover:bg-white/[0.075]">
											<div className="flex items-start gap-4">
												<div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-pink-500/15 text-pink-200">
													<Icon className="h-6 w-6" />
												</div>

												<div>
													<h3 className="font-black text-white">
														{info.title}
													</h3>
													<p className="mt-1 text-sm leading-relaxed text-gray-400">
														{info.text}
													</p>
												</div>
											</div>
										</motion.div>
									);
								})}
							</motion.div>

							<div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
								<a
									href="https://wa.me/33695953356?text=Bonjour%20Dydy%20Fantasy%20!%20Je%20souhaite%20en%20savoir%20plus."
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center justify-center gap-2 rounded-2xl bg-green-500 px-5 py-3 text-sm font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-green-600">
									<FaWhatsapp className="h-5 w-5" />
									WhatsApp
								</a>

								<a
									href="https://facebook.com/profile.php?id=61578462940099"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.055] px-5 py-3 text-sm font-black text-white/80 transition hover:-translate-y-1 hover:border-pink-300/30 hover:bg-pink-500/10 hover:text-white">
									<FaFacebookF className="h-4 w-4" />
									Facebook
								</a>

								<a
									href="https://www.instagram.com/dydy_fantasy"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.055] px-5 py-3 text-sm font-black text-white/80 transition hover:-translate-y-1 hover:border-pink-300/30 hover:bg-pink-500/10 hover:text-white">
									<FaInstagram className="h-4 w-4" />
									Instagram
								</a>
							</div>
						</motion.aside>

						{/* Formulaire */}
						<motion.div
							variants={fadeRight}
							initial="hidden"
							animate="visible"
							className="relative overflow-hidden rounded-[2rem] border border-pink-300/20 bg-white/[0.055] p-4 shadow-2xl backdrop-blur-xl md:p-6">
							<div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />

							<div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-pink-500/20 blur-3xl" />
							<div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-blue-500/15 blur-3xl" />

							<div className="relative z-10">
								<div className="mb-6">
									<p className="text-xs font-black uppercase tracking-[0.22em] text-pink-200">
										Demande de devis
									</p>

									<h2 className="mt-2 text-2xl font-black text-white md:text-3xl">
										Expliquez-moi votre projet.
									</h2>

									<p className="mt-3 text-sm leading-relaxed text-gray-400">
										Plus vous me donnez d’informations, plus je pourrai vous
										proposer une animation adaptée.
									</p>
								</div>

								<ContactForm />
							</div>
						</motion.div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Contact;
