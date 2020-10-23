<script>
  import { SeuCheckbox, SeuCheckboxGroup } from '../dist/bundle'
  export let value = false
  export let border
  export let size = ''
  export let name = ''
  export let disabled = null

  let disabledValue1 = true
  let disabledValue2 = false
  let groupValue
  let checkAll
  let indeterminate = true
  let options = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
</script>

<h1>Checkbox</h1>
<p>A group of options for multiple choices.</p>

<h2>Try It with Knobs below</h2>
<h3>checkbox value: {value}</h3>
<div>
  <SeuCheckbox bind:checked={value} {border} {size} {name} {disabled}>Option A</SeuCheckbox>
</div>

<h2>Basic usage</h2>
<p>Checkbox can be used alone to switch between two states.</p>
<SeuCheckbox bind:checked={value}>Option A</SeuCheckbox>

<h2>Disabled State</h2>
<p>Disabled state for checkbox.</p>

<SeuCheckbox bind:checked={disabledValue1} disabled={true}>Option A</SeuCheckbox>

<SeuCheckbox bind:checked={disabledValue2} disabled={true}>Option A</SeuCheckbox>

<h2>Checkbox group</h2>
<p>
  It is used for multiple checkboxes which are bound in one group, and indicates whether one option is selected by
  checking if it is checked.
</p>
<p>Group value: {groupValue}</p>

<SeuCheckboxGroup options={['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']} bind:group={groupValue} />

<SeuCheckboxGroup
  options={[{ label: 'Shanghai', value: 'Shanghai' }, { label: 'Beijing', value: 'Beijing' }, { label: 'Guangzhou', value: 'Guangzhou' }, { label: 'Shenzhen', value: 'Shenzhen' }]}
  bind:group={groupValue}
  on:change={({ detail }) => console.log(detail)} />

<SeuCheckboxGroup options={['Guangzhou', 'Shenzhen']} bind:group={groupValue}>
  <SeuCheckbox bind:group={groupValue} value="Shanghai" />
  <SeuCheckbox bind:group={groupValue} value="Beijing" />
</SeuCheckboxGroup>

<h2>Indeterminate</h2>
<p>The indeterminate property can help you to achieve a 'check all' effect.</p>
<SeuCheckbox
  {indeterminate}
  bind:checked={checkAll}
  on:change={({ detail }) => {
    indeterminate = false
    groupValue = detail ? [...options] : []
  }}>
  Check all
</SeuCheckbox>
<SeuCheckboxGroup
  {options}
  bind:group={groupValue}
  on:change={({ detail }) => {
    let checkedCount = detail.length
    checkAll = detail.length === options.length
    indeterminate = checkedCount > 0 && checkedCount < options.length
  }} />
