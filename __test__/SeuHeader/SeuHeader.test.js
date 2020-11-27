import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/svelte'

import Comp01 from './SeuHeader.test.01.svelte'
import Comp02 from './SeuHeader.test.02.svelte'

describe('Test of Header 01', () => {
  test('main class', () => {
    const { getByText } = render(Comp01)
    expect(getByText('seu header 01')).toHaveClass('seu-header')
    expect(getByText('seu header 01').tagName).toBe('HEADER')
    expect(getByText('seu header 01')).toHaveStyle('height:60px')
  })

  test('height style', () => {
    const { getByText } = render(Comp02)
    expect(getByText('seu header 02')).toHaveClass('seu-header')
    expect(getByText('seu header 02').tagName).toBe('HEADER')
    expect(getByText('seu header 02')).toHaveStyle('height:10px')
  })
})
