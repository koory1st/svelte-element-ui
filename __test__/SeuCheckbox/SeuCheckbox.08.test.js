import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'
import { testElementAndResult } from '../util/TestUtil'
import Comp from './SeuCheckbox.08.svelte'
const testFile = 'SeuCheckbox.08'

describe(`${testFile}`, () => {
  test('name', () => {
    const { getByText } = render(Comp)
    const checkboxEle = getByText(`${testFile}`)
    testElementAndResult(checkboxEle)
  })
})
