import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import {
	Bars3Icon,
	XMarkIcon,
	ChevronDownIcon,
	Squares2X2Icon,
	UserCircleIcon,
	PhotoIcon,
	CalendarDaysIcon,
	LightBulbIcon,
	DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import logo480 from "../../assets/brand/logo-texte-480.webp";
import { PRESTATIONS, EVENEMENTS } from "../../data/navigation";

// Menus déroulants (contenu dans src/data/navigation.js)
const MENUS = [
	{ id: "prestations", label: "Prestations", items: [...PRESTATIONS, { to: "/prestations", label: "Toutes les prestations", icon: Squares2X2Icon, color: "rgb(255 255 255 / 0.6)" }] },
	{ id: "evenements", label: "Événements", items: EVENEMENTS },
	{
		id: "dydy",
		label: "Dydy Fantasy",
		items: [
			{ to: "/qui-suis-je", label: "Qui suis-je ?", icon: UserCircleIcon, color: "#ff2fae" },
			{ to: "/mon-approche", label: "Mon approche", icon: LightBulbIcon, color: "#7cff6b" },
			{ to: "/dydy-quiz", label: "Dydy Quiz, mon appli", icon: DevicePhoneMobileIcon, color: "#ffc93c" },
			{ to: "/galerie", label: "Galerie", icon: PhotoIcon, color: "#19d3f0" },
		],
	},
];

const LINKS = [{ to: "/#agenda", label: "Agenda", plain: true, icon: CalendarDaysIcon, color: "#ffc93c" }];

const navClass = ({ isActive }) =>
	`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
		isActive ? "text-[var(--cyan)]" : "text-white/80 hover:text-white"
	}`;

// Lien avec icône colorée (menus déroulants et menu mobile)
function IconLink({ to, label, plain, icon: Icon, color, big = false }) {
	const cls = (isActive) =>
		`flex items-center gap-3 hover:bg-white/[0.06] ${big ? "text-base" : ""} ${navClass({ isActive })} ${isActive ? "bg-white/[0.06]" : ""}`;
	const content = (
		<>
			{Icon && (
				<span className="menu-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ "--c": color }}>
					<Icon aria-hidden="true" className="h-5 w-5" />
				</span>
			)}
			{label}
		</>
	);
	return plain ? (
		<a href={to} className={cls(false)}>{content}</a>
	) : (
		<NavLink to={to} end className={({ isActive }) => cls(isActive)}>{content}</NavLink>
	);
}

export default function LedHeader() {
	const [open, setOpen] = useState(false); // menu mobile
	const [dropdown, setDropdown] = useState(null); // id du sous-menu ouvert (ordinateur)
	const navRef = useRef(null);
	const closeTimer = useRef(null);
	const location = useLocation();

	// Rubrique de la page courante (pour allumer « Prestations », « Événements »…)
	const activeMenu = MENUS.find((m) => m.items.some((p) => p.to === location.pathname))?.id;

	// Ouverture au survol (souris) avec un petit délai à la fermeture
	const hoverOpen = (id) => {
		window.clearTimeout(closeTimer.current);
		setDropdown(id);
	};
	const hoverClose = () => {
		window.clearTimeout(closeTimer.current);
		closeTimer.current = window.setTimeout(() => setDropdown(null), 150);
	};

	// Échap ferme les menus
	useEffect(() => {
		const onKey = (e) => {
			if (e.key === "Escape") {
				setDropdown(null);
				setOpen(false);
			}
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, []);

	// Menu mobile ouvert : la page derrière ne défile plus
	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);

	// Ferme les menus à chaque changement de page
	useEffect(() => {
		setOpen(false);
		setDropdown(null);
	}, [location.pathname, location.hash]);

	// Ferme le sous-menu au clic à l’extérieur
	useEffect(() => {
		if (!dropdown) return;
		const onClick = (e) => {
			if (navRef.current && !navRef.current.contains(e.target)) setDropdown(null);
		};
		document.addEventListener("pointerdown", onClick);
		return () => document.removeEventListener("pointerdown", onClick);
	}, [dropdown]);

	return (
		<header className="led sticky top-0 z-[100] border-b border-white/10 bg-[var(--ink)]/95 text-white">
			<div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
				<Link to="/" aria-label="Dydy Fantasy, retour à l’accueil" className="shrink-0">
					<img src={logo480} alt="Dydy Fantasy" width="480" height="86" className="h-8 w-auto md:h-9" />
				</Link>

				{/* Ordinateur */}
				<nav ref={navRef} aria-label="Menu principal" className="hidden items-center gap-1 lg:flex">
					{MENUS.map((menu) => (
						<div
							key={menu.id}
							className="relative"
							// survol uniquement à la souris (au doigt, c’est le clic qui ouvre)
							onPointerEnter={(e) => e.pointerType === "mouse" && hoverOpen(menu.id)}
							onPointerLeave={(e) => e.pointerType === "mouse" && hoverClose()}>
							<button
								type="button"
								aria-expanded={dropdown === menu.id}
								aria-haspopup="true"
								onClick={() => setDropdown((v) => (v === menu.id ? null : menu.id))}
								className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
									activeMenu === menu.id || dropdown === menu.id ? "text-[var(--cyan)]" : "text-white/80 hover:text-white"
								}`}>
								{menu.label}
								<ChevronDownIcon className={`h-4 w-4 transition-transform ${dropdown === menu.id ? "rotate-180" : ""}`} />
							</button>
							{dropdown === menu.id && (
								<div className="dropdown-panel absolute left-0 top-full mt-2 w-72 rounded-2xl p-2">
									{menu.items.map((p) => (
										<IconLink key={p.to} {...p} />
									))}
								</div>
							)}
						</div>
					))}
					{LINKS.map((l) =>
						l.plain ? (
							<a key={l.to} href={l.to} className={navClass({ isActive: false })}>{l.label}</a>
						) : (
							<NavLink key={l.to} to={l.to} className={navClass}>{l.label}</NavLink>
						),
					)}
					<Link to="/contact" className="btn-neon ml-2 rounded-xl bg-[var(--pink)] px-4 py-2 text-sm font-bold text-white">
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
				<nav aria-label="Menu mobile" className="max-h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-white/10 px-4 pb-6 pt-2 lg:hidden">
					{MENUS.map((menu) => (
						<div key={menu.id}>
							<p className="mt-4 px-3 text-xs font-bold uppercase tracking-[0.25em] text-[var(--pink)]">{menu.label}</p>
							{menu.items.map((p) => <IconLink key={p.to} {...p} big />)}
						</div>
					))}
					<div className="mt-4 border-t border-white/10 pt-2">
						{LINKS.map((l) => (
							<IconLink key={l.to} {...l} big />
						))}
					</div>
					<Link to="/contact" className="btn-neon mt-5 block rounded-xl bg-[var(--pink)] px-4 py-3 text-center font-bold text-white">
						Demander mon devis
					</Link>
				</nav>
			)}
		</header>
	);
}
