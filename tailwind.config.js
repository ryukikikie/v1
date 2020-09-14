module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
	},
	purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				cashmere: "#CBC5C1",
				"french-blue": "#A2AAB0",
				"white wash": "#EBECED",
				denim: "#4C586F",
				gunmetal: "#3E3E3B",
			},
		},
	},
	variants: {},
	plugins: [],
};
