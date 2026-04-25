interface ServiceCardProps {
	title: string;
	description: string;
	icon: string;
	benefits: string[];
}

function ServiceCard({ title, description, icon, benefits }: ServiceCardProps) {
	return (
		<div className="group rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-500/60 hover:bg-slate-900 shadow-glow">
			<div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-800 text-2xl text-brand-accent transition duration-300 group-hover:bg-sky-500/10">
				{icon}
			</div>
			<h3 className="text-xl font-semibold text-slate-100">{title}</h3>
			<p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>
			<ul className="mt-5 space-y-3 text-sm text-slate-300">
				{benefits.map((item) => (
					<li key={item} className="flex items-start gap-3">
						<span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-sky-400">✓</span>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}

export default ServiceCard;
