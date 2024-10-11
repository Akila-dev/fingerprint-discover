/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./containers/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
			backgroundImage: {
				'hero-bg':
					"linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 9)), url('bg.jpg') ",
			},
		},
	},
	plugins: [],
};
