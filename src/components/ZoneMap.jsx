import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ZoneMap = () => {
	return (
		<section className=" bg-gray-900 text-white p-4">
			<h2 className="soustitle sous-title-presentation text-center">
				📍 Nous intervenons à Toulouse et dans un rayon de 50 km.
			</h2>
			<h2 className="soustitle sous-title-presentation text-center pb-3">
				Au-delà, chaque demande est étudiée au cas par cas.
			</h2>
			<div className="w-full h-[400px] rounded-xl shadow-lg overflow-hidden">
				<MapContainer
					center={[43.6047, 1.4442]} // Toulouse
					zoom={8.5}
					scrollWheelZoom={false}
					className="w-full h-full">
					<TileLayer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						attribution="&copy; OpenStreetMap contributors"
					/>
					<Circle
						center={[43.6047, 1.4442]}
						radius={50000} // 50km autour
						color="blue">
						<Popup>Zone de prestation : Toulouse et alentours</Popup>
					</Circle>
				</MapContainer>
			</div>
		</section>
	);
};

export default ZoneMap;
