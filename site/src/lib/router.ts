import Layout from '../view/Layout.svelte'
import Container from '../view/Container.svelte'
import Button from '../view/Button.svelte'
import Link from '../view/Link.svelte'
import Radio from '../view/Radio.svelte'
let routes: Array<{ key: string; displayName: string; component: Function }> = [
  {
    key: 'Layout',
    displayName: 'Layout 布局',
    component: Layout,
  },
  {
    key: 'Container',
    displayName: 'Container 布局容器',
    component: Container,
  },
  {
    key: 'Button',
    displayName: 'Button 按钮',
    component: Button,
  },
  {
    key: 'Link',
    displayName: 'Link 文字链接',
    component: Link,
  },
  {
    key: 'Radio',
    displayName: 'Radio 单选框',
    component: Radio,
  },
]

export default routes
