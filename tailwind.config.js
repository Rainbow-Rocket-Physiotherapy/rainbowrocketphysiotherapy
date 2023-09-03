/** @type {import("tailwindcss").Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	darkMode: 'class',
	theme: {
		fontFamily: {
			delius: ['delius'],
			deliusSwash: ['Delius Swash Caps'],
			brand: ['oregano']
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem'
			}
		},
		extend: {
			colors: {
				red: '#BC3343',
				orange: '#EE9521',
				yellow: '#F9B71C',
				green: '#69A84F',
				blue: '#02B4CB',
				indigo: '#0F5F8E',
				violet: '#7F2FDB'
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
	},
	plugins: [require('@tailwindcss/typography')]
};
