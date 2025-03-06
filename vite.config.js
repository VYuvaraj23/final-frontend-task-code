import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import envCompatible from 'vite-plugin-env-compatible'

// https://vite.dev/config/
export default defineConfig({
  envPrefix:"REACT_APP",
  plugins: [react(),tailwindcss(),envCompatible()],
})
