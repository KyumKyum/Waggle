/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				DGM: "DGM",
			},
		},
	},
	daisyui: {
		themes: [
			{
				waggle: {
					primary: "#fff314",
					secondary: "#04142e",
					accent: "#f97316",
					neutral: "#04142e",
					"base-100": "#04142e",
					info: "#3ABFF8",
				}
			},
		]
	},
	plugins: [require("tailwindcss-animate"), require('daisyui')],
};
