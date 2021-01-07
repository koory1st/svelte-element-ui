import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/svelte'
import { testElementAndResult } from '../util/TestUtil'

import Comp from './circle.svelte'

test('circle', () => {
  const { getByText } = render(Comp)
  testElementAndResult(getByText('test component'))
})
