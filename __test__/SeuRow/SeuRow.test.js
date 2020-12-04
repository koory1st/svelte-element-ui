import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'

import Comp01 from './SeuRow.test.01.svelte'
import Comp02 from './SeuRow.test.02.svelte'
import Comp03 from './SeuRow.test.03.svelte'
import Comp04 from './SeuRow.test.04.svelte'
import Comp05 from './SeuRow.test.05.svelte'

describe('Test Row 01', () => {
  test('main class', () => {
    const { getByText } = render(Comp01)

    expect(getByText('Test Row 01')).toHaveClass('seu-row')
  })
  test('default class', () => {
    const { getByText } = render(Comp01)

    expect(getByText('Test Row 01')).not.toHaveClass('seu-row--flex')
    expect(getByText('Test Row 01')).not.toHaveClass('is-justify-end')
    expect(getByText('Test Row 01')).not.toHaveClass('is-justify-center')
    expect(getByText('Test Row 01')).not.toHaveClass('is-justify-space-around')
    expect(getByText('Test Row 01')).not.toHaveClass('is-justify-space-between')
    expect(getByText('Test Row 01')).not.toHaveClass('is-align-middle')
    expect(getByText('Test Row 01')).not.toHaveClass('is-align-bottom')
  })
})

describe('Test Row properties', () => {
  test('gutter class', () => {
    const { getByText } = render(Comp02)

    expect(getByText('Test Row 02')).toHaveStyle('margin-left:-5px')
    expect(getByText('Test Row 02')).toHaveStyle('margin-right:-5px')
  })

  test('type class', () => {
    const { getByText } = render(Comp03)

    expect(getByText('Test Row 03')).toHaveClass('seu-row--flex')
  })

  test('justify class', () => {
    const { getByText } = render(Comp04)

    expect(getByText('Test Row justify end')).toHaveClass('is-justify-end')
    expect(getByText('Test Row justify center')).toHaveClass('is-justify-center')
    expect(getByText('Test Row justify space-around')).toHaveClass('is-justify-space-around')
    expect(getByText('Test Row justify space-between')).toHaveClass('is-justify-space-between')
  })
  test('justify class', () => {
    const { getByText } = render(Comp05)

    expect(getByText('Test Row align middle')).toHaveClass('is-align-middle')
    expect(getByText('Test Row align bottom')).toHaveClass('is-align-bottom')
  })
})
