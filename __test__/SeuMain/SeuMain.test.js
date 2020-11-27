import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/svelte'

import Comp from './SeuMain.test.01.svelte'

describe('Test of Main 01', () => {
  test('main class', () => {
    const { getByText } = render(Comp)
    expect(getByText('seu main')).toHaveClass('seu-main')
    expect(getByText('seu main').tagName).toBe('MAIN')
  })
})
