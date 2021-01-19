import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/svelte'
import { testElementAndResult } from '../util/TestUtil'

import Comp from './plain.svelte'

test('plain', () => {
  const { getByText } = render(Comp)
  testElementAndResult(getByText('test component'))
})
