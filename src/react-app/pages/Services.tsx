import ServiceCard from "../components/ServiceCard";

const services = [
	{
		title: "Website Development",
		description: "Building responsive websites that perform across every device.",
		icon: "🌐",
		benefits: ["Custom UI design", "SEO-friendly structure", "Content strategy support"],
	},
	{
		title: "Mobile App Development",
		description: "Creating beautiful mobile experiences for iOS and Android.",
		icon: "📱",
		benefits: ["Native-like interactions", "Offline-ready features", "Quick deployment"],
	},
	{
		title: "Live Broadcasting",
		description: "Studio-quality streaming and event production tools.",
		icon: "📡",
		benefits: ["Multi-channel streaming", "Real-time analytics", "Stable playback"],
	},
	{
		title: "Graphic Designing",
		description: "Visual branding and campaign assets tailored for digital impact.",
		icon: "🎨",
		benefits: ["Logo and identity systems", "Marketing collateral", "Motion graphics"],
	},
	{
		title: "Video Editing",
		description: "Engaging video content optimized for social and corporate channels.",
		icon: "🎬",
		benefits: ["Story-driven edits", "Color grading", "Audio polishing"],
	},
];

function Services() {
	return (
		<div className="space-y-10">
			<div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-glow">
				<p className="text-sm uppercase tracking-[0.32em] text-sky-400/90">What we do</p>
				<h2 className="mt-4 text-4xl font-semibold text-white">Services designed to bring your vision to life.</h2>
				<p className="mt-5 max-w-2xl text-slate-300">From full-stack websites and mobile apps to live broadcasts and creative production, we build polished digital experiences that engage customers and grow brands.</p>
			</div>

			<div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
				{services.map((service) => (
					<ServiceCard key={service.title} {...service} benefits={service.benefits} />
				))}
			</div>
		</div>
	);
}

export default Services;
