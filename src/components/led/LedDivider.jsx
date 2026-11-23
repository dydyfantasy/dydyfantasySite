// Séparateur « bande LED » entre deux sections : une rangée de diodes
// parcourue par une impulsion lumineuse (transform uniquement). Décoratif.
export default function LedDivider({ color = "var(--cyan)", reverse = false }) {
	return (
		<div aria-hidden="true" className="mx-auto max-w-6xl px-4">
			<div className={`led-strip ${reverse ? "is-reverse" : ""}`} style={{ "--c": color }} />
		</div>
	);
}
