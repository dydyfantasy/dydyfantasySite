import { Helmet } from "react-helmet";
import ContactForm from "../components/ContactForm";
function NotreApproche() {
	return (
		<>
			<Helmet>
				<title>
					Contactez Dydy Fantasy – Animateur & Événements à Toulouse
				</title>
				<meta
					name="description"
					content="Prenez contact avec Dydy Fantasy à Toulouse pour animer vos soirées et événements privés avec blind tests, quiz et animations interactives."
				/>
				<link rel="canonical" href="https://www.dydyfantasy.fr/contact" />
			</Helmet>
			<div className="min-h-screen py-16 bg-gray-900">
				<ContactForm />
			</div>
		</>
	);
}

export default NotreApproche;
