import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/svelte'
import { testElementAndResult } from '../util/TestUtil'
import Comp from './Checkbox.click.svelte'

test('change the value by click checkbox', async () => {
  const { getByText } = render(Comp)
  const checkboxEle = getByText('test component').querySelector('label')
  testElementAndResult(checkboxEle)

  await fireEvent.click(checkboxEle)
  testElementAndResult(checkboxEle)
})
