import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import {
	CheckIcon,
	MapPinIcon,
	SparklesIcon,
	ClockIcon,
	PhoneIcon,
	DocumentTextIcon,
} from "@heroicons/react/24/outline";
import Seo from "../components/Seo";
import StageLights from "../components/led/StageLights";
import ScrollReveal from "../components/led/ScrollReveal";
import ContactForm from "../components/ContactForm";
import tete64 from "../assets/brand/perso-tete-64.webp";
import tete128 from "../assets/brand/perso-tete-128.webp";

// Textes repris de l’ancienne page Contact (zone mise à jour : Fonsorbes, rayon de 50 km).

const CHECKLIST = [
	"La date de l’événement",
	"Le lieu ou la ville",
	"Le nombre approximatif de participants",
	"Le type d’animation souhaité",
	"L’ambiance recherchée",
];

const INFOS = [
	{ icon: MapPinIcon, color: "var(--cyan)", title: "Zone d’intervention", text: "Basé à Fonsorbes, dans un rayon de 50 km autour de Toulouse" },
	{ icon: SparklesIcon, color: "var(--pink)", title: "Formats possibles", text: "Blind test, quiz interactif, karaoké, DJ, soirée privée, mariage ou événement pro" },
	{ icon: ClockIcon, color: "var(--gold)", title: "Réponse", text: "Je reviens vers vous rapidement pour échanger sur votre projet" },
];

const DIRECT = [
	{ name: "WhatsApp", url: "https://wa.me/33695953356?text=Bonjour%20Dydy%20Fantasy%20!%20Je%20souhaite%20en%20savoir%20plus.", Icon: FaWhatsapp, color: "#3ddc84" },
	{ name: "Facebook", url: "https://facebook.com/profile.php?id=61578462940099", Icon: FaFacebookF, color: "var(--cyan)" },
	{ name: "Instagram", url: "https://www.instagram.com/dydy_fantasy", Icon: FaInstagram, color: "var(--pink)" },
];

function Contact() {
	return (
		<div className="led relative isolate overflow-hidden bg-[var(--ink)] text-white">
			<StageLights />
			<Seo
				path="/contact"
				title="Contact et devis animation à Toulouse | Dydy Fantasy"
				description="Contactez Dydy Fantasy pour animer votre événement à Toulouse et en Occitanie : blind test, quiz interactif, karaoké, soirée privée, mariage ou événement professionnel."
				ogTitle="Dydy Fantasy | Contact animation événementielle à Toulouse"
				ogDescription="Parlez-moi de votre événement : blind test, quiz, karaoké ou animation sur mesure à Toulouse et en Occitanie."
			/>

			{/* ---- En-tête ---- */}
			<section className="px-4 pb-8 pt-10 md:pt-14">
				<div className="mx-auto max-w-6xl">
					<p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[var(--pink)]">
						<span className="live-dot h-2 w-2 rounded-full bg-[var(--pink)]" aria-hidden="true" />
						Contact
					</p>
					<h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
						Parlez-moi de votre événement,{" "}
						<span className="text-[var(--cyan)]">je vous propose une animation adaptée.</span>
					</h1>
					<p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/80">
						Blind test, quiz interactif, karaoké, animation de bar, soirée privée, mariage ou événement
						professionnel : envoyez-moi votre demande et je vous réponds avec une proposition claire.
					</p>
				</div>
			</section>

			{/* ---- Formulaire (priorité) + infos ---- */}
			<section className="px-4 pb-24">
				<div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)]">
					{/* Formulaire */}
					<ScrollReveal id="devis" className="neon-card scroll-mt-28 rounded-3xl p-6 md:p-8" style={{ "--c": "var(--pink)" }}>
						<p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[var(--pink)]">
							<DocumentTextIcon aria-hidden="true" className="h-4 w-4" />
							Demande de devis
						</p>
						<h2 className="mt-2 text-2xl font-extrabold md:text-3xl">Expliquez-moi votre projet.</h2>
						<p className="mt-2 text-white/70">
							Plus vous me donnez d’informations, plus je pourrai vous proposer une animation adaptée.
						</p>
						<div className="mt-6">
							<ContactForm />
						</div>
					</ScrollReveal>

					{/* Colonne d’infos */}
					<aside className="space-y-6 lg:sticky lg:top-24">
						{/* Avant de m’écrire */}
						<ScrollReveal variant="right" className="neon-card rounded-3xl p-6" style={{ "--c": "var(--cyan)" }}>
							<div className="flex items-center gap-3">
								<img src={tete64} srcSet={`${tete64} 1x, ${tete128} 2x`} alt="" width="64" height="64" className="h-11 w-11 rounded-full ring-2 ring-[var(--cyan)]" />
								<div>
									<h2 className="font-extrabold">Avant de m’écrire</h2>
									<p className="text-sm text-white/65">Quelques infos utiles à me donner.</p>
								</div>
							</div>
							<ul className="mt-4 space-y-2">
								{CHECKLIST.map((item) => (
									<li key={item} className="flex items-start gap-2 text-sm text-white/85">
										<CheckIcon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--cyan)]" />
										{item}
									</li>
								))}
							</ul>
						</ScrollReveal>

						{/* Infos pratiques */}
						<ScrollReveal variant="right" delay={100}>
							<ul className="space-y-4">
								{INFOS.map((info) => (
									<li key={info.title} className="flex gap-3" style={{ "--c": info.color }}>
										<span className="menu-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
											<info.icon aria-hidden="true" className="h-5 w-5" />
										</span>
										<div>
											<p className="font-bold">{info.title}</p>
											<p className="text-sm text-white/70">{info.text}</p>
										</div>
									</li>
								))}
							</ul>
						</ScrollReveal>

						{/* Contact direct */}
						<ScrollReveal variant="right" delay={200} className="border-t border-white/10 pt-6">
							<p className="text-sm font-bold uppercase tracking-[0.2em] text-white/55">Ou directement</p>
							<a href="tel:+33695953356" className="mt-3 flex items-center gap-2 text-lg font-bold hover:text-[var(--cyan)]">
								<PhoneIcon aria-hidden="true" className="h-5 w-5 text-[var(--cyan)]" />
								06 95 95 33 56
							</a>
							<div className="mt-4 flex gap-3">
								{DIRECT.map((d) => (
									<a
										key={d.name}
										href={d.url}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={`Contacter Dydy Fantasy sur ${d.name}`}
										style={{ "--c": d.color }}
										className="social-btn flex h-12 w-12 items-center justify-center rounded-full">
										<d.Icon className="h-5 w-5" />
									</a>
								))}
							</div>
						</ScrollReveal>
					</aside>
				</div>
			</section>
		</div>
	);
}

export default Contact;
