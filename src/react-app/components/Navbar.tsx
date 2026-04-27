import { NavLink } from "react-router-dom";
import Button from "./Button";
import PetabyteLogo from "./PetabyteLogo";

const navLinks = [
	{ label: "Home", to: "/" },
	{ label: "About", to: "/about" },
	{ label: "Services", to: "/services" },
	{ label: "Portfolio", to: "/portfolio" },
	{ label: "Contact", to: "/contact" },
];

function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full rounded-[2rem] border border-gray-200 bg-white/80 px-6 py-4 backdrop-blur-xl shadow-xl shadow-gray-200/60">
			<div className="mx-auto flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
				<div className="flex items-center gap-4">
					<div className="w-[180px]">
						<PetabyteLogo />
					</div>
				</div>

				<nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-gray-700">
					{navLinks.map((item) => (
						<NavLink
							key={item.to}
							end={item.to === "/"}
							to={item.to}
							className={({ isActive }) =>
								`rounded-full px-4 py-2 transition duration-200 transform hover:scale-105 hover:text-white ${isActive
									? "bg-black text-white"
									: "text-slate-700 hover:bg-black border border-slate-200"
								}`
							}
						>
							{item.label}
						</NavLink>
					))}
				</nav>

				<div className="flex items-center gap-3">
					<Button variant="ghost" className="hidden md:inline-flex">
						Discover
					</Button>
					<Button variant="primary" onClick={() => window.location.assign("/contact")}>Contact Us</Button>
				</div>
			</div>
		</header>
	);
}

export default Navbar;
