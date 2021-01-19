import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/svelte'
import { testElementAndResult } from '../util/TestUtil'
import Comp from './focusBlur.svelte'

test('focusBlur', async () => {
  const { getByText } = render(Comp)
  const checkboxEle = getByText('test component').querySelector('label')
  testElementAndResult(checkboxEle)

  await fireEvent.focus(checkboxEle.querySelector('input'))
  testElementAndResult(checkboxEle)

  await fireEvent.blur(checkboxEle.querySelector('input'))
  testElementAndResult(checkboxEle)
})
