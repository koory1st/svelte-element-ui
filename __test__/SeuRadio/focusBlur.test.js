import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/svelte'
import { testElementAndResult } from '../util/TestUtil'
import Comp from './click.svelte'

test('click', async () => {
  const { getByText } = render(Comp)
  const testDom = getByText('test component')
  testElementAndResult(testDom)

  const ele = testDom.querySelector('.seu-radio')

  await fireEvent.focus(ele.querySelector('input'))
  testElementAndResult(testDom)

  await fireEvent.blur(ele.querySelector('input'))
  testElementAndResult(testDom)
})
