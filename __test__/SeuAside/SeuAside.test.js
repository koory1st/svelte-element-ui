import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/svelte'

import Comp01 from './SeuAside.test.01.svelte'
import Comp02 from './SeuAside.test.02.svelte'

describe('Test of Aside 01', () => {
  test('main class', () => {
    const { getByText } = render(Comp01)
    expect(getByText('seu aside')).toHaveClass('seu-aside')
    expect(getByText('seu aside')).toHaveStyle('width:300px')
    expect(getByText('seu aside').tagName).toBe('ASIDE')
  })

  test('width style', () => {
    const { getByText } = render(Comp02)
    expect(getByText('seu aside')).toHaveStyle('width:10px')
  })
})
