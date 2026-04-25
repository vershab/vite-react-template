import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";

const services = [
	{
		title: "Website Development",
		description: "Custom websites built for performance, accessibility, and conversion.",
		icon: "💻",
		benefits: ["Responsive user experiences", "Modern CMS integrations", "Fast page speed"],
	},
	{
		title: "Mobile App Development",
		description: "Native and cross-platform apps crafted for growth and engagement.",
		icon: "📱",
		benefits: ["Smooth UI interactions", "App store readiness", "Scalable architecture"],
	},
	{
		title: "Live Broadcasting",
		description: "Studio-grade streaming solutions for live events, webinars, and launches.",
		icon: "🎥",
		benefits: ["Low latency delivery", "Multi-channel streaming", "Adaptive audience scaling"],
	},
];

function Home() {
	return (
		<div className="space-y-14">
			<section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
				<div className="space-y-6">
					<p className="inline-flex rounded-full bg-slate-800/80 px-4 py-2 text-sm uppercase tracking-[0.3em] text-sky-300/90">Digital experiences</p>
					<div className="space-y-5">
						<h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Transforming Ideas into Digital Reality</h2>
						<p className="max-w-2xl text-lg leading-8 text-slate-300">Petabyte Innovations delivers modern IT solutions for businesses that want a standout presence online, intuitive mobile experiences, and compelling visual storytelling.</p>
					</div>
					<div className="flex flex-wrap gap-4">
						<Button onClick={() => window.location.assign("/services")}>Get Started</Button>
						<Button variant="secondary" onClick={() => window.location.assign("/contact")}>Contact Us</Button>
					</div>
				</div>
				<div className="rounded-[2rem] border border-slate-800/90 bg-slate-950/90 p-8 shadow-glow">
					<div className="rounded-[1.8rem] bg-slate-900/90 p-8 text-slate-200 shadow-inner shadow-slate-950/20">
						<p className="text-sm uppercase tracking-[0.28em] text-sky-300/80">Services preview</p>
						<div className="mt-8 grid gap-4">
							{services.map((service) => (
								<div key={service.title} className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 transition hover:border-sky-500/60 hover:bg-slate-900">
									<div className="flex items-center gap-4">
										<div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-800 text-xl text-sky-400">{service.icon}</div>
										<div>
											<h3 className="text-lg font-semibold text-white">{service.title}</h3>
											<p className="mt-2 text-sm text-slate-400">{service.description}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="space-y-5">
				<div className="flex items-center justify-between gap-4">
					<div>
						<p className="text-sm uppercase tracking-[0.32em] text-sky-400/90">Our expertise</p>
						<h3 className="text-3xl font-semibold text-white">Tailored IT solutions for every stage of your growth.</h3>
					</div>
				</div>
				<div className="grid gap-6 md:grid-cols-3">
					{services.map((service) => (
						<ServiceCard key={service.title} {...service} benefits={service.benefits} />
					))}
				</div>
			</section>
		</div>
	);
}

export default Home;
