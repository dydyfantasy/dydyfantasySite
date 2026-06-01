import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const TOULOUSE_POSITION = [43.6047, 1.4442];

const ZoneMap = () => {
	return (
		<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-2xl">
			<div className="pointer-events-none absolute inset-x-0 top-0 z-[500] h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />

			<div className="absolute left-4 top-4 z-[500] rounded-2xl border border-white/10 bg-gray-950/85 px-4 py-3 text-white shadow-xl backdrop-blur-xl">
				<p className="text-xs font-black uppercase tracking-[0.18em] text-pink-200">
					Rayon d’intervention
				</p>
				<p className="mt-1 text-sm text-gray-300">Toulouse + 50 km</p>
			</div>

			<div className="absolute bottom-4 right-4 z-[500] hidden max-w-xs rounded-2xl border border-white/10 bg-gray-950/85 px-4 py-3 text-sm text-gray-300 shadow-xl backdrop-blur-xl md:block">
				Au-delà de cette zone, chaque demande est étudiée au cas par cas.
			</div>

			<div className="h-[420px] w-full overflow-hidden rounded-3xl">
				<MapContainer
					center={TOULOUSE_POSITION}
					zoom={8}
					scrollWheelZoom={false}
					className="h-full w-full">
					<TileLayer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						attribution="&copy; OpenStreetMap contributors"
					/>

					<Circle
						center={TOULOUSE_POSITION}
						radius={50000}
						pathOptions={{
							color: "#ec4899",
							weight: 3,
							fillColor: "#a855f7",
							fillOpacity: 0.18,
						}}>
						<Popup>
							J’interviens à Toulouse et dans un rayon d’environ 50 km.
						</Popup>
					</Circle>
				</MapContainer>
			</div>
		</div>
	);
};

export default ZoneMap;
