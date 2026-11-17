import { lazy, Suspense, useEffect, useState } from "react";

// Leaflet a besoin de `window` dès son import : on ne le charge que dans le
// navigateur, et dans un fichier JS séparé (il ne pèse plus sur les autres pages).
const ZoneMap = lazy(() => import("./ZoneMap"));

// Même hauteur que la carte pour éviter que la page "saute" au chargement
function MapPlaceholder() {
	return (
		<div
			aria-hidden="true"
			className="h-[420px] w-full rounded-3xl border border-white/10 bg-black/30"
		/>
	);
}

export default function ClientOnlyZoneMap() {
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	if (!isBrowser) return <MapPlaceholder />;

	return (
		<Suspense fallback={<MapPlaceholder />}>
			<ZoneMap />
		</Suspense>
	);
}
