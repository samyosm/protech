import type { Meta, StoryObj } from "@storybook/react";
import { FeatureCard } from "../components/FeatureCard";

// Inline SVG icons matching Tabler icon style
const LifebuoyIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
		<circle cx="12" cy="12" r="8" />
		<circle cx="12" cy="12" r="4" />
		<line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
		<line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
		<line x1="19.07" y1="4.93" x2="16.24" y2="7.76" />
		<line x1="7.76" y1="16.24" x2="4.93" y2="19.07" />
	</svg>
);

const SchoolIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
		<path d="M22 9L12 5L2 9l10 4l10-4v6" />
		<path d="M6 10.6V16a6 3 0 0 0 12 0v-5.4" />
	</svg>
);

const CodeIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
		<polyline points="16 18 22 12 16 6" />
		<polyline points="8 6 2 12 8 18" />
	</svg>
);

const TrophyIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
		<path d="M8 21h8m-4-4v4M7 4H4a2 2 0 0 0-2 2v1a5 5 0 0 0 5 5h.5M17 4h3a2 2 0 0 1 2 2v1a5 5 0 0 1-5 5h-.5" />
		<path d="M7 4h10v6a5 5 0 0 1-10 0V4z" />
	</svg>
);

const UsersIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
		<path d="M16 11c1.657 0 3-1.343 3-3s-1.343-3-3-3" />
		<path d="M19 16c1.1.5 2 1.4 2 2.5V20h-3" />
		<circle cx="9" cy="8" r="3" />
		<path d="M3 20v-1.5C3 17 5 16 9 16s6 1 6 2.5V20H3z" />
	</svg>
);

const RocketIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
		<path d="M4 13a8 8 0 0 1 7 7 6 6 0 0 0 3-5 9 9 0 0 0 6-8 3 3 0 0 0-3-3 9 9 0 0 0-8 6 6 6 0 0 0-5 3" />
		<path d="M7 14a6 6 0 0 0-3 6 6 6 0 0 0 6-3" />
		<circle cx="15" cy="9" r="1" />
	</svg>
);

const meta: Meta<typeof FeatureCard> = {
	title: "Components/FeatureCard",
	component: FeatureCard,
	tags: ["autodocs"],
	parameters: {
		layout: "padded",
		docs: {
			description: {
				component:
					"Terminal-style feature card used across the Protech site. Each card mimics a terminal window with chrome (close/minimize/maximize dots) and a command prompt header.",
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof FeatureCard>;

export const HelpCenter: Story = {
	name: "Centre d'aide",
	args: {
		icon: <LifebuoyIcon />,
		title: "Centre d'aide",
		description:
			"Un espace d'entraide où les étudiant·e·s peuvent poser leurs questions en programmation et recevoir du soutien de la communauté.",
		command: "--help",
	},
};

export const Workshops: Story = {
	name: "Ateliers",
	args: {
		icon: <SchoolIcon />,
		title: "Ateliers",
		description:
			"Des ateliers pratiques pour apprendre de nouvelles notions, découvrir des outils et développer des compétences concrètes, peu importe ton niveau.",
		command: "--workshops --list",
	},
};

export const Projects: Story = {
	name: "Projets",
	args: {
		icon: <CodeIcon />,
		title: "Projets",
		description:
			"La réalisation de projets concrets en équipe pour appliquer ses connaissances, expérimenter et apprendre en construisant.",
		command: "--projects --list",
	},
};

export const Competitions: Story = {
	name: "Compétitions",
	args: {
		icon: <TrophyIcon />,
		title: "Compétitions",
		description:
			"Participation à des compétitions, hackathons et défis technologiques pour se dépasser et mettre ses compétences à l'épreuve.",
		command: "--compete --hackathon",
	},
};

export const Community: Story = {
	name: "Communauté",
	args: {
		icon: <UsersIcon />,
		title: "Communauté",
		description:
			"Une communauté inclusive d'étudiant·e·s passionné·e·s qui partagent, collaborent et évoluent ensemble dans un environnement stimulant.",
		command: "--community --join",
	},
};

export const Exploration: Story = {
	name: "Exploration",
	args: {
		icon: <RocketIcon />,
		title: "Exploration",
		description:
			"Découverte de domaines variés en technologie : programmation, électronique, robotique et bien plus, selon les intérêts du groupe.",
		command: "--explore",
	},
};
