import { Route, Routes } from "react-router-dom";
import IndusAutomatisme from "../pages/Industrie/IndusAutomatisme";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Mentions from "../pages/Mention";
import Partenaires from "../pages/Partenaires";
import { Outlet } from "react-router-dom";
import IndusInformatique from "../pages/Industrie/IndusInformatique";
import Machines from "../pages/Industrie/Machines";
import Autoclaves from "../pages/Industrie/Autoclaves";
import ViniAutomatisme from "../pages/Vinicole/ViniAutomatisme";
import ViniInformatique from "../pages/Vinicole/ViniInformatique";
import Electronique from "../pages/Vinicole/Electronique";
import Appareils from "../pages/Vinicole/Appareils";

const IndustriesLayout = () => (
	<div>
		<Outlet />
	</div>
);

const VinicoleLayout = () => (
	<div>
		<Outlet />
	</div>
);

const AppRoutes = () => {
	return (
		<main className="flex flex-1 flex-col gap-4 text-gray-100 sm:gap-8 py-4 sm:py-8 px-2 sm:px-16 max-w-7xl mx-auto">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/industries" element={<IndustriesLayout />}>
					<Route path="automatisme" element={<IndusAutomatisme />} />
					<Route path="informatique" element={<IndusInformatique />} />
					<Route path="machines" element={<Machines />} />
					<Route path="autoclaves" element={<Autoclaves />} />
				</Route>
				<Route path="/vinicole" element={<VinicoleLayout />}>
					<Route path="automatisme" element={<ViniAutomatisme />} />
					<Route path="informatique" element={<ViniInformatique />} />
					<Route path="electronique" element={<Electronique />} />
					<Route path="appareils" element={<Appareils />} />
				</Route>
				<Route path="/partenaires" element={<Partenaires />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/mentions" element={<Mentions />} />
			</Routes>
		</main>
	);
};

export default AppRoutes;
