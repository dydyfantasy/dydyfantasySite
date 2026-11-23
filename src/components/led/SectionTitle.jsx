import ScrollReveal from "./ScrollReveal";
// En-tête de section commun à l’accueil v2 : petit label rose + titre avec mot en cyan.
// Classes section-head / section-label / section-heading / section-accent : sur les pages (.fun),
// titres géants sur deux lignes et label numéroté comme les pistes d’un set (voir led.css).
export default function SectionTitle({ id, label, title, accent, children, center = false }) {
	return (
		<ScrollReveal className={`section-head ${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
			<p
				className={`section-label flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[var(--pink)] ${
					center ? "justify-center" : ""
				}`}>
				<span className="h-2 w-2 rounded-full bg-[var(--pink)]" aria-hidden="true" />
				{label}
			</p>
			<h2 id={id} className="section-heading mt-2 text-3xl font-extrabold leading-tight md:text-4xl">
				{title} {accent && <span className="section-accent text-[var(--cyan)]">{accent}</span>}
			</h2>
			{children && <p className="mt-3 text-base leading-relaxed text-white/70">{children}</p>}
		</ScrollReveal>
	);
}
