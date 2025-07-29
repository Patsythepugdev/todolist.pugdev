import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/todolist-patsy/', // 👈 ESTE debe coincidir exactamente con el nombre del repo
})
