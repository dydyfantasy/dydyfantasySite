import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import "../css/Reseaux.css";
const Reseaux = () => {
	const socials = [
		{
			icon: <FaFacebookF />,
			url: "https://facebook.com/profile.php?id=61578462940099",
		},
		{ icon: <FaInstagram />, url: "https://www.instagram.com/dydy_fantasy" },
		{ icon: <FaTiktok />, url: "https://www.tiktok.com/@dydy.fantasy" },
	];

	return (
		<div className="flex gap-6 ">
			{socials.map((social, idx) => (
				<a
					key={idx}
					href={social.url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-white text-7xl hover:text-yellow-400 transition-colors">
					{social.icon}
				</a>
			))}
		</div>
	);
};

export default Reseaux;
