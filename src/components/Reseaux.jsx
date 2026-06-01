import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { motion } from "motion/react";
import { ArrowUpRightIcon, SparklesIcon } from "@heroicons/react/24/outline";

const socials = [
	{
		name: "Facebook",
		label: "Actualités & événements",
		icon: FaFacebookF,
		url: "https://facebook.com/profile.php?id=61578462940099",
		gradient: "from-blue-500 to-blue-700",
		glow: "bg-blue-500/20",
	},
	{
		name: "Instagram",
		label: "Photos, stories & coulisses",
		icon: FaInstagram,
		url: "https://www.instagram.com/dydy_fantasy",
		gradient: "from-pink-500 via-purple-500 to-orange-400",
		glow: "bg-pink-500/20",
	},
];

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.12,
		},
	},
};

const itemVariants = {
	hidden: {
		opacity: 0,
		y: 35,
		scale: 0.96,
		filter: "blur(8px)",
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		filter: "blur(0px)",
		transition: {
			duration: 0.55,
			ease: [0.16, 1, 0.3, 1],
		},
	},
};

const Reseaux = () => {
	return (
		<section className="relative overflow-hidden bg-gray-900 px-4 py-16 text-white">
			{/* Séparation douce */}
			<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

			{/* Fond décoratif */}
			<div className="pointer-events-none absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
			<div className="pointer-events-none absolute right-[-120px] bottom-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

			<div className="pointer-events-none absolute inset-0 opacity-[0.06]">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							"radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1.5px)",
						backgroundSize: "22px 22px",
					}}
				/>
			</div>

			<div className="relative z-10 mx-auto max-w-6xl text-center">
				<motion.div
					initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
					whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
					viewport={{ once: false, amount: 0.25 }}
					transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
					<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-pink-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-pink-200">
						<SparklesIcon className="h-4 w-4" />
						Réseaux sociaux
					</div>

					<h2 className="text-3xl font-black tracking-tight md:text-4xl">
						Retrouvez toutes nos animations
					</h2>

					<p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 md:text-base">
						Suivez Dydy Fantasy pour découvrir les prochaines soirées, les
						coulisses, les blind tests, les karaokés et les meilleurs moments en
						vidéo.
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.2 }}
					className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
					{socials.map((social) => {
						const Icon = social.icon;

						return (
							<motion.a
								key={social.name}
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`Suivre Dydy Fantasy sur ${social.name}`}
								variants={itemVariants}
								whileHover={{ y: -8, scale: 1.02 }}
								transition={{ type: "spring", stiffness: 260, damping: 22 }}
								className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-6 text-left shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08]">
								<div
									className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${social.gradient}`}
								/>

								<div
									className={`pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full ${social.glow} blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-90`}
								/>

								<div className="relative z-10 flex items-center justify-between gap-4">
									<div
										className={`grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${social.gradient} shadow-lg`}>
										<Icon className="h-8 w-8 text-white" />
									</div>

									<ArrowUpRightIcon className="h-5 w-5 text-white/35 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
								</div>

								<div className="relative z-10 mt-6">
									<h3 className="text-2xl font-black text-white">
										{social.name}
									</h3>

									<p className="mt-2 text-sm leading-relaxed text-gray-300">
										{social.label}
									</p>

									<span className="mt-5 inline-flex text-xs font-bold uppercase tracking-[0.18em] text-white/45 transition group-hover:text-white">
										Ouvrir le profil
									</span>
								</div>
							</motion.a>
						);
					})}
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 25 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.3 }}
					transition={{ duration: 0.55, delay: 0.15 }}
					className="mt-10">
					<a
						href="/contact"
						className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-pink-600 to-purple-700 px-6 py-3 text-sm font-black text-white shadow-[0_0_28px_rgba(236,72,153,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_42px_rgba(236,72,153,0.65)]">
						Me contacter pour une animation
					</a>
				</motion.div>
			</div>
		</section>
	);
};

export default Reseaux;
