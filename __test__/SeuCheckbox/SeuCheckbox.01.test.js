import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'
import { testElementAndResult } from '../util/TestUtil'
import Comp from './SeuCheckbox.01.svelte'
const testFile = 'SeuCheckbox.01'

describe(`${testFile}`, () => {
  test('default props', () => {
    const { getByText } = render(Comp)
    const checkboxEle = getByText(`${testFile}`).querySelector('label')
    testElementAndResult(checkboxEle)
  })
})
