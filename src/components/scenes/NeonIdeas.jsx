import ScrollReveal from "../led/ScrollReveal";
import "../../css/pages-fun.css";

// Qui suis-je, « Ma philosophie » : chaque idée en enseigne néon qui s’allume.
// ideas = [{ icon, title, text }]
const COLORS = ["var(--cyan)", "var(--pink)", "var(--gold)"];

export default function NeonIdeas({ ideas }) {
	return (
		<ul className="mt-12 grid gap-8 md:grid-cols-3">
			{ideas.map((idea, i) => (
				<ScrollReveal as="li" key={idea.title} delay={i * 120} className="text-center" style={{ "--c": COLORS[i % 3], "--i": i }}>
					<div className="neon-board mx-auto rounded-2xl px-5 py-6">
						<idea.icon aria-hidden="true" className="neon-tube-icon mx-auto h-10 w-10" />
						<h3 className="neon-tube mt-3 text-2xl font-extrabold md:text-3xl">{idea.title}</h3>
					</div>
					<p className="mx-auto mt-5 max-w-xs text-white/80">{idea.text}</p>
				</ScrollReveal>
			))}
		</ul>
	);
}
