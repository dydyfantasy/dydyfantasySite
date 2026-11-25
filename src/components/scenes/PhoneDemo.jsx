import { useEffect, useRef, useState } from "react";
import ScrollReveal from "../led/ScrollReveal";
import LoopVideo from "../led/LoopVideo";
import "../../css/pages-fun.css";

// Dydy Quiz, « Comment ça marche » : un téléphone rejoue les 3 étapes (QR code → question → classement).
// Défilement automatique quand le bloc est visible ; un clic sur une étape l’affiche.
// steps = [{ icon, title, text }] (3 étapes) ; shots = [capture?, capture?, capture?] : vraie capture du
// téléphone d’un joueur pour chaque étape, sinon écran dessiné ; clips = mini-vidéos (5 s) des étapes,
// prioritaires sur les captures. Avec des vidéos, chaque étape reste 5 s : le temps de la jouer en entier.
const QR = Array.from({ length: 81 }, (_, i) => {
	const x = i % 9;
	const y = Math.floor(i / 9);
	const corner = (x < 3 && y < 3) || (x > 5 && y < 3) || (x < 3 && y > 5);
	return corner ? !(x % 2 === 1 && y % 2 === 1 && (x === 1 || x === 7) && (y === 1 || y === 7)) : (x * 7 + y * 13 + x * y) % 3 === 0;
});
const ANSWERS = [
	{ l: "A", t: "Stromae", c: "#ff4d6d" },
	{ l: "B", t: "Angèle", c: "#3ddc84" },
	{ l: "C", t: "Orelsan", c: "#19d3f0" },
	{ l: "D", t: "Indila", c: "#ffc93c" },
];
const RANKING = [
	{ n: "Table 3", s: 1240, c: "var(--gold)" },
	{ n: "Les Cousins", s: 1180, c: "var(--pink)" },
	{ n: "Team Karaoké", s: 990, c: "var(--cyan)" },
];

function Screen({ step }) {
	if (step === 0)
		return (
			<div className="flex h-full flex-col items-center justify-center gap-4 p-5 text-center">
				<p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--cyan)]">Scannez pour jouer</p>
				<div className="qr grid grid-cols-9 gap-[2px] rounded-lg bg-white p-2">
					{QR.map((on, i) => (
						<i key={i} className={on ? "bg-[#05040a]" : "bg-white"} />
					))}
				</div>
				<p className="text-sm font-bold">Aucune appli à installer</p>
			</div>
		);
	if (step === 1)
		return (
			<div className="flex h-full flex-col justify-center gap-3 p-4">
				<p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[var(--pink)]">Question 07 · Blind test</p>
				<p className="text-base font-extrabold leading-tight">Qui chante « Alors on danse » ?</p>
				<div className="grid gap-2">
					{ANSWERS.map((a) => (
						<span key={a.l} className="phone-answer flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs font-extrabold" style={{ "--c": a.c }}>
							<span className="flex h-5 w-5 items-center justify-center rounded bg-black/25">{a.l}</span>
							{a.t}
						</span>
					))}
				</div>
			</div>
		);
	return (
		<div className="flex h-full flex-col justify-center gap-3 p-4">
			<p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-[var(--gold)]">🏆 Classement</p>
			{RANKING.map((r, i) => (
				<div key={r.n} className="phone-rank flex items-center gap-2 rounded-lg px-2 py-2 text-xs font-bold" style={{ "--c": r.c, "--i": i }}>
					<span className="flex h-5 w-5 items-center justify-center rounded bg-[var(--c)] text-[#05040a]">{i + 1}</span>
					<span className="flex-1">{r.n}</span>
					<span className="tabular-nums">{r.s}</span>
				</div>
			))}
		</div>
	);
}

export default function PhoneDemo({ steps, shots = [], clips = [] }) {
	const stepMs = clips.some(Boolean) ? 5000 : 3200;
	const [step, setStep] = useState(0);
	const [auto, setAuto] = useState(true);
	const ref = useRef(null);

	useEffect(() => {
		const el = ref.current;
		if (!el || !auto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let timer = 0;
		const io = new IntersectionObserver(([e]) => {
			window.clearInterval(timer);
			if (e.isIntersecting) timer = window.setInterval(() => setStep((s) => (s + 1) % 3), stepMs);
		});
		io.observe(el);
		return () => {
			io.disconnect();
			window.clearInterval(timer);
		};
	}, [auto, stepMs]);

	return (
		<div ref={ref} className="mt-12 grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
			<ol className="space-y-4">
				{steps.map((s, i) => (
					<ScrollReveal as="li" key={s.title} delay={i * 90}>
						<div
							className={`demo-step flex w-full gap-4 rounded-2xl p-4 ${step === i ? "is-active" : ""}`}
							style={{ "--c": ["var(--cyan)", "var(--pink)", "var(--gold)"][i] }}>
							<span aria-hidden="true" className="demo-step-num flex h-11 w-11 shrink-0 items-center justify-center rounded-full">
								<s.icon className="h-6 w-6" />
							</span>
							<div>
								<p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--c)]">Étape 0{i + 1}</p>
								<h3 className="mt-0.5 text-lg font-extrabold">
									<button
										type="button"
										aria-pressed={step === i}
										onClick={() => {
											setAuto(false);
											setStep(i);
										}}
										className="demo-step-btn text-left">
										{s.title}
									</button>
								</h3>
								<p className="mt-1 text-white/75">{s.text}</p>
							</div>
						</div>
					</ScrollReveal>
				))}
			</ol>
			<ScrollReveal variant="zoom" className="flex justify-center">
				<div aria-hidden={!shots[step] && !clips[step]} className="demo-phone">
					<span className="demo-notch" />
					<div key={step} className="demo-screen">
						{clips[step] ? (
							<LoopVideo
								key={step}
								video={clips[step]}
								label={`Dydy Quiz sur le téléphone d’un joueur : ${steps[step].title}`}
								aspect="h-full"
							/>
						) : shots[step] ? (
							<img
								src={shots[step].src}
								srcSet={shots[step].srcSet}
								sizes="16rem"
								alt={`Dydy Quiz sur le téléphone d’un joueur : ${steps[step].title}`}
								decoding="async"
								className="h-full w-full object-cover"
							/>
						) : (
							<Screen step={step} />
						)}
					</div>
				</div>
			</ScrollReveal>
		</div>
	);
}
