import Seo from "../components/Seo";
import "@fontsource/doto/900.css";
import "@fontsource/sora/400.css";
import "@fontsource/sora/600.css";
import "@fontsource/sora/700.css";
import "@fontsource/permanent-marker";
import "../css/led.css";
import HeroLed from "../components/led/HeroLed";
import MiniCards from "../components/MiniCards";
import Reseaux from "../components/Reseaux";
import VideoPresentation from "../components/VideoPresentation";
import GoogleReviewsSection from "../components/GoogleReviewsSection";
import AgendaSection from "../components/AgendaSection";
import TrustedBySection from "../components/TrustedBySection";

function Home() {
	return (
		<div className="bg-gray-900">
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

			<MiniCards />
			<AgendaSection />
			<TrustedBySection />

			<GoogleReviewsSection />

			<VideoPresentation />

			<Reseaux />
		</div>
	);
}

export default Home;
