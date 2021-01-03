<script>
  import { SeuCheckbox, SeuCheckboxButton, SeuCheckboxGroup } from '../dist/bundle'
  export let value = false
  export let border
  export let size = ''
  export let name = ''
  export let disabled = null

  let disabledValue1 = true
  let disabledValue2 = false
  let groupValue = ['Shanghai']
  let checkAll
  let indeterminate = true
  let options = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

  let borderValue1 = true
  let borderValue2 = false
  let borderValue3 = false
  let borderValue4 = true
  let borderGroup1 = []
  let borderGroup2 = []

  let value3
</script>

<h1>Checkbox</h1>
<p>A group of options for multiple choices.</p>

<h2>Try It with Knobs below</h2>
<h3>checkbox value: {value}</h3>
<div>
  <SeuCheckbox bind:value {border} {size} {name} {disabled}>Option A</SeuCheckbox>
</div>

<h2>Basic usage</h2>
<p>Checkbox can be used alone to switch between two states.</p>
<SeuCheckbox bind:value>Option A</SeuCheckbox>

<h2>Disabled State</h2>
<p>Disabled state for checkbox.</p>

<SeuCheckbox bind:value={disabledValue1} disabled={true}>Option A</SeuCheckbox>

<SeuCheckbox bind:value={disabledValue2} disabled={true}>Option A</SeuCheckbox>

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
  bind:value={checkAll}
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

<h2>Minimum / Maximum items checked</h2>
<p>The min and max properties can help you to limit the number of checked items.</p>

<h2>Button style</h2>
<p>Checkbox with button styles.</p>
<SeuCheckboxGroup>
  <SeuCheckboxButton bind:group={groupValue} label="Shanghai" />
  <SeuCheckboxButton bind:group={groupValue} label="Beijing" disabled />
  <SeuCheckboxButton bind:group={groupValue} label="Guangzhou" />
  <SeuCheckboxButton bind:group={groupValue} label="Shenzhen" />
</SeuCheckboxGroup>

<h2>checked value and unchecked value</h2>
<p>Can set checkedValue and uncheckedValue to the checkbox</p>
<p>{value3}</p>
<SeuCheckbox bind:value={value3} checkedValue="checked" uncheckedValue="unchecked" label="click to change value" />

<SeuCheckboxButton
  bind:value={value3}
  checkedValue="checked"
  uncheckedValue="unchecked"
  label="click to change value" />

<h2>With borders</h2>
<h3>borderValue1: {borderValue1} borderValue2: {borderValue2}</h3>
<div>
  <SeuCheckbox bind:value={borderValue1} border>Option 1</SeuCheckbox>
  <SeuCheckbox bind:value={borderValue2} border>Option 2</SeuCheckbox>
</div>

<h3>borderValue3: {borderValue3} borderValue4: {borderValue4}</h3>
<div>
  <SeuCheckbox bind:value={borderValue3} border size="medium">Option 3</SeuCheckbox>
  <SeuCheckbox bind:value={borderValue4} border size="medium">Option 4</SeuCheckbox>
</div>

<h3>{borderGroup1}</h3>
<SeuCheckboxGroup>
  <SeuCheckbox bind:group={borderGroup1} border value="Option 5" size="small">Option 5</SeuCheckbox>
  <SeuCheckbox bind:group={borderGroup1} border value="Option 6" disabled size="small">Option 6</SeuCheckbox>
</SeuCheckboxGroup>

<SeuCheckboxGroup bind:group={borderGroup1} options={['Option 5', 'Option 6']} border size="small" />

<h3>{borderGroup2}</h3>
<SeuCheckboxGroup>
  <SeuCheckbox bind:group={borderGroup2} border value="Option 7" size="mini" disabled>Option 7</SeuCheckbox>
  <SeuCheckbox bind:group={borderGroup2} border value="Option 8" size="mini" disabled>Option 8</SeuCheckbox>
</SeuCheckboxGroup>

<SeuCheckboxGroup bind:group={borderGroup2} options={['Option 7', 'Option 8']} border size="mini" disabled />
