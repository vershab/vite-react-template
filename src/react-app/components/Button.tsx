import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
	primary:
		"text-white bg-black",
	secondary:
		"border border-gray-300 bg-gray-100 text-black hover:bg-gray-200 hover:shadow-md backdrop-blur",
	ghost:
		"text-white bg-black",
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
