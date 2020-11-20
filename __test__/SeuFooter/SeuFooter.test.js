import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/svelte'

import Comp from './SeuFooter.test.01.svelte'

describe('Test of Footer 01', () => {
  test('main class', () => {
    const { getByText } = render(Comp)
    expect(getByText('seu footer')).toHaveClass('seu-footer')
    expect(getByText('seu footer')).toHaveClass('abc')
    expect(getByText('seu footer')).toHaveStyle('color:red')
    expect(getByText('seu footer')).toHaveStyle('font-size:14px')
    expect(getByText('seu footer')).toHaveStyle('height:60px')
    expect(getByText('seu footer').tagName).toBe('FOOTER')
  })

  test('height style', () => {
    const { getByText } = render(Comp, { props: { height: '10px' } })
    expect(getByText('seu footer')).toHaveStyle('height:10px')
  })
})
