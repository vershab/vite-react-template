import ProjectCard from "../components/ProjectCard";

const projects = [
	{ title: "Pulse Media Hub", category: "Broadcasting", accent: "from-cyan-500 to-sky-700" },
	{ title: "Vertex Mobile Suite", category: "Mobile App", accent: "from-violet-500 to-fuchsia-600" },
	{ title: "Refine Studio", category: "Brand Identity", accent: "from-sky-500 to-indigo-700" },
	{ title: "Launch Commerce", category: "Website", accent: "from-slate-400 to-slate-700" },
	{ title: "Streamline Live", category: "Live Events", accent: "from-cyan-500 to-slate-800" },
	{ title: "Spark Campaign", category: "Video Editing", accent: "from-fuchsia-500 to-violet-700" },
];

function Portfolio() {
	return (
		<div className="space-y-10">
			<div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-glow">
				<p className="text-sm uppercase tracking-[0.32em] text-sky-400/90">Our work</p>
				<h2 className="mt-4 text-4xl font-semibold text-white">A portfolio of polished digital projects.</h2>
				<p className="mt-5 max-w-2xl text-slate-300">Discover examples of our website, mobile, branding, and broadcasting work created for ambitious teams and creative leaders.</p>
			</div>

			<div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
				{projects.map((project) => (
					<ProjectCard key={project.title} {...project} />
				))}
			</div>
		</div>
	);
}

export default Portfolio;
