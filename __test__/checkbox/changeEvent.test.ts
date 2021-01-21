import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/svelte'
import { testElementAndResult } from '../util/TestUtil'
import Comp from './changeEvent.svelte'

test('change the value by click checkbox', async () => {
  const { getByText } = render(Comp)
  const testDom = getByText('test component')
  const checkboxEle = testDom.querySelector('label')
  testElementAndResult(testDom)

  await fireEvent.click(checkboxEle)
  testElementAndResult(testDom)
})
