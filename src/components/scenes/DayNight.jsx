import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { SunIcon, MoonIcon, PlayIcon } from "@heroicons/react/24/solid";
import ScrollReveal from "../led/ScrollReveal";
import "../../css/pages-fun.css";

// Qui suis-je : « Le jour » (éditeur de code qu’on peut exécuter) / « Le soir » (scène étoilée).
// Les textes de la page sont passés en props et restent visibles dans le HTML pré-rendu.
const OUTPUT = ["✓ Blind test chargé", "✓ Quiz prêt", "✓ Karaoké branché", "✓ Platines en place", "🎉 Soirée lancée : 100 % des invités en jeu !"];
const CONFETTI = Array.from({ length: 16 }, (_, i) => {
	const a = (i / 16) * Math.PI * 2;
	return { x: Math.round(Math.cos(a) * 110), y: Math.round(Math.sin(a) * 70) - 30, r: (i * 47) % 360, c: ["#19d3f0", "#ff2fae", "#ffc93c", "#7cff6b"][i % 4] };
});

function CodeEditor() {
	const [lines, setLines] = useState(0); // lignes de sortie affichées
	const timers = useRef([]);
	useEffect(() => () => timers.current.forEach(clearTimeout), []);
	const run = () => {
		timers.current.forEach(clearTimeout);
		setLines(0);
		timers.current = OUTPUT.map((_, i) => setTimeout(() => setLines(i + 1), 350 * (i + 1)));
	};
	const done = lines === OUTPUT.length;

	return (
		<div className="code-editor relative rounded-2xl">
			<div className="code-bar flex items-center gap-1.5 px-4 py-2.5">
				<i className="code-dot bg-[#ff5f57]" />
				<i className="code-dot bg-[#febc2e]" />
				<i className="code-dot bg-[#28c840]" />
				<span className="ml-3 text-xs text-white/50">soiree.js</span>
			</div>
			<pre className="overflow-x-auto px-4 py-4 text-[0.8rem] leading-relaxed md:text-sm" aria-label="Exemple de code : lancer une soirée Dydy Fantasy">
				<code>
					<span className="tok-k">const</span> soiree = <span className="tok-k">new</span> <span className="tok-c">DydyFantasy</span>({"{"}
					{"\n"}  lieu: <span className="tok-s">"votre salle"</span>,
					{"\n"}  invites: <span className="tok-s">"en mode joueurs"</span>,
					{"\n"}{"}"});
					{"\n"}soiree.<span className="tok-f">lancer</span>(); <span className="tok-m">// 🎉</span>
				</code>
			</pre>
			<div className="flex items-center gap-3 border-t border-white/10 px-4 py-3">
				<button type="button" onClick={run} className="run-btn inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-bold">
					<PlayIcon aria-hidden="true" className="h-4 w-4" />
					{lines ? "Relancer" : "Lancer la soirée"}
				</button>
				<span className="text-xs text-white/45">Essayez !</span>
			</div>
			<div className="code-console min-h-[7.5rem] px-4 py-3 font-mono text-xs md:text-sm" aria-live="polite">
				{lines === 0 ? (
					<span className="text-white/35">&gt; en attente…</span>
				) : (
					OUTPUT.slice(0, lines).map((l) => (
						<p key={l} className={l.startsWith("🎉") ? "font-bold text-[var(--gold)]" : "text-[#7cff6b]"}>
							&gt; {l}
						</p>
					))
				)}
			</div>
			{done && (
				<span aria-hidden="true" className="run-burst">
					{CONFETTI.map((p, i) => (
						<i key={i} style={{ "--x": `${p.x}px`, "--y": `${p.y}px`, "--r": `${p.r}deg`, background: p.c }} />
					))}
				</span>
			)}
		</div>
	);
}

export default function DayNight({ strengths, zone }) {
	return (
		<div className="mt-10 grid gap-6 md:grid-cols-2">
			<ScrollReveal variant="left" className="day-panel rounded-3xl p-6 md:p-7">
				<p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#b7791f]">
					<SunIcon aria-hidden="true" className="sun-spin h-6 w-6 text-[#f59e0b]" />
					Le jour
				</p>
				<h3 className="mt-3 text-2xl font-extrabold text-[#141225]">Mon côté développeur</h3>
				<p className="mt-1 font-semibold text-[#0e7490]">La technologie au service de l’ambiance.</p>
				<div className="mt-5">
					<CodeEditor />
				</div>
				<p className="mt-5 text-[#2b2840]">
					Mon métier de développeur me permet d’imaginer des animations plus interactives : quiz en direct,
					scores, buzzers sur téléphone, écrans, mécaniques de jeu et formats personnalisés.
				</p>
				<p className="mt-3 text-[#2b2840]">
					C’est comme ça que j’ai développé moi-même{" "}
					<Link to="/dydy-quiz" className="font-bold text-[#0e7490] underline underline-offset-4">
						Dydy Quiz
					</Link>
					, l’appli qui fait jouer vos invités depuis leur téléphone.
				</p>
			</ScrollReveal>

			<ScrollReveal variant="right" className="night-panel relative overflow-hidden rounded-3xl p-6 md:p-7">
				<span aria-hidden="true" className="night-stars" />
				<span aria-hidden="true" className="night-spot" />
				<div className="relative">
					<p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--pink)]">
						<MoonIcon aria-hidden="true" className="h-6 w-6 text-[#c4b5fd]" />
						Le soir
					</p>
					<h3 className="mt-3 text-2xl font-extrabold">Mon côté animateur</h3>
					<p className="mt-1 font-semibold text-[var(--pink)]">Micro en main, la salle avec moi.</p>
					<ul className="setlist mt-5 space-y-2.5">
						{strengths.map((item, i) => (
							<li key={item} className="flex items-center gap-3">
								<span aria-hidden="true" className="setlist-num">{String(i + 1).padStart(2, "0")}</span>
								<span className="font-semibold">{item}</span>
							</li>
						))}
					</ul>
					<p className="mt-6 text-sm text-white/70">{zone}</p>
				</div>
			</ScrollReveal>
		</div>
	);
}
