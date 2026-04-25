import { NavLink } from "react-router-dom";
import Button from "./Button";

const navLinks = [
	{ label: "Home", to: "/" },
	{ label: "About", to: "/about" },
	{ label: "Services", to: "/services" },
	{ label: "Portfolio", to: "/portfolio" },
	{ label: "Contact", to: "/contact" },
];

function Navbar() {
	return (
		<header className="flex flex-col gap-6 border-b border-slate-800/70 pb-6 sm:flex-row sm:items-center sm:justify-between">
			<div className="flex items-center gap-4">
				<div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-500 to-violet-500 text-xl font-bold text-slate-950 shadow-glow">
					P
				</div>
				<div>
					<p className="text-sm uppercase tracking-[0.32em] text-slate-400">Petabyte Innovations</p>
					<h1 className="text-xl font-semibold text-slate-100 sm:text-2xl">Digital services that move your business forward</h1>
				</div>
			</div>

			<nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-300">
				{navLinks.map((item) => (
					<NavLink
						key={item.to}
						end={item.to === "/"}
						to={item.to}
						className={({ isActive }) =>
							`rounded-full px-4 py-2 transition duration-200 ${
								isActive
									? "bg-slate-800 text-slate-100 shadow-[0_10px_30px_rgba(14,165,233,0.18)]"
									: "hover:bg-slate-800/70 hover:text-slate-100"
							}`
						}
					>
						{item.label}
					</NavLink>
				))}
			</nav>

			<div className="flex items-center gap-3">
				<Button variant="ghost" className="hidden md:inline-flex">
					Explore
				</Button>
				<Button variant="primary" onClick={() => window.location.assign("/contact")}>Contact Us</Button>
			</div>
		</header>
	);
}

export default Navbar;
