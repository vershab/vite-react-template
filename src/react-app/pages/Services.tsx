import { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";

const services = [
	{
		title: "Website Development",
		description: "Custom websites built for performance, accessibility, and conversion.",
		icon: "🌐",
		benefits: ["Custom UI design", "SEO-friendly structure", "Content strategy support"],
	},
	{
		title: "Application Development",
		description: "Robust web and mobile apps built for engagement, speed, and scale.",
		icon: "📱",
		benefits: ["Cross-platform experiences", "Secure backend systems", "Growth-ready architecture"],
	},
	{
		title: "Graphic Designing",
		description: "High-impact visual systems, branding, and marketing assets.",
		icon: "🎨",
		benefits: ["Brand identity", "Campaign creatives", "Motion graphics"],
	},
	{
		title: "Video Editing",
		description: "Story-led videos and polished edits for social and corporate content.",
		icon: "🎬",
		benefits: ["Narrative editing", "Color grading", "Audio refinement"],
	},
	{
		title: "Live Broadcasting",
		description: "End-to-end production for streaming, webinars, and live events.",
		icon: "📡",
		benefits: ["Stable delivery", "Multi-channel streaming", "Engagement analytics"],
	},
];

function Services() {
	const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		cardsRef.current.forEach((ref, index) => {
			if (!ref) return;

			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						gsap.fromTo(
							entry.target,
							{ opacity: 0, y: 40, rotationX: 20 },
							{ opacity: 1, y: 0, rotationX: 0, duration: 0.7, delay: index * 0.1, ease: "power3.out" }
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
		<div className="space-y-12">
			<div className="rounded-[2.5rem] border border-gray-300 bg-white/95 p-10 shadow-2xl shadow-gray-300/40 backdrop-blur-xl">
				<p className="text-sm uppercase tracking-[0.35em] text-black font-semibold">Our services</p>
				<h1 className="mt-4 text-5xl font-black text-black">Solutions for brands that want a stronger digital impact.</h1>
				<p className="mt-5 max-w-3xl text-gray-600 leading-8">From elegant websites and apps to creative design, video, and live broadcast production, every service is designed to feel premium, polished, and future-ready.</p>
			</div>

			<div className="grid gap-8 xl:grid-cols-3">
				{services.map((service, index) => (
					<div
						key={service.title}
						ref={(el) => {
							if (el) cardsRef.current[index] = el;
						}}
					>
						<ServiceCard {...service} benefits={service.benefits} />
						<div className="mt-6 flex justify-end">
							<Button variant="secondary" onClick={() => window.location.assign("/contact")}>
								Start Project
							</Button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Services;
