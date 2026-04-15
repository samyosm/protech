import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: ["@storybook/addon-essentials", "@storybook/addon-a11y"],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	async viteFinal(config) {
		const tailwindcss = (await import("@tailwindcss/vite")).default;
		const react = (await import("@vitejs/plugin-react")).default;
		config.plugins = [...(config.plugins ?? []), react(), tailwindcss()];
		return config;
	},
};

export default config;
