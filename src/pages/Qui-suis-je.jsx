import Presentation from "../components/Presentation";
import { Helmet } from "react-helmet";
function QuiSuisje() {
	return (
		<>
			<Helmet>
				<title>
					Dydy Fantasy – Animateur professionnel et créateur d’expériences à
					Toulouse et ses environs
				</title>
				<meta
					name="description"
					content="Découvrez Dydy Fantasy, animateur à Toulouse et ses environs spécialisé en blind tests, quiz et animations sur mesure pour vos soirées et événements privés."
				/>
				<link rel="canonical" href="https://www.dydyfantasy.fr/qui-suis-je" />
			</Helmet>
			<Presentation />
		</>
	);
}

export default QuiSuisje;
