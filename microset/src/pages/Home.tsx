import bgImage from "../assets/automatisation.jpg";
import service1 from "../assets/cuve.jpg";
import service2 from "../assets/Cuves.jpg";
import service3 from "../assets/automatisation.jpg";

export default function Home() {
	return (
		<main className="mx-auto font-semibold">
			{/* Hero Section */}
			<section
				className="relative h-fit flex items-center justify-center text-center text-white bg-cover bg-center"
				style={{ backgroundImage: `url(${bgImage})` }}
			>
				{" "}
				<div className="bg-zinc-900/60 w-full h-full">
					<div className="flex flex-col gap-8 text-left px-16 py-24 lg:max-w-3/5 text-balance">
						<h1 className="text-xl lg:text-7xl">
							20 ans d'expérience du service en surveillances et pilotages
							industriels
						</h1>
						<p className="lg:text-lg">
							Nous vous accompagnons dans le secteur industriel et vinivole pour
							tout vos projet il faut une deuxième ligne et je n'ai pas d'idée
							mais comme ça on voit.
						</p>
						<a
							href="/contact"
							className="w-fit inline-block bg-linear-to-t from-fuchsia-500 to-indigo-500 text-white px-4 lg:px-10 py-3 rounded-full font-semibold lg:text-lg"
						>
							Nous contacter
						</a>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="flex flex-col gap-16 py-12 lg:py-32 bg-white text-gray-900 text-center">
				<h2 className="text-3xl lg:text-5xl font-bold text-indigo-600">Nos services</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-8 container-max-width">
					{services.map((service) => (
						<div
							key={service.title}
							
						>
							<img
								src={service.image}
								alt={service.title}
								className="w-full h-72 object-cover lg:rounded-lg"
							/>
							<div className="flex flex-col gap-2 px-4 py-8">
							<h3 className="text-2xl font-semibold">
								{service.title}
							</h3>
							<p className="text-gray-600 mt-2">{service.description}</p>

							</div>
							<a
							href={service.link}
							className="w-fit bg-indigo-500 text-white px-4 lg:px-10 py-3 rounded-full font-semibold lg:text-lg"
						>
							Voir ce service
						</a>
							
						</div>
					))}
				</div>
			</section>

			{/* CTA Section */}
			<section className="flex flex-col gap-8 lg:gap-16 py-20 lg:py-32 bg-black text-white items-center">
				<div className="flex flex-col gap-4 text-center">
				<h2 className="text-3xl lg:text-7xl font-bold">Travailler ensemble</h2>
				<p className="lg:text-lg text-gray-300">
					Discutons de vos besoins en automatisation et surveillance
					industrielle.
				</p>
				</div>
				<a
							href="/contact"
							className="w-fit bg-linear-to-t from-fuchsia-500 to-indigo-500 text-white px-4 lg:px-10 py-3 rounded-full font-semibold lg:text-lg"
						>
							Nous contacter
						</a>
			</section>
		</main>
	);
}

const services = [
	{
		title: "Automatisme industriel",
		description:
			"Solutions avancées pour la gestion et l'automatisation des processus industriels.",
		image: service1,
		link: "/industries/informatique"
	},
	{
		title: "Informatique industrielle",
		description:
			"Développement de logiciels et systèmes pour le contrôle des opérations industrielles.",
		image: service2,
		link: "/vinicole/automatisme"
	},
	{
		title: "Maintenance et supervision",
		description:
			"Services de maintenance et de surveillance pour garantir la continuité des opérations.",
		image: service3,
		link: "/industries/automatisme"
	},
];
