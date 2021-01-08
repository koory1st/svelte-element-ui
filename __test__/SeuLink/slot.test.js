import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'
import { testElementAndResult } from '../util/TestUtil'

import Comp from './slot.svelte'

test('slot', () => {
  const { getByText } = render(Comp)
  const testDom = getByText('test component')
  testElementAndResult(testDom)
})
