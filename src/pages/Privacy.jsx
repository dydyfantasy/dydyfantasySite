import { Helmet } from "react-helmet";

function Privacy() {
	return (
		<>
			<Helmet>
				<title>Politique de confidentialité | Dydy Quiz</title>
				<meta
					name="description"
					content="Politique de confidentialité de l'application Dydy Quiz."
				/>
				<link rel="canonical" href="https://dydyfantasy.fr/privacy" />
			</Helmet>

			<div className="min-h-screen bg-gray-900 text-white py-16 px-6">
				<div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
					<h1 className="text-3xl md:text-4xl font-bold mb-8">
						Politique de confidentialité
					</h1>

					<p className="text-gray-300 mb-6">
						Dernière mise à jour : 23 mars 2026
					</p>

					<p className="text-gray-200 mb-6 leading-7">
						La présente politique de confidentialité décrit la manière dont
						l’application <strong>Dydy Quiz</strong> traite les informations
						des utilisateurs.
					</p>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							1. Absence de compte utilisateur
						</h2>
						<p className="text-gray-200 leading-7">
							L’application Dydy Quiz ne nécessite pas la création d’un compte
							utilisateur. Elle ne demande pas directement de nom, prénom,
							adresse e-mail ou numéro de téléphone pour son utilisation
							courante.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							2. Données collectées
						</h2>
						<p className="text-gray-200 leading-7 mb-4">
							À ce jour, l’application ne collecte pas volontairement de
							données personnelles identifiantes.
						</p>
						<p className="text-gray-200 leading-7">
							Cependant, certaines données techniques peuvent être traitées
							automatiquement par le système Android, l’hébergement ou les
							services strictement nécessaires au fonctionnement de
							l’application, par exemple :
						</p>
						<ul className="list-disc pl-6 mt-4 text-gray-200 space-y-2">
							<li>type d’appareil ;</li>
							<li>version du système d’exploitation ;</li>
							<li>journaux techniques ;</li>
							<li>données de diagnostic en cas de dysfonctionnement.</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							3. Finalités du traitement
						</h2>
						<p className="text-gray-200 leading-7">
							Les éventuelles données techniques sont utilisées uniquement pour
							assurer le bon fonctionnement de l’application, améliorer sa
							stabilité, corriger les erreurs et garantir sa sécurité.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							4. Partage des données
						</h2>
						<p className="text-gray-200 leading-7">
							Aucune donnée personnelle n’est vendue à des tiers. Les données
							techniques éventuellement traitées ne le sont que par les
							prestataires techniques indispensables au fonctionnement ou à
							l’hébergement de l’application, le cas échéant.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							5. Conservation des données
						</h2>
						<p className="text-gray-200 leading-7">
							En l’absence de compte utilisateur et de collecte directe de
							données personnelles, aucune base nominative des utilisateurs
							n’est constituée par l’application.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							6. Enfants
						</h2>
						<p className="text-gray-200 leading-7">
							L’application n’est pas spécifiquement destinée aux enfants de
							moins de 13 ans. Elle ne collecte pas sciemment de données
							personnelles concernant des enfants.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							7. Sécurité
						</h2>
						<p className="text-gray-200 leading-7">
							Des mesures raisonnables sont mises en œuvre pour protéger
							l’application et limiter les risques d’accès non autorisé, de
							modification ou de divulgation non souhaitée des informations
							techniques éventuellement traitées.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							8. Contact
						</h2>
						<p className="text-gray-200 leading-7">
							Pour toute question relative à cette politique de confidentialité,
							vous pouvez nous contacter à l’adresse suivante :
						</p>
						<p className="text-gray-200 mt-4">
							<strong>Email :</strong> contact@dydyfantasy.fr
						</p>
					</section>
				</div>
			</div>
		</>
	);
}

export default Privacy;