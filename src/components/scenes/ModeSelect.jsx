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
	return (
		<div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
			<ul className="space-y-3">
				{modes.map((mode, i) => (
					<ScrollReveal as="li" key={mode.title} delay={i * 70}>
						<div
							onMouseEnter={() => setActive(i)}
							className={`mode-row flex w-full gap-4 rounded-2xl p-4 ${active === i ? "is-active" : ""}`}
							style={{ "--c": mode.color }}>
							<span className="mode-cursor shrink-0 text-lg font-extrabold text-[var(--c)]" aria-hidden="true">
								▶
							</span>
							<div>
								<h3 className="text-lg font-extrabold">
									<button
										type="button"
										aria-pressed={active === i}
										onFocus={() => setActive(i)}
										onClick={() => setActive(i)}
										className="mode-btn flex items-center gap-2 text-left">
										<mode.icon aria-hidden="true" className="h-5 w-5 text-[var(--c)]" />
										{mode.title}
									</button>
								</h3>
								<p className="mt-1 text-white/75">{mode.text}</p>
							</div>
						</div>
					</ScrollReveal>
				))}
			</ul>
			<div className="lg:sticky lg:top-28 lg:self-start">
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
				<p className="mt-3 text-center text-sm text-white/55">Survolez ou touchez un mode pour l’afficher à l’écran.</p>
			</div>
		</div>
	);
}
