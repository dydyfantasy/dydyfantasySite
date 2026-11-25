import { useEffect, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Carte OpenStreetMap du lieu d’une date de l’agenda : aucun cookie, affichée sans clic.
// Position : champs facultatifs lat / lng de l’événement (events.js), sinon recherche automatique
// de l’adresse (ou « lieu, ville ») sur le service gratuit d’OpenStreetMap (Nominatim), puis de la
// ville seule si le lieu est introuvable (les noms de bars sont rarement connus d’OpenStreetMap :
// renseigner « address » dans events.js pour un repère précis). Rien trouvé : pas de carte (le bouton « Itinéraire » reste).
// Chargé seulement dans le navigateur, dans un fichier séparé (voir ClientOnlyEventMap.jsx).
const cache = new Map(); // même adresse demandée deux fois (prochaine date + fiche) : une seule recherche

async function geocode(query) {
	if (cache.has(query)) return cache.get(query);
	const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=fr&q=${encodeURIComponent(query)}`;
	const promise = fetch(url, { headers: { "Accept-Language": "fr" } })
		.then((r) => (r.ok ? r.json() : []))
		.then((list) => (list[0] ? [Number(list[0].lat), Number(list[0].lon)] : null))
		.catch(() => null);
	cache.set(query, promise);
	return promise;
}

export default function EventMap({ event, className = "" }) {
	const [spot, setSpot] = useState(
		event.lat && event.lng ? { pos: [Number(event.lat), Number(event.lng)], zoom: 15, label: event.place } : null,
	);
	const [failed, setFailed] = useState(false);

	useEffect(() => {
		if (spot) return;
		let alive = true;
		// « Colomiers (31) » -> « Colomiers » : le numéro de département gêne la recherche
		const city = (event.city || "").replace(/\s*\(.*?\)\s*/g, " ").trim();
		(async () => {
			const precise = await geocode(event.address ? `${event.address}, ${city}` : `${event.place}, ${city}`);
			const pos = precise ?? (city ? await geocode(city) : null);
			if (!alive) return;
			// Lieu introuvable : on montre la ville, repère au nom de la ville (pas du lieu : il n’y est pas)
			if (pos) setSpot({ pos, zoom: precise ? 15 : 12, label: precise ? event.place : city });
			else setFailed(true);
		})();
		return () => {
			alive = false;
		};
	}, [event, spot]);

	if (failed) return null;
	if (!spot) return <div aria-hidden="true" className={`w-full bg-black/30 ${className}`} />;

	return (
		<div className={`w-full ${className}`}>
			<MapContainer center={spot.pos} zoom={spot.zoom} scrollWheelZoom={false} className="h-full w-full" attributionControl>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />
				<CircleMarker center={spot.pos} radius={11} pathOptions={{ color: "#ff2fae", weight: 3, fillColor: "#19d3f0", fillOpacity: 0.9 }}>
					<Tooltip direction="top" offset={[0, -10]} permanent>
						{spot.label}
					</Tooltip>
				</CircleMarker>
			</MapContainer>
		</div>
	);
}
