import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/svelte'
import { testElementAndResult } from '../util/TestUtil'
import Comp from './SeuCheckbox.04.svelte'
const testFile = 'SeuCheckbox.04'

describe(`${testFile}`, () => {
  test('change the value by click checkbox', async () => {
    const { getByText } = render(Comp)
    const checkboxEle = getByText(`${testFile}`).querySelector('label')
    testElementAndResult(checkboxEle)

    await fireEvent.click(checkboxEle)
    testElementAndResult(checkboxEle)
  })
})
