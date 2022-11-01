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
				target: 'http://localhost:5000/',
				changeOrigin: true,
				secure: false,
			},
		},
	},
	plugins: [
		react({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } }),
	],
});
