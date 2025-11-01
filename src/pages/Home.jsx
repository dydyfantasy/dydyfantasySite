import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import OfferCards from "../components/OfferCards";
import MiniCards from "../components/MiniCards";
import Reseaux from "../components/reseaux";
import VideoPresentation from "../components/videoPresentation";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

function Home() {
	return (
		<div className=" bg-gray-900">
			<Helmet>
				<title>
					Dydy Fantasy – Animateur & Organisateur d’Événements à Toulouse
				</title>
				<meta
					name="description"
					content="Dydy Fantasy – Animateur et organisateur d'événements à Toulouse : blind tests, quiz et animations pour soirées, bars et événements privés."
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
			<div className="flex bg-gray-900 text-white font-bold flex-col justify-center items-center gap-6 pb-16 ">
				<h2 className="title-header title-site text-center ">
					ILS ONT AIMÉ NOS ANIMATIONS
				</h2>
				<div className="w-full overflow-hidden">
					<ReactGoogleReviews
						layout="carousel"
						featurableId="07455073-608e-491d-94e1-433314951082"
						theme="dark"
					/>
				</div>
			</div>
			<VideoPresentation />
			<div className="flex bg-gray-900 text-white font-bold flex-col justify-center items-center gap-6 pb-16 ">
				<h1 className="title-header title-site text-center">
					RETROUVEZ TOUTES NOS ANIMATIONS
				</h1>

				<Reseaux />
			</div>
		</div>
	);
}

export default Home;
