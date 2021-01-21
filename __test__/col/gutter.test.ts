import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'
import { testElementAndResult } from '../util/TestUtil'

import Comp from './gutter.svelte'

test('gutter', () => {
  const { getByText } = render(Comp)
  const testDom = getByText('test component')
  testElementAndResult(testDom)
})
