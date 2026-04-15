import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";

const DiscordIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
		<path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.003.02.014.04.03.052a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.995a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.099.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
	</svg>
);

const ArrowIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<path d="M5 12h14M12 5l7 7-7 7" />
	</svg>
);

const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Reusable terminal-style button/link component. Supports three variants (primary, secondary, ghost), three sizes, optional icons, and a prompt prefix character for the shell aesthetic.",
			},
		},
	},
	argTypes: {
		variant: { control: "select", options: ["primary", "secondary", "ghost"] },
		size: { control: "select", options: ["sm", "md", "lg"] },
		prompt: { control: "text" },
		disabled: { control: "boolean" },
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		variant: "primary",
		children: "Nous rejoindre",
		prompt: "$",
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		children: "Découvrir le club",
		prompt: ">",
	},
};

export const Ghost: Story = {
	args: {
		variant: "ghost",
		children: "En savoir plus",
	},
};

export const WithIcon: Story = {
	name: "With Icon (Discord)",
	args: {
		variant: "primary",
		children: "Discord",
		icon: <DiscordIcon />,
		prompt: "$",
	},
};

export const WithArrowIcon: Story = {
	name: "With Arrow Icon",
	args: {
		variant: "secondary",
		children: "Voir les projets",
		icon: <ArrowIcon />,
		prompt: ">",
	},
};

export const Small: Story = {
	args: {
		variant: "secondary",
		children: "Voir plus",
		size: "sm",
		prompt: ">",
	},
};

export const Large: Story = {
	args: {
		variant: "primary",
		children: "Rejoindre la communauté",
		size: "lg",
		prompt: "$",
		icon: <DiscordIcon />,
	},
};

export const Disabled: Story = {
	args: {
		variant: "primary",
		children: "Indisponible",
		prompt: "$",
		disabled: true,
	},
};

export const AllVariants: Story = {
	name: "All Variants",
	render: () => (
		<div className="flex flex-col gap-4 items-start font-mono">
			<Button variant="primary" prompt="$">Primary</Button>
			<Button variant="secondary" prompt=">">Secondary</Button>
			<Button variant="ghost">Ghost</Button>
		</div>
	),
};
