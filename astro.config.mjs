// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Hymenia Docs',
			description: 'Documentation for Hymenia, a place for your people.',
			logo: {
				light: "./src/assets/icon/light.png",
				dark: "./src/assets/icon/dark.png",
				replacesTitle: true,
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/hymenia/docs' }],
			sidebar: [
				{
					label: 'Bot Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting Started', slug: 'bots/getting-started' },
						{ label: 'Listing Spaces', slug: 'bots/listing-spaces' },
					],
				},
			],
		}),
	],
});
