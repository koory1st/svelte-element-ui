<script lang="ts">
  import { SeuMenu, SeuMenuItem, SeuSubmenu, SeuRow, SeuCol } from '@/index'
  export let name: string

  function handleOpen(key, keyPath) {
    console.log(key, keypath)
  }

  function handleClose(key, keyPath) {
    console.log(key, keypath)
  }
</script>

<SeuMenu backgroundColor="#545c64" textColor="#fff" defaultActive="2-4-4-1" mode="horizontal" activeTextColor="#ffd04b">
  <SeuMenuItem index="1">处理中心</SeuMenuItem>
  <SeuSubmenu index="2">
    <span slot="title">我的工作台</span>
    <SeuMenuItem index="2-1">选项1</SeuMenuItem>
    <SeuMenuItem index="2-2">选项2</SeuMenuItem>
    <SeuMenuItem index="2-3">选项3</SeuMenuItem>
    <SeuSubmenu index="2-4">
      <span slot="title">选项4</span>
      <SeuMenuItem index="2-4-1">选项1</SeuMenuItem>
      <SeuMenuItem index="2-4-2">选项2</SeuMenuItem>
      <SeuSubmenu index="2-4-4">
        <span slot="title">选项4</span>
        <SeuMenuItem index="2-4-4-1">选项1</SeuMenuItem>
        <SeuMenuItem index="2-4-4-2">选项2</SeuMenuItem>
        <SeuMenuItem index="2-4-4-3">选项3</SeuMenuItem>
      </SeuSubmenu>
      <SeuMenuItem index="2-4-3">选项3</SeuMenuItem>
    </SeuSubmenu>
  </SeuSubmenu>
  <SeuMenuItem index="3" disabled>消息中心</SeuMenuItem>
  <SeuMenuItem index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></SeuMenuItem>
</SeuMenu>

<SeuRow>
  <SeuCol span="12">
    <SeuMenu defaultActive="2" on:open={handleOpen} on:close={handleClose}>
      <SeuSubmenu index="1">
        <div slot="title">
          <i class="seu-icon-location" />
          <span>导航一</span>
        </div>
        <SeuMenuItem index="456">222</SeuMenuItem>
      </SeuSubmenu>
      <SeuMenuItem index="789">222</SeuMenuItem>
    </SeuMenu>
  </SeuCol>
</SeuRow>
