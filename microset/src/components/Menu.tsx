import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import type { MenuType } from "../types";

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
		<header className="border-b-2 border-b-cyan-200 bg-gray-800 relative text-gray-100">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between py-4">
					<div className="py-2">
						<Link to="/" onClick={closeMenus} className="hover:text-cyan-400">
							<h1 className="text-xl font-bold">Microset</h1>
							<p className="text-sm text-gray-400">
								Surveillances et pilotages industriels
							</p>
						</Link>
					</div>

					{/* Mobile menu bar */}
					<button
						type="button"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className="lg:hidden relative"
					>
						{mobileMenuOpen ? (
							<XIcon className="h-6 w-6 text-white hover:text-cyan-400 transition-colors" />
						) : (
							<MenuIcon className="h-6 w-6 text-white hover:text-cyan-400 transition-colors" />
						)}
					</button>

					{/* Navigation desktop */}
					<nav className="hidden lg:flex gap-6 relative">
						{/* Industries */}
						<div className="relative">
							<button
								type="button"
								onClick={() => toggleDropdown("industries")}
								className="hover:text-cyan-400"
								aria-expanded={openDropdown === "industries"}
								aria-haspopup="true"
							>
								Industries <span className="text-sm">▼</span>
							</button>
							{openDropdown === "industries" && (
								<div className="absolute left-0 mt-2 w-60 bg-gray-700 shadow-lg rounded-lg py-2">
									<div className="space-y-2  mx-3 border-l-2 border-cyan-400">
										<Link
											to="/automatisme"
											onClick={closeMenus}
											className="block px-4 py-2 hover:bg-gray-600"
											aria-label="Automatisation - Solutions d'automatisation industrielle"
										>
											<span className="block font-medium">Automatisation</span>
											<span className="block text-sm text-gray-400">
												Solutions d'automatisation industrielle
											</span>
										</Link>
										<Link
											to="/industries"
											onClick={closeMenus}
											className="block px-4 py-2 hover:bg-gray-600"
											aria-label="Électronique - Solutions électroniques industrielles"
										>
											<span className="block font-medium">Électronique</span>
											<span className="block text-sm text-gray-400">
												Solutions électroniques industrielles
											</span>
										</Link>
										<Link
											to="/industries"
											onClick={closeMenus}
											className="block px-4 py-2 hover:bg-gray-600"
											aria-label="Logiciels - Solutions logicielles industrielles"
										>
											<span className="block font-medium">Logiciels</span>
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
								className="hover:text-cyan-400"
								aria-expanded={openDropdown === "vinicole"}
								aria-haspopup="true"
							>
								Vinicole <span className="text-sm">▼</span>
							</button>
							{openDropdown === "vinicole" && (
								<div className="absolute left-0 mt-2 w-60 bg-gray-700 shadow-lg rounded-lg py-2">
									<div className="space-y-2 mx-3 border-l-2 border-cyan-400">
										<Link
											to="/vinicole"
											onClick={closeMenus}
											className="block px-4 py-2 hover:bg-gray-600"
											aria-label="Caves intelligentes - Solutions de caves intelligentes"
										>
											<span className="block font-medium">
												Caves intelligentes
											</span>
											<span className="block text-sm text-gray-400">
												Solutions de caves intelligentes
											</span>
										</Link>
										<Link
											to="/vinicole"
											onClick={closeMenus}
											className="block px-4 py-2 hover:bg-gray-600"
											aria-label="Traçabilité - Solutions de traçabilité"
										>
											<span className="block font-medium">Traçabilité</span>
											<span className="block text-sm text-gray-400">
												Solutions de traçabilité
											</span>
										</Link>
										<Link
											to="/vinicole"
											onClick={closeMenus}
											className="block px-4 py-2 hover:bg-gray-600"
											aria-label="Analyse qualité - Solutions d'analyse qualité"
										>
											<span className="block font-medium">Analyse qualité</span>
											<span className="block text-sm text-gray-400">
												Solutions d'analyse qualité
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
							className="hover:text-cyan-400"
							aria-label="Page partenaires"
						>
							Partenaires
						</Link>
						<Link
							to="/contact"
							onClick={closeMenus}
							className="hover:text-cyan-400"
							aria-label="Page contact"
						>
							Contact
						</Link>
					</nav>

					{/* Menu mobile */}
					{mobileMenuOpen && (
						<div className="absolute top-full left-0 w-full bg-gray-800 shadow-lg mt-2">
							<div className="container mx-auto px-4 py-4 space-y-2">
								{/* Industries mobile */}
								<button
									type="button"
									onClick={() => {
										toggleDropdown("industries");
									}}
									className="w-full py-2 text-left hover:text-cyan-400"
								>
									Industries ▼
								</button>

								{openDropdown === "industries" && (
									<div className="space-y-2 pl-4 border-l-2 border-cyan-400 ml-2">
										<Link
											to="/industries"
											onClick={closeMenus}
											className="block py-1 hover:bg-gray-700 rounded-lg hover:text-cyan-400"
										>
											Automatisation
										</Link>
										<Link
											to="/industries"
											onClick={closeMenus}
											className="block py-1 hover:bg-gray-700 rounded-lg hover:text-cyan-400"
										>
											Électronique
										</Link>
										<Link
											to="/industries"
											onClick={closeMenus}
											className="block py-1 hover:bg-gray-700 rounded-lg hover:text-cyan-400"
										>
											Logiciels
										</Link>
									</div>
								)}

								{/* Vinicole mobile */}
								<button
									type="button"
									onClick={() => {
										toggleDropdown("vinicole");
									}}
									className="w-full py-2 text-left hover:text-cyan-400"
								>
									Vinicole ▼
								</button>

								{openDropdown === "vinicole" && (
									<div className="space-y-2 pl-4 border-l-2 border-cyan-400 ml-2">
										<Link
											to="/vinicole"
											onClick={closeMenus}
											className="block py-1 hover:bg-gray-700 rounded-lg hover:text-cyan-400"
										>
											Caves intelligentes
										</Link>
										<Link
											to="/vinicole"
											onClick={closeMenus}
											className="block py-1 hover:bg-gray-700 rounded-lg hover:text-cyan-400"
										>
											Traçabilité
										</Link>
										<Link
											to="/vinicole"
											onClick={closeMenus}
											className="block py-1 hover:bg-gray-700 rounded-lg hover:text-cyan-400"
										>
											Analyse qualité
										</Link>
									</div>
								)}

								{/* Simple Link mobile */}
								<Link
									to="/partenaires"
									onClick={closeMenus}
									className="block py-2 hover:text-cyan-400"
								>
									Partenaires
								</Link>
								<Link
									to="/contact"
									onClick={closeMenus}
									className="block py-2 hover:text-cyan-400"
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
