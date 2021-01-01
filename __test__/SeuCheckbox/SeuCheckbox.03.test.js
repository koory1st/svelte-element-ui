import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/svelte'
import { testElementAndResult } from '../util/TestUtil'
import Comp from './SeuCheckbox.03.svelte'
const testFile = 'SeuCheckbox.03'

describe(`${testFile}`, () => {
  test('toggle the disabled prop by change prop', async () => {
    const { getByText } = render(Comp)
    const checkboxEle = getByText(`${testFile}`).querySelector('label')
    testElementAndResult(checkboxEle)

    // toggle the value by change value
    const button = getByText('button03')
    await fireEvent.click(button)
    testElementAndResult(checkboxEle)

    // toggle the value by change value
    await fireEvent.click(button)
    testElementAndResult(checkboxEle)
  })
})
