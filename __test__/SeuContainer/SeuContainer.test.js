import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/svelte'

import Comp01 from './SeuContainer.test.01.svelte'
import Comp02 from './SeuContainer.test.02.svelte'
import Comp03 from './SeuContainer.test.03.svelte'

describe('Test Container 01', () => {
  test('main class ', () => {
    const { getByText } = render(Comp01)

    expect(getByText('Test Container 01')).toHaveClass('seu-container')
    expect(getByText('Test Container 01')).not.toHaveClass('is-vertical')
  })
  test('test horizontal', () => {
    const { getByText } = render(Comp02)

    getByText('Test Container 02')

    expect(getByText('Test Container 02')).toHaveClass('seu-container')
    expect(getByText('Test Container 02')).not.toHaveClass('is-vertical')
  })

  test('test vertical', () => {
    const { getByText } = render(Comp03)

    expect(getByText('Test Container 03')).toHaveClass('seu-container')
    expect(getByText('Test Container 03')).toHaveClass('is-vertical')
  })
})
