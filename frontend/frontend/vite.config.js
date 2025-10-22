import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/login': 'http://127.0.0.1:5000', // Forward all /login requests to Flask
      // You can add more API routes here if needed
      // '/api': 'http://127.0.0.1:5000',
    },
  },
})
