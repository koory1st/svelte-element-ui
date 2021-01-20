// @ts-nocheck
import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
// import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import sveltePreprocess from 'svelte-preprocess'
import typescript from '@rollup/plugin-typescript'
import alias from '@rollup/plugin-alias'
import postcss from 'rollup-plugin-postcss'
import path from 'path'
import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete'
// import scss from 'rollup-plugin-scss'

const production = !process.env.ROLLUP_WATCH
const projectRootDir = path.resolve(__dirname)

export default {
  input: 'src/main.ts',
  output: {
    sourcemap: true,
    format: 'es',
    name: 'app',
    file: 'lib/seu.es.js',
  },
  plugins: [
    del({ targets: 'dist/*' }),
    alias({
      entries: {
        '@': projectRootDir + '/src',
        root: projectRootDir,
        'theme-chalk': projectRootDir + '/static/theme-chalk',
        pkg: projectRootDir + '/packages',
      },
    }),
    svelte({
      emitCss: true,
      // enable run-time checks when not in production
      // we'll extract any component CSS out into
      // a separate file - better for performance
      css: css => {
        css.write('seu.css', true)
      },
      preprocess: sveltePreprocess(),
    }),

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
          dest: 'lib/',
        },
      ],
    }),
    // In dev mode, call `npm run start` once
    // the bundle has been generated
    // !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    // !production && livereload('public'),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
}
