// @ts-nocheck
import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import sveltePreprocess from 'svelte-preprocess'
import typescript from '@rollup/plugin-typescript'
import alias from '@rollup/plugin-alias'
import postcss from 'rollup-plugin-postcss'
import path from 'path'
import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete'
import pkg from './package.json'

const production = !process.env.ROLLUP_WATCH
const projectRootDir = path.resolve(__dirname)

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, m => m.toUpperCase())
  .replace(/-\w/g, m => m[1].toUpperCase())

function serve() {
  let server

  function toExit() {
    if (server) server.kill(0)
  }

  return {
    writeBundle() {
      if (server) return
      server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
        stdio: ['ignore', 'inherit', 'inherit'],
        shell: true,
      })

      process.on('SIGTERM', toExit)
      process.on('exit', toExit)
    },
  }
}

export default {
  input: !production ? 'src/main.ts' : 'src/components.js',
  output: !production
    ? {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: 'public/dist/bundle.js',
      }
    : [
        { file: 'dist/index.min.mjs', format: 'es' },
        { file: 'dist/index.min.js', format: 'umd', name },
      ],
  plugins: [
    del({ targets: !production ? 'public/dist/*' : 'dist/*' }),
    alias({
      entries: {
        '@': projectRootDir + '/src',
        root: projectRootDir,
        'theme-chalk': projectRootDir + '/static/theme-chalk',
        pkg: projectRootDir + '/packages',
      },
    }),
    svelte({
      // dev: !production,
      emitCss: true,
      // enable run-time checks when not in production
      // we'll extract any component CSS out into
      // a separate file - better for performance
      preprocess: sveltePreprocess(),
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve(),
    commonjs(),
    typescript({ sourceMap: !production }),
    // scss(),
    postcss({
      extract: 'seu.css',
      minimize: true,
      sourceMap: !production,
    }),
    copy({
      targets: [
        {
          src: ['static/fonts/element-icons.ttf', 'static/fonts/element-icons.woff'],
          dest: !production ? 'public/dist/fonts/' : 'dist/fonts/',
        },
      ],
    }),
    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload('public'),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
}
