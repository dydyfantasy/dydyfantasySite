const Footer = () => {
	return (
		<footer className="bg-gray-800 text-gray-200 p-8">
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
				{/* À propos */}
				<div>
					<h3 className="text-lg font-bold mb-2 text-white">
						Animateur / Organisateur d'évènements - Toulouse (31)
					</h3>
					<p className="text-sm text-gray-400">
						Nous proposons et organisons des animations interactives pour tous
						vos événements à Toulouse et sa périphérie.
					</p>
				</div>

				{/* Navigation */}
				<div>
					<h3 className="text-lg font-bold mb-2 text-white">Navigation</h3>
					<ul className="text-sm space-y-1">
						<li>
							<a
								href="/qui-suis-je"
								className="text-purple-400 hover:text-purple-300 hover:underline">
								Qui suis-je ?
							</a>
						</li>
						<li>
							<a
								href="/prestations"
								className="text-purple-400 hover:text-purple-300 hover:underline">
								Nos prestations
							</a>
						</li>
						<li>
							<a
								href="/notre-approche"
								className="text-purple-400 hover:text-purple-300 hover:underline">
								Notre approche
							</a>
						</li>
						<li>
							<a
								href="/contact"
								className="text-purple-400 hover:text-purple-300 hover:underline">
								Contact
							</a>
						</li>
					</ul>
				</div>

				{/* Contact */}
				<div>
					<address className="not-italic text-sm space-y-1">
						<p>
							Adresse :{" "}
							<span className="text-gray-200">
								Toulouse, Haute Garonne, Occitanie, France
							</span>
						</p>
					</address>
				</div>
			</div>

			<div className="mt-8 text-center text-gray-500 text-sm">
				&copy; 2025 Dydy Fantasy. Tous droits réservés.
			</div>
		</footer>
	);
};
export default Footer;
