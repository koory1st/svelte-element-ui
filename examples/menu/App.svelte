<script lang="ts">
  import {
    SeuMenu,
    SeuMenuItem,
    SeuSubmenu,
    SeuRow,
    SeuCol,
    SeuMenuItemGroup,
    SeuRadioGroup,
    SeuRadioButton,
    SeuRadio,
  } from '../../src/components'
  export let name: string
  let isCollapse = false

  function handleOpen(event) {
    console.log(event)
  }

  function handleClose(event) {
    console.log(event)
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
        <SeuMenuItemGroup>
          <span slot="title">分组一</span>
          <SeuMenuItem index="1-1">选项1</SeuMenuItem>
          <SeuMenuItem index="1-2">选项2</SeuMenuItem>
        </SeuMenuItemGroup>
        <SeuMenuItemGroup title="分组2">
          <SeuMenuItem index="1-3">选项3</SeuMenuItem>
        </SeuMenuItemGroup>
        <SeuSubmenu index="1-4">
          <span slot="title">选项4</span>
          <SeuMenuItem index="1-4-1">选项1</SeuMenuItem>
        </SeuSubmenu>
      </SeuSubmenu>
      <SeuMenuItem index="2">
        <i class="seu-icon-menu" />
        <span slot="title">导航二</span>
      </SeuMenuItem>
      <SeuMenuItem index="3" disabled>
        <i class="seu-icon-document" />
        <span slot="title">导航三</span>
      </SeuMenuItem>
      <SeuMenuItem index="4">
        <i class="seu-icon-setting" />
        <span slot="title">导航四</span>
      </SeuMenuItem>
    </SeuMenu>
  </SeuCol>
  <SeuCol span="12">
    <SeuMenu
      defaultActive="2"
      backgroundColor="#545c64"
      textColor="#fff"
      activeTextColor="#ffd04b"
      on:open={handleOpen}
      on:close={handleClose}
    >
      <SeuSubmenu index="1">
        <div slot="title">
          <i class="seu-icon-location" />
          <span>导航一</span>
        </div>
        <SeuMenuItemGroup>
          <span slot="title">分组一</span>
          <SeuMenuItem index="1-1">选项1</SeuMenuItem>
          <SeuMenuItem index="1-2">选项2</SeuMenuItem>
        </SeuMenuItemGroup>
        <SeuMenuItemGroup title="分组2">
          <SeuMenuItem index="1-3">选项3</SeuMenuItem>
        </SeuMenuItemGroup>
        <SeuSubmenu index="1-4">
          <span slot="title">选项4</span>
          <SeuMenuItem index="1-4-1">选项1</SeuMenuItem>
        </SeuSubmenu>
      </SeuSubmenu>
      <SeuMenuItem index="2">
        <i class="seu-icon-menu" />
        <span slot="title">导航二</span>
      </SeuMenuItem>
      <SeuMenuItem index="3" disabled>
        <i class="seu-icon-document" />
        <span slot="title">导航三</span>
      </SeuMenuItem>
      <SeuMenuItem index="4">
        <i class="seu-icon-setting" />
        <span slot="title">导航四</span>
      </SeuMenuItem>
    </SeuMenu>
  </SeuCol>
</SeuRow>

<SeuRadioGroup>
  <SeuRadioButton bind:value={isCollapse} label={false}>展开</SeuRadioButton>
  <SeuRadioButton bind:value={isCollapse} label={true}>收起</SeuRadioButton>
</SeuRadioGroup>
<div style="margin-bottom: 20px;" />
<SeuMenu
  defaultActive="1-4-1"
  class="seu-menu-vertical-demo"
  on:open={handleOpen}
  on:close={handleClose}
  collapse={isCollapse}
>
  <SeuSubmenu index="1">
    <div slot="title">
      <i class="seu-icon-location" />
      <span>导航一</span>
    </div>
    <SeuMenuItemGroup>
      <span slot="title">分组一</span>
      <SeuMenuItem index="1-1">选项1</SeuMenuItem>
      <SeuMenuItem index="1-2">选项2</SeuMenuItem>
    </SeuMenuItemGroup>
    <SeuMenuItemGroup title="分组2">
      <SeuMenuItem index="1-3">选项3</SeuMenuItem>
    </SeuMenuItemGroup>
    <SeuSubmenu index="1-4">
      <span slot="title">选项4</span>
      <SeuMenuItem index="1-4-1">选项1</SeuMenuItem>
    </SeuSubmenu>
  </SeuSubmenu>
</SeuMenu>
11111 2222 3333

<style>
  :global(.seu-menu-vertical-demo) {
    width: 240px;
    min-height: 400px;
  }
</style>
