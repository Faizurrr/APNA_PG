import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// ✅ Clean config for Render deployment (no proxy, just static build)
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist', // Render will use this folder for deployment
  },
  server: {
    port: 5173, // optional, for local dev
  },
})
