import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import removeConsole from 'vite-plugin-remove-console'
import eslintPlugin from 'vite-plugin-eslint'
import voie from 'vite-plugin-voie'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), removeConsole(), eslintPlugin(), voie()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
