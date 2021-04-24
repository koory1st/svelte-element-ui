import { defineConfig } from 'vite'
import svelte from '@sveltejs/vite-plugin-svelte'
const path = require('path')
export default defineConfig({
  plugins: [svelte({
    include: ['src/**/*.svelte', 'examples/**/*.svelte', 'packages/**/*.svelte', 'node_modules/**/*.svelte'],
  })],
  resolve: {
    alias: {
      'theme-chalk': path.resolve(__dirname, 'static/theme-chalk'),
      'font-folder': path.resolve(__dirname, 'static/fonts'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'seu',
      formats: ['iife']
    },
    // rollupOptions: {
    //   input: 'src/index.ts',
    //   output: {
    //       // file: path.resolve(__dirname, `public/components.js`),
    //       format: 'iife'
    //   }
    // }
  },
})
