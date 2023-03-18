import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import jotaiDebugLabel from 'jotai/babel/plugin-debug-label';
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "./src/main.scss";`,
			},
		},
	},
	server: {
		proxy: {
			'^/api/.*': {
				target: 'http://127.0.0.1:8000/',
				changeOrigin: true,
			},
		},
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: 'src/tests/setupTests.js',
	},
	plugins: [
		react({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } }),
	],
});
