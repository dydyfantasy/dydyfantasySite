import { useState } from "react";
import { motion } from "motion/react";
import {
	SparklesIcon,
	BuildingStorefrontIcon,
	ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const clients = [
	{
		name: "La Ville en Rose",
		type: "Bar / restaurant",
		location: "Colomiers (31)",
		logo: "/clients/La ville en rose.png",
	},
	{
		name: "Taverne Heidelberg",
		type: "Taverne / bar",
		location: "Blagnac (31)",
		logo: "/clients/La taverne blagnac.jpg",
	},
	{
		name: "Le Cul de Bouteille",
		type: "Cave à vin / bar",
		location: "Aussonne (31)",
		logo: "/clients/Le cul de bouteille.jpg",
	},
	{
		name: "La Table Ronde",
		type: "Restaurant / bar",
		location: "Saint-Lieux-lès-Lavaur (81)",
		logo: "/clients/La table ronde.webp",
	},
	{
		name: "Le Cosy",
		type: "Restaurant",
		location: "Colomiers (31)",
		logo: "/clients/Cosy.jpg",
	},
	{
		name: "Le BBT",
		type: "Bar",
		location: "Cornebarrieu (31)",
		logo: "/clients/Le BBT.jpg",
	},
	{
		name: "Chez Granny",
		type: "Restaurant",
		location: "Cornebarrieu (31)",
		logo: "/clients/Chez granny.png",
	},
];

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.08,
		},
	},
};

const itemVariants = {
	hidden: {
		opacity: 0,
		y: 30,
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

function getInitials(name) {
	return name
		.split(" ")
		.filter(Boolean)
		.slice(0, 2)
		.map((word) => word[0])
		.join("")
		.toUpperCase();
}

function ClientCard({ client }) {
	const [logoError, setLogoError] = useState(false);

	const showLogo = client.logo && !logoError;

	return (
		<motion.article
			variants={itemVariants}
			whileHover={{ y: -6 }}
			transition={{ type: "spring", stiffness: 260, damping: 22 }}
			className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-5 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-pink-300/30 hover:bg-white/[0.075]">
			<div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-80" />

			<div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-pink-500/15 blur-3xl transition duration-500 group-hover:scale-125" />
			<div className="pointer-events-none absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl transition duration-500 group-hover:scale-125" />

			<div className="relative z-10">
				<div className="flex h-24 items-center justify-center rounded-2xl border border-white/10 bg-black/25 p-4">
					{showLogo ? (
						<img
							src={client.logo}
							alt={`Logo ${client.name}`}
							onError={() => setLogoError(true)}
							className="max-h-16 max-w-full object-contain opacity-80 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
							loading="lazy"
						/>
					) : (
						<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 text-xl font-black text-white shadow-[0_0_25px_rgba(236,72,153,0.35)]">
							{getInitials(client.name)}
						</div>
					)}
				</div>

				<div className="mt-4">
					<h3 className="text-lg font-black leading-tight text-white">
						{client.name}
					</h3>

					<p className="mt-1 text-sm font-semibold text-pink-200">
						{client.type}
					</p>

					<p className="mt-1 text-sm text-gray-400">{client.location}</p>
				</div>
			</div>
		</motion.article>
	);
}

const TrustedBySection = () => {
	return (
		<section className="relative overflow-hidden bg-gray-900 px-4 py-16 text-white">
			<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

			<div className="pointer-events-none absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
			<div className="pointer-events-none absolute right-[-120px] bottom-10 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />

			<div className="relative z-10 mx-auto max-w-7xl">
				<motion.div
					initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
					whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
					viewport={{ once: false, amount: 0.25 }}
					transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
					className="mb-10 text-center">
					<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-pink-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-pink-200">
						<ShieldCheckIcon className="h-4 w-4" />
						Confiance
					</div>

					<h2 className="text-3xl font-black tracking-tight md:text-4xl">
						Ils m’ont fait confiance
					</h2>

					<p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 md:text-base">
						Des bars, restaurants, événements privés et professionnels m’ont
						confié l’animation de leurs soirées en Occitanie.
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.18 }}
					className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
					{clients.map((client) => (
						<ClientCard key={client.name} client={client} />
					))}
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.25 }}
					transition={{ duration: 0.5, delay: 0.15 }}
					className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-3 rounded-3xl border border-white/10 bg-white/[0.045] px-5 py-5 text-center shadow-xl backdrop-blur-xl md:flex-row md:text-left">
					<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pink-500/15 text-pink-200">
						<BuildingStorefrontIcon className="h-6 w-6" />
					</div>

					<p className="text-sm leading-relaxed text-gray-300">
						J’adapte chaque animation au lieu, au public et à l’ambiance : blind
						test, quiz interactif, karaoké, soirée musicale ou animation sur
						mesure.
					</p>

					<SparklesIcon className="hidden h-6 w-6 shrink-0 text-pink-200 md:block" />
				</motion.div>
			</div>
		</section>
	);
};

export default TrustedBySection;
