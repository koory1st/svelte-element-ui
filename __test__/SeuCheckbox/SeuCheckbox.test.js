import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/svelte'

import Comp01 from './SeuCheckbox.test.01.svelte'
import Comp02 from './SeuCheckbox.test.02.svelte'

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

  test('value', async () => {
    const { getByText } = render(Comp02)
    const checkboxEle = getByText('SeuCheckbox02').querySelector('label')
    expect(checkboxEle).not.toHaveClass('is-checked')
    const inputEle = checkboxEle.querySelector('input[type="checkbox"]')
    expect(inputEle.getAttribute('value')).toEqual('false')
    const spanInputEle = checkboxEle.querySelector('span.seu-checkbox__input')
    expect(spanInputEle).not.toHaveClass('is-checked')

    const button = getByText('button02')
    await fireEvent.click(button)
    expect(checkboxEle).toHaveClass('is-checked')
    console.log('%c 🎂 inputEle: ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', inputEle.outerHTML)
    expect(inputEle.getAttribute('value')).toEqual('true')
    expect(spanInputEle).toHaveClass('is-checked')
  })
})
