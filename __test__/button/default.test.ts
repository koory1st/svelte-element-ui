import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/svelte'
import { testElementAndResult } from '../util/TestUtil'

import Comp from './default.svelte'

test('default', () => {
  const { getByText } = render(Comp)
  testElementAndResult(getByText('test component'))
})
