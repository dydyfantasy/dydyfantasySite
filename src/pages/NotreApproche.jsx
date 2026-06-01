import { Helmet } from "react-helmet";
import OurApproach from "../components/OurApproach";

function NotreApproche() {
	return (
		<>
			<Helmet>
				<title>
					Dydy Fantasy | Mon approche pour animer vos événements à Toulouse
				</title>

				<meta
					name="description"
					content="Découvrez l’approche Dydy Fantasy à Toulouse : écoute, personnalisation, préparation et animation interactive pour vos soirées, blind tests, quiz, karaokés et événements sur mesure."
				/>

				<link rel="canonical" href="https://dydyfantasy.fr/mon-approche" />

				<meta
					property="og:title"
					content="Dydy Fantasy | Mon approche d’animation événementielle"
				/>

				<meta
					property="og:description"
					content="Une méthode simple, claire et personnalisée pour créer une animation interactive, conviviale et adaptée à votre public."
				/>

				<meta property="og:url" content="https://dydyfantasy.fr/mon-approche" />

				<meta property="og:type" content="website" />
			</Helmet>

			<OurApproach />
		</>
	);
}

export default NotreApproche;
