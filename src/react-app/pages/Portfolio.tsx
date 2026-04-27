import { useEffect, useRef } from "react";
import gsap from "gsap";
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
	const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		// Stagger animation for project cards
		cardsRef.current.forEach((ref, index) => {
			if (!ref) return;

			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						gsap.fromTo(
							entry.target,
							{
								opacity: 0,
								y: 50,
								rotationX: 25,
							},
							{
								opacity: 1,
								y: 0,
								rotationX: 0,
								duration: 0.8,
								delay: index * 0.12,
								ease: "power3.out",
							}
						);
						observer.unobserve(entry.target);
					}
				},
				{ threshold: 0.2 }
			);

			observer.observe(ref);
		});
	}, []);

	return (
		<div className="space-y-10">
			<div className="rounded-[2rem] border border-gray-300 bg-white/95 p-8 shadow-lg">
				<p className="text-sm uppercase tracking-[0.32em] text-gray-600 font-semibold">Our work</p>
				<h2 className="mt-4 text-4xl font-bold text-black">A portfolio of polished digital projects.</h2>
				<p className="mt-5 max-w-2xl text-gray-700">Discover examples of our website, mobile, branding, and broadcasting work created for ambitious teams and creative leaders.</p>
			</div>

			<div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
				{projects.map((project, index) => (
					<div 
						key={project.title}
						ref={(el) => {
							if (el) cardsRef.current[index] = el;
						}}
					>
						<ProjectCard {...project} />
					</div>
				))}
			</div>
		</div>
	);
}

export default Portfolio;
