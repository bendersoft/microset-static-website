import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Menu from "./components/Menu";


function Home() {
  return <h2 className="text-center text-xl">Bienvenue sur Microset</h2>;
}
function Industries() {
  return <h2 className="text-center text-xl">Page Industries</h2>;
}
function Vinicole() {
  return <h2 className="text-center text-xl">Page Vinicole</h2>;
}
function Partenaires() {
  return <h2 className="text-center text-xl">Nos partenaires</h2>;
}
function Contact() {
  return <h2 className="text-center text-xl">Contactez-nous</h2>;
}
function Mentions() {
  return (
    <>
    <h2 className="text-center text-xl">Mentions légales</h2>
    <p>MICROSET ing. SARL au capital de 10 000 €
RCS Bordeaux B 389 135 559
SIRET : 389 135 559 00034
N° TVA intracommunautaire : FR 49 389 135 559
Directeur de la publication  : Jean Dominique BRITT
Hébergement : OVH, 2 rue Kellermann 59100 ROUBAIX ovh.com</p>
    </>
)
}



function App() {

  return (
    <Router>
    <div className="flex flex-col min-h-screen bg-gray-900">
    <Menu />
  
    {/* Routes */}
    <main className="flex flex-1 flex-col gap-4 sm:gap-8 py-4 sm:py-8 px-4 sm:px-16 text-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/vinicole" element={<Vinicole />} />
            <Route path="/partenaires" element={<Partenaires />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions" element={<Mentions />} />
          </Routes>
        </main>
    <footer className="bg-cyan-500 text-gray-900 h-12 flex items-center justify-end p-4 text-sm">
        2025 - MICROSET ing. SARL - <a href="/mentions">Mentions légales</a> - réalisation : Gobisoft
    </footer>
  </div>
  </Router>
  )
}

export default App
