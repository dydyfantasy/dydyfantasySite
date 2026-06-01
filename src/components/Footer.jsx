import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import {
	MapPinIcon,
	SparklesIcon,
	ArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import dydyImage from "/dydy_fantasy_logo-v3.webp";

const socialLinks = [
	{
		name: "Facebook",
		icon: FaFacebookF,
		url: "https://facebook.com/profile.php?id=61578462940099",
	},
	{
		name: "Instagram",
		icon: FaInstagram,
		url: "https://www.instagram.com/dydy_fantasy",
	},
];

const navigationLinks = [
	{
		label: "Qui suis-je ?",
		to: "/qui-suis-je",
	},
	{
		label: "Mes prestations",
		to: "/prestations",
	},
	{
		label: "Mon approche",
		to: "/mon-approche",
	},
	{
		label: "Contact",
		to: "/contact",
	},
];

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer
			className="relative overflow-hidden bg-[#070711] px-4 py-12 text-gray-300"
			role="contentinfo">
			{/* Ligne lumineuse haute */}
			<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />

			{/* Fonds lumineux discrets */}
			<div className="pointer-events-none absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
			<div className="pointer-events-none absolute right-[-120px] bottom-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

			<div className="relative z-10 mx-auto max-w-7xl">
				<div className="grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_0.8fr_1fr]">
					{/* Marque / présentation */}
					<div>
						<Link
							to="/"
							className="inline-flex items-center"
							aria-label="Retour à l’accueil Dydy Fantasy">
							<img
								src={dydyImage}
								alt="Dydy Fantasy - Animation interactive"
								className="h-16 w-auto max-w-[260px] object-contain"
							/>
						</Link>

						<p className="mt-5 max-w-md text-sm leading-relaxed text-gray-400">
							J’anime vos événements à Toulouse et en Occitanie : blind tests,
							quiz interactifs, karaokés, mariages, anniversaires, soirées
							privées et événements d’entreprise.
						</p>

						<div className="mt-5 inline-flex items-center gap-2 rounded-full border border-pink-400/20 bg-pink-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-pink-200">
							<SparklesIcon className="h-4 w-4" />
							Animateur événementiel à Toulouse
						</div>
					</div>

					{/* Navigation */}
					<nav aria-label="Navigation du footer">
						<h3 className="text-sm font-black uppercase tracking-[0.22em] text-white">
							Navigation
						</h3>

						<ul className="mt-5 space-y-3 text-sm">
							{navigationLinks.map((link) => (
								<li key={link.to}>
									<Link
										to={link.to}
										className="group inline-flex items-center gap-2 text-gray-400 transition hover:text-white">
										<span>{link.label}</span>
										<ArrowUpRightIcon className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
									</Link>
								</li>
							))}
						</ul>
					</nav>

					{/* Contact / réseaux */}
					<div>
						<h3 className="text-sm font-black uppercase tracking-[0.22em] text-white">
							Contact & réseaux
						</h3>

						<address className="mt-5 space-y-3 not-italic text-sm text-gray-400">
							<p className="flex items-start gap-2">
								<MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-pink-300" />
								<span>Toulouse, Haute-Garonne, Occitanie, France</span>
							</p>
						</address>

						<div className="mt-6 flex items-center gap-3">
							{socialLinks.map((social) => {
								const Icon = social.icon;

								return (
									<a
										key={social.name}
										href={social.url}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={`Suivre Dydy Fantasy sur ${social.name}`}
										className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-white transition-all duration-300 hover:-translate-y-1 hover:border-pink-300/40 hover:bg-pink-500/15 hover:text-pink-200">
										<Icon className="h-5 w-5" />
									</a>
								);
							})}
						</div>

						<Link
							to="/contact"
							className="mt-6 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-pink-600 to-purple-700 px-5 py-3 text-sm font-black text-white shadow-[0_0_24px_rgba(236,72,153,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_36px_rgba(236,72,153,0.55)]">
							Me contacter
						</Link>
					</div>
				</div>

				{/* Bas footer */}
				<div className="mt-10 border-t border-white/10 pt-6">
					<div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-gray-500 md:flex-row md:text-left">
						<p>© {currentYear} Dydy Fantasy. Tous droits réservés.</p>

						<p>
							Animation d’événements à Toulouse : mariages, anniversaires,
							soirées privées et événements d’entreprise.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
