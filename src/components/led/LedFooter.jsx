import { Link } from "react-router";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";
import logo480 from "../../assets/brand/logo-texte-480.webp";
import perso240 from "../../assets/brand/perso-240.webp";
import { PRESTATIONS, EVENEMENTS } from "../../data/navigation";

const SITE_LINKS = [
	{ to: "/qui-suis-je", label: "Qui suis-je ?" },
	{ to: "/mon-approche", label: "Mon approche" },
	{ to: "/galerie", label: "Galerie photos & vidéos" },
	{ to: "/#agenda", label: "Agenda", plain: true },
	{ to: "/contact", label: "Contact & devis" },
];

const SOCIALS = [
	{ name: "Facebook", url: "https://facebook.com/profile.php?id=61578462940099", Icon: FaFacebookF, color: "var(--cyan)" },
	{ name: "Instagram", url: "https://www.instagram.com/dydy_fantasy", Icon: FaInstagram, color: "var(--pink)" },
];

function Column({ title, links }) {
	return (
		<div>
			<p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--pink)]">{title}</p>
			<ul className="mt-4 space-y-2.5">
				{links.map((l) => (
					<li key={l.to}>
						{l.plain ? (
							<a href={l.to} className="text-sm text-white/70 hover:text-white">{l.label}</a>
						) : (
							<Link to={l.to} className="text-sm text-white/70 hover:text-white">{l.label}</Link>
						)}
					</li>
				))}
			</ul>
		</div>
	);
}

// Pied de page : identité, coordonnées (NAP cohérent avec la fiche Google), liens (maillage SEO).
export default function LedFooter() {
	const year = new Date().getFullYear();

	return (
		<footer className="led border-t border-white/10 bg-[var(--ink)] px-4 pb-28 pt-14 text-white md:pb-8">
			<div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
				<div>
					<Link to="/" aria-label="Dydy Fantasy, retour à l’accueil" className="flex items-end gap-3">
						<img src={perso240} alt="" width="240" height="313" loading="lazy" className="h-20 w-auto" />
						<img src={logo480} alt="Dydy Fantasy" width="480" height="86" className="mb-2 h-8 w-auto" />
					</Link>
					<p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
						Animateur blind test, quiz, karaoké et DJ à Toulouse : des soirées où le public joue,
						chante et danse.
					</p>
					<ul className="mt-5 space-y-2 text-sm text-white/75">
						<li className="flex items-center gap-2">
							<MapPinIcon className="h-4 w-4 text-[var(--cyan)]" />
							Basé à Fonsorbes · Toulouse, Haute-Garonne, Gers, Tarn
						</li>
						<li className="flex items-center gap-2">
							<PhoneIcon className="h-4 w-4 text-[var(--cyan)]" />
							<a href="tel:+33695953356" className="hover:text-white">06 95 95 33 56</a>
						</li>
					</ul>
					<div className="mt-5 flex gap-3">
						{SOCIALS.map((s) => (
							<a
								key={s.name}
								href={s.url}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`Dydy Fantasy sur ${s.name}`}
								style={{ "--c": s.color }}
								className="social-btn flex h-10 w-10 items-center justify-center rounded-full">
								<s.Icon className="h-4 w-4" />
							</a>
						))}
					</div>
				</div>

				<Column title="Prestations" links={PRESTATIONS} />
				<Column title="Événements" links={EVENEMENTS} />
				<Column title="Dydy Fantasy" links={SITE_LINKS} />
			</div>

			<div className="mx-auto mt-12 flex max-w-6xl flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:justify-between">
				<p>© {year} Dydy Fantasy · Animation événementielle à Toulouse</p>
				<Link to="/privacy" className="hover:text-white/80">Confidentialité de l’application Dydy Quiz</Link>
			</div>
		</footer>
	);
}
