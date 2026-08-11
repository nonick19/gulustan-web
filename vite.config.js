import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Özel domain (gulustan.net) kök dizinden sunulacak
  base: '/',
})
