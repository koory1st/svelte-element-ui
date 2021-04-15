import Layout from '../view/Layout.svelte'
import Container from '../view/Container.svelte'
import Button from '../view/Button.svelte'
let routes: Array<{key:string,displayName:string,component:Function}> = [
    {
      key: 'Layout',
      displayName: 'Layout 布局',
      component: Layout
    },
    {
      key: 'Container',
      displayName: 'Container 布局容器',
      component: Container
    },
    {
      key: 'Button',
      displayName: 'Button 按钮',
      component: Button
    },
  ]

  export default routes