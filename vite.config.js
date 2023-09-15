import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     '/api': 'https://flask-production-a594f.up.railway.app'
  //   }
  // },
  plugins: [react()],
})
