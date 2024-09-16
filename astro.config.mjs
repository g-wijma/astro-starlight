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
		}),
	],
});
