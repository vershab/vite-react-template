const socialLinks = [
	{ label: "LinkedIn", href: "https://www.linkedin.com", icon: "in" },
	{ label: "Twitter", href: "https://twitter.com", icon: "tw" },
	{ label: "GitHub", href: "https://github.com", icon: "gh" },
];

function Footer() {
	return (
		<footer className="mt-12 rounded-[2rem] border border-slate-800/70 bg-slate-950/80 p-6 text-slate-400 shadow-glow">
			<div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<p className="text-sm uppercase tracking-[0.3em] text-slate-500">Petabyte Innovations</p>
					<p className="mt-2 text-sm text-slate-400">Modern IT services with a premium digital experience.</p>
				</div>
				<div className="flex flex-wrap items-center gap-3 text-sm">
					{socialLinks.map((item) => (
						<a
							key={item.label}
							href={item.href}
							target="_blank"
							rel="noreferrer"
							className="rounded-full border border-slate-800/90 px-4 py-2 transition hover:border-sky-500/80 hover:bg-slate-800/80 hover:text-slate-100"
						>
							<span className="font-semibold uppercase tracking-[0.22em]">{item.icon}</span>
						</a>
					))}
				</div>
			</div>
			<div className="mt-6 border-t border-slate-800/70 pt-4 text-xs text-slate-500">
				<span>© {new Date().getFullYear()} Petabyte Innovations.</span>
				<span className="mx-2 hidden sm:inline">|</span>
				<span>Crafting digital products with clarity and confidence.</span>
			</div>
		</footer>
	);
}

export default Footer;
