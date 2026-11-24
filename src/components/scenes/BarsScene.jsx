import SectionTitle from "../led/SectionTitle";
import ScrollReveal from "../led/ScrollReveal";
import LedAgenda from "../led/LedAgenda";
import "../../css/scenes.css";

// Page Bars : « Pourquoi » en sous-bocks de bière, formats sur une ardoise de bar,
// puis le vrai agenda des prochaines soirées (public/events/events.js).
const TILTS = ["-4deg", "3deg", "-2deg", "5deg"];

export default function BarsScene({ points, pointsTitle, formats, formatsTitle }) {
	return (
		<>
			<section aria-labelledby="points" className="px-4 py-16">
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="points" label={pointsTitle?.label} title={pointsTitle?.title} accent={pointsTitle?.accent} center />
					<ul className="mt-12 grid justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-4">
						{points.map((p, i) => (
							<ScrollReveal as="li" key={p.title} delay={i * 90} variant="zoom">
								<div className="coaster" style={{ "--c": p.color, "--tilt": TILTS[i % 4] }}>
									<p.icon aria-hidden="true" className="h-8 w-8 text-[var(--c)]" />
									<h3 className="mt-2 text-lg font-extrabold leading-tight">{p.title}</h3>
									<p className="mt-2 text-sm text-white/80">{p.text}</p>
								</div>
							</ScrollReveal>
						))}
					</ul>
				</div>
			</section>

			<section aria-labelledby="formats" className="px-4 py-16">
				<div className="mx-auto max-w-4xl">
					<SectionTitle id="formats" label={formatsTitle?.label} title={formatsTitle?.title} accent={formatsTitle?.accent} center />
					<ScrollReveal className="mt-10">
						<div className="chalkboard rounded-2xl px-6 py-8 md:px-12 md:py-10">
							<p aria-hidden="true" className="chalk-title text-center text-2xl font-extrabold md:text-3xl">
								~ La carte des soirées ~
							</p>
							<ul className="mt-8 space-y-7">
								{formats.map((f) => (
									<li key={f.title}>
										<h3 className="chalk-item flex items-baseline gap-3 text-lg font-extrabold md:text-xl">
											<span>{f.title}</span>
											<span aria-hidden="true" className="chalk-dots flex-1" />
											<f.icon aria-hidden="true" className="h-6 w-6 shrink-0 self-center" />
										</h3>
										<p className="mt-1.5 text-white/75">{f.text}</p>
									</li>
								))}
							</ul>
						</div>
					</ScrollReveal>
				</div>
			</section>

			<LedAgenda />
		</>
	);
}
