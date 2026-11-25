import { Link } from "react-router";
import Seo from "../components/Seo";
import StageLights from "../components/led/StageLights";

// Mentions légales (LCEN, art. 6) + politique de confidentialité du site (RGPD).
// Page sobre et lisible : pas d’animation. noindex (comme /privacy) et hors sitemap :
// elle contient l’adresse postale de l’entrepreneur, inutile dans les résultats Google.
// À tenir à jour si un service change (formulaire, hébergeur, outil de statistiques…).

const MAJ = "25 novembre 2026";
const EMAIL = "contact@dydyfantasy.fr";

function Section({ id, title, children }) {
	return (
		<section id={id} className="mb-10 scroll-mt-28">
			<h2 className="mb-4 text-2xl font-semibold">{title}</h2>
			<div className="space-y-4 leading-7 text-gray-200">{children}</div>
		</section>
	);
}

const Mail = () => (
	<a href={`mailto:${EMAIL}`} className="text-[var(--cyan)] underline underline-offset-2">
		{EMAIL}
	</a>
);

export default function MentionsLegales() {
	return (
		<div className="led fun relative isolate overflow-hidden bg-[var(--ink)] text-white">
			<StageLights />
			<Seo
				path="/mentions-legales"
				title="Mentions légales et confidentialité | Dydy Fantasy"
				description="Mentions légales du site dydyfantasy.fr et politique de confidentialité : éditeur, hébergeur, données du formulaire de contact, cookies."
				noindex
			/>

			<div className="px-6 py-16">
				<div className="neon-card mx-auto max-w-4xl rounded-3xl p-8 md:p-12">
					<h1 className="mb-4 text-3xl font-bold md:text-4xl">Mentions légales et confidentialité</h1>
					<p className="mb-10 text-gray-300">Dernière mise à jour : {MAJ}</p>

					<Section id="editeur" title="1. Éditeur du site">
						<p>
							Le site <strong>dydyfantasy.fr</strong> est édité par <strong>Dylan Sanson</strong>, entrepreneur
							individuel (micro-entreprise) exerçant sous le nom commercial <strong>Dydy Fantasy</strong> (animation événementielle).
						</p>
						<ul className="list-disc space-y-1 pl-6">
							<li>SIRET : 991 546 730 00011</li>
							<li>Adresse : 22 rue Bernard Maris, 31470 Fonsorbes, France</li>
							<li>
								Téléphone : <a href="tel:+33695953356" className="text-[var(--cyan)] underline underline-offset-2">06 95 95 33 56</a>
							</li>
							<li>
								E-mail : <Mail />
							</li>
						</ul>
						<p>Directeur de la publication : Dylan Sanson.</p>
					</Section>

					<Section id="hebergeur" title="2. Hébergeur">
						<p>
							OVH SAS, 2 rue Kellermann, 59100 Roubaix, France. Téléphone : 1007 (depuis la France).
						</p>
					</Section>

					<Section id="propriete" title="3. Propriété intellectuelle">
						<p>
							Les textes, photos, vidéos, le logo et la mascotte Dydy Fantasy sont la propriété de leur auteur.
							Toute reproduction sans autorisation est interdite. Les logos des clients et partenaires
							appartiennent à leurs propriétaires respectifs et ne sont affichés qu’à titre de référence.
						</p>
						<p>
							Vous apparaissez sur une photo ou une vidéo du site et souhaitez qu’elle soit retirée ? Écrivez-moi
							à <Mail /> : elle sera retirée dans les meilleurs délais.
						</p>
					</Section>

					<Section id="donnees" title="4. Données personnelles (formulaire de contact)">
						<p>
							Le responsable du traitement est Dylan Sanson (Dydy Fantasy), joignable à <Mail />.
						</p>
						<p>
							<strong>Données collectées</strong> : uniquement ce que vous saisissez dans le formulaire de demande
							de devis, à savoir nom, entreprise (facultatif), e-mail, téléphone, type d’événement, date, lieu et
							message.
						</p>
						<p>
							<strong>Utilisation</strong> : répondre à votre demande et vous établir un devis, à votre demande
							(mesures précontractuelles). Vos données ne sont ni vendues, ni cédées, ni utilisées pour de la
							publicité.
						</p>
						<p>
							<strong>Transmission</strong> : le formulaire est acheminé par le service Formspree (Formspree, Inc.,
							États-Unis), qui me transmet votre message par e-mail. Formspree agit comme sous-traitant technique
							(voir sa{" "}
							<a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[var(--cyan)] underline underline-offset-2">
								politique de confidentialité
							</a>
							).
						</p>
						<p>
							<strong>Durée de conservation</strong> : 3 ans après notre dernier échange, puis suppression. Si une
							prestation est réalisée, les informations figurant sur les devis et factures sont conservées le temps
							exigé par la loi.
						</p>
						<p>
							<strong>Vos droits</strong> : vous pouvez demander l’accès à vos données, leur rectification, leur
							effacement, leur limitation, leur portabilité ou vous opposer à leur traitement, en écrivant à{" "}
							<Mail />. Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à
							la CNIL (
							<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[var(--cyan)] underline underline-offset-2">
								cnil.fr
							</a>
							).
						</p>
						<p>
							Vous pouvez aussi me contacter directement par téléphone, WhatsApp, Facebook ou Instagram : ces
							échanges sont alors soumis aux règles de ces services.
						</p>
					</Section>

					<Section id="cookies" title="5. Cookies et services tiers">
						<p>
							<strong>Ce site n’utilise aucun cookie</strong> de mesure d’audience ni de publicité, et ne dépose
							rien sur votre appareil pour vous suivre. C’est pourquoi aucun bandeau de consentement ne s’affiche.
						</p>
						<p>Certains contenus proviennent de services extérieurs, qui reçoivent votre adresse IP pour les afficher :</p>
						<ul className="list-disc space-y-1 pl-6">
							<li>
								<strong>Avis Google</strong> : affichés via le service Featurable, avec les photos de profil des
								auteurs hébergées par Google.
							</li>
							<li>
								<strong>Carte de la zone d’intervention</strong> : fonds de carte OpenStreetMap.
							</li>
							<li>
								<strong>Carte Google Maps de l’agenda</strong> : chargée seulement si vous cliquez sur « Afficher la
								carte ». Google peut alors déposer ses propres cookies, selon sa politique de confidentialité.
							</li>
							<li>
								<strong>Liens vers WhatsApp, Facebook et Instagram</strong> : ces services ne sont contactés que si
								vous cliquez.
							</li>
						</ul>
					</Section>

					<Section id="appli" title="6. Application Dydy Quiz">
						<p>
							La politique de confidentialité de l’application Dydy Quiz est disponible sur une page dédiée :{" "}
							<Link to="/privacy" className="text-[var(--cyan)] underline underline-offset-2">
								confidentialité de l’appli Dydy Quiz
							</Link>
							.
						</p>
					</Section>
				</div>
			</div>
		</div>
	);
}
