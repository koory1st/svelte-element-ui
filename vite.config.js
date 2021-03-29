import { defineConfig } from 'vite'
import svelte from '@sveltejs/vite-plugin-svelte'
const path = require('path')
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      'theme-chalk': path.resolve(__dirname, 'static/theme-chalk'),
      'font-folder': path.resolve(__dirname, 'static/fonts'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components.ts'),
      name: 'SvelteElementUI',
    },
  },
})
