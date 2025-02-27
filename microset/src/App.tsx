import "./App.css";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import AppRoutes from "./routes/AppRoutes";

function App() {
	return (
		<div className="flex flex-col min-h-screen bg-gray-900">
			<Menu />
			<AppRoutes />
			<Footer />
		</div>
	);
}

export default App;
