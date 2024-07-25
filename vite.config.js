import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // Redirige todas las rutas a index.html
  },
  base: 'https://casilimas.github.io/Api-Metraton' // Base URL para despliegue en GitHub Pages
})
