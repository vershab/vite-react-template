import { FormEvent, useState } from "react";
import Button from "../components/Button";

const initialState = { name: "", email: "", message: "" };

function Contact() {
	const [form, setForm] = useState(initialState);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

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
		<div className="space-y-10">
			<div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-glow">
				<p className="text-sm uppercase tracking-[0.32em] text-sky-400/90">Contact</p>
				<h2 className="mt-4 text-4xl font-semibold text-white">Let’s build something remarkable together.</h2>
				<p className="mt-5 max-w-2xl text-slate-300">Share your project goals, and our team will craft a tailored plan with thoughtful design, dependable engineering, and real-time delivery support.</p>
			</div>

			<div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
				<section className="rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-8 shadow-glow">
					<h3 className="text-2xl font-semibold text-white">Reach out</h3>
					<div className="mt-6 space-y-5 text-slate-300">
						<p>Phone: <span className="text-slate-100">+1 (555) 012-3456</span></p>
						<p>Email: <span className="text-slate-100">hello@petabyteinnovations.com</span></p>
						<p>Office: <span className="text-slate-100">Remote-first, global delivery team</span></p>
					</div>
				</section>

				<form onSubmit={handleSubmit} className="space-y-6 rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-glow">
					{error && <div className="rounded-3xl bg-rose-500/10 p-4 text-sm text-rose-300">{error}</div>}
					{success && <div className="rounded-3xl bg-emerald-500/10 p-4 text-sm text-emerald-300">{success}</div>}
					<div className="grid gap-6 sm:grid-cols-2">
						<label className="space-y-2 text-sm text-slate-300">
							<span>Name</span>
							<input
								name="name"
								value={form.name}
								onChange={handleChange}
								className="w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500/70 focus:ring-2 focus:ring-sky-500/20"
								placeholder="Your full name"
							/>
						</label>
						<label className="space-y-2 text-sm text-slate-300">
							<span>Email</span>
							<input
								name="email"
								value={form.email}
								onChange={handleChange}
								className="w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500/70 focus:ring-2 focus:ring-sky-500/20"
								placeholder="you@example.com"
							/>
						</label>
					</div>
					<label className="space-y-2 text-sm text-slate-300">
						<span>Message</span>
						<textarea
							name="message"
							value={form.message}
							onChange={handleChange}
							rows={6}
							className="w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500/70 focus:ring-2 focus:ring-sky-500/20"
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
