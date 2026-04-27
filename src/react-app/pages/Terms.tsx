import { Link } from "react-router-dom";

function Terms() {
	return (
		<div className="space-y-10">
			<section className="rounded-[2rem] border border-gray-300 bg-gray-50 p-10 shadow-2xl shadow-gray-300/40 backdrop-blur-xl">
				<div className="space-y-4">
					<p className="text-sm uppercase tracking-[0.4em] text-black font-semibold">Legal</p>
					<h1 className="text-5xl font-black text-black">Terms & Conditions</h1>
					<p className="max-w-3xl text-gray-600 leading-8">These terms govern your use of the Petabyte Innovations website and services. They describe what you can expect from us and what we expect from you.</p>
				</div>
			</section>

			<section className="space-y-8">
				<div className="rounded-[2rem] border border-gray-300 bg-gray-50 p-8 shadow-xl backdrop-blur-xl">
					<h2 className="text-3xl font-bold text-black">1. Service Access</h2>
					<p className="mt-4 text-gray-700 leading-8">Petabyte Innovations provides digital strategy, design, and development services. Access is subject to availability, and we reserve the right to modify or discontinue service offerings with reasonable notice.</p>
				</div>
				<div className="rounded-[2rem] border border-gray-300 bg-gray-50 p-8 shadow-xl backdrop-blur-xl">
					<h2 className="text-3xl font-bold text-black">2. Project Terms</h2>
					<p className="mt-4 text-gray-700 leading-8">All projects will be scoped in writing. Delivery timelines, pricing, and scope are agreed upon before work begins. Additional work outside the original scope may require a change order.</p>
				</div>
				<div className="rounded-[2rem] border border-gray-300 bg-gray-50 p-8 shadow-xl backdrop-blur-xl">
					<h2 className="text-3xl font-bold text-black">3. Content and Ownership</h2>
					<p className="mt-4 text-gray-700 leading-8">Clients retain ownership of final deliverables once payment is complete. Petabyte Innovations may display project samples for promotional purposes unless otherwise agreed.</p>
				</div>
				<div className="rounded-[2rem] border border-gray-300 bg-gray-50 p-8 shadow-xl backdrop-blur-xl">
					<h2 className="text-3xl font-bold text-black">4. Privacy & Data</h2>
					<p className="mt-4 text-gray-700 leading-8">We collect only the information necessary to deliver services and respond to inquiries. All personal data is handled according to our Privacy Policy.</p>
				</div>
			</section>

			<div className="rounded-[2rem] border border-gray-300 bg-gray-50 p-8 text-center shadow-xl backdrop-blur-xl">
				<p className="text-gray-600">Want the latest updates on our process? <Link to="/contact" className="font-semibold text-black hover:text-gray-800">Contact us</Link>.</p>
			</div>
		</div>
	);
}

export default Terms;
