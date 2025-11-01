import { useEffect, useRef, useState } from "react";
import videoPresentation from "../assets/C'est qui dydy fantasy.webm";
import imagePresentation from "../assets/C'est qui dydy fantasy image.webp";
const VideoPresentation = () => {
	const videoRef = useRef(null);
	const [videoLoaded, setVideoLoaded] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (!videoLoaded && videoRef.current) {
				const rect = videoRef.current.getBoundingClientRect();
				if (rect.top < window.innerHeight) {
					videoRef.current.src = videoPresentation;
					setVideoLoaded(true); // On charge qu'une seule fois
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [videoLoaded]);

	return (
		<div className="flex bg-gray-900 text-white font-bold flex-col justify-center items-center gap-6 pb-16">
			<h1 className="title-header title-site text-center">
				MAIS C'EST QUI DYDY FANTASY ?
			</h1>
			<video
				ref={videoRef}
				id="myVideo"
				controls
				preload="none"
				poster={imagePresentation}
				className="rounded-lg shadow-lg"
				style={{
					width: "100%", // prend toute la largeur du conteneur
					height: "auto", // garde le ratio original
					maxWidth: "300px", // facultatif : limite pour grands écrans
				}}
			/>
		</div>
	);
};

export default VideoPresentation;
