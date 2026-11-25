import { lazy, Suspense, useEffect, useRef, useState } from "react";

// Leaflet a besoin de `window` : chargé seulement dans le navigateur, dans un fichier séparé,
// et seulement quand la carte approche de l’écran (rien de téléchargé pour qui ne descend pas).
const EventMap = lazy(() => import("./EventMap"));

export default function ClientOnlyEventMap({ event, className = "" }) {
	const ref = useRef(null);
	const [near, setNear] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(
			([e]) => {
				if (e.isIntersecting) {
					setNear(true);
					io.disconnect();
				}
			},
			{ rootMargin: "300px" },
		);
		io.observe(el);
		return () => io.disconnect();
	}, []);

	// Même hauteur réservée avant et pendant le chargement : la page ne « saute » pas
	const placeholder = <div aria-hidden="true" className={`w-full bg-black/30 ${className}`} />;
	return (
		<div ref={ref}>
			{near ? (
				<Suspense fallback={placeholder}>
					<EventMap event={event} className={className} />
				</Suspense>
			) : (
				placeholder
			)}
		</div>
	);
}
