<script lang="ts">
  import SeuMenu from 'pkg/menu'
  import SeuMenuItem from 'pkg/menu-item'
  export let name: string
</script>

<SeuMenu defaultActive="789" mode="horizontal" on:select>
  <SeuMenuItem index="1">111</SeuMenuItem>
  <SeuMenuItem index="456">222</SeuMenuItem>
  <SeuMenuItem index="789">222</SeuMenuItem>
</SeuMenu>

<SeuMenu backgroundColor="#545c64" textColor="#fff" mode="horizontal" activeTextColor="#ffd04b">
  <SeuMenuItem index="123">111</SeuMenuItem>
  <SeuMenuItem index="456">222</SeuMenuItem>
  <SeuMenuItem index="789">222</SeuMenuItem>
</SeuMenu>
