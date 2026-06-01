import { Helmet } from "react-helmet";
import Presentation from "../components/Presentation";

function QuiSuisje() {
	return (
		<>
			<Helmet>
				<title>
					Dydy Fantasy | Qui suis-je ? Animateur événementiel à Toulouse
				</title>

				<meta
					name="description"
					content="Découvrez Dydy Fantasy, animateur événementiel à Toulouse spécialisé en blind tests, quiz interactifs, karaokés et animations sur mesure pour soirées privées, bars, restaurants et événements professionnels."
				/>

				<link rel="canonical" href="https://dydyfantasy.fr/qui-suis-je" />

				<meta
					property="og:title"
					content="Dydy Fantasy | Animateur événementiel à Toulouse"
				/>

				<meta
					property="og:description"
					content="Blind tests, quiz interactifs, karaokés et animations sur mesure pour vos événements à Toulouse et en Occitanie."
				/>

				<meta property="og:url" content="https://dydyfantasy.fr/qui-suis-je" />

				<meta property="og:type" content="website" />
			</Helmet>

			<Presentation />
		</>
	);
}

export default QuiSuisje;
