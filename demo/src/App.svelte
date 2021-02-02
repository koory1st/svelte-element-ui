<script lang="ts">
  import { SeuMenu, SeuMenuItem, SeuSubmenu } from '@/index'
  export let name: string
</script>

<SeuMenu defaultActive="789" mode="horizontal" on:select>
  <SeuMenuItem index="1">111</SeuMenuItem>
  <SeuMenuItem index="456">222</SeuMenuItem>
  <SeuMenuItem index="789">222</SeuMenuItem>
</SeuMenu>

<SeuMenu backgroundColor="#545c64" textColor="#fff" mode="horizontal" activeTextColor="#ffd04b">
  <SeuMenuItem index="123">111</SeuMenuItem>
  <SeuSubmenu index="9999">
    <span slot="title">2222</span>
    <SeuMenuItem index="456">222</SeuMenuItem>
    <SeuMenuItem index="789">222</SeuMenuItem>
  </SeuSubmenu>
</SeuMenu>
