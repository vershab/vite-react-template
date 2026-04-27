// src/App.tsx

import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Refund from "./pages/Refund";

function App() {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = document.documentElement.scrollTop;
			const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
			setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-black overflow-x-hidden">
			<div className="fixed left-0 right-0 top-0 z-50 h-1 bg-slate-200/70 backdrop-blur-xl">
				<div className="h-full bg-gradient-to-r from-slate-900 via-blue-700 to-slate-900 transition-all duration-200" style={{ width: `${progress}%` }} />
			</div>

			<div className="fixed inset-0 pointer-events-none overflow-hidden">
				<div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
				<div className="absolute right-0 top-[30vh] h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
				<div className="absolute left-1/2 bottom-20 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
			</div>

			<div className="relative mx-auto max-w-[1400px] px-6 py-6 sm:px-8 lg:px-12 z-10">
				<Navbar />
				<main className="mt-10 space-y-16">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/services" element={<Services />} />
						<Route path="/portfolio" element={<Portfolio />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/terms" element={<Terms />} />
						<Route path="/privacy" element={<Privacy />} />
						<Route path="/refund" element={<Refund />} />
						<Route path="*" element={<Navigate to="/" replace />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</div>
	);
}

export default App;
