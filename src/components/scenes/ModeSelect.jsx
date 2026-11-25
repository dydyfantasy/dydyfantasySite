import { useState } from "react";
import ScrollReveal from "../led/ScrollReveal";
import LoopVideo from "../led/LoopVideo";
import "../../css/pages-fun.css";

// Dydy Quiz, « Les modes de jeu » : sélecteur façon menu de console. Survoler ou toucher un mode
// l’anime sur le grand écran (aperçu décoratif). Tous les textes restent visibles dans la liste.
// modes = [{ slug, icon, color, title, text, clip?, shot? }] — l’ordre suit MODES de la page.
// Sur le grand écran : clip = mini-vidéo de l’écran de la salle (5 s en boucle, chargée seulement
// quand le mode est choisi), sinon shot = capture, sinon l’animation décorative.
// Le téléphone du joueur est montré par PhoneDemo.
function Preview({ slug, color }) {
	if (slug === "quiz")
		return (
			<div className="grid w-full max-w-xs grid-cols-2 gap-2">
				{["#ff4d6d", "#3ddc84", "#19d3f0", "#ffc93c"].map((c, i) => (
					<span key={c} className="pv-tile h-12 rounded-lg" style={{ background: c, "--i": i }} />
				))}
			</div>
		);
	if (slug === "bingo-musical")
		return (
			<div className="grid grid-cols-4 gap-1.5">
				{Array.from({ length: 12 }, (_, i) => {
					const marked = [1, 4, 6, 11].indexOf(i);
					return marked >= 0 ? (
						<span key={i} className="pv-tile flex h-10 w-10 items-center justify-center rounded-md text-lg" style={{ background: color, "--i": marked }}>
							🎵
						</span>
					) : (
						<span key={i} className="h-10 w-10 rounded-md bg-white/10" />
					);
				})}
			</div>
		);
	if (slug === "sondages")
		return (
			<div className="w-full max-w-xs space-y-2.5">
				{[0.72, 0.45, 0.88].map((p, i) => (
					<span key={i} className="block h-7 overflow-hidden rounded-lg bg-white/10">
						<span className="pv-bar block h-full rounded-lg" style={{ "--p": p, "--i": i, background: color }} />
					</span>
				))}
			</div>
		);
	if (slug === "challenge-photo")
		return (
			<div className="grid grid-cols-3 gap-2">
				{Array.from({ length: 6 }, (_, i) => (
					<span key={i} className="pv-photo flex h-14 w-14 items-center justify-center rounded-md bg-white text-2xl" style={{ "--i": i }}>
						{["📸", "🥂", "💃", "🎤", "😂", "💍"][i]}
					</span>
				))}
			</div>
		);
	if (slug === "match-machine")
		return (
			<div className="flex items-center gap-4 text-4xl">
				<span className="pv-left">🙋‍♀️</span>
				<span className="pv-heart text-5xl">💘</span>
				<span className="pv-right">🙋‍♂️</span>
			</div>
		);
	return (
		<div className="w-full max-w-xs space-y-2">
			{["Table 3", "Les Cousins", "Team Karaoké", "Les Collègues"].map((n, i) => (
				<span key={n} className="pv-row flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-sm font-bold" style={{ "--i": i }}>
					<span className="text-[var(--gold)]">{i + 1}</span>
					{n}
				</span>
			))}
		</div>
	);
}

export default function ModeSelect({ modes }) {
	const [active, setActive] = useState(0);
	const m = modes[active];
	const half = Math.ceil(modes.length / 2);
	const row = (mode, i) => (
		<ScrollReveal as="li" key={mode.title} delay={(i % half) * 70}>
			<div
				onMouseEnter={() => setActive(i)}
				className={`mode-row h-full rounded-2xl p-2.5 lg:p-4 ${active === i ? "is-active" : ""}`}
				style={{ "--c": mode.color }}>
				<h3 className="text-xs font-extrabold sm:text-sm lg:text-base">
					<button
						type="button"
						aria-pressed={active === i}
						onFocus={() => setActive(i)}
						onClick={() => setActive(i)}
						className="mode-btn flex flex-col items-center gap-1.5 text-center lg:flex-row lg:gap-2 lg:text-left">
						<mode.icon aria-hidden="true" className="h-5 w-5 shrink-0 text-[var(--c)]" />
						{mode.title}
					</button>
				</h3>
				<p className="mt-1 hidden text-sm text-white/70 lg:block">{mode.text}</p>
			</div>
		</ScrollReveal>
	);
	return (
		// Ordinateur : grand écran au centre, 3 modes à gauche, 3 à droite.
		// Téléphone : écran en haut, modes en boutons compacts (2 rangées de 3), description du mode
		// choisi sous l’écran (les descriptions restent dans le HTML : visibles dans les boutons sur ordinateur).
		<div className="mt-10 grid items-center gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)_minmax(0,1fr)]">
			<ul className="order-2 grid grid-cols-3 gap-2 sm:gap-3 lg:col-start-1 lg:row-start-1 lg:grid-cols-1">{modes.slice(0, half).map((mode, i) => row(mode, i))}</ul>
			<ul className="order-3 grid grid-cols-3 gap-2 sm:gap-3 lg:col-start-3 lg:row-start-1 lg:grid-cols-1">{modes.slice(half).map((mode, i) => row(mode, i + half))}</ul>
			<div className="order-1 lg:order-2 lg:col-start-2 lg:row-start-1">
				<div className="big-screen rounded-2xl p-[3px]">
					{m.clip ? (
						<LoopVideo key={active} video={m.clip} label={`Dydy Quiz, écran de la salle : ${m.title}`} className="rounded-[0.9rem]" />
					) : m.shot ? (
						<div key={active} className="pv-stage screen-inner flex aspect-video items-center justify-center overflow-hidden rounded-[0.9rem]" style={{ "--c": m.color }}>
							<img
								src={m.shot.src}
								srcSet={m.shot.srcSet}
								sizes="(min-width: 1024px) 36rem, 92vw"
								alt={`Dydy Quiz, écran de la salle : ${m.title}`}
								loading="lazy"
								decoding="async"
								className="h-full w-full object-contain"
							/>
						</div>
					) : (
						<div aria-hidden="true" className="screen-inner flex aspect-video flex-col rounded-[0.9rem] p-5" style={{ "--c": m.color }}>
							<p className="flex items-center justify-between text-sm font-extrabold">
								<span>
									Dydy <span className="text-[var(--pink)]">Quiz</span>
								</span>
								<span className="text-[0.65rem] uppercase tracking-widest text-[var(--c)]">{m.title}</span>
							</p>
							<div key={active} className="pv-stage flex flex-1 items-center justify-center">
								<Preview slug={m.slug} color={m.color} />
							</div>
						</div>
					)}
				</div>
				<p className="mt-3 text-center text-sm text-white/80 lg:hidden" aria-live="polite">
					<strong style={{ color: m.color }}>{m.title}</strong> : {m.text}
				</p>
				<p className="mt-3 hidden text-center text-sm text-white/55 lg:block">Survolez ou touchez un mode pour l’afficher à l’écran.</p>
			</div>
		</div>
	);
}
