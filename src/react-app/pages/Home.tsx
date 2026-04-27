import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";

const services = [
    {
        title: "Website Development",
        description: "Custom websites built for performance, accessibility, and conversion.",
        icon: "💻",
        benefits: ["Responsive user experiences", "Modern CMS integrations", "Fast page speed"],
    },
    {
        title: "Application Development",
        description: "Robust apps designed for modern growth, engagement, and long-term scale.",
        icon: "📱",
        benefits: ["Native-like experiences", "Secure backend architecture", "Rapid delivery"],
    },
    {
        title: "Graphic Designing",
        description: "Brand and marketing design with emotion, clarity, and bold visuals.",
        icon: "🎨",
        benefits: ["Visual identity systems", "Campaign assets", "Motion-ready design"],
    },
];

const testimonials = [
    {
        quote: "Petabyte's team delivered a flawless product on time with exceptional design.",
        name: "Madhav Patel",
        role: "Founder, Hypervare",
    },
    {
        quote: "Their strategic thinking and execution raised our brand to a new level.",
        name: "Nisha Sharma",
        role: "CMO, Secure World Tech",
    },
    {
        quote: "A refreshing agency experience with clarity, speed, and premium polish.",
        name: "Rohit Singh",
        role: "Product Lead, Aymist",
    },
];

function Home() {
    const heroRef = useRef<HTMLDivElement>(null);
    const cubeRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (cubeRef.current) {
            gsap.to(cubeRef.current, {
                rotationX: 360,
                rotationY: 360,
                duration: 20,
                repeat: -1,
                ease: "none",
            });
        }
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!heroRef.current) return;

            const x = (e.clientX / window.innerWidth - 0.5) * 30;
            const y = (e.clientY / window.innerHeight - 0.5) * 30;

            gsap.to(heroRef.current, {
                x,
                y,
                duration: 0.65,
                overwrite: "auto",
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        const serviceCards = document.querySelectorAll("[data-service-card]");
        gsap.fromTo(
            serviceCards,
            { opacity: 0, y: 60, rotationX: 25 },
            { opacity: 1, y: 0, rotationX: 0, duration: 1, stagger: 0.18, ease: "back.out" }
        );
    }, []);

    return (
        <div className="space-y-32">
            <section className="min-h-screen flex items-center justify-center py-20">
                <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] w-full items-center">
                    <div className="space-y-8 z-10" ref={heroRef}>
                        <div className="inline-block">
                            <span className="px-4 py-2 rounded-full bg-gray-200 border border-gray-300 text-sm font-semibold text-black">
                                Building future-ready brands
                            </span>
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-5xl sm:text-6xl lg:text-6xl font-black leading-tight">
                                Building Digital Experiences <br />
                                <span className="text-black  bg-clip-text">That Scale</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-700 max-w-xl leading-8">
                                We create powerful websites, applications, and digital content for modern businesses. Every experience is engineered for speed, emotion, and long-term growth.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button variant="primary" onClick={() => navigate("/contact")}>Get Started</Button>
                            <Button variant="secondary" onClick={() => navigate("/services")}>View Services</Button>
                        </div>

                        <div className="grid grid-cols-3 gap-4 pt-10 text-center text-sm text-gray-600 sm:grid-cols-3">
                            <div className="rounded-3xl border border-gray-300 bg-gray-100 p-5 backdrop-blur-xl">
                                <p className="text-3xl font-bold text-black">25+</p>
                                <p>Projects delivered</p>
                            </div>
                            <div className="rounded-3xl border border-gray-300 bg-gray-100 p-5 backdrop-blur-xl">
                                <p className="text-3xl font-bold text-black">12</p>
                                <p>Happy clients</p>
                            </div>
                            <div className="rounded-3xl border border-gray-300 bg-gray-100 p-5 backdrop-blur-xl">
                                <p className="text-3xl font-bold text-black">10x</p>
                                <p>Growth accelerated</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-center h-[520px] max-h-[75vh] overflow-hidden rounded-[2.5rem] border border-gray-300 bg-white/90 p-10 shadow-2xl shadow-gray-300/40 backdrop-blur-xl">
                        <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.12),_transparent_35%)]" />
                        <div className="absolute -left-16 top-8 h-28 w-28 rounded-full border border-gray-400/20 bg-gray-500/10 blur-2xl animate-float" />
                        <div className="absolute right-8 bottom-12 h-24 w-24 rounded-full bg-gray-500/10 blur-2xl animate-float" />
                        <div className="absolute left-1/2 top-1/3 h-16 w-16 -translate-x-1/2 rounded-full border border-gray-400/20 bg-gray-500/10 blur-2xl animate-float" />

                        <div ref={cubeRef} className="relative h-96 w-96 rounded-[2rem] border border-gray-300 bg-gray-50 shadow-[0_0_80px_rgba(0,0,0,0.1)]" style={{ transformStyle: "preserve-3d", perspective: "1000px" }}>
                            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-gray-200/20 to-gray-300/20 backdrop-blur-xl" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-center text-black/95 p-6">
                                <span className="text-7xl">⚡</span>
                                <p className="text-2xl font-semibold">Petabyte</p>
                                <p className="max-w-xs text-sm text-gray-700">Modern digital design, immersive motion, and intelligent product experiences.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="space-y-10">
                <div className="space-y-4 text-center">
                    <p className="text-sm uppercase tracking-[0.35em] text-black font-semibold">Featured services</p>
                    <h2 className="text-4xl font-black text-black">Services built for bold brands.</h2>
                    <p className="mx-auto max-w-3xl text-gray-600 leading-8">We pair strategy with immersive design, performance engineering, and multimedia production for experiences that feel both premium and human.</p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {services.map((service) => (
                        <div key={service.title} data-service-card>
                            <ServiceCard {...service} benefits={service.benefits} />
                        </div>
                    ))}
                </div>
            </section>

            <section className="grid gap-8 lg:grid-cols-[0.65fr_0.35fr] lg:items-center">
                <div className="rounded-[2.5rem] border border-gray-300 bg-white/90 p-10 shadow-2xl shadow-gray-300/40 backdrop-blur-xl">
                    <p className="text-sm uppercase tracking-[0.35em] text-black font-semibold">About us</p>
                    <h2 className="mt-4 text-4xl font-black text-black">We make digital products feel fresh, fast, and unforgettable.</h2>
                    <p className="mt-6 text-gray-700 leading-8">Petabyte Innovations is a premium digital agency in Jodhpur specializing in websites, applications, design, and live broadcasting. We blend creative direction with technical precision to deliver polished experiences at scale.</p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Button variant="secondary" onClick={() => navigate("/about")}>Learn More</Button>
                        <Button variant="ghost" onClick={() => navigate("/contact")}>Talk to Us</Button>
                    </div>
                </div>

                <div className="grid gap-6">
                    <div className="rounded-[2rem] border border-gray-300 bg-white/90 p-8 shadow-xl backdrop-blur-xl">
                        <p className="text-sm uppercase tracking-[0.35em] text-gray-600 font-semibold">Mission</p>
                        <p className="mt-4 text-gray-700 leading-7">Create elegant digital systems that help businesses scale, connect, and stand apart from competitors.</p>
                    </div>
                    <div className="rounded-[2rem] border border-gray-300 bg-white/90 p-8 shadow-xl backdrop-blur-xl">
                        <p className="text-sm uppercase tracking-[0.35em] text-gray-600 font-semibold">Vision</p>
                        <p className="mt-4 text-gray-700 leading-7">Lead the next wave of premium agency experiences through bold design and seamless digital product delivery.</p>
                    </div>
                </div>
            </section>

            <section className="space-y-10">
                <div className="space-y-4 text-center">
                    <p className="text-sm uppercase tracking-[0.35em] text-black font-semibold">Trusted by</p>
                    <h2 className="text-4xl font-black text-black">Global brands, local care.</h2>
                    <p className="mx-auto max-w-3xl text-gray-600 leading-8">Our work is trusted by ambitious teams across technology, finance, retail, and media.</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {["Visam Solutions", "Harsh Technology", "Hypervare", "Secure World Tech", "Shaadicenter", "Raghavleela", "Aymist"].map((client) => (
                        <div key={client} className="rounded-[2rem] border border-gray-300 bg-white/70 p-6 text-center text-gray-700 shadow-lg shadow-gray-300/40 transition hover:-translate-y-1 hover:border-gray-400 hover:text-black">
                            <p className="text-sm uppercase tracking-[0.35em] text-gray-600">Client</p>
                            <p className="mt-4 text-xl font-semibold">{client}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="space-y-10">
                <div className="space-y-4 text-center">
                    <p className="text-sm uppercase tracking-[0.35em] text-black font-semibold">Portfolio</p>
                    <h2 className="text-4xl font-black text-black">Selected digital projects.</h2>
                    <p className="mx-auto max-w-3xl text-gray-600 leading-8">A glimpse at our most ambitious website, app, and broadcast builds.</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {[
                        { title: "Pulse Media Hub", category: "Broadcasting" },
                        { title: "Vertex Mobile Suite", category: "Mobile App" },
                        { title: "Refine Studio", category: "Brand Identity" },
                    ].map((project) => (
                        <div key={project.title}>
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </section>

            <section className="space-y-10">
                <div className="space-y-4 text-center">
                    <p className="text-sm uppercase tracking-[0.35em] text-black font-semibold">Testimonials</p>
                    <h2 className="text-4xl font-black text-black">What our partners say.</h2>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.name} className="rounded-[2rem] border border-gray-300 bg-white/90 p-8 shadow-xl shadow-gray-300/40 transition hover:-translate-y-2">
                            <p className="text-gray-700 leading-8">"{testimonial.quote}"</p>
                            <div className="mt-6 text-sm text-gray-600">
                                <p className="font-semibold text-black">{testimonial.name}</p>
                                <p>{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="rounded-[2.5rem] border border-slate-200 bg-white/90 p-12 shadow-2xl shadow-slate-200/40 backdrop-blur-xl">
                <div className="grid gap-8 lg:grid-cols-[0.7fr_0.3fr] lg:items-center">
                    <div className="space-y-6">
                        <p className="text-sm uppercase tracking-[0.35em] text-blue-700 font-semibold">Let’s launch</p>
                        <h2 className="text-4xl font-black text-slate-900">Ready for an elevated digital experience?</h2>
                        <p className="max-w-2xl text-slate-500 leading-8">Partner with Petabyte Innovations and turn your digital vision into a premium product that performs beautifully on every screen.</p>
                    </div>
                    <div className="flex items-center justify-start">
                        <Button variant="primary" onClick={() => navigate("/contact")}>Start Your Project</Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
