import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
	primary:
		"bg-brand-accent text-slate-950 shadow-[0_20px_50px_rgba(14,165,233,0.17)] hover:bg-sky-400 focus-visible:outline-brand-accent/80",
	secondary:
		"border border-slate-700 bg-slate-900/80 text-slate-100 hover:border-slate-500 hover:bg-slate-800",
	ghost:
		"text-slate-100/90 hover:text-white hover:bg-slate-800/70",
};

function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
	return (
		<button
			className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ${variantStyles[variant]} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
}

export default Button;
