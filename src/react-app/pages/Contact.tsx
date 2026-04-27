import { FormEvent, useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Button from "../components/Button";

const initialState = { name: "", email: "", message: "" };

function Contact() {
	const [form, setForm] = useState(initialState);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const formRef = useRef<HTMLFormElement>(null);

	useEffect(() => {
		if (!formRef.current) return;

		const handleMouseMove = (e: MouseEvent) => {
			const rect = formRef.current!.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			const centerX = rect.width / 2;
			const centerY = rect.height / 2;
			const rotateX = (y - centerY) * 0.01;
			const rotateY = (x - centerX) * -0.01;

			gsap.to(formRef.current, {
				rotationX: rotateX,
				rotationY: rotateY,
				duration: 0.3,
				overwrite: "auto",
			});
		};

		const handleMouseLeave = () => {
			gsap.to(formRef.current, {
				rotationX: 0,
				rotationY: 0,
				duration: 0.6,
				ease: "back.out",
			});
		};

		formRef.current.addEventListener("mousemove", handleMouseMove);
		formRef.current.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			formRef.current?.removeEventListener("mousemove", handleMouseMove);
			formRef.current?.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);

	function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		setForm({ ...form, [event.target.name]: event.target.value });
	}

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setError("");
		setSuccess("");

		if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
			setError("Please fill out all fields before sending your message.");
			return;
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
			setError("Please enter a valid email address.");
			return;
		}

		setSuccess("Your message has been sent successfully. We'll be in touch soon.");
		setForm(initialState);
	}

	return (
		<div className="space-y-12">
			<section className="rounded-[2.5rem] border border-gray-300 bg-white/90 p-10 shadow-2xl shadow-gray-300/40 backdrop-blur-xl">
				<div className="space-y-4">
					<p className="text-sm uppercase tracking-[0.35em] text-black font-semibold">Contact</p>
					<h1 className="text-5xl font-black text-black">Let's build something remarkable together.</h1>
					<p className="max-w-3xl text-gray-600 leading-8">Share your project goals, and our team will craft a tailored plan with thoughtful design, dependable engineering, and real-time delivery support.</p>
				</div>
			</section>

			<div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
				<section className="rounded-[2rem] border border-gray-300 bg-white/90 p-8 shadow-xl backdrop-blur-xl">
					<h2 className="text-3xl font-bold text-black">Contact details</h2>
					<div className="mt-8 space-y-5 text-slate-600">
						<p className="text-lg">Phone: <span className="text-blue-700">9351858094</span></p>
						<p className="text-lg">Email: <span className="text-blue-700">petabyteinnovations@gmail.com</span></p>
						<p className="text-lg">Location: <span className="text-blue-700">iStart, Jodhpur</span></p>
					</div>
					<div className="mt-10 space-y-4">
						<div className="rounded-[1.8rem] bg-slate-50 p-6 text-slate-700 border border-slate-200">
							<p className="font-semibold text-slate-900">Office hours</p>
							<p className="mt-2">Mon – Fri, 9:00 AM – 7:00 PM</p>
						</div>
						<div className="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-50">
							<div className="h-72 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 p-6 text-slate-700">
								<p className="font-semibold text-slate-900">Map placeholder</p>
								<p className="mt-3 text-sm">iStart, Jodhpur</p>
							</div>
						</div>
					</div>
				</section>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="space-y-6 rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-xl backdrop-blur-xl"
					style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
				>
					{error && <div className="rounded-3xl bg-red-50 p-4 text-sm text-red-700 border border-red-200">{error}</div>}
					{success && <div className="rounded-3xl bg-emerald-50 p-4 text-sm text-emerald-700 border border-emerald-200">{success}</div>}
					<div className="grid gap-6 sm:grid-cols-2">
						<label className="space-y-2 text-sm text-slate-600">
							<span className="font-semibold text-slate-900">Name</span>
							<input
								name="name"
								value={form.name}
								onChange={handleChange}
								className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
								placeholder="Your full name"
							/>
						</label>
						<label className="space-y-2 text-sm text-slate-600">
							<span className="font-semibold text-slate-900">Email</span>
							<input
								name="email"
								value={form.email}
								onChange={handleChange}
								className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
								placeholder="you@example.com"
							/>
						</label>
					</div>
					<label className="space-y-2 text-sm text-slate-600">
						<span className="font-semibold text-slate-900">Message</span>
						<textarea
							name="message"
							value={form.message}
							onChange={handleChange}
							rows={6}
							className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
							placeholder="Tell us about your project"
						/>
					</label>
					<Button type="submit">Send message</Button>
				</form>
			</div>
		</div>
	);
}

export default Contact;
