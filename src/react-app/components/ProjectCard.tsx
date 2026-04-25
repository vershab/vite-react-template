interface ProjectCardProps {
	title: string;
	category: string;
	accent: string;
}

function ProjectCard({ title, category, accent }: ProjectCardProps) {
	return (
		<div className="overflow-hidden rounded-[1.8rem] border border-slate-800/90 bg-slate-950/90 shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1">
			<div className={`h-48 bg-gradient-to-br ${accent} p-5`}>
				<div className="flex h-full flex-col justify-between rounded-[1.4rem] bg-slate-950/10 p-5 backdrop-blur-sm">
					<div className="text-sm uppercase tracking-[0.26em] text-slate-200/80">{category}</div>
					<h3 className="text-xl font-semibold text-white">{title}</h3>
				</div>
			</div>
			<div className="space-y-3 p-5 text-slate-300">
				<p>Modern solutions designed for powerful brand presence, fast performance, and smooth storytelling.</p>
				<span className="inline-flex rounded-full bg-slate-800/80 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-400">Featured project</span>
			</div>
		</div>
	);
}

export default ProjectCard;
