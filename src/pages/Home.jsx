import Seo from "../components/Seo";
import "@fontsource/sora/400.css";
import "@fontsource/sora/600.css";
import "../css/led.css";
import HeroLed from "../components/led/HeroLed";
import LedAgenda from "../components/led/LedAgenda";
import LedClients from "../components/led/LedClients";
import LedReviews from "../components/led/LedReviews";
import LedVideo from "../components/led/LedVideo";
import LedFinal from "../components/led/LedFinal";

function Home() {
	return (
		<div className="led bg-[var(--ink)] text-white">
			<Seo
				path="/"
				title="Dydy Fantasy | Blind test, quiz, karaoké et animation événementielle à Toulouse"
				description="Dydy Fantasy anime vos événements à Toulouse et en Occitanie : blind tests, quiz interactifs, karaokés, soirées privées, mariages et événements d’entreprise."
				ogTitle="Dydy Fantasy | Animation événementielle à Toulouse"
				ogDescription="Blind tests, quiz interactifs, karaokés et animations sur mesure pour vos événements à Toulouse et en Occitanie."
			/>

			{/* Données structurées (à fusionner avec celles de root.jsx en phase 2) */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "LocalBusiness",
						name: "Dydy Fantasy",
						url: "https://dydyfantasy.fr",
						image: "https://dydyfantasy.fr/dydy_fantasy_logo-v3.webp",
						description:
							"Animateur événementiel à Toulouse spécialisé en blind tests, quiz interactifs, karaokés et animations sur mesure.",
						telephone: "+33695953356",
						address: {
							"@type": "PostalAddress",
							addressLocality: "Toulouse",
							addressRegion: "Occitanie",
							addressCountry: "FR",
						},
						areaServed: [
							"Toulouse",
							"Blagnac",
							"Colomiers",
							"Tournefeuille",
							"Balma",
							"Ramonville-Saint-Agne",
							"Occitanie",
						],
						sameAs: [
							"https://facebook.com/profile.php?id=61578462940099",
							"https://www.instagram.com/dydy_fantasy",
						],
					}),
				}}
			/>

			<HeroLed />

			<LedAgenda />
			<LedClients />
			<LedReviews />
			<LedVideo />
			<LedFinal />
		</div>
	);
}

export default Home;
