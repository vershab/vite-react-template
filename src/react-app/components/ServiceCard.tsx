import { useRef, useEffect } from "react";
import gsap from "gsap";

interface ServiceCardProps {
	title: string;
	description: string;
	icon: string;
	benefits: string[];
}

function ServiceCard({ title, description, icon, benefits }: ServiceCardProps) {
	const cardRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!cardRef.current) return;

		const handleMouseMove = (e: MouseEvent) => {
			const rect = cardRef.current!.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			const centerX = rect.width / 2;
			const centerY = rect.height / 2;
			const rotationX = (y - centerY) * 0.01;
			const rotationY = (x - centerX) * -0.01;

			gsap.to(cardRef.current, {
				rotationX,
				rotationY,
				y: -10,
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
			className="group rounded-[2rem] border border-gray-300 bg-white p-6 text-black transition duration-300 hover:border-gray-400 hover:shadow-2xl hover:shadow-gray-500/10"
			style={{
				transformStyle: "preserve-3d",
				perspective: "1000px",
			}}
		>
			<div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-gray-200 text-3xl text-black transition duration-300 group-hover:bg-gray-300">
				{icon}
			</div>
			<h3 className="text-xl font-semibold text-black">{title}</h3>
			<p className="mt-3 text-sm leading-7 text-gray-700">{description}</p>
			<ul className="mt-5 space-y-3 text-sm text-gray-700">
				{benefits.map((item) => (
					<li key={item} className="flex items-start gap-3">
								<span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 text-black font-bold">✓</span>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}

export default ServiceCard;
