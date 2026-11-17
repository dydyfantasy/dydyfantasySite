import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import logo480 from "../../assets/brand/logo-texte-480.webp";

// Menu « Prestations » : n'y mettre que des pages qui existent (sinon 404).
// Ajouter Karaoké, DJ, Sur mesure, puis le menu « Événements » au fur et à mesure.
const PRESTATIONS = [
	{ to: "/prestations/blind-test-quiz", label: "Blind test & quiz" },
	{ to: "/prestations", label: "Toutes les prestations" },
];

const LINKS = [
	{ to: "/qui-suis-je", label: "Qui suis-je ?" },
	{ to: "/mon-approche", label: "Mon approche" },
	{ to: "/#agenda", label: "Agenda", plain: true },
];

const navClass = ({ isActive }) =>
	`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
		isActive ? "text-[var(--cyan)]" : "text-white/80 hover:text-white"
	}`;

export default function LedHeader() {
	const [open, setOpen] = useState(false); // menu mobile
	const [dropdown, setDropdown] = useState(false); // sous-menu Prestations (ordinateur)
	const dropdownRef = useRef(null);
	const location = useLocation();

	// Ferme les menus à chaque changement de page
	useEffect(() => {
		setOpen(false);
		setDropdown(false);
	}, [location.pathname, location.hash]);

	// Ferme le sous-menu au clic à l'extérieur
	useEffect(() => {
		if (!dropdown) return;
		const onClick = (e) => {
			if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setDropdown(false);
		};
		document.addEventListener("pointerdown", onClick);
		return () => document.removeEventListener("pointerdown", onClick);
	}, [dropdown]);

	return (
		<header className="led sticky top-0 z-[100] border-b border-white/10 bg-[var(--ink)]/95 text-white">
			<div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
				<Link to="/" aria-label="Dydy Fantasy, retour à l'accueil" className="shrink-0">
					<img src={logo480} alt="Dydy Fantasy" width="480" height="86" className="h-8 w-auto md:h-9" />
				</Link>

				{/* Ordinateur */}
				<nav aria-label="Menu principal" className="hidden items-center gap-1 lg:flex">
					<div ref={dropdownRef} className="relative">
						<button
							type="button"
							aria-expanded={dropdown}
							aria-haspopup="true"
							onClick={() => setDropdown((v) => !v)}
							className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-white/80 hover:text-white">
							Prestations
							<ChevronDownIcon className={`h-4 w-4 transition-transform ${dropdown ? "rotate-180" : ""}`} />
						</button>
						{dropdown && (
							<div className="neon-card absolute left-0 top-full mt-2 w-60 rounded-2xl p-2" style={{ "--c": "var(--cyan)" }}>
								{PRESTATIONS.map((p) => (
									<NavLink key={p.to} to={p.to} end className={({ isActive }) => `block ${navClass({ isActive })}`}>
										{p.label}
									</NavLink>
								))}
							</div>
						)}
					</div>
					{LINKS.map((l) =>
						l.plain ? (
							<a key={l.to} href={l.to} className={navClass({ isActive: false })}>
								{l.label}
							</a>
						) : (
							<NavLink key={l.to} to={l.to} className={navClass}>
								{l.label}
							</NavLink>
						),
					)}
					<Link
						to="/contact"
						className="btn-neon ml-2 rounded-xl bg-[var(--pink)] px-4 py-2 text-sm font-bold text-white">
						Demander mon devis
					</Link>
				</nav>

				{/* Mobile */}
				<button
					type="button"
					onClick={() => setOpen((v) => !v)}
					aria-expanded={open}
					aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
					className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 lg:hidden">
					{open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
				</button>
			</div>

			{open && (
				<nav aria-label="Menu mobile" className="border-t border-white/10 px-4 pb-6 pt-2 lg:hidden">
					<p className="mt-3 px-3 text-xs font-bold uppercase tracking-[0.25em] text-[var(--pink)]">Prestations</p>
					{PRESTATIONS.map((p) => (
						<NavLink key={p.to} to={p.to} end className={({ isActive }) => `block text-base ${navClass({ isActive })}`}>
							{p.label}
						</NavLink>
					))}
					<p className="mt-4 px-3 text-xs font-bold uppercase tracking-[0.25em] text-[var(--pink)]">Dydy Fantasy</p>
					{LINKS.map((l) =>
						l.plain ? (
							<a key={l.to} href={l.to} className={`block text-base ${navClass({ isActive: false })}`}>
								{l.label}
							</a>
						) : (
							<NavLink key={l.to} to={l.to} className={({ isActive }) => `block text-base ${navClass({ isActive })}`}>
								{l.label}
							</NavLink>
						),
					)}
					<Link
						to="/contact"
						className="btn-neon mt-5 block rounded-xl bg-[var(--pink)] px-4 py-3 text-center font-bold text-white">
						Demander mon devis
					</Link>
				</nav>
			)}
		</header>
	);
}
