import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/vite-react_project/', // ← Must match your GitHub repo name
  plugins: [react()],
})

