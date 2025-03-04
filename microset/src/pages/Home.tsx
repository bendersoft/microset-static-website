import bgImage from "../assets/automatisation.jpg"

export default function Home() {
	return (
	  <main className="mx-auto font-semibold">
		{/* Hero Section */}
		<section 
        className="relative h-fit flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >		  <div className="bg-zinc-900/60 w-full h-full">
		<div className="flex flex-col gap-8 text-left px-16 py-24 max-w-3/5 text-balance">
		<h1 className="text-7xl">20 ans d'expérience du service en surveillances et pilotages industriels</h1>
		<p className="text-lg">Nous vous accompagnons dans le secteur industriel et vinivole pour tout vos projet il faut une deuxième ligne et je n'ai pas d'idée mais comme ça on voit.</p>
		<a href="/contact" className="w-fit inline-block bg-linear-to-t from-fuchsia-500 to-indigo-500 text-white px-10 py-3 rounded-full font-semibold text-lg">
			Nous contacter
		  </a>

		</div>
			
		  </div>
		</section>
  
		{/* Services Section */}
		<section className="py-16 bg-white text-gray-900 text-center">
		  <h2 className="text-3xl font-bold text-cyan-600">Nos Services</h2>
		  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
			{services.map((service) => (
			  <div key={service.title} className="p-6 bg-gray-100 rounded-2xl shadow-lg">
				<img
				  src={service.image}
				  alt={service.title}
				  className="w-full h-40 object-cover rounded-lg mb-4"
				/>
				<h3 className="text-xl font-semibold text-cyan-600">{service.title}</h3>
				<p className="text-gray-600 mt-2">{service.description}</p>
			  </div>
			))}
		  </div>
		</section>
  
		{/* CTA Section */}
		<section className="py-16 bg-black text-white text-center">
		  <h2 className="text-3xl font-bold">Contactez-nous</h2>
		  <p className="text-gray-300 mt-2">Discutons de vos besoins en automatisation et surveillance industrielle.</p>
		  <a href="/contact" className="mt-6 inline-block bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold text-lg">
			Nous Contacter
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
	  image: "/images/automatisme.jpg",
	},
	{
	  title: "Informatique industrielle",
	  description:
		"Développement de logiciels et systèmes pour le contrôle des opérations industrielles.",
	  image: "/images/informatique.jpg",
	},
	{
	  title: "Maintenance et supervision",
	  description:
		"Services de maintenance et de surveillance pour garantir la continuité des opérations.",
	  image: "/images/maintenance.jpg",
	},
  ];
  