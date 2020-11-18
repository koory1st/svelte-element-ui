import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/svelte'

import Comp01 from './SeuContainer.test.01.svelte'
import Comp02 from './SeuContainer.test.02.svelte'

describe('Test Container 01', () => {
  const { getByText } = render(Comp01)

  expect(getByText('Test Container 01')).toHaveClass('seu-container')
  expect(getByText('Test Container 01')).not.toHaveClass('is-vertical')
  expect(getByText('Test Container 01')).toHaveClass('abc')
  expect(getByText('Test Container 01')).toHaveStyle('color:red')
  expect(getByText('Test Container 01')).toHaveStyle('font-size:14px')
})

describe('Test Container 02', () => {
  test('main class', () => {
    const { getByText } = render(Comp02)

    expect(getByText('Test Container 02')).toHaveClass('seu-container')
    expect(getByText('Test Container 02')).not.toHaveClass('is-vertical')
  })

  test('test horizontal', () => {
    const { getByText } = render(Comp02, { props: { containerDirection: 'horizontal' } })

    getByText('Test Container 02')

    expect(getByText('Test Container 02')).not.toHaveClass('is-vertical')
  })

  test('test vertical', () => {
    const { getByText } = render(Comp02, { props: { containerDirection: 'vertical' } })

    expect(getByText('Test Container 02')).toHaveClass('is-vertical')
  })
})
