import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://web-production-42fd.up.railway.app'
    }
  },
  plugins: [react()],
})
