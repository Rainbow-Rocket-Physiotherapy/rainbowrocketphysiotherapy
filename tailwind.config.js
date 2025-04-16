/** @type {import("tailwindcss").Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}'
	],
	darkMode: 'class',
	safelist: [{ pattern: /border-/ }, { pattern: /fill-/ }, { pattern: /text-/ }],
	theme: {
		extend: {
			colors: {
				red: 'var(--color-red)',
				orange: 'var(--color-orange)',
				yellow: 'var(--color-yellow)',
				green: 'var(--color-green)',
				blue: 'var(--color-blue)',
				indigo: 'var(--color-indigo)',
				violet: 'var(--color-violet)',
				'violet-light': 'var(--color-violet-light)'
			},
			maxWidth: {
				'1/2': '50%'
			},
			typography: {
				DEFAULT: {
					css: {
						p: {
							color: '#172554'
						},
						h3: {
							color: '#172554'
						},
						blockquote: {
							color: '#172554',
							border: 0,
							fontWeight: 700,
							margin: 0,
							padding: 0,
							maxWidth: '45ch',
							marginLeft: 'auto',
							marginRight: 'auto'
						}
					}
				}
			}
		}
	}
};
