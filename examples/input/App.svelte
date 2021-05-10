<script lang="ts">
  import SeuInput from '../../packages/input/index'

  let value = ''
</script>

<div class="demo-input">
  <h1>基础用法</h1>
  {value}
  <SeuInput bind:value placeholder="请输入内容" />

  <h1>禁用状态</h1>
  {value}
  <SeuInput disabled bind:value placeholder="请输入内容" />

  <h1>可清空</h1>
  {value}
  <SeuInput clearable bind:value placeholder="请输入内容" />

  <h1>密码框</h1>
  {value}
  <SeuInput showPassword bind:value placeholder="请输入内容" />

  <h1>带 icon 的输入框</h1>
  <div class="demo-input-suffix">
    属性方式：
    <SeuInput placeholder="请选择日期" suffixIcon="seu-icon-date" />
    <SeuInput placeholder="请输入内容" prefixIcon="seu-icon-search" />
  </div>

  <div class="demo-input-suffix">
    slot 方式：
    <SeuInput placeholder="请选择日期">
      <i slot="suffix" class="seu-input__icon seu-icon-date" />
    </SeuInput>
    <SeuInput placeholder="请输入内容">
      <i slot="prefix" class="seu-input__icon seu-icon-search" />
    </SeuInput>
  </div>

  <h1>文本域</h1>
  <SeuInput type="textarea" autosize={{ minRows: 2, maxRows: 4 }} placeholder="请输入内容" v-model="textarea" />

  <h1>复合型输入框</h1>

  <SeuInput placeholder="请输入内容">
    <span slot="prepend">Http://</span>
  </SeuInput>
  <div style="margin-top: 15px;">
    <SeuInput placeholder="请输入内容">
      <span slot="append">.com</span>
    </SeuInput>
  </div>
</div>

<style>
  :global(.demo-input-suffix .seu-input) {
    margin-right: 15px;
  }
  :global(.demo-input .seu-input) {
  }
</style>
