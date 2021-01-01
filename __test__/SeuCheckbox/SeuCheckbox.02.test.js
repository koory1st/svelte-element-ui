import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/svelte'
import { testElementAndResult } from '../util/TestUtil'
import Comp from './SeuCheckbox.02.svelte'
const testFile = 'SeuCheckbox.02'

describe(`${testFile}`, () => {
  test('toggle the value prop by change prop', async () => {
    const { getByText } = render(Comp)
    const checkboxEle = getByText(`${testFile}`).querySelector('label')
    testElementAndResult(checkboxEle)

    // toggle the value by change value
    const button = getByText('button02')
    await fireEvent.click(button)
    testElementAndResult(checkboxEle)

    // toggle the value by change value
    await fireEvent.click(button)
    testElementAndResult(checkboxEle)
  })
})
