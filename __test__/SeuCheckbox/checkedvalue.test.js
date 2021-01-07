import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/svelte'
import { testElementAndResult } from '../util/TestUtil'
import Comp from './checkedvalue.svelte'

test('checkedValue string', async () => {
  const { getByText } = render(Comp)
  const testDom = getByText('test component')
  const checkboxEle = testDom.querySelector('label')
  testElementAndResult(testDom)

  // click checkbox to check
  await fireEvent.click(checkboxEle)
  testElementAndResult(testDom)

  // click checkbox to uncheck
  await fireEvent.click(checkboxEle)
  testElementAndResult(testDom)

  // change value by click button
  const buttonYes = document.querySelector('#buttonYes')
  await fireEvent.click(buttonYes)
  testElementAndResult(testDom)

  // change value by click button
  const buttonNo = document.querySelector('#buttonNo')
  await fireEvent.click(buttonNo)
  testElementAndResult(testDom)
})
