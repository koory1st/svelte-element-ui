import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/svelte'

import Comp01 from './SeuCheckbox.test.01.svelte'
import Comp02 from './SeuCheckbox.test.02.svelte'
import Comp03 from './SeuCheckbox.test.03.svelte'
import Comp04 from './SeuCheckbox.test.04.svelte'
import Comp05 from './SeuCheckbox.test.05.svelte'
import Comp06 from './SeuCheckbox.test.06.svelte'
import Comp07 from './SeuCheckbox.test.07.svelte'
import Comp08 from './SeuCheckbox.test.08.svelte'
import Comp09 from './SeuCheckbox.test.09.svelte'
import Comp10 from './SeuCheckbox.test.10.svelte'
import Comp11 from './SeuCheckbox.test.11.svelte'

describe('Test of Checkbox 01', () => {
  test('main class', () => {
    const { getByText } = render(Comp01)
    const checkbox01 = getByText('SeuCheckbox01').querySelector('label')
    expect(checkbox01.getAttribute('role')).toEqual('checkbox')
    expect(checkbox01).not.toHaveClass('is-checked')
    expect(checkbox01).not.toHaveClass('is-disabled')
    expect(checkbox01).not.toHaveClass('is-indeterminate')
    expect(checkbox01).not.toHaveClass('is-focus')
    expect(checkbox01).not.toHaveClass('is-bordered')
    expect(checkbox01).not.toHaveClass('is-bordered')
    expect(checkbox01.getAttribute('aria-controls')).toEqual('false')
    expect(checkbox01).not.toHaveAttribute('aria-disabled')

    const inputEle = checkbox01.querySelector('input[type="checkbox"]')
    expect(inputEle).toHaveClass('seu-checkbox__original')
    expect(inputEle.getAttribute('aria-hidden')).toEqual('false')
    expect(inputEle).not.toHaveAttribute('name')
    expect(inputEle).not.toHaveAttribute('disabled')
    const spanInputEle = checkbox01.querySelector('span.seu-checkbox__input')
    expect(spanInputEle).not.toHaveClass('is-checked')
    expect(spanInputEle).not.toHaveClass('is-disabled')
    expect(spanInputEle).not.toHaveClass('is-indeterminate')
    const spanCheckLabel = checkbox01.querySelector('span.seu-checkbox__label')
    expect(spanCheckLabel).toHaveTextContent('label1')
  })

  test('value change and null label', async () => {
    const { getByText } = render(Comp02)
    const checkboxEle = getByText('SeuCheckbox02').querySelector('label')
    expect(checkboxEle).not.toHaveClass('is-checked')
    const inputEle = checkboxEle.querySelector('input[type="checkbox"]')
    expect(inputEle.getAttribute('value')).toEqual('')
    const spanInputEle = checkboxEle.querySelector('span.seu-checkbox__input')
    expect(spanInputEle).not.toHaveClass('is-checked')

    const button = getByText('button02')
    await fireEvent.click(button)
    expect(checkboxEle).toHaveClass('is-checked')
    expect(inputEle.getAttribute('value')).toEqual('')
    expect(spanInputEle).toHaveClass('is-checked')
  })

  test('disabled', async () => {
    const { getByText } = render(Comp03)
    const checkboxEle = getByText('SeuCheckbox03').querySelector('label')
    expect(checkboxEle).not.toHaveClass('is-disabled')
    const inputEle = checkboxEle.querySelector('input[type="checkbox"]')
    expect(inputEle).not.toHaveAttribute('disabled')
    const spanInputEle = checkboxEle.querySelector('span.seu-checkbox__input')
    expect(spanInputEle).not.toHaveClass('is-disabled')

    const button = getByText('button03')
    await fireEvent.click(button)
    expect(checkboxEle).toHaveClass('is-disabled')
    expect(inputEle).toHaveAttribute('disabled')
    expect(spanInputEle).toHaveClass('is-disabled')
  })

  test('click checkbox', async () => {
    const { getByText } = render(Comp04)
    const mainHtmlEle = getByText('SeuCheckbox04')
    const checkboxEle = mainHtmlEle.querySelector('label')
    expect(checkboxEle).not.toHaveClass('is-checked')
    const inputEle = checkboxEle.querySelector('input[type="checkbox"]')
    expect(inputEle.getAttribute('value')).toEqual('')
    const spanInputEle = checkboxEle.querySelector('span.seu-checkbox__input')
    expect(spanInputEle).not.toHaveClass('is-checked')
    const valueDivEle = mainHtmlEle.querySelector('#value')
    expect(valueDivEle).toHaveTextContent('false')

    await fireEvent.click(checkboxEle)
    expect(checkboxEle).toHaveClass('is-checked')
    expect(inputEle.getAttribute('value')).toEqual('')
    expect(spanInputEle).toHaveClass('is-checked')
    expect(valueDivEle).toHaveTextContent('true')
  })

  test('checkedValue and value is undefined', async () => {
    const { getByText } = render(Comp05)
    const mainHtmlEle = getByText('SeuCheckbox05')
    const checkboxEle = mainHtmlEle.querySelector('label')
    expect(checkboxEle).not.toHaveClass('is-checked')
    const inputEle = checkboxEle.querySelector('input[type="checkbox"]')
    expect(inputEle.getAttribute('value')).toEqual('')
    const spanInputEle = checkboxEle.querySelector('span.seu-checkbox__input')
    expect(spanInputEle).not.toHaveClass('is-checked')
    const valueDivEle = mainHtmlEle.querySelector('#value')
    expect(valueDivEle).toHaveTextContent('undefined')

    // click checkbox to check
    await fireEvent.click(checkboxEle)
    expect(checkboxEle).toHaveClass('is-checked')
    expect(inputEle.getAttribute('value')).toEqual('')
    expect(spanInputEle).toHaveClass('is-checked')
    expect(valueDivEle).toHaveTextContent('yes')

    // click checkbox to uncheck
    await fireEvent.click(checkboxEle)
    expect(checkboxEle).not.toHaveClass('is-checked')
    expect(inputEle.getAttribute('value')).toEqual('')
    expect(spanInputEle).not.toHaveClass('is-checked')
    expect(valueDivEle).toHaveTextContent('no')

    // change value by click button
    const buttonYes = document.querySelector('#buttonYes')
    await fireEvent.click(buttonYes)
    expect(checkboxEle).toHaveClass('is-checked')
    expect(inputEle.getAttribute('value')).toEqual('')
    expect(spanInputEle).toHaveClass('is-checked')
    expect(valueDivEle).toHaveTextContent('yes')

    // change value by click button
    const buttonNo = document.querySelector('#buttonNo')
    await fireEvent.click(buttonNo)
    expect(checkboxEle).not.toHaveClass('is-checked')
    expect(inputEle.getAttribute('value')).toEqual('')
    expect(spanInputEle).not.toHaveClass('is-checked')
    expect(valueDivEle).toHaveTextContent('no')
  })

  test('border', () => {
    const { getByText } = render(Comp06)
    const checkbox = getByText('SeuCheckbox06').querySelector('label')
    expect(checkbox).toHaveClass('is-bordered')
  })

  test('size: size should not work without border', () => {
    const { getByText } = render(Comp07)
    const checkbox = getByText('SeuCheckbox07').querySelector('label')
    expect(checkbox).not.toHaveClass('seu-checkbox--medium')
    expect(checkbox).not.toHaveClass('seu-checkbox--small')
    expect(checkbox).not.toHaveClass('seu-checkbox--mini')
  })

  test('size: medium', () => {
    const { getByText } = render(Comp08)
    const checkbox = getByText('SeuCheckbox08').querySelector('label')
    expect(checkbox).toHaveClass('seu-checkbox--medium')
  })

  test('size: small', () => {
    const { getByText } = render(Comp09)
    const checkbox = getByText('SeuCheckbox09').querySelector('label')
    expect(checkbox).toHaveClass('seu-checkbox--small')
  })

  test('size: mini', () => {
    const { getByText } = render(Comp10)
    const checkbox = getByText('SeuCheckbox10').querySelector('label')
    expect(checkbox).toHaveClass('seu-checkbox--mini')
  })

  test('name', () => {
    const { getByText } = render(Comp11)
    const checkbox = getByText('SeuCheckbox11').querySelector('label')
    const inputEle = checkbox.querySelector('input[type="checkbox"]')
    expect(inputEle.getAttribute('name')).toBe('test_name')
  })
})
