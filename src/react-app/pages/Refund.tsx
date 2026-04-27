import { Link } from "react-router-dom";

function Refund() {
	return (
		<div className="space-y-10">
			<section className="rounded-[2rem] border border-gray-300 bg-gray-50 p-10 shadow-2xl shadow-gray-300/40 backdrop-blur-xl">
				<div className="space-y-4">
					<p className="text-sm uppercase tracking-[0.4em] text-black font-semibold">Legal</p>
					<h1 className="text-5xl font-black text-black">Refund Policy</h1>
					<p className="max-w-3xl text-gray-600 leading-8">This policy explains how Petabyte Innovations handles refunds for services and project work to ensure clarity and confidence in every engagement.</p>
				</div>
			</section>

			<section className="space-y-8">
				<div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-xl backdrop-blur-xl">
					<h2 className="text-3xl font-bold text-slate-900">1. Service Cancellation</h2>
					<p className="mt-4 text-slate-600 leading-8">If you cancel or postpone a project before work begins, we will work with you to determine a fair refund based on the time invested and any materials already purchased.</p>
				</div>
				<div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-xl backdrop-blur-xl">
					<h2 className="text-3xl font-bold text-slate-900">2. Revision Process</h2>
					<p className="mt-4 text-slate-600 leading-8">We provide revision rounds as defined in your agreement. Refunds are not available for changes requested after the agreed scope or beyond the revision allotment.</p>
				</div>
				<div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-xl backdrop-blur-xl">
					<h2 className="text-3xl font-bold text-slate-900">3. Quality Guarantee</h2>
					<p className="mt-4 text-slate-600 leading-8">If a deliverable is not completed as agreed, we will first offer a resolution or remediation. If an issue cannot be resolved, refund decisions will be made based on the proportion of work completed.</p>
				</div>
				<div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-xl backdrop-blur-xl">
					<h2 className="text-3xl font-bold text-slate-900">4. Contact</h2>
					<p className="mt-4 text-slate-600 leading-8">For questions about refunds or project performance, get in touch via our <Link to="/contact" className="font-semibold text-cyan-700 hover:text-cyan-900">contact page</Link>. We’ll respond quickly and transparently.</p>
				</div>
			</section>
		</div>
	);
}

export default Refund;
