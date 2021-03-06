import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/svelte'
import { testElementAndResult } from '../../../util/TestUtil'
import Comp from './minMax.svelte'

test('minMax', async () => {
  const { getByText } = render(Comp)
  const testDom = getByText('test component')
  testElementAndResult(testDom)

  const checkbox1 = testDom.querySelector('div.seu-checkbox-group label:nth-child(1)')
  await fireEvent.click(checkbox1)
  testElementAndResult(testDom)

  const checkbox2 = testDom.querySelector('div.seu-checkbox-group label:nth-child(2)')
  await fireEvent.click(checkbox2)
  testElementAndResult(testDom)

  const checkbox3 = testDom.querySelector('div.seu-checkbox-group label:nth-child(3)')
  await fireEvent.click(checkbox3)
  testElementAndResult(testDom)

  await fireEvent.click(checkbox1)
  await fireEvent.click(checkbox2)
  testElementAndResult(testDom)
})
