import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/svelte'

import Comp from './SeuHeader.test.01.svelte'

describe('Test of Header 01', () => {
  test('main class', () => {
    const { getByText } = render(Comp)
    expect(getByText('seu header')).toHaveClass('seu-header')
    expect(getByText('seu header')).toHaveClass('abc')
    expect(getByText('seu header')).toHaveStyle('color:red')
    expect(getByText('seu header')).toHaveStyle('font-size:14px')
    expect(getByText('seu header')).toHaveStyle('height:60px')
    expect(getByText('seu header').tagName).toBe('HEADER')
  })

  test('height style', () => {
    const { getByText } = render(Comp, { props: { height: '10px' } })
    expect(getByText('seu header')).toHaveStyle('height:10px')
  })
})
