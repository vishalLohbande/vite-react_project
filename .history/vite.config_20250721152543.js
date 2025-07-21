import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/vite-react_project/', // 🔁 use your exact GitHub repo name here
  plugins: [react()],
})
