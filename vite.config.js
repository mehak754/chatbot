import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0', // Add this line
    port: process.env.PORT || 3000, // Use PORT from environment or default to 3000
    strictPort: true, // Exit if port is unavailable
  },
  preview: {
    host: '0.0.0.0', // Add this for preview mode too
    port: process.env.PORT || 4173,
    strictPort: true,
  },
})