import type { Preview } from "@storybook/react";
import "../src/styles/global.css";

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: "terminal",
			values: [
				{ name: "terminal", value: "#0d1117" },
				{ name: "surface", value: "#161b22" },
				{ name: "light", value: "#f6f8fa" },
			],
		},
		layout: "centered",
	},
};

export default preview;
