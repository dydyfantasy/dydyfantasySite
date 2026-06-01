import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
	return (
		<a
			href="https://wa.me/33695953356?text=Bonjour%20Dydy%20Fantasy%20!%20Je%20souhaite%20en%20savoir%20plus."
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Contacter Dydy Fantasy sur WhatsApp"
			className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:bg-green-600 md:bottom-6 md:right-6 md:h-[72px] md:w-[72px]">
			<FaWhatsapp className="h-8 w-8 md:h-10 md:w-10" />
		</a>
	);
}

export default WhatsAppButton;
