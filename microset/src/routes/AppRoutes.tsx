import { Route, Routes } from "react-router-dom";
import Automatisme from "../pages/Automatisme";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Industries from "../pages/Industries";
import Mentions from "../pages/Mention";
import Partenaires from "../pages/Partenaires";
import Vinicole from "../pages/Vinicole";

const AppRoutes = () => {
	return (
		<main className="flex flex-1 flex-col gap-4 text-gray-100 sm:gap-8 py-4 sm:py-8 px-4 sm:px-16 max-w-7xl mx-auto">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/industries" element={<Industries />} />
				<Route path="/vinicole" element={<Vinicole />} />
				<Route path="/partenaires" element={<Partenaires />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/mentions" element={<Mentions />} />
				<Route path="/automatisme" element={<Automatisme />} />
			</Routes>
		</main>
	);
};

export default AppRoutes;
