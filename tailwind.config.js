/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			keyframes: {
				shimmer: {
					"0%": { backgroundPosition: "-200px" },
					"100%": { backgroundPosition: "200px" },
				},
			},
			animation: {
				shimmer: "shimmer 3s cubic-bezier(0.32, 0, 0.04, 0.96) infinite",
			},
		},
	},
	plugins: [],
};
