import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/svelte'
import { testElementAndResult } from '../../util/TestUtil'
import Comp from './click.svelte'

test('click', async () => {
  const { getByText } = render(Comp)
  const testDom = getByText('test component')
  testElementAndResult(testDom)

  const ele1 = testDom.querySelector('.seu-radio:nth-child(1)')
  await fireEvent.click(ele1)
  testElementAndResult(testDom)

  const ele2 = testDom.querySelector('.seu-radio:nth-child(2)')
  await fireEvent.click(ele2)
  testElementAndResult(testDom)

  const ele3 = testDom.querySelector('.seu-radio:nth-child(3)')
  await fireEvent.click(ele3)
  testElementAndResult(testDom)
})
