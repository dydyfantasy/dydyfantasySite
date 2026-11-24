import ScrollReveal from "../led/ScrollReveal";

// « Pourquoi moi » (page Mariage) : cartes inclinées façon cartons de table, titre calligraphié.
// reasons = [{ title, text }]
const TILTS = ["-2.5deg", "1.8deg", "-1.2deg", "2.4deg"];

export default function WeddingReasons({ reasons }) {
	return (
		<section aria-labelledby="pourquoi" className="px-4 py-16">
			<div className="mx-auto max-w-6xl">
				<ScrollReveal className="text-center">
					<p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--gold)]">Pourquoi moi</p>
					<h2 id="pourquoi" className="mt-3 text-3xl font-extrabold md:text-5xl">
						Un mariage qui <span className="script-accent">fait participer</span>
					</h2>
				</ScrollReveal>
				<ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{reasons.map((r, i) => (
						<ScrollReveal as="li" key={r.title} delay={i * 90}>
							<div className="place-card h-full rounded-2xl p-6 text-center" style={{ "--tilt": TILTS[i % TILTS.length] }}>
								<span aria-hidden="true" className="place-card-num">0{i + 1}</span>
								<h3 className="script-accent mt-2 text-3xl leading-tight">{r.title}</h3>
								<p className="mt-3 text-sm text-white/80">{r.text}</p>
							</div>
						</ScrollReveal>
					))}
				</ul>
			</div>
		</section>
	);
}
