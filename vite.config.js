import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 Este nombre exacto debe coincidir con el repositorio de GitHub
export default defineConfig({
  plugins: [react()],
  base: '/todolist-patsy/', 
})
