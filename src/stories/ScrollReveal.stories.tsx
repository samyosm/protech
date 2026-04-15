import type { Meta, StoryObj } from "@storybook/react";
import ScrollReveal from "../components/ScrollReveal";

const TerminalBlock = ({ command, output }: { command: string; output: string }) => (
	<div className="p-6 bg-[#161b22] border border-[#30363d] font-mono w-72">
		<p className="text-sm mb-3">
			<span className="text-[#3fb950]">$</span>{" "}
			<span className="text-[#e6edf3]">{command}</span>
		</p>
		<p className="text-[#8b949e] text-sm leading-relaxed">{output}</p>
	</div>
);

const meta: Meta<typeof ScrollReveal> = {
	title: "Components/ScrollReveal",
	component: ScrollReveal,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Scroll-triggered animation wrapper using Framer Motion. The animation fires once when the element enters the viewport. Use the `direction`, `distance`, `delay`, `duration`, and `scale` props to customise the entrance. In Storybook, you may need to scroll the canvas to trigger the animation.",
			},
		},
	},
	argTypes: {
		direction: { control: "select", options: ["up", "down", "left", "right"] },
		delay: { control: { type: "range", min: 0, max: 1, step: 0.1 } },
		distance: { control: { type: "range", min: 10, max: 150, step: 10 } },
		duration: { control: { type: "range", min: 0.2, max: 2, step: 0.1 } },
		scale: { control: "boolean" },
	},
};

export default meta;
type Story = StoryObj<typeof ScrollReveal>;

export const Default: Story = {
	args: {
		direction: "up",
		delay: 0,
		distance: 50,
		duration: 0.8,
		scale: false,
		children: <TerminalBlock command="cat about.txt" output="Composant ScrollReveal — animé à l'entrée dans le viewport." />,
	},
};

export const FromLeft: Story = {
	name: "Slide from Left",
	args: {
		direction: "left",
		distance: 80,
		duration: 0.6,
		children: <TerminalBlock command="git pull origin main" output="Fast-forwarding to latest changes..." />,
	},
};

export const WithScale: Story = {
	name: "Scale In",
	args: {
		direction: "up",
		scale: true,
		distance: 30,
		children: <TerminalBlock command="npm run build" output="Build complete. Output: ./dist" />,
	},
};

export const WithDelay: Story = {
	name: "With Delay (0.4s)",
	args: {
		direction: "up",
		delay: 0.4,
		children: <TerminalBlock command="./join.sh --discord" output="Connecting to Protech server..." />,
	},
};

export const SlowDuration: Story = {
	name: "Slow Duration (1.5s)",
	args: {
		direction: "up",
		duration: 1.5,
		distance: 60,
		children: <TerminalBlock command="ls -la ./projects" output="Listing all ongoing projects..." />,
	},
};
