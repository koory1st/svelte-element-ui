import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/svelte'

import Comp from './Container.test.svelte'

test('main class', () => {
  const { getByText } = render(Comp)

  expect(getByText('aaa')).toHaveClass('seu-container')
})

test('with 2 main', () => {
  const { getByText } = render(Comp, { props: { containerDirection: 'vertical' } })

  expect(getByText('aaa')).toHaveClass('is-vertical')
})
