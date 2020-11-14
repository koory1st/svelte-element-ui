import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/svelte'

import Comp from './Container.test.01.svelte'

describe('Test Container 01', () => {
  
  test('main class', () => {
    const { getByText } = render(Comp)

    expect(getByText('Test Container 01')).toHaveClass('seu-container')
    expect(getByText('Test Container 01')).not.toHaveClass('is-vertical')
  })

  test('test horizontal', () => {
    const { getByText } = render(Comp, { props: { containerDirection: 'horizontal' } })

    getByText('Test Container 01')

    expect(getByText('Test Container 01')).not.toHaveClass('is-vertical')
  })

  test('test vertical', () => {
    const { getByText } = render(Comp, { props: { containerDirection: 'vertical' } })

    expect(getByText('Test Container 01')).toHaveClass('is-vertical')
  })

});

describe('Test Header', () => {
  
});