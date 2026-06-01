import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import dydyImage from "/dydy_fantasy_logo-v3.webp";
import "../css/Header.css";
import {
	Bars3Icon,
	XMarkIcon,
	SparklesIcon,
} from "@heroicons/react/24/outline";

const navLinks = [
	{
		label: "Qui suis-je ?",
		to: "/qui-suis-je",
	},
	{
		label: "Prestations",
		to: "/prestations",
	},
	{
		label: "Mon approche",
		to: "/mon-approche",
	},
];

function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const closeMenu = () => setIsOpen(false);

	return (
		<header className="sticky top-0 z-[100] border-b border-white/10 bg-[#070711]/95 text-white shadow-2xl backdrop-blur-xl">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
				{/* Logo */}
				<Link
					to="/"
					onClick={closeMenu}
					className="group flex items-center"
					aria-label="Retour à l’accueil Dydy Fantasy">
					<div className="relative">
						<div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl transition group-hover:bg-pink-400/25" />

						<img
							src={dydyImage}
							alt="Dydy Fantasy - Animation interactive"
							className="relative h-12 w-auto max-w-[210px] object-contain sm:h-14 sm:max-w-[260px] md:h-16 md:max-w-[330px]"
						/>
					</div>
				</Link>

				{/* Navigation desktop */}
				<nav className="hidden items-center gap-2 md:flex">
					{navLinks.map((link) => (
						<NavLink
							key={link.to}
							to={link.to}
							className={({ isActive }) =>
								[
									"rounded-full px-4 py-2 text-sm font-bold transition-all duration-300",
									isActive
										? "bg-white text-gray-950 shadow-lg"
										: "text-white/75 hover:bg-white/10 hover:text-white",
								].join(" ")
							}>
							{link.label}
						</NavLink>
					))}

					<NavLink
						to="/contact"
						className={({ isActive }) =>
							[
								"ml-2 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-black transition-all duration-300",
								isActive
									? "bg-white text-gray-950"
									: "bg-gradient-to-r from-pink-600 to-purple-700 text-white shadow-[0_0_22px_rgba(236,72,153,0.35)] hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(236,72,153,0.6)]",
							].join(" ")
						}>
						<SparklesIcon className="h-4 w-4" />
						Contact
					</NavLink>
				</nav>

				{/* Burger mobile */}
				<button
					type="button"
					onClick={() => setIsOpen((current) => !current)}
					className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
					aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
					aria-expanded={isOpen}>
					{isOpen ? (
						<XMarkIcon className="h-7 w-7" />
					) : (
						<Bars3Icon className="h-7 w-7" />
					)}
				</button>
			</div>

			{/* Menu mobile */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0, y: -12 }}
						animate={{ opacity: 1, height: "auto", y: 0 }}
						exit={{ opacity: 0, height: 0, y: -12 }}
						transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
						className="overflow-hidden border-t border-white/10 bg-gray-950/95 backdrop-blur-xl md:hidden">
						<nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
							{navLinks.map((link) => (
								<NavLink
									key={link.to}
									to={link.to}
									onClick={closeMenu}
									className={({ isActive }) =>
										[
											"rounded-2xl px-4 py-3 text-base font-bold transition-all",
											isActive
												? "bg-white text-gray-950"
												: "bg-white/[0.045] text-white/80 hover:bg-white/10 hover:text-white",
										].join(" ")
									}>
									{link.label}
								</NavLink>
							))}

							<NavLink
								to="/contact"
								onClick={closeMenu}
								className={({ isActive }) =>
									[
										"mt-2 inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-base font-black transition-all",
										isActive
											? "bg-white text-gray-950"
											: "bg-gradient-to-r from-pink-600 to-purple-700 text-white shadow-[0_0_24px_rgba(236,72,153,0.35)]",
									].join(" ")
								}>
								<SparklesIcon className="h-5 w-5" />
								Demander un devis
							</NavLink>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
			<div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
		</header>
	);
}

export default Header;
