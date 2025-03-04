import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import type { MenuType } from "../types";
import logo from "../assets/icons8-mu-64.png";

function Menu() {
	const [openDropdown, setOpenDropdown] = useState<MenuType>(null);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleDropdown = (menu: MenuType) => {
		setOpenDropdown(openDropdown === menu ? null : menu);
	};

	const closeMenus = () => {
		setOpenDropdown(null);
		setMobileMenuOpen(false);
	};

	return (
		<header className="border-b-1 border-b-purple-500 bg-zinc-950 relative text-gray-100 font-semibold z-50">
			<div className="mx-auto px-4 sm:px-6 lg:px-12">
				<div className="flex gap-20 items-center justify-items-start py-4">
					<div className="py-2">
						<Link to="/" onClick={closeMenus} className="hover:text-cyan-200">
							<div className="flex gap-2 items-center">
								<img src={logo} alt="logo microset" />
								<h1 className="text-3xl">Microset</h1>
							</div>
						</Link>
					</div>

					{/* Mobile menu bar */}
					<button
						type="button"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className="lg:hidden relative"
					>
						{mobileMenuOpen ? (
							<XIcon className="h-6 w-6 text-white hover:text-cyan-200 transition-colors" />
						) : (
							<MenuIcon className="h-6 w-6 text-white hover:text-cyan-200 transition-colors" />
						)}
					</button>

					{/* Navigation desktop */}
					<nav className="hidden lg:flex gap-10 relative text-lg items-center">
						<div className="lg:flex gap-10">
						<Link
								to="/"
								onClick={closeMenus}
								className="hover:text-cyan-200"
								aria-label="Page partenaires"
							>
								Accueil
							</Link>
							{/* Industries */}
							<div className="relative">
								<button
									type="button"
									onClick={() => toggleDropdown("industries")}
									className="hover:text-cyan-200"
									aria-expanded={openDropdown === "industries"}
									aria-haspopup="true"
								>
									Industries <span className="text-sm">▼</span>
								</button>
								{openDropdown === "industries" && (
									<div className="absolute left-0 mt-2 w-64 bg-gray-700 shadow-lg rounded-lg py-2">
										<div className="space-y-2  mx-3 border-l-2 border-cyan-200">
											<Link
												to="/industries/automatisme"
												onClick={closeMenus}
												className="block px-4 py-2 hover:bg-gray-600"
												aria-label="Automatisation - Solutions d'automatisation industrielle"
											>
												<span className="block font-medium">
													Automatisation
												</span>
												<span className="block text-sm text-gray-400">
													Solutions d'automatisation industrielle
												</span>
											</Link>
											<Link
												to="/industries/informatique"
												onClick={closeMenus}
												className="block px-4 py-2 hover:bg-gray-600"
												aria-label="Électronique"
											>
												<span className="block font-medium">Informatique</span>
												<span className="block text-sm text-gray-400">
													Solutions électroniques industrielles
												</span>
											</Link>
											<Link
												to="/industries/machines"
												onClick={closeMenus}
												className="block px-4 py-2 hover:bg-gray-600"
												aria-label="Logiciels"
											>
												<span className="block font-medium">
													Machines spéciales
												</span>
												<span className="block text-sm text-gray-400">
													Solutions logicielles industrielles
												</span>
											</Link>
											<Link
												to="/industries/autoclaves"
												onClick={closeMenus}
												className="block px-4 py-2 hover:bg-gray-600"
												aria-label="Autoclaves"
											>
												<span className="block font-medium">Autoclaves</span>
												<span className="block text-sm text-gray-400">
													Solutions logicielles industrielles
												</span>
											</Link>
										</div>
									</div>
								)}
							</div>

							{/* Vinicole */}
							<div className="relative">
								<button
									type="button"
									onClick={() => toggleDropdown("vinicole")}
									className="hover:text-cyan-200"
									aria-expanded={openDropdown === "vinicole"}
									aria-haspopup="true"
								>
									Vinicole <span className="text-sm">▼</span>
								</button>
								{openDropdown === "vinicole" && (
									<div className="absolute left-0 mt-2 w-64 bg-gray-700 shadow-lg rounded-lg py-2">
										<div className="space-y-2 mx-3 border-l-2 border-cyan-200">
											<Link
												to="/vinicole/automatisme"
												onClick={closeMenus}
												className="block px-4 py-2 hover:bg-gray-600"
												aria-label="Caves intelligentes - Solutions de caves intelligentes"
											>
												<span className="block font-medium">Automatismes</span>
												<span className="block text-sm text-gray-400">
													Solutions de caves intelligentes
												</span>
											</Link>
											<Link
												to="/vinicole/informatique"
												onClick={closeMenus}
												className="block px-4 py-2 hover:bg-gray-600"
												aria-label="Traçabilité - Solutions de traçabilité"
											>
												<span className="block font-medium">Informatique</span>
												<span className="block text-sm text-gray-400">
													Logiciels vinicoles
												</span>
											</Link>
											<Link
												to="/vinicole/electronique"
												onClick={closeMenus}
												className="block px-4 py-2 hover:bg-gray-600"
												aria-label="Analyse qualité - Solutions d'analyse qualité"
											>
												<span className="block font-medium">Electronique</span>
												<span className="block text-sm text-gray-400">
													Solutions électroniques
												</span>
											</Link>
											<Link
												to="/vinicole/appareils"
												onClick={closeMenus}
												className="block px-4 py-2 hover:bg-gray-600"
												aria-label="Analyse qualité - Solutions d'analyse qualité"
											>
												<span className="block font-medium">Appareils</span>
												<span className="block text-sm text-gray-400">
													Solutions blabla
												</span>
											</Link>
										</div>
									</div>
								)}
							</div>

							{/* Simple links */}
							<Link
								to="/partenaires"
								onClick={closeMenus}
								className="hover:text-cyan-200"
								aria-label="Page partenaires"
							>
								Partenaires
							</Link>
						</div>
						<div className="ml-auto">
							<Link
								to="/contact"
								onClick={closeMenus}
								className="hover:text-black w-fit border-2 border-fuchsia-500/50 text-white px-10 py-3 rounded-full font-semibold text-lg"
								aria-label="Page contact"
							>
								Contact
							</Link>
						</div>
						
					</nav>

					{/* Menu mobile */}
					{mobileMenuOpen && (
						<div className="absolute top-full left-0 w-full bg-gray-800 shadow-lg">
							<div className="container mx-auto px-8 py-4 space-y-2">
							<Link
									to="/"
									onClick={closeMenus}
									className="block py-2 hover:text-cyan-200"
								>
									Accueil
								</Link>
								{/* Industries mobile */}
								<button
									type="button"
									onClick={() => {
										toggleDropdown("industries");
									}}
									className="w-full py-2 text-left hover:text-cyan-200"
								>
									Industries ▼
								</button>

								{openDropdown === "industries" && (
									<div className="space-y-2 pl-4 border-l-2 border-cyan-200 ml-2">
										<Link
											to="/industries/automatisme"
											onClick={closeMenus}
											className="block py-1 hover:bg-gray-700 rounded-lg hover:text-cyan-200"
										>
											Automatisation
										</Link>
										<Link
											to="/industries/informatique"
											onClick={closeMenus}
											className="block py-1 hover:bg-gray-700 rounded-lg hover:text-cyan-200"
										>
											Électronique
										</Link>
										<Link
											to="/industries/machines"
											onClick={closeMenus}
											className="block py-1 hover:bg-gray-700 rounded-lg hover:text-cyan-200"
										>
											Machines spéciales
										</Link>
										<Link
											to="/industries/autoclaves"
											onClick={closeMenus}
											className="block py-1 hover:bg-gray-700 rounded-lg hover:text-cyan-200"
										>
											Autoclaves
										</Link>
									</div>
								)}

								{/* Vinicole mobile */}
								<button
									type="button"
									onClick={() => {
										toggleDropdown("vinicole");
									}}
									className="w-full py-2 text-left hover:text-cyan-200"
								>
									Vinicole ▼
								</button>

								{openDropdown === "vinicole" && (
									<div className="space-y-2 pl-4 border-l-2 border-cyan-200 ml-2">
										<Link
											to="/vinicole/automatisme"
											onClick={closeMenus}
											className="block py-1 hover:bg-gray-700 rounded-lg hover:text-cyan-200"
										>
											Automatisme
										</Link>
										<Link
											to="/vinicole/informatique"
											onClick={closeMenus}
											className="block py-1 hover:bg-gray-700 rounded-lg hover:text-cyan-200"
										>
											Informatique
										</Link>
										<Link
											to="/vinicole/electronique"
											onClick={closeMenus}
											className="block py-1 hover:bg-gray-700 rounded-lg hover:text-cyan-200"
										>
											Electronique
										</Link>
										<Link
											to="/vinicole/appareils"
											onClick={closeMenus}
											className="block py-1 hover:bg-gray-700 rounded-lg hover:text-cyan-200"
										>
											Appareils
										</Link>
									</div>
								)}

								{/* Simple Link mobile */}
								<Link
									to="/partenaires"
									onClick={closeMenus}
									className="block py-2 hover:text-cyan-200"
								>
									Partenaires
								</Link>
								<Link
									to="/contact"
									onClick={closeMenus}
									className="block py-2 w-fit text-fuchsia-400 font-semibold text-lg"
								>
									Contact
								</Link>
							</div>
						</div>
					)}
				</div>
			</div>
		</header>
	);
}

export default Menu;
