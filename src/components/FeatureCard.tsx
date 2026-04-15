import type { ReactNode } from "react";

export interface FeatureCardProps {
	icon: ReactNode;
	title: string;
	description: string;
	command?: string;
}

export function FeatureCard({ icon, title, description, command }: FeatureCardProps) {
	const cmd =
		command ??
		`--${title
			.toLowerCase()
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
			.replace(/['\s]+/g, "-")
			.replace(/[^a-z0-9-]/g, "")}`;

	return (
		<div className="bg-[#161b22] border border-[#30363d] hover:border-[#3fb950]/60 transition-all duration-200 group font-mono overflow-hidden">
			{/* Terminal chrome */}
			<div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[#30363d] bg-[#0d1117]">
				<span className="w-2.5 h-2.5 rounded-full bg-[#f85149]" />
				<span className="w-2.5 h-2.5 rounded-full bg-[#d29922]" />
				<span className="w-2.5 h-2.5 rounded-full bg-[#3fb950]" />
				<span className="ml-2 text-xs text-[#8b949e] truncate">
					<span className="text-[#58a6ff]">protech</span> {cmd}
				</span>
			</div>

			{/* Content */}
			<div className="p-5">
				<div className="text-[#3fb950] mb-3 group-hover:text-[#4ade80] transition-colors">
					{icon}
				</div>
				<h3 className="text-sm font-semibold text-[#e6edf3] mb-2 uppercase tracking-wider">
					{title}
				</h3>
				<p className="text-[#8b949e] text-sm leading-relaxed">{description}</p>
			</div>
		</div>
	);
}
