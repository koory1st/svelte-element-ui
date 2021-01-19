import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'
import { testElementAndResult } from '../util/TestUtil'
import Comp from './label.svelte'

test('label:no work without group', () => {
  const { getByText } = render(Comp)
  const checkboxEle = getByText('test component').querySelector('label')
  testElementAndResult(checkboxEle)
})
