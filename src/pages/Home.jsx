import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import MiniCards from "../components/MiniCards";
import Reseaux from "../components/reseaux";
import VideoPresentation from "../components/videoPresentation";
import Reveal from "../components/Reveal";
import GoogleReviewsSection from "../components/GoogleReviewsSection";
import AgendaSection from "../components/AgendaSection";
import TrustedBySection from "../components/TrustedBySection";

function Home() {
	return (
		<div className="bg-gray-900">
			<Helmet>
				<title>
					Dydy Fantasy | Blind test, quiz, karaoké et animation événementielle à
					Toulouse
				</title>

				<meta
					name="description"
					content="Dydy Fantasy anime vos événements à Toulouse et en Occitanie : blind tests, quiz interactifs, karaokés, soirées privées, mariages et événements d’entreprise."
				/>

				<link rel="canonical" href="https://dydyfantasy.fr/" />

				<meta
					property="og:title"
					content="Dydy Fantasy | Animation événementielle à Toulouse"
				/>

				<meta
					property="og:description"
					content="Blind tests, quiz interactifs, karaokés et animations sur mesure pour vos événements à Toulouse et en Occitanie."
				/>

				<meta property="og:url" content="https://dydyfantasy.fr/" />
				<meta property="og:type" content="website" />

				<script type="application/ld+json">
					{JSON.stringify({
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
					})}
				</script>
			</Helmet>

			<Hero />

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
