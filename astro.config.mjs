import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'OWASP Security Champions Guide',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{ label: 'Introduction', link: '/' },
				{
					label: 'Principles',
					autogenerate: { directory: 'principles' },
				},
				{ label: 'Blog', link: '/blog/' },
			],
		}),
	],
	site: "https://g-wijma.github.io",
  	base: '/astro-starlight/'
});
