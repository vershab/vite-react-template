import { Link } from "react-router-dom";

const socialLinks = [
	{ label: "LinkedIn", href: "https://www.linkedin.com" },
	{ label: "Twitter", href: "https://twitter.com" },
	{ label: "Instagram", href: "https://www.instagram.com" },
];

function Footer() {
	return (
		<footer className="mt-12 rounded-[2rem] border border-gray-300 bg-white/90 p-10 shadow-2xl shadow-gray-300/60 backdrop-blur-xl text-gray-700">
			<div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
				<div className="space-y-4">
				<p className="text-sm uppercase tracking-[0.35em] text-black font-semibold">Petabyte Innovations</p>
				<h3 className="text-2xl font-bold text-black">Premium digital products for modern brands.</h3>
			<p className="text-gray-600 leading-7">A high-end agency experience with expert websites, apps, design, and media production.</p>
				<p className="text-sm uppercase tracking-[0.35em] text-gray-600 font-semibold">Quick Links</p>
				<nav className="flex flex-col gap-3 text-sm text-gray-600">
						<Link to="/services" className="transition hover:text-black">Services</Link>
						<Link to="/portfolio" className="transition hover:text-black">Portfolio</Link>
						<Link to="/contact" className="transition hover:text-black">Contact</Link>
						<Link to="/terms" className="transition hover:text-black">Terms</Link>
						<Link to="/privacy" className="transition hover:text-black">Privacy</Link>
					</nav>
				</div>

				<div className="space-y-4">
				<p className="text-sm uppercase tracking-[0.35em] text-gray-600 font-semibold">Contact</p>
				<div className="text-sm leading-7 text-gray-600">
					<p>Phone: <span className="text-black">9351858094</span></p>
					<p>Email: <span className="text-black">petabyteinnovations@gmail.com</span></p>
					<p>Location: <span className="text-black">iStart, Jodhpur</span></p>
					</div>
					<div className="flex flex-wrap items-center gap-3 pt-2">
						{socialLinks.map((item) => (
							<a
								key={item.label}
								href={item.href}
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-xs uppercase tracking-[0.22em] text-gray-600 transition hover:border-gray-400 hover:text-black"
							>
								{item.label}
							</a>
						))}
					</div>
				</div>
			</div>

			<div className="mt-10 border-t border-gray-300 pt-6 text-sm text-gray-600"> 
				<div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
					<p>© {new Date().getFullYear()} Petabyte Innovations. All rights reserved.</p>
					<p>Designed for premium digital experiences with modern animation and polish.</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
