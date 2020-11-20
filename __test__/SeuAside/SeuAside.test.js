import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/svelte'

import Comp from './SeuAside.test.01.svelte'

describe('Test of Aside 01', () => {
  test('main class', () => {
    const { getByText } = render(Comp)
    expect(getByText('seu aside')).toHaveClass('seu-aside')
    expect(getByText('seu aside')).toHaveClass('abc')
    expect(getByText('seu aside')).toHaveStyle('color:red')
    expect(getByText('seu aside')).toHaveStyle('font-size:14px')
    expect(getByText('seu aside')).toHaveStyle('width:300px')
    expect(getByText('seu aside').tagName).toBe('ASIDE')
  })

  test('width style', () => {
    const { getByText } = render(Comp, { props: { width: '10px' } })
    expect(getByText('seu aside')).toHaveStyle('width:10px')
  })
})
