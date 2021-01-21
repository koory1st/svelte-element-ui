import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'
import { testElementAndResult } from '../util/TestUtil'

import Comp from './span.svelte'

test('span', () => {
  const { getByText } = render(Comp)
  const testDom = getByText('test component')
  testElementAndResult(testDom)
})
