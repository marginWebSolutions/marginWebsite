import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	esbuild: {
		target: 'es2020',
	},
	build: {
		target: 'es2020',
	},
});
