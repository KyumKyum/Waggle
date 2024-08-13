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
	plugins: [require("tailwindcss-animate")],
};
