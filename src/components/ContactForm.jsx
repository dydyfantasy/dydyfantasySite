import { FaWhatsapp } from "react-icons/fa";

export default function ContactForm() {
	return (
		<section className="max-w-5xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg">
			<h1 className="text-3xl font-bold mb-6 text-center title-site title-page">
				Contactez Dydy Fantasy – Animateur d’événements à Toulouse et ses
				environs
			</h1>

			<form
				action="https://formspree.io/f/xrblvkvp" // ← Remplace par ton URL Formspree
				method="POST"
				className="flex flex-col gap-4">
				<input
					type="text"
					name="name"
					placeholder="Votre nom"
					className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
					required
				/>

				<input
					type="text"
					name="entreprise"
					placeholder="Votre entreprise"
					className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
				/>

				<input
					type="email"
					name="email"
					placeholder="Votre email"
					className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
					pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
					required
				/>

				<input
					type="tel"
					name="telephone"
					placeholder="Votre téléphone"
					pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
					className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
				/>
				<textarea
					name="message"
					placeholder="Votre message"
					className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
					rows={5}
					required></textarea>

				<button
					type="submit"
					className="bg-purple-500 font-bold py-3 rounded hover:bg-purple-600 transition">
					Envoyer
				</button>
			</form>
		</section>
	);
}
