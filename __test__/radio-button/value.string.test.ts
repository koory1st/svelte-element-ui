import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/svelte'
import { testElementAndResult } from '../util/TestUtil'
import Comp from './value.string.svelte'

test('value.string', async () => {
  const { getByText } = render(Comp)
  const testDom = getByText('test component')
  testElementAndResult(testDom)

  // toggle the value by change value
  const button = getByText('button02')
  await fireEvent.click(button)
  testElementAndResult(testDom)

  // toggle the value by change value
  await fireEvent.click(button)
  testElementAndResult(testDom)
})
