import { Link } from "react-router-dom";

function Privacy() {
	return (
		<div className="space-y-10">
			<section className="rounded-[2rem] border border-gray-300 bg-gray-50 p-10 shadow-2xl shadow-gray-300/40 backdrop-blur-xl">
				<div className="space-y-4">
					<p className="text-sm uppercase tracking-[0.4em] text-black font-semibold">Legal</p>
					<h1 className="text-5xl font-black text-black">Privacy Policy</h1>
					<p className="max-w-3xl text-gray-600 leading-8">This policy explains how Petabyte Innovations collects, uses, and protects your data when you visit our website or contact us about services.</p>
				</div>
			</section>

			<section className="space-y-8">
				<div className="rounded-[2rem] border border-gray-300 bg-gray-50 p-8 shadow-xl backdrop-blur-xl">
					<h2 className="text-3xl font-bold text-black">1. Information We Collect</h2>
					<p className="mt-4 text-gray-700 leading-8">We collect the information you provide directly, such as your name, email, and project details. This information is used only to respond to your inquiries and discuss services.</p>
				</div>
				<div className="rounded-[2rem] border border-gray-300 bg-gray-50 p-8 shadow-xl backdrop-blur-xl">
					<h2 className="text-3xl font-bold text-black">2. How We Use Data</h2>
					<p className="mt-4 text-gray-700 leading-8">Your contact information is used to communicate with you, send proposals, and provide customer support. We do not sell or share personal data with third parties for marketing purposes.</p>
				</div>
				<div className="rounded-[2rem] border border-gray-300 bg-gray-50 p-8 shadow-xl backdrop-blur-xl">
					<h2 className="text-3xl font-bold text-black">3. Security</h2>
					<p className="mt-4 text-gray-700 leading-8">We maintain industry-standard protections to secure your data. However, no system is completely immune to risk, so we recommend using secure passwords and trusted email services.</p>
				</div>
				<div className="rounded-[2rem] border border-gray-300 bg-gray-50 p-8 shadow-xl backdrop-blur-xl">
					<h2 className="text-3xl font-bold text-black">4. Your Choices</h2>
					<p className="mt-4 text-gray-700 leading-8">You may request updates, corrections, or removal of your personal data by contacting us. We will respond promptly and handle your request in accordance with applicable regulations.</p>
				</div>
			</section>

			<div className="rounded-[2rem] border border-gray-300 bg-gray-50 p-8 text-center shadow-xl backdrop-blur-xl">
				<p className="text-gray-600">Need help with privacy questions? <Link to="/contact" className="font-semibold text-black hover:text-gray-800">Reach out to our team</Link>.</p>
			</div>
		</div>
	);
}

export default Privacy;
