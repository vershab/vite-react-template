const reasons = [
	"We combine creativity with technical depth to build timeless digital products.",
	"Every project is scoped for fast delivery and long-term sustainability.",
	"Our team collaborates closely with stakeholders at every stage.",
];

function About() {
	return (
		<div className="space-y-12">
			<section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
				<div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-glow">
					<p className="text-sm uppercase tracking-[0.32em] text-sky-400/90">About Petabyte</p>
					<h2 className="mt-4 text-4xl font-semibold text-white">We help businesses build bold digital brands with intelligent solutions.</h2>
					<p className="mt-5 text-base leading-8 text-slate-300">Petabyte Innovations is an IT services company specializing in website development, mobile applications, live broadcasting, graphic designing, and video editing. We create digital products that look modern, perform flawlessly, and help clients grow.</p>
				</div>

				<div className="space-y-6">
					<div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-glow">
						<h3 className="text-2xl font-semibold text-white">Our mission</h3>
						<p className="mt-4 text-slate-300">Deliver transformative digital solutions that empower brands and make every user interaction feel polished, intuitive, and reliable.</p>
					</div>
					<div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-glow">
						<h3 className="text-2xl font-semibold text-white">Our vision</h3>
						<p className="mt-4 text-slate-300">Be the partner businesses choose when they need modern IT services powered by creativity, speed, and measurable impact.</p>
					</div>
				</div>
			</section>

			<section className="grid gap-6 md:grid-cols-3">
				{reasons.map((reason) => (
					<div key={reason} className="rounded-[1.8rem] border border-slate-800/80 bg-slate-900/90 p-6 text-slate-300 transition hover:-translate-y-1 hover:border-sky-500/60">
						<p className="text-lg leading-8">{reason}</p>
					</div>
				))}
			</section>

			<section className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-glow">
				<h3 className="text-3xl font-semibold text-white">Why choose us?</h3>
				<div className="mt-8 grid gap-5 md:grid-cols-3">
					<div className="rounded-3xl bg-slate-900/80 p-6 text-slate-300">
						<h4 className="text-xl font-semibold text-white">Design-led thinking</h4>
						<p className="mt-3">Every experience is crafted with clarity, strong visuals, and ease of use at the forefront.</p>
					</div>
					<div className="rounded-3xl bg-slate-900/80 p-6 text-slate-300">
						<h4 className="text-xl font-semibold text-white">Fast execution</h4>
						<p className="mt-3">We deliver polished digital products quickly while preserving quality and scalability.</p>
					</div>
					<div className="rounded-3xl bg-slate-900/80 p-6 text-slate-300">
						<h4 className="text-xl font-semibold text-white">Reliable support</h4>
						<p className="mt-3">Our team works with you beyond launch so every product stays optimized and effective.</p>
					</div>
				</div>
			</section>
		</div>
	);
}

export default About;
