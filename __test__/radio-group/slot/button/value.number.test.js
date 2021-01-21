import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/svelte'
import { testElementAndResult } from '../../../util/TestUtil'
import Comp from './value.number.svelte'

test('value.number', async () => {
  const { getByText } = render(Comp)
  const testDom = getByText('test component')
  testElementAndResult(testDom)

  const button01 = getByText('button01')
  await fireEvent.click(button01)
  testElementAndResult(testDom)

  const button02 = getByText('button02')
  await fireEvent.click(button02)
  testElementAndResult(testDom)

  const button03 = getByText('button03')
  await fireEvent.click(button03)
  testElementAndResult(testDom)
})
