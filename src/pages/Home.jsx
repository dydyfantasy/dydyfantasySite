import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import OfferCards from "../components/OfferCards";
import MiniCards from "../components/MiniCards";

function Home() {
	return (
		<>
			<Helmet>
				<title>
					Dydy Fantasy – Animateur & Organisateur d’Événements à Toulouse
				</title>
				<meta
					name="description"
					content="BDydy Fantasy – Animateur et organisateur d'événements à Toulouse : blind tests, quiz et animations pour soirées, bars et événements privés."
				/>

				{/* Balises pour le partage sur Facebook/Twitter */}
				<meta property="og:title" content="Dydy Fantasy | Accueil" />
				<meta
					property="og:description"
					content="Blind tests, quiz et animations inoubliables pour vos soirées !"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://dydyfantasy.fr/" />
				<meta
					property="og:image"
					content="https://dydyfantasy.fr/dydy_fantasy_logo.webp"
				/>

				<meta name="twitter:card" content="summary_large_image" />
				<link rel="canonical" href="https://www.dydyfantasy.fr/" />
			</Helmet>
			<Hero />
			<OfferCards />
			<MiniCards />
		</>
	);
}

export default Home;
