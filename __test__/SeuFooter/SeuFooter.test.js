import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/svelte'

import Comp01 from './SeuFooter.test.01.svelte'
import Comp02 from './SeuFooter.test.02.svelte'

describe('Test of Footer 01', () => {
  test('main class', () => {
    const { getByText } = render(Comp01)
    expect(getByText('seu footer 01')).toHaveClass('seu-footer')
    expect(getByText('seu footer 01').tagName).toBe('FOOTER')
    expect(getByText('seu footer 01')).toHaveStyle('height:60px')
  })

  test('height style', () => {
    const { getByText } = render(Comp02)
    expect(getByText('seu footer 02')).toHaveClass('seu-footer')
    expect(getByText('seu footer 02').tagName).toBe('FOOTER')
    expect(getByText('seu footer 02')).toHaveStyle('height:10px')
  })
})
