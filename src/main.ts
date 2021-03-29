import App from './App.svelte'
import 'font-folder/element-icons.ttf'
import 'font-folder/element-icons.woff'
import 'theme-chalk/src/icon.scss'

const app = new App({
  target: document.body,
  props: {
    name: 'world',
  },
})

export default app
