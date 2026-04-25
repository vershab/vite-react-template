// src/App.tsx

import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
	return (
		<div className="min-h-screen bg-[#050816] text-slate-100">
			<div className="mx-auto max-w-[1400px] px-6 py-6 sm:px-8 lg:px-12">
				<Navbar />
				<main className="mt-10 rounded-[2rem] border border-slate-800/70 bg-slate-950/80 p-6 shadow-[0_30px_80px_rgba(14,165,233,0.12)] backdrop-blur-xl">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/services" element={<Services />} />
						<Route path="/portfolio" element={<Portfolio />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="*" element={<Navigate to="/" replace />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</div>
	);
}

export default App;
