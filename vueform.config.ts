import en from '@vueform/vueform/locales/en'
import tailwind from '@vueform/vueform/themes/tailwind'
import { defineConfig } from '@vueform/vueform'
import builder from '@vueform/builder/plugin'

export default defineConfig({
  theme: tailwind,
  locales: { en },
  locale: 'en',
  apiKey: 'nura-pmwr-avl7-6fnl-bqgn',
  plugins: [
    builder,
  ],
})