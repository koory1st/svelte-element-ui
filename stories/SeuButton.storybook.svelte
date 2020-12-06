<script>
  import { SeuRow, SeuButton } from '../dist/bundle'
  import SeuButtonGroup from '../src/buttonGroup/SeuButtonGroup.svelte'
  export let type
  export let size
  export let disabled
  export let loading
  export let plain
  export let round
  export let circle
</script>

<h1>Try It with Knobs below</h1>
<SeuButton {type} {size} {disabled} {plain} {round} {circle} {loading} on:click>默认按钮</SeuButton>

<h1>Samples</h1>
<SeuRow>
  <SeuButton>默认按钮</SeuButton>
  <SeuButton type="primary">主要按钮</SeuButton>
  <SeuButton type="success">成功按钮</SeuButton>
  <SeuButton type="info">信息按钮</SeuButton>
  <SeuButton type="warning">警告按钮</SeuButton>
  <SeuButton type="danger">危险按钮</SeuButton>
</SeuRow>

<SeuRow>
  <SeuButton plain>朴素按钮</SeuButton>
  <SeuButton type="primary" plain>主要按钮</SeuButton>
  <SeuButton type="success" plain>成功按钮</SeuButton>
  <SeuButton type="info" plain>信息按钮</SeuButton>
  <SeuButton type="warning" plain>警告按钮</SeuButton>
  <SeuButton type="danger" plain>危险按钮</SeuButton>
</SeuRow>

<h2>round</h2>
<SeuRow>
  <SeuButton round>圆角按钮</SeuButton>
  <SeuButton type="primary" round>主要按钮</SeuButton>
  <SeuButton type="success" round>成功按钮</SeuButton>
  <SeuButton type="info" round>信息按钮</SeuButton>
  <SeuButton type="warning" round>警告按钮</SeuButton>
  <SeuButton type="danger" round>危险按钮</SeuButton>
</SeuRow>

<h2>circle</h2>
<SeuRow>
  <SeuButton icon="seu-icon-search" circle />
  <SeuButton type="primary" icon="seu-icon-edit" circle />
  <SeuButton type="success" icon="seu-icon-check" circle />
  <SeuButton type="info" icon="seu-icon-message" circle />
  <SeuButton type="warning" icon="seu-icon-star-off" circle />
  <SeuButton type="danger" icon="seu-icon-delete" circle />
</SeuRow>

<h2>disabled</h2>
<SeuRow>
  <SeuButton disabled>默认按钮</SeuButton>
  <SeuButton type="primary" disabled>主要按钮</SeuButton>
  <SeuButton type="success" disabled>成功按钮</SeuButton>
  <SeuButton type="info" disabled>信息按钮</SeuButton>
  <SeuButton type="warning" disabled>警告按钮</SeuButton>
  <SeuButton type="danger" disabled>危险按钮</SeuButton>
</SeuRow>

<SeuRow>
  <SeuButton plain disabled>朴素按钮</SeuButton>
  <SeuButton type="primary" plain disabled>主要按钮</SeuButton>
  <SeuButton type="success" plain disabled>成功按钮</SeuButton>
  <SeuButton type="info" plain disabled>信息按钮</SeuButton>
  <SeuButton type="warning" plain disabled>警告按钮</SeuButton>
  <SeuButton type="danger" plain disabled>危险按钮</SeuButton>
</SeuRow>

<SeuButton type="text">文字按钮</SeuButton>
<SeuButton type="text" disabled>文字按钮</SeuButton>

<h2>group</h2>
<SeuButtonGroup>
  <SeuButton type="primary" icon="seu-icon-arrow-left">上一页</SeuButton>
  <SeuButton type="primary">下一页<i class="seu-icon-arrow-right seu-icon--right" /></SeuButton>
</SeuButtonGroup>
<SeuButtonGroup>
  <SeuButton type="primary" icon="seu-icon-edit" />
  <SeuButton type="primary" icon="seu-icon-share" />
  <SeuButton type="primary" icon="seu-icon-delete" />
</SeuButtonGroup>

<h2>loading</h2>
<SeuRow>
  <SeuButton type="primary" loading={true}>加载中</SeuButton>
</SeuRow>

<h2>size</h2>
<SeuRow>
  <SeuButton>默认按钮</SeuButton>
  <SeuButton size="medium">中等按钮</SeuButton>
  <SeuButton size="small">小型按钮</SeuButton>
  <SeuButton size="mini">超小按钮</SeuButton>
</SeuRow>
<SeuRow>
  <SeuButton round>默认按钮</SeuButton>
  <SeuButton size="medium" round>中等按钮</SeuButton>
  <SeuButton size="small" round>小型按钮</SeuButton>
  <SeuButton size="mini" round on:click>超小按钮</SeuButton>
</SeuRow>

<h2>icon</h2>
<SeuButton type="primary" icon="seu-icon-edit" />
<SeuButton type="primary" icon="seu-icon-share" />
<SeuButton type="primary" icon="seu-icon-delete" />
<SeuButton type="primary" icon="seu-icon-search">搜索</SeuButton>
<SeuButton type="primary">上传<i class="seu-icon-upload seu-icon--right" /></SeuButton>

<style>
  :global(.seu-row) {
    margin-bottom: 20px;
  }
</style>
