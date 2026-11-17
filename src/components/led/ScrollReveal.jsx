import { useEffect, useRef, useState } from "react";

// Apparition au défilement, légère : opacity + transform uniquement (pas de flou),
// un seul IntersectionObserver partagé pour toute la page.
// - Le contenu est visible dans le HTML pré-rendu (SEO, sans JS) : il n'est « armé »
//   (caché) qu'après le montage dans le navigateur.
// - L'animation se rejoue quand on remonte puis redescend (dynamique voulue).
// - Variantes : "up" (défaut), "left", "right", "zoom". Délai en ms pour les cascades.

let observer = null;
const callbacks = new WeakMap();

function getObserver() {
	if (observer) return observer;
	observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) callbacks.get(entry.target)?.(entry.isIntersecting);
		},
		{ threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
	);
	return observer;
}

export default function ScrollReveal({ as = "div", variant = "up", delay = 0, className = "", style, children, ...rest }) {
	const Tag = as;
	const ref = useRef(null);
	const [armed, setArmed] = useState(false);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const obs = getObserver();
		callbacks.set(el, setVisible);
		obs.observe(el);
		setArmed(true);
		return () => {
			obs.unobserve(el);
			callbacks.delete(el);
		};
	}, []);

	const state = armed ? (visible ? " reveal-in" : " reveal-out") : "";

	return (
		<Tag
			ref={ref}
			className={`reveal reveal-${variant}${state} ${className}`}
			style={{ ...style, "--reveal-delay": `${delay}ms` }}
			{...rest}>
			{children}
		</Tag>
	);
}
