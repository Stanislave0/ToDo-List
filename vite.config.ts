import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/ToDo-List/tree/gh-pages',
  plugins: [react()],
})
