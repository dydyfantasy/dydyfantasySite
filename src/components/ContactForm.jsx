import { useEffect, useRef } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

const inputClass =
	"w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-base text-white placeholder:text-white/35 outline-none transition focus:border-[var(--cyan)] focus:ring-2 focus:ring-[var(--cyan)]/30 [color-scheme:dark]";

const labelClass = "mb-2 block text-sm font-semibold text-white/80";

export default function ContactForm() {
	const typeRef = useRef(null);
	const messageRef = useRef(null);

	// Pré-remplissage depuis l’adresse (ex. configurateur « Composez votre soirée ») :
	// /contact?type=Mariage&message=… — appliqué après le chargement, le HTML pré-rendu reste vide.
	useEffect(() => {
		const q = new URLSearchParams(window.location.search);
		const type = q.get("type");
		const message = q.get("message");
		if (type && typeRef.current && [...typeRef.current.options].some((o) => o.value === type)) typeRef.current.value = type;
		if (message && messageRef.current && !messageRef.current.value) messageRef.current.value = message;
	}, []);

	return (
		<form
			action="https://formspree.io/f/xrblvkvp"
			method="POST"
			className="space-y-5">
			<input
				type="text"
				name="_gotcha"
				className="hidden"
				tabIndex="-1"
				autoComplete="off"
			/>

			<input
				type="hidden"
				name="_subject"
				value="Nouvelle demande de devis - Dydy Fantasy"
			/>

			<div className="grid grid-cols-1 gap-5 md:grid-cols-2">
				<div>
					<label htmlFor="name" className={labelClass}>
						Votre nom *
					</label>
					<input
						id="name"
						type="text"
						name="name"
						placeholder="Ex : Julien Martin"
						className={inputClass}
						required
					/>
				</div>

				<div>
					<label htmlFor="entreprise" className={labelClass}>
						Entreprise / établissement
					</label>
					<input
						id="entreprise"
						type="text"
						name="entreprise"
						placeholder="Ex : Bar, restaurant, société..."
						className={inputClass}
					/>
				</div>
			</div>

			<div className="grid grid-cols-1 gap-5 md:grid-cols-2">
				<div>
					<label htmlFor="email" className={labelClass}>
						E-mail *
					</label>
					<input
						id="email"
						type="email"
						name="email"
						placeholder="votre@email.com"
						className={inputClass}
						required
					/>
				</div>

				<div>
					<label htmlFor="telephone" className={labelClass}>
						Téléphone
					</label>
					<input
						id="telephone"
						type="tel"
						name="telephone"
						placeholder="06 00 00 00 00"
						className={inputClass}
					/>
				</div>
			</div>

			<div className="grid grid-cols-1 gap-5 md:grid-cols-2">
				<div>
					<label htmlFor="eventType" className={labelClass}>
						Type d’événement
					</label>
					<select
						ref={typeRef}
						id="eventType"
						name="type_evenement"
						className={inputClass}
						defaultValue="">
						<option value="" disabled>
							Choisir un format
						</option>
						<option value="Blind test">Blind test</option>
						<option value="Quiz interactif">Quiz interactif</option>
						<option value="Karaoké">Karaoké</option>
						<option value="DJ">DJ</option>
						<option value="Mariage">Mariage</option>
						<option value="Anniversaire">Anniversaire</option>
						<option value="Soirée privée">Soirée privée</option>
						<option value="Bar / restaurant">Bar / restaurant</option>
						<option value="Événement entreprise">Événement entreprise</option>
						<option value="Animation micro / speaker">Animation micro / speaker</option>
						<option value="Animation sur mesure">Animation sur mesure</option>
					</select>
				</div>

				<div>
					<label htmlFor="date" className={labelClass}>
						Date prévue
					</label>
					<input
						id="date"
						type="date"
						name="date_evenement"
						className={inputClass}
					/>
				</div>
			</div>

			<div>
				<label htmlFor="lieu" className={labelClass}>
					Lieu / ville
				</label>
				<input
					id="lieu"
					type="text"
					name="lieu"
					placeholder="Ex : Toulouse, Colomiers, Blagnac..."
					className={inputClass}
				/>
			</div>

			<div>
				<label htmlFor="message" className={labelClass}>
					Votre message *
				</label>
				<textarea
					ref={messageRef}
					id="message"
					name="message"
					placeholder="Présentez-moi votre événement : nombre de personnes, ambiance souhaitée, horaires, lieu, type d’animation..."
					className={`${inputClass} min-h-40 resize-y`}
					rows={6}
					required
				/>
			</div>

			<button
				type="submit"
				className="btn-neon group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--pink)] px-6 py-4 text-base font-bold text-white">
				Envoyer ma demande
				<PaperAirplaneIcon className="h-5 w-5 transition group-hover:translate-x-1" />
			</button>

			<p className="text-center text-xs leading-relaxed text-white/65">
				Les informations transmises servent uniquement à répondre à votre
				demande d’animation.
			</p>
		</form>
	);
}
