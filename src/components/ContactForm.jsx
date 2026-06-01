import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

const inputClass =
	"w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-pink-300/50 focus:bg-black/35 focus:ring-2 focus:ring-pink-500/25";

const labelClass = "mb-2 block text-sm font-bold text-gray-300";

export default function ContactForm() {
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
						Email *
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
						<option value="Mariage">Mariage</option>
						<option value="Soirée privée">Soirée privée</option>
						<option value="Bar / restaurant">Bar / restaurant</option>
						<option value="Événement entreprise">Événement entreprise</option>
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
				className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-700 px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-white shadow-[0_0_28px_rgba(236,72,153,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_42px_rgba(236,72,153,0.65)]">
				Envoyer ma demande
				<PaperAirplaneIcon className="h-5 w-5 transition group-hover:translate-x-1" />
			</button>

			<p className="text-center text-xs leading-relaxed text-gray-500">
				Les informations transmises servent uniquement à répondre à votre
				demande d’animation.
			</p>
		</form>
	);
}
