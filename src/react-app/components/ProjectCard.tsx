import { useRef, useEffect } from "react";
import gsap from "gsap";

interface ProjectCardProps {
	title: string;
	category: string;
	accent?: string;
}

function ProjectCard({ title, category }: ProjectCardProps) {
	const cardRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!cardRef.current) return;

		const handleMouseMove = (e: MouseEvent) => {
			const rect = cardRef.current!.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			const centerX = rect.width / 2;
			const centerY = rect.height / 2;
			const rotationX = (y - centerY) * 0.015;
			const rotationY = (x - centerX) * -0.015;

			gsap.to(cardRef.current, {
				rotationX,
				rotationY,
				y: -15,
				duration: 0.3,
				overwrite: "auto",
			});
		};

		const handleMouseLeave = () => {
			gsap.to(cardRef.current, {
				rotationX: 0,
				rotationY: 0,
				y: 0,
				duration: 0.6,
				ease: "back.out",
			});
		};

		cardRef.current?.addEventListener("mousemove", handleMouseMove);
		cardRef.current?.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			cardRef.current?.removeEventListener("mousemove", handleMouseMove);
			cardRef.current?.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);

	return (
		<div
			ref={cardRef}
			className="overflow-hidden rounded-[1.8rem] border border-gray-300 bg-white shadow-2xl shadow-gray-300/40 transition duration-300 hover:-translate-y-1"
			style={{
				transformStyle: "preserve-3d",
				perspective: "1000px",
			}}
		>
			<div className="h-48 bg-gradient-to-br from-gray-200 via-gray-200 to-gray-300 p-5">
				<div className="flex h-full flex-col justify-between rounded-[1.4rem] bg-white/70 p-5 backdrop-blur-sm">
				<div className="text-sm uppercase tracking-[0.26em] text-gray-700">{category}</div>
				<h3 className="text-xl font-bold text-black">{title}</h3>
				</div>
			</div>
		<div className="space-y-3 p-5 text-gray-700">
			<p>{`Modern solutions designed for powerful brand presence, fast performance, and smooth storytelling.`}</p>
			<span className="inline-flex rounded-full bg-gray-200 px-3 py-1 text-xs uppercase tracking-[0.2em] text-black font-semibold">Featured project</span>
			</div>
		</div>
	);
}

export default ProjectCard;
