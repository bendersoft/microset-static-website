const Automatisme = () => {
	return (
		<div className="flex gap-6 p-6 mx-auto">
			<div className="flex-1 flex flex-col gap-6">
				<div className="main-container">
					<h1 className="text-3xl font-bold text-cyan-300 mb-4">Automatisme</h1>
					<p className="mb-6">
						Nous assurons la réalisation de vos automatismes, de la conception
						de vos schématiques électrique ou mécanique à la maintenance de vos
						équipements.
					</p>
					<p className="mb-6">
						Nous intervenons dans les domaines de l'aéronautique, les
						transports, l'optique et les matériaux composites.
					</p>
				</div>

				<div className="flex gap-6">
					<div className="main-container flex-1">
						<h2 className="text-2xl font-semibold text-cyan-300 mb-3">
							Nos compétences
						</h2>
						<ul className="list-disc list-inside mb-6">
							<li>Pilotage</li>
							<li>Régulation</li>
							<li>Enregistrement</li>
							<li>Surveillance</li>
							<li>Contrôle</li>
							<li>Fabrication</li>
							<li>Câblage petite / moyenne et grosse puissance</li>
							<li>Maintenance</li>
							<li>Schématique électrique</li>
							<li>Schématique mécanique</li>
						</ul>
					</div>

					<div className="main-container flex-1">
						<h2 className="text-2xl font-semibold text-cyan-300 mb-3">
							Nos réalisations
						</h2>
						<ul className="list-disc list-inside mb-6">
							<li>Autoclaves</li>
							<li>Etuves</li>
							<li>Fours</li>
							<li>Polisseuses</li>
							<li>Bancs de tests</li>
							<li>Machines spéciales</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="second-container w-fit">
				<h2 className="text-2xl font-semibold text-amber-500 mb-3">
					Nos références
				</h2>
				<div className="flex flex-col gap-3">
					{[
						{
							title: "Aéronautique",
							items: [
								"EADS",
								"AIRBUS",
								"Latécoère",
								"Eurocopter",
								"Letov",
								"Corse Composite",
								"IUT Toulouse",
							],
						},
						{ title: "Automobile", items: ["Ford", "Delphi", "Bilz"] },
						{ title: "Transport", items: ["EDF", "SNCF", "PAB"] },
						{ title: "Optique", items: ["Sagem"] },
						{ title: "Composite", items: ["Epsilon"] },
					].map((category) => (
						<div key={category.title}>
							<h3 className="font-semibold">{category.title}</h3>
							<ul className="list-disc list-inside">
								{category.items.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Automatisme;
