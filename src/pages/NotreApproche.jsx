import Prestations from "../components/Prestations";
import { Helmet } from "react-helmet";
import OurApproach from "../components/OurApproach";
function NotreApproche() {
	return (
		<>
			<Helmet>
				<title>
					Dydy Fantasy – Notre approche pour animer vos événements à Toulouse
				</title>
				<meta
					name="description"
					content="Découvrez l’approche unique de Dydy Fantasy à Toulouse : blind tests, quiz et animations interactives pour vos soirées et événements privés."
				/>
				<link
					rel="canonical"
					href="https://www.dydyfantasy.fr/notre-approche"
				/>
			</Helmet>
			<OurApproach />
		</>
	);
}

export default NotreApproche;
