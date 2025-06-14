//import { svelteTesting } from './node_modules/@testing-library/svelte/types/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
//import path from 'node:path';
//import { fileURLToPath } from 'node:url';

//const dirname =
//	typeof __dirname !== 'undefined'
//		? __dirname
//		: path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: true,
		port: 5173
	},
	test: {
		workspace: [
			{
				extends: './vite.config.ts',
				plugins: [], //svelteTesting()
				test: {
					name: 'client',
					environment: 'jsdom',
					clearMocks: true,
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**'],
					setupFiles: ['./vitest-setup-client.ts']
				}
			},
			{
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
});
