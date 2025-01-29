module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
			container: {
			  center: true,
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '120ch',
					}
				}
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
	],
}