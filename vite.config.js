import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Importando o tailwindcss
import { tailwindcss } from '@tailwindcss/vite' // <-----------

// https://vite.dev/config/
export default defineConfig({
  // Adicionando o tailwind na configuração
  plugins: [react(), tailwindcss()], // <----------- 
})
