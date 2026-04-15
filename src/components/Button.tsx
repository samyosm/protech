import type { ReactNode } from "react";

export interface ButtonProps {
	variant?: "primary" | "secondary" | "ghost";
	size?: "sm" | "md" | "lg";
	children: ReactNode;
	href?: string;
	onClick?: () => void;
	target?: string;
	rel?: string;
	"aria-label"?: string;
	icon?: ReactNode;
	prompt?: string;
	disabled?: boolean;
	type?: "button" | "submit" | "reset";
}

export function Button({
	variant = "primary",
	size = "md",
	children,
	href,
	onClick,
	target,
	rel,
	"aria-label": ariaLabel,
	icon,
	prompt,
	disabled,
	type = "button",
}: ButtonProps) {
	const base =
		"inline-flex items-center gap-2 font-mono font-medium transition-all duration-150 focus:outline-none focus:ring-1 focus:ring-[#3fb950] focus:ring-offset-1 focus:ring-offset-[#0d1117] disabled:opacity-40 disabled:cursor-not-allowed select-none";

	const sizes = {
		sm: "px-3 py-1.5 text-xs",
		md: "px-5 py-2.5 text-sm",
		lg: "px-7 py-3 text-base",
	};

	const variants = {
		primary:
			"bg-[#3fb950] text-[#0d1117] hover:bg-[#4ade80] border border-[#3fb950] hover:border-[#4ade80]",
		secondary:
			"bg-transparent text-[#e6edf3] border border-[#30363d] hover:border-[#3fb950] hover:text-[#3fb950]",
		ghost: "bg-transparent text-[#8b949e] border border-transparent hover:text-[#e6edf3]",
	};

	const className = `${base} ${sizes[size]} ${variants[variant]}`;

	const content = (
		<>
			{prompt && (
				<span className="text-[#3fb950] opacity-80 select-none">{prompt}</span>
			)}
			{icon && <span aria-hidden="true">{icon}</span>}
			{children}
		</>
	);

	if (href) {
		return (
			<a href={href} className={className} target={target} rel={rel} aria-label={ariaLabel}>
				{content}
			</a>
		);
	}

	return (
		<button
			type={type}
			className={className}
			onClick={onClick}
			aria-label={ariaLabel}
			disabled={disabled}
		>
			{content}
		</button>
	);
}
