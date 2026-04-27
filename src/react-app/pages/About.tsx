import { useRef, useEffect } from "react";
import gsap from "gsap";
import Button from "../components/Button";

const team = [
{ name: "Ananya Jain", title: "Creative Director", focus: "Brand strategy, motion design, visual systems" },
{ name: "Sameer Verma", title: "Technical Lead", focus: "Web & app architecture, performance, integrations" },
{ name: "Mira Patel", title: "Experience Designer", focus: "UI/UX, product flows, accessibility" },
];

const timeline = [
{ year: "2024", label: "Founded 03 August 2024 by Vershab Jangid" },
{ year: "2025", label: "Expanded into mobile and broadcast" },
{ year: "2026", label: "Served clients across seven sectors" },
];

const stats = [
{ value: "25+", label: "Projects" },
{ value: "12", label: "Clients" },
{ value: "10", label: "Years of collective experience" },
];

function About() {
const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

useEffect(() => {
revealRefs.current.forEach((ref, index) => {
if (!ref) return;

const observer = new IntersectionObserver(
([entry]) => {
if (entry.isIntersecting) {
gsap.fromTo(
entry.target,
{ opacity: 0, y: 30, scale: 0.98 },
{ opacity: 1, y: 0, scale: 1, duration: 0.8, delay: index * 0.12, ease: "power3.out" }
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
<section className="rounded-[2.5rem] border border-gray-300 bg-white/90 p-10 shadow-2xl shadow-gray-300/40 backdrop-blur-xl">
<div className="space-y-4">
<p className="text-sm uppercase tracking-[0.4em] text-black font-semibold">About Petabyte</p>
<h1 className="text-5xl font-black text-black">We help businesses build bold digital brands with intelligent solutions.</h1>
<p className="max-w-3xl text-gray-700 leading-8">Petabyte Innovations is a digital agency founded on 03 August 2024 by founder Vershab Jangid as a sole proprietorship. We combine strategy, design, and engineering to build premium web experiences, applications, creative digital content, and broadcast production.</p>
<div className="mt-8 flex flex-wrap gap-4">
<Button variant="primary" onClick={() => window.location.assign("/contact")}>Start a Project</Button>
<Button variant="secondary" onClick={() => window.location.assign("/portfolio")}>View Work</Button>
</div>
</div>
</section>

<section className="grid gap-8 lg:grid-cols-[0.95fr_0.7fr] lg:items-start">
<div className="space-y-6">
<div ref={(el) => { revealRefs.current[0] = el; }} className="rounded-[2rem] border border-gray-300 bg-white/90 p-8 shadow-xl backdrop-blur-xl">
<h2 className="text-3xl font-bold text-black">Mission & Vision</h2>
<p className="mt-5 text-gray-700 leading-8">Our mission is to deliver transformative digital solutions that empower brands and make every user interaction feel polished, intuitive, and reliable. We envision a world where modern businesses thrive through elegant digital products and meaningful creative experiences.</p>
</div>
<div ref={(el) => { revealRefs.current[1] = el; }} className="rounded-[2rem] border border-gray-300 bg-white/90 p-8 shadow-xl backdrop-blur-xl">
<h3 className="text-2xl font-bold text-black">Why choose us?</h3>
<div className="mt-8 grid gap-5 md:grid-cols-3">
{[
{ title: "Design-led thinking", text: "Every experience is crafted with clarity, strong visuals, and ease of use at the forefront." },
{ title: "Fast execution", text: "We deliver polished digital products quickly while preserving quality and scalability." },
{ title: "Reliable support", text: "Our team works with you beyond launch so every product stays optimized and effective." },
].map((item) => (
<div key={item.title} className="rounded-[1.8rem] border border-gray-300 bg-gray-100 p-6 text-gray-700 transition hover:border-gray-400 hover:-translate-y-1">
<h4 className="font-semibold text-black">{item.title}</h4>
<p className="mt-3 text-sm leading-7">{item.text}</p>
</div>
))}
</div>
</div>
</div>

<div className="space-y-6">
<div ref={(el) => { revealRefs.current[2] = el; }} className="rounded-[2rem] border border-gray-300 bg-white/90 p-8 shadow-xl backdrop-blur-xl">
<h3 className="text-2xl font-bold text-black">Our story</h3>
<div className="mt-8 space-y-6">
{timeline.map((item) => (
<div key={item.year} className="flex items-center gap-4 text-gray-700">
<div className="h-12 w-12 rounded-3xl bg-gray-300 text-center text-xl font-bold leading-12 text-black">{item.year}</div>
<p>{item.label}</p>
</div>
))}
</div>
</div>
<div ref={(el) => { revealRefs.current[3] = el; }} className="rounded-[2rem] border border-gray-300 bg-white/90 p-8 shadow-xl backdrop-blur-xl">
<h3 className="text-2xl font-bold text-black">Numbers that matter</h3>
<div className="mt-8 grid gap-5 sm:grid-cols-3">
{stats.map((item) => (
<div key={item.label} className="rounded-3xl bg-gray-100 p-6 text-center text-gray-700">
<p className="text-4xl font-semibold text-black">{item.value}</p>
<p className="mt-3 text-sm uppercase tracking-[0.25em] text-gray-600">{item.label}</p>
</div>
))}
</div>
</div>
</div>
</section>

<section className="space-y-10">
<div className="space-y-4 text-center">
<p className="text-sm uppercase tracking-[0.35em] text-black font-semibold">Team</p>
<h2 className="text-4xl font-black text-black">A small team with a big impact.</h2>
<p className="mx-auto max-w-3xl text-gray-600 leading-8">Our designers, strategists, and engineers work closely with clients to build every product with care, polish, and precision.</p>
</div>

<div className="grid gap-6 lg:grid-cols-3">
{team.map((member, index) => (
<div key={member.name} ref={(el) => { revealRefs.current[4 + index] = el; }} className="rounded-[2rem] border border-gray-300 bg-white/90 p-8 shadow-xl backdrop-blur-xl transition hover:-translate-y-1">
<p className="text-sm uppercase tracking-[0.35em] text-black font-semibold">{member.title}</p>
<h3 className="mt-4 text-2xl font-bold text-black">{member.name}</h3>
<p className="mt-4 text-gray-700 leading-7">{member.focus}</p>
</div>
))}
</div>
</section>
</div>
);
}

export default About;
