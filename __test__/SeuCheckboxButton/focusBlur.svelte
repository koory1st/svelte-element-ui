<script type="ts">
  import SeuCheckboxButton from '../../packages/checkboxButton/SeuCheckboxButton.svelte'
  let value = false
</script>

<div>
  test component
  <div id="value">{value}</div>
  <SeuCheckboxButton bind:value>label4</SeuCheckboxButton>
</div>
