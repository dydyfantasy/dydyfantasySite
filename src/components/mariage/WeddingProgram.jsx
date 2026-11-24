import ScrollReveal from "../led/ScrollReveal";

/**
 * « Le programme de votre soirée » (page Mariage) : frise verticale dorée façon faire-part.
 * Chaque moment = un anneau néon sur la ligne d’or ; le Challenge Photo court en fil rouge
 * le long de la frise. Sur grand écran, les moments alternent à gauche et à droite.
 *
 * moments = [{ when, title, text, icon }], thread = { title, text }
 */
export default function WeddingProgram({ moments, thread }) {
	return (
		<section aria-labelledby="programme" className="relative px-4 py-20">
			<div className="mx-auto max-w-5xl">
				<ScrollReveal className="text-center">
					<p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--gold)]">Le déroulé</p>
					<h2 id="programme" className="mt-3 text-3xl font-extrabold md:text-5xl">
						Le programme de <span className="script-accent">votre soirée</span>
					</h2>
					<p className="mx-auto mt-4 max-w-xl text-white/70">
						Du vin d’honneur à la dernière danse : à choisir et à combiner selon votre journée.
					</p>
				</ScrollReveal>

				<div className="program relative mt-14">
					{/* Fil rouge : le Challenge Photo court le long de la frise */}
					{thread && (
						<ScrollReveal className="program-thread mx-auto mb-12 max-w-md rounded-2xl px-5 py-4 text-center md:mb-16">
							<p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--pink)]">Fil rouge · toute la soirée</p>
							<h3 className="mt-1 text-xl font-extrabold">📸 {thread.title}</h3>
							<p className="mt-1 text-sm text-white/75">{thread.text}</p>
						</ScrollReveal>
					)}

					<ol className="program-line relative space-y-10 md:space-y-14">
						{moments.map((m, i) => (
							<ScrollReveal
								as="li"
								key={m.title}
								variant={i % 2 ? "right" : undefined}
								className={`program-item relative pl-16 md:w-1/2 md:pl-0 ${i % 2 ? "md:ml-auto md:pl-14" : "md:pr-14 md:text-right"}`}>
								<span aria-hidden="true" className={`program-ring ${i % 2 ? "is-right" : "is-left"}`}>
									<m.icon className="h-5 w-5" />
								</span>
								<p className="script-accent text-3xl md:text-4xl">{m.when}</p>
								<h3 className="mt-1 text-xl font-extrabold md:text-2xl">{m.title}</h3>
								<p className="mt-2 text-white/75">{m.text}</p>
							</ScrollReveal>
						))}
					</ol>
				</div>
			</div>
		</section>
	);
}
