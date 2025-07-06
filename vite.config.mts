import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		assetsDir: '.', // to output assets at root level, not in assets folder
		assetsInlineLimit: 0, // this will turn of inlining assets
		emptyOutDir: true,
		minify: true,
		modulePreload: false, // prevent vite from injecting polyfill code
		outDir: 'dist',
		target: 'esnext',
	},
	server: {
		open: true,
	},
});
