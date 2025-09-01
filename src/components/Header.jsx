import "../css/Header.css";
import { Link } from "react-router-dom";
import dydyImage from "/dydy_fantasy_logo.webp";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"; // icônes burger
import { useState } from "react";

function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="bg-gray-700 text-white shadow-md">
			<div className="mx-auto flex items-center justify-between px-4 py-2">
				{/* Logo / Nom */}
				<Link
					to="/"
					className="flex items-center space-x-3 hover:text-purple-400"
					onClick={() => setIsOpen(false)}>
					<img src={dydyImage} alt="Logo Dydy Fantasy" className="w-8" />
					<span className="title-site title-header text-2xl font-bold">
						Dydy Fantasy
					</span>
				</Link>

				{/* Navigation */}
				<nav className="hidden md:flex space-x-6">
					<Link to="/qui-suis-je" className="hover:text-purple-400">
						Qui suis-je ?
					</Link>
					<Link to="/prestations" className="hover:text-purple-400">
						Nos prestations
					</Link>
					<Link to="/notre-approche" className="hover:text-purple-400">
						Notre approche
					</Link>
					<Link to="/contact" className="hover:text-purple-400">
						Contact
					</Link>
				</nav>

				{/* Burger mobile */}
				<div className="md:hidden">
					<button onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? (
							<XMarkIcon className="w-8 h-8 mt-2" />
						) : (
							<Bars3Icon className="w-8 h-8 mt-2" />
						)}
					</button>
				</div>
			</div>

			{/* Menu mobile déroulant */}
			{isOpen && (
				<div className="md:hidden px-6 pb-4 py-4 space-y-5 bg-gray-800">
					<Link
						to="/qui-suis-je"
						className="block hover:text-purple-400"
						onClick={() => setIsOpen(false)}>
						Qui suis-je ?
					</Link>
					<Link
						to="/prestations"
						className="block hover:text-purple-400"
						onClick={() => setIsOpen(false)}>
						Nos prestations
					</Link>
					<Link
						to="/notre-approche"
						className="block hover:text-purple-400"
						onClick={() => setIsOpen(false)}>
						Notre approche
					</Link>
					<Link
						to="/contact"
						className="block hover:text-purple-400"
						onClick={() => setIsOpen(false)}>
						Contact
					</Link>
				</div>
			)}
		</header>
	);
}

export default Header;
