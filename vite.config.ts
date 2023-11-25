import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueform from '@vueform/vueform/vite'
import builder from '@vueform/builder/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueform(),
    builder(),
  ],
})
