import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/svelte'
import { testElementAndResult } from '../util/TestUtil'
import Comp from './SeuCheckbox.05.svelte'
const testFile = 'SeuCheckbox.05'

describe(`${testFile}`, () => {
  test('checkedValue', async () => {
    const { getByText } = render(Comp)
    const checkboxEle = getByText(`${testFile}`).querySelector('label')
    testElementAndResult(checkboxEle)

    // click checkbox to check
    await fireEvent.click(checkboxEle)
    testElementAndResult(checkboxEle)

    // click checkbox to uncheck
    await fireEvent.click(checkboxEle)
    testElementAndResult(checkboxEle)

    // change value by click button
    const buttonYes = document.querySelector('#buttonYes')
    await fireEvent.click(buttonYes)
    testElementAndResult(checkboxEle)

    // change value by click button
    const buttonNo = document.querySelector('#buttonNo')
    await fireEvent.click(buttonNo)
    testElementAndResult(checkboxEle)
  })
})
