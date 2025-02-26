import { useState } from "react";
import { Link } from "react-router-dom";

type MenuType = "industries" | "vinicole" | null;

function Menu() {
	const [openDropdown, setOpenDropdown] = useState<MenuType>(null);

	const toggleDropdown = (menu: MenuType) => {
		setOpenDropdown(openDropdown === menu ? null : menu);
	};

	const closeMenus = () => {
		setOpenDropdown(null);
	};

	return (
		<header className="border-b-2 border-b-cyan-200 flex items-center px-4 sm:px-16 bg-gray-800 relative text-gray-100">
			<div className="py-2">
				<Link to="/" onClick={closeMenus} className="hover:text-cyan-400">
					<h1 className="text-xl font-bold">Microset</h1>
					<p className="text-sm text-gray-400">
						Surveillances et pilotages industriels
					</p>
				</Link>
			</div>

			<nav className="ml-auto flex gap-6 relative">
				{/* Industries */}
				<div className="relative">
					<button
						type="button"
						onClick={() => toggleDropdown("industries")}
						className="hover:text-cyan-400"
					>
						Industries ▼
					</button>
					{openDropdown === "industries" && (
						<div className="absolute left-0 mt-2 w-48 bg-gray-700 shadow-lg rounded-lg py-2">
							<Link
								to="/industries"
								onClick={closeMenus}
								className="block px-4 py-2 hover:bg-gray-600"
							>
								Automatisation
							</Link>
							<Link
								to="/industries"
								onClick={closeMenus}
								className="block px-4 py-2 hover:bg-gray-600"
							>
								Électronique
							</Link>
							<Link
								to="/industries"
								onClick={closeMenus}
								className="block px-4 py-2 hover:bg-gray-600"
							>
								Logiciels
							</Link>
						</div>
					)}
				</div>

				{/* Vinicole */}
				<div className="relative">
					<button
						type="button"
						onClick={() => toggleDropdown("vinicole")}
						className="hover:text-cyan-400"
					>
						Vinicole ▼
					</button>
					{openDropdown === "vinicole" && (
						<div className="absolute left-0 mt-2 w-48 bg-gray-700 shadow-lg rounded-lg py-2">
							<Link
								to="/vinicole"
								onClick={closeMenus}
								className="block px-4 py-2 hover:bg-gray-600"
							>
								Caves intelligentes
							</Link>
							<Link
								to="/vinicole"
								onClick={closeMenus}
								className="block px-4 py-2 hover:bg-gray-600"
							>
								Traçabilité
							</Link>
							<Link
								to="/vinicole"
								onClick={closeMenus}
								className="block px-4 py-2 hover:bg-gray-600"
							>
								Analyse qualité
							</Link>
						</div>
					)}
				</div>

				{/* Liens simples */}
				<Link
					to="/partenaires"
					onClick={closeMenus}
					className="hover:text-cyan-400"
				>
					Partenaires
				</Link>
				<Link
					to="/contact"
					onClick={closeMenus}
					className="hover:text-cyan-400"
				>
					Contact
				</Link>
			</nav>
		</header>
	);
}

export default Menu;
