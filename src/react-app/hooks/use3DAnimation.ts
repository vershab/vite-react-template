import { useEffect, useRef } from "react";
import gsap from "gsap";

export function use3DScroll() {
	const elementRef = useRef<HTMLElement>(null);

	useEffect(() => {
		if (!elementRef.current) return;

		const handleMouseMove = (e: MouseEvent) => {
			if (!elementRef.current) return;

			const rect = elementRef.current.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			const centerX = rect.width / 2;
			const centerY = rect.height / 2;

			const rotateX = (y - centerY) * 0.02;
			const rotateY = (x - centerX) * -0.02;

			gsap.to(elementRef.current, {
				rotationX: rotateX,
				rotationY: rotateY,
				duration: 0.3,
				overwrite: "auto",
			});
		};

		const handleMouseLeave = () => {
			gsap.to(elementRef.current, {
				rotationX: 0,
				rotationY: 0,
				duration: 0.6,
				ease: "power2.out",
			});
		};

		elementRef.current.addEventListener("mousemove", handleMouseMove);
		elementRef.current.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			elementRef.current?.removeEventListener("mousemove", handleMouseMove);
			elementRef.current?.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);

	return elementRef;
}

export function use3DCardAnimation() {
	const elementRef = useRef<HTMLElement>(null);

	useEffect(() => {
		if (!elementRef.current) return;

		const handleMouseMove = (e: MouseEvent) => {
			if (!elementRef.current) return;

			const rect = elementRef.current.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			const centerX = rect.width / 2;
			const centerY = rect.height / 2;

			const rotateX = (y - centerY) * 0.015;
			const rotateY = (x - centerX) * -0.015;

			gsap.to(elementRef.current, {
				rotationX: rotateX,
				rotationY: rotateY,
				y: -10,
				duration: 0.3,
				ease: "power2.out",
				overwrite: "auto",
			});
		};

		const handleMouseLeave = () => {
			gsap.to(elementRef.current, {
				rotationX: 0,
				rotationY: 0,
				y: 0,
				duration: 0.6,
				ease: "back.out",
			});
		};

		elementRef.current.addEventListener("mousemove", handleMouseMove);
		elementRef.current.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			elementRef.current?.removeEventListener("mousemove", handleMouseMove);
			elementRef.current?.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);

	return elementRef;
}

export function useScrollReveal() {
	const elementRef = useRef<HTMLElement>(null);

	useEffect(() => {
		if (!elementRef.current) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					gsap.fromTo(
						entry.target,
						{
							opacity: 0,
							y: 50,
							rotationX: 15,
						},
						{
							opacity: 1,
							y: 0,
							rotationX: 0,
							duration: 0.8,
							ease: "power3.out",
						}
					);
					observer.unobserve(entry.target);
				}
			},
			{ threshold: 0.2 }
		);

		observer.observe(elementRef.current);

		return () => observer.disconnect();
	}, []);

	return elementRef;
}
