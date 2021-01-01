import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'
import { testElementAndResult } from '../util/TestUtil'
import Comp from './SeuCheckbox.07.svelte'
const testFile = 'SeuCheckbox.07'

describe(`${testFile}`, () => {
  test('size', () => {
    const { getByText } = render(Comp)
    const checkboxEle = getByText(`${testFile}`)
    testElementAndResult(checkboxEle)
  })
})
