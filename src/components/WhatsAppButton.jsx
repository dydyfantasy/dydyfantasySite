import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
	return (
		<a
			href="https://wa.me/33695953356?text=Bonjour%20Dydy%20Fantasy%20!%20Je%20souhaite%20en%20savoir%20plus."
			target="_blank"
			rel="noopener noreferrer"
			className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition">
			<FaWhatsapp className="w-10 h-10" />
		</a>
	);
}

export default WhatsAppButton;
