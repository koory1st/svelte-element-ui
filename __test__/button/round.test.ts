import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/svelte'
import { testElementAndResult } from '../util/TestUtil'

import Comp from './round.svelte'

test('round', () => {
  const { getByText } = render(Comp)
  testElementAndResult(getByText('test component'))
})
