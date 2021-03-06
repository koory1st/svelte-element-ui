import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/svelte'
import { testElementAndResult } from '../../../util/TestUtil'
import Comp from './value.string.svelte'

test('value.string', async () => {
  const { getByText } = render(Comp)
  const testDom = getByText('test component')
  testElementAndResult(testDom)

  const buttonShanghai = getByText('buttonShanghai')
  await fireEvent.click(buttonShanghai)
  testElementAndResult(testDom)

  const buttonBeijing = getByText('buttonBeijing')
  await fireEvent.click(buttonBeijing)
  testElementAndResult(testDom)

  const buttonGuangzhou = getByText('buttonGuangzhou')
  await fireEvent.click(buttonGuangzhou)
  testElementAndResult(testDom)

  const buttonAll = getByText('buttonAll')
  await fireEvent.click(buttonAll)
  testElementAndResult(testDom)

  const buttonEmpty = getByText('buttonEmpty')
  await fireEvent.click(buttonEmpty)
  testElementAndResult(testDom)
})
