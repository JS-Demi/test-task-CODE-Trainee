import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), TanStackRouterVite()],
	resolve: {
		alias: {
			assets: '/src/assets',
			components: '/src/components',
			features: '/src/features',
			hooks: '/src/hooks',
			types: '/src/types',
			services: '/src/services',
		},
	},
})
