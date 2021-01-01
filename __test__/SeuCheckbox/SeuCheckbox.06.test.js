import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'
import { testElementAndResult } from '../util/TestUtil'
import Comp from './SeuCheckbox.06.svelte'
const testFile = 'SeuCheckbox.06'

describe(`${testFile}`, () => {
  test('border', () => {
    const { getByText } = render(Comp)
    const checkboxEle = getByText(`${testFile}`).querySelector('label')
    testElementAndResult(checkboxEle)
  })
})
