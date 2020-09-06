<script>
  import { SeuLink } from '../dist/bundle'
  export let type
  export let underline
  export let disabled
  export let href
  export let icon
</script>

<h2>Try It with Knobs below</h2>
<SeuLink {type} {underline} {disabled} {href} {icon} target="_blank" on:click>默认链接</SeuLink>
<h2>Samples</h2>
<div>
  <SeuLink href="https://koory1st.github.io/svelte-element-ui" target="_blank" on:click>默认链接</SeuLink>
  <SeuLink type="primary" on:click>主要链接</SeuLink>
  <SeuLink type="success" on:click>成功链接</SeuLink>
  <SeuLink type="warning" on:click>警告链接</SeuLink>
  <SeuLink type="danger" on:click>危险链接</SeuLink>
  <SeuLink type="info" on:click>信息链接</SeuLink>
</div>

<div>
  <SeuLink disabled>默认链接</SeuLink>
  <SeuLink type="primary" disabled>主要链接</SeuLink>
  <SeuLink type="success" disabled>成功链接</SeuLink>
  <SeuLink type="warning" disabled>警告链接</SeuLink>
  <SeuLink type="danger" disabled>危险链接</SeuLink>
  <SeuLink type="info" disabled>信息链接</SeuLink>
</div>

<div>
  <SeuLink underline={false} on:click>无下划线</SeuLink>
  <SeuLink>有下划线</SeuLink>
</div>

<div>
  <SeuLink icon="seu-icon-edit" on:click>编辑</SeuLink>
  <SeuLink on:click>查看<i class="seu-icon-view seu-icon--right" /></SeuLink>
</div>
