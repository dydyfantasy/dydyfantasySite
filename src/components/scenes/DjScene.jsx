import { useState } from "react";
import SectionTitle from "../led/SectionTitle";
import ScrollReveal from "../led/ScrollReveal";
import "../../css/scenes.css";

// Page DJ : le style en tracklist à côté d’un vinyle qui tourne, les publics en tranches
// de table de mixage, et un curseur d’énergie de la soirée qui anime l’égaliseur.
const FADERS = ["35%", "60%", "20%", "48%"];
const ENERGY = [
	{ label: "Ambiance douce", text: "Ambiance douce au repas : la musique accompagne le moment." },
	{ label: "Ça monte", text: "Les premiers tubes : l’énergie monte et la piste se remplit." },
	{ label: "Feu sur la piste 🔥", text: "Montée en puissance : tout le monde danse, jusqu’à la dernière chanson." },
];
const BARS = Array.from({ length: 24 }, (_, i) => 0.35 + 0.65 * Math.abs(Math.sin(i * 1.7)));

function EnergySlider() {
	const [level, setLevel] = useState(0);
	const e = ENERGY[level];
	return (
		<div className="energy rounded-3xl p-6 md:p-10">
			<div aria-hidden="true" className="energy-eq flex h-28 items-end justify-center gap-1.5">
				{BARS.map((h, i) => (
					<span key={i} className="energy-bar" style={{ "--h": h * (0.35 + level * 0.32), "--d": `${0.5 + (i % 5) * 0.12}s` }} />
				))}
			</div>
			<label htmlFor="energie" className="mt-8 block text-center text-2xl font-extrabold">
				{e.label}
			</label>
			<input
				id="energie"
				type="range"
				min="0"
				max="2"
				step="1"
				value={level}
				onChange={(ev) => setLevel(Number(ev.target.value))}
				className="energy-range mt-4 w-full"
				aria-valuetext={e.label}
			/>
			<div aria-hidden="true" className="mt-2 flex justify-between text-xs font-bold uppercase tracking-widest text-white/50">
				<span>Repas</span>
				<span>Soirée</span>
				<span>Piste</span>
			</div>
			<p className="mt-5 text-center text-white/75">{e.text}</p>
		</div>
	);
}

export default function DjScene({ points, pointsTitle, formats, formatsTitle }) {
	return (
		<>
			<section aria-labelledby="formats" className="px-4 py-16">
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="formats" label={formatsTitle?.label} title={formatsTitle?.title} accent={formatsTitle?.accent}>
						{formatsTitle?.text}
					</SectionTitle>
					<div className="mt-12 grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
						<ScrollReveal variant="zoom" className="flex justify-center">
							<div aria-hidden="true" className="turntable">
								<div className="vinyl">
									<span className="vinyl-label">
										DYDY
										<br />
										FANTASY
									</span>
								</div>
								<span className="tonearm" />
							</div>
						</ScrollReveal>
						<ol className="tracklist space-y-5">
							{formats.map((f, i) => (
								<ScrollReveal as="li" key={f.title} delay={i * 90} variant="right" className="track flex gap-4 rounded-2xl p-4">
									<span className="track-num shrink-0 text-sm font-extrabold">
										{i < 2 ? "A" : "B"}
										{(i % 2) + 1}
									</span>
									<div>
										<h3 className="flex items-center gap-2 text-lg font-extrabold">
											<f.icon aria-hidden="true" className="h-5 w-5 text-[var(--cyan)]" />
											{f.title}
										</h3>
										<p className="mt-1 text-white/75">{f.text}</p>
									</div>
								</ScrollReveal>
							))}
						</ol>
					</div>
				</div>
			</section>

			<section aria-labelledby="points" className="px-4 py-16">
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="points" label={pointsTitle?.label} title={pointsTitle?.title} accent={pointsTitle?.accent} center />
					<ScrollReveal className="mt-12">
						<ul className="mixer grid gap-4 rounded-3xl p-4 sm:grid-cols-2 md:p-6 lg:grid-cols-4">
							{points.map((p, i) => (
								<li key={p.title} className="channel flex gap-4 rounded-2xl p-4" style={{ "--c": p.color, "--fader": FADERS[i % 4], "--i": i }}>
									<span aria-hidden="true" className="fader-track">
										<span className="fader-knob" />
									</span>
									<div className="min-w-0">
										<p className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[var(--c)]">Canal {i + 1}</p>
										<h3 className="mt-1 text-lg font-extrabold leading-tight">{p.title}</h3>
										<p className="mt-2 text-sm text-white/75">{p.text}</p>
									</div>
								</li>
							))}
						</ul>
					</ScrollReveal>
				</div>
			</section>

			<section aria-labelledby="energie-titre" className="px-4 py-16">
				<div className="mx-auto max-w-3xl">
					<ScrollReveal className="text-center">
						<p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--pink)]">À vous de jouer</p>
						<h2 id="energie-titre" className="mt-3 text-3xl font-extrabold md:text-4xl">
							Montez <span className="text-[var(--cyan)]">l’énergie</span> de la soirée
						</h2>
					</ScrollReveal>
					<ScrollReveal className="mt-10">
						<EnergySlider />
					</ScrollReveal>
				</div>
			</section>
		</>
	);
}
