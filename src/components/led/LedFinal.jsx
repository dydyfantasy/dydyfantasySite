import { Link } from "react-router";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import perso240 from "../../assets/brand/perso-240.webp";
import perso440 from "../../assets/brand/perso-440.webp";

const LINKS = [
	{ to: "/qui-suis-je", label: "Qui suis-je ?" },
	{ to: "/prestations", label: "Mes prestations" },
	{ to: "/mon-approche", label: "Mon approche" },
	{ to: "/contact", label: "Contact" },
];

const SOCIALS = [
	{ name: "Facebook", url: "https://facebook.com/profile.php?id=61578462940099", Icon: FaFacebookF, color: "var(--cyan)" },
	{ name: "Instagram", url: "https://www.instagram.com/dydy_fantasy", Icon: FaInstagram, color: "var(--pink)" },
];

// Appel à l’action final, signé par la mascotte + liens internes (maillage SEO) + réseaux sociaux
// title / text optionnels : permettent à une page d’utiliser sa propre conclusion
export default function LedFinal({ title, text }) {
	return (
		<section aria-labelledby="final-titre" className="px-4 pb-24 pt-10">
			<ScrollReveal
				variant="zoom"
				className="final-panel mx-auto grid max-w-5xl items-center gap-6 overflow-hidden rounded-[2rem] px-6 py-12 text-center md:grid-cols-[15rem_minmax(0,1fr)] md:gap-10 md:px-12 md:text-left">
				{/* Mascotte Dydy Fantasy (signature) */}
				<img
					src={perso440}
					srcSet={`${perso240} 240w, ${perso440} 440w`}
					sizes="(min-width: 768px) 15rem, 10rem"
					alt="La mascotte Dydy Fantasy, micro à la main"
					width="440"
					height="573"
					loading="lazy"
					className="mascot-bounce mx-auto h-auto w-40 md:w-60"
				/>

				<div>
					<h2 id="final-titre" className="text-3xl font-extrabold leading-tight md:text-5xl">
						{title ?? (
							<>
								Prêt à faire <span className="text-[var(--pink)]">vibrer</span> votre{" "}
								<span className="text-[var(--cyan)]">événement</span> ?
							</>
						)}
					</h2>
					<p className="mt-4 max-w-xl text-white/75 max-md:mx-auto">
						{text ??
							"Parlez-moi de votre soirée : je vous propose une animation sur mesure pour votre lieu et votre public."}
					</p>
					<a
						href="/contact"
						className="btn-neon mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--pink)] px-8 py-4 text-lg font-bold text-white">
						Demander mon devis
						<ArrowRightIcon className="h-5 w-5" />
					</a>

					<div className="mt-8 flex justify-center gap-4 md:justify-start">
						{SOCIALS.map((social) => (
							<a
								key={social.name}
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`Suivre Dydy Fantasy sur ${social.name}`}
								style={{ "--c": social.color }}
								className="social-btn flex h-12 w-12 items-center justify-center rounded-full">
								<social.Icon className="h-5 w-5" />
							</a>
						))}
					</div>

					<nav aria-label="Découvrir le site" className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:justify-start">
						{LINKS.map((l) => (
							<Link key={l.to} to={l.to} className="inline-flex items-center gap-1 font-semibold text-white/70 hover:text-white">
								{l.label}
								<ArrowRightIcon className="h-3.5 w-3.5" />
							</Link>
						))}
					</nav>
				</div>
			</ScrollReveal>
		</section>
	);
}
