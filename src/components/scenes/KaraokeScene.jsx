import { useState } from "react";
import SectionTitle from "../led/SectionTitle";
import ScrollReveal from "../led/ScrollReveal";
import "../../css/scenes.css";

// Page Karaoké : les formats en paroles qui se colorent comme sur l’écran du karaoké,
// les publics en file d’attente de chansons, et un applaudimètre à faire monter.
const LEVELS = [
	{ min: 0, label: "Un peu timide…" },
	{ min: 30, label: "Ça chauffe ! 🔥" },
	{ min: 65, label: "La salle est debout !" },
	{ min: 100, label: "Standing ovation ! 🎉" },
];

function ApplauseMeter() {
	const [level, setLevel] = useState(0);
	const current = [...LEVELS].reverse().find((l) => level >= l.min);
	return (
		<div className="flex items-center justify-center gap-8">
			<div aria-hidden="true" className="applause-meter">
				<span className="applause-fill" style={{ transform: `scaleY(${level / 100})` }} />
			</div>
			<div className="text-left">
				<p className="text-2xl font-extrabold md:text-3xl" aria-live="polite">
					{current.label}
				</p>
				<p className="mt-1 text-sm text-white/60">Applaudimètre : {level} %</p>
				<div className="mt-4 flex flex-wrap gap-3">
					<button
						type="button"
						onClick={() => setLevel((l) => Math.min(100, l + 12))}
						disabled={level >= 100}
						className="btn-neon rounded-xl bg-[var(--pink)] px-6 py-3 text-lg font-extrabold text-white">
						👏 Applaudir
					</button>
					{level > 0 && (
						<button type="button" onClick={() => setLevel(0)} className="text-sm font-semibold text-[var(--cyan)] underline underline-offset-4">
							Recommencer
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default function KaraokeScene({ points, pointsTitle, formats, formatsTitle }) {
	return (
		<>
			<section aria-labelledby="formats" className="px-4 py-16">
				<div className="mx-auto max-w-4xl">
					<SectionTitle id="formats" label={formatsTitle?.label} title={formatsTitle?.title} accent={formatsTitle?.accent} center>
						{formatsTitle?.text}
					</SectionTitle>
					<ScrollReveal className="mt-10">
						<div className="karaoke-screen rounded-3xl px-6 py-10 text-center md:px-12">
							<p aria-hidden="true" className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">
								♪ À vous de chanter ♪
							</p>
							<ol className="mt-8 space-y-8">
								{formats.map((f, i) => (
									<li key={f.title}>
										<h3 className="lyric text-2xl font-extrabold md:text-4xl" style={{ "--i": i, "--n": formats.length }}>
											<span className="lyric-base">{f.title}</span>
											<span aria-hidden="true" className="lyric-wipe">
												<span className="lyric-fill">{f.title}</span>
											</span>
										</h3>
										<p className="mx-auto mt-2 max-w-xl text-white/70">{f.text}</p>
									</li>
								))}
							</ol>
						</div>
					</ScrollReveal>
				</div>
			</section>

			<section aria-labelledby="points" className="px-4 py-16">
				<div className="mx-auto max-w-3xl">
					<SectionTitle id="points" label={pointsTitle?.label} title={pointsTitle?.title} accent={pointsTitle?.accent} center />
					<ScrollReveal className="mt-10">
						<div className="queue rounded-3xl p-4 md:p-6">
							<p className="flex items-center justify-between px-2 text-xs font-bold uppercase tracking-[0.25em] text-white/55">
								<span>File d’attente</span>
								<span>{points.length} passages</span>
							</p>
							<ol className="mt-4 space-y-3">
								{points.map((p, i) => (
									<li key={p.title} className={`queue-row flex items-center gap-4 rounded-2xl p-4 ${i === 0 ? "is-live" : ""}`} style={{ "--c": p.color }}>
										<span className="queue-num flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg font-extrabold">{i + 1}</span>
										<div className="min-w-0 flex-1">
											<h3 className="flex items-center gap-2 font-extrabold">
												<p.icon aria-hidden="true" className="h-5 w-5 text-[var(--c)]" />
												{p.title}
											</h3>
											<p className="mt-1 text-sm text-white/70">{p.text}</p>
										</div>
										<span className="queue-badge hidden shrink-0 rounded-full px-3 py-1 text-xs font-bold sm:block">
											{i === 0 ? "🎤 Au micro" : "À suivre"}
										</span>
									</li>
								))}
							</ol>
						</div>
					</ScrollReveal>
				</div>
			</section>

			<section aria-labelledby="applaudimetre" className="px-4 py-16">
				<div className="mx-auto max-w-4xl text-center">
					<ScrollReveal>
						<p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--pink)]">À vous de jouer</p>
						<h2 id="applaudimetre" className="mt-3 text-3xl font-extrabold md:text-4xl">
							Un karaoké, c’est aussi <span className="text-[var(--pink)]">le public</span>
						</h2>
						<p className="mx-auto mt-4 max-w-xl text-white/70">Faites monter l’applaudimètre pour le prochain chanteur !</p>
					</ScrollReveal>
					<ScrollReveal className="mt-10">
						<ApplauseMeter />
					</ScrollReveal>
				</div>
			</section>
		</>
	);
}
