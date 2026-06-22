import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
// `base` must match the GitHub Pages repo name so assets resolve at
// https://<user>.github.io/Porfoilo/
export default defineConfig({
  base: '/Porfoilo/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
