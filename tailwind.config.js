/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto', 'sans-serif'],
				montserrat: ['"Montserrat"', 'sans-serif'],
				passionone: ['"Passion One"', 'sans-serif']
			}
		}
	},
	plugins: [],
	darkMode: 'selector'
};
