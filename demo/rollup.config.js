import svelte from 'rollup-plugin-svelte'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import sveltePreprocess from 'svelte-preprocess'
import typescript from '@rollup/plugin-typescript'
import alias from '@rollup/plugin-alias'
import postcss from 'rollup-plugin-postcss'
import css from 'rollup-plugin-css-only'
import path from 'path'
import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete'

const production = !process.env.ROLLUP_WATCH
const projectRootDir = path.resolve(__dirname.split('/demo')[0])

function serve() {
  let server

  function toExit() {
    if (server) server.kill(0)
  }

  return {
    writeBundle() {
      if (server) return
      server = require('child_process').spawn('npm', ['run', 'demo-start', '--', '--dev'], {
        stdio: ['ignore', 'inherit', 'inherit'],
        shell: true,
      })

      process.on('SIGTERM', toExit)
      process.on('exit', toExit)
    },
  }
}

export default {
  input: 'demo/src/main.ts',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'demo/public/lib/bundle.js',
  },
  plugins: [
    alias({
      entries: {
        '@': projectRootDir + '/src',
        root: projectRootDir,
        'theme-chalk': projectRootDir + '/static/theme-chalk',
        pkg: projectRootDir + '/packages',
      },
    }),
    del({ targets: 'demo/public/lib/*' }),
    svelte({
      emitCss: true,
      preprocess: sveltePreprocess(),
      // compilerOptions: {
      //   // enable run-time checks when not in production
      //   dev: !production,
      // },
    }),
    // we'll extract any component CSS out into
    // a separate file - better for performance
    css({ output: 'bundle.css' }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),
    typescript({
      sourceMap: !production,
      inlineSources: !production,
    }),
    postcss({
      extract: 'bundle.css',
      minimize: true,
      sourceMap: !production,
    }),
    copy({
      targets: [
        {
          src: ['static/fonts/element-icons.ttf', 'static/fonts/element-icons.woff'],
          dest: 'demo/public/lib/fonts',
        },
      ],
    }),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload('demo/public'),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
}
