import {
	UserCircleIcon,
	PhoneIcon,
	SparklesIcon,
	ArrowsPointingInIcon,
	ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { CursorArrowRaysIcon, RocketLaunchIcon, StarIcon } from "@heroicons/react/24/solid";
import { motion } from "motion/react";

const cards = [
	{
		title: "Qui suis-je ?",
		subtitle:
			"Découvrez l’univers Dydy Fantasy et mon approche de l’animation.",
		icon: UserCircleIcon,
		link: "/qui-suis-je",
		accent: "from-red-500 to-pink-500",
		iconBg: "bg-red-500/15",
		iconText: "text-red-200",
	},
	{
		title: "Nos prestations",
		subtitle: "Blind test, quiz, karaoké, DJ et animations sur mesure.",
		icon: SparklesIcon,
		link: "/prestations",
		accent: "from-sky-400 to-blue-500",
		iconBg: "bg-sky-500/15",
		iconText: "text-sky-200",
	},
	{
		title: "Notre approche",
		subtitle:
			"Une animation interactive, conviviale et adaptée à votre public.",
		icon: ArrowsPointingInIcon,
		link: "/mon-approche",
		accent: "from-emerald-400 to-green-500",
		iconBg: "bg-emerald-500/15",
		iconText: "text-emerald-200",
	},
	{
		title: "Contact",
		subtitle:
			"Parlez-moi de votre événement et demandez un devis personnalisé.",
		icon: PhoneIcon,
		link: "/contact",
		accent: "from-yellow-300 to-orange-400",
		iconBg: "bg-yellow-500/15",
		iconText: "text-yellow-100",
	},
];

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const cardVariants = {
	hidden: {
		opacity: 0,
		y: 35,
		filter: "blur(8px)",
	},
	visible: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: {
			duration: 0.55,
			ease: [0.16, 1, 0.3, 1],
		},
	},
};

const MiniCards = () => {
	return (
		<section className="relative overflow-hidden bg-gray-900 px-4 py-14 text-white">
			{/* Séparation douce avec le Hero */}
			<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

			{/* Fond discret */}
			<div className="pointer-events-none absolute inset-0 opacity-[0.07]">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							"radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1.5px)",
						backgroundSize: "22px 22px",
					}}
				/>
			</div>

			<div className="relative z-10 mx-auto max-w-7xl">
				<motion.div
					initial={{ opacity: 0, y: 25 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.3 }}
					transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
					className="mb-8 text-center">
					<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-pink-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-pink-200">
						<RocketLaunchIcon className="h-4 w-4" />
						Explorer
					</div>

					<h2 className="mt-3 text-2xl font-black tracking-tight md:text-3xl">
						Préparez votre événement en quelques clics
					</h2>

					<p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-300 md:text-base">
						Accédez rapidement aux informations essentielles pour découvrir les
						prestations, l’approche et demander un devis.
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.2 }}
					className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{cards.map((card) => {
						const Icon = card.icon;

						return (
							<motion.a
								key={card.title}
								href={card.link}
								variants={cardVariants}
								whileHover={{ y: -5 }}
								transition={{ type: "spring", stiffness: 260, damping: 22 }}
								className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-5 text-left shadow-xl backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:bg-white/[0.075]">
								{/* Ligne colorée discrète */}
								<div
									className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${card.accent} opacity-80`}
								/>

								{/* Halo au survol */}
								<div
									className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${card.accent} opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-25`}
								/>

								<div className="relative z-10 flex items-start gap-4">
									<div
										className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${card.iconBg} ${card.iconText} ring-1 ring-white/10`}>
										<Icon className="h-6 w-6" />
									</div>

									<div className="min-w-0 flex-1">
										<div className="flex items-start justify-between gap-3">
											<h3 className="text-lg font-black leading-tight text-white">
												{card.title}
											</h3>

											<ArrowRightIcon className="mt-1 h-4 w-4 shrink-0 text-white/35 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
										</div>

										<p className="mt-2 text-sm leading-relaxed text-gray-300">
											{card.subtitle}
										</p>

										<span className="mt-4 inline-flex text-xs font-bold uppercase tracking-[0.18em] text-white/45 transition group-hover:text-white">
											En savoir plus
										</span>
									</div>
								</div>
							</motion.a>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
};

export default MiniCards;
