import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/svelte'

import Comp01 from './SeuLink.test.01.svelte'
import Comp02 from './SeuLink.test.02.svelte'
import Comp03 from './SeuLink.test.03.svelte'
import Comp04 from './SeuLink.test.04.svelte'
import Comp05 from './SeuLink.test.05.svelte'
import Comp06 from './SeuLink.test.06.svelte'
import Comp07 from './SeuLink.test.07.svelte'

describe('Test of Link 01', () => {
  test('main class', () => {
    const { getByText } = render(Comp01)
    const link01 = getByText('seu link 01').parentElement
    expect(link01).toHaveClass('seu-link')
    expect(link01.tagName).toBe('A')
  })
  test('default class', () => {
    const { getByText } = render(Comp01)
    const link01 = getByText('seu link 01').parentElement
    expect(link01).toHaveClass('seu-link--default')
    expect(link01).toHaveClass('is-underline')
    expect(link01).not.toHaveClass('is-disabled')
    expect(link01).not.toHaveAttribute('href')
  })

  test('type', () => {
    const { getByText } = render(Comp02)
    const link02default = getByText('seu link 02-default').parentElement
    expect(link02default).toHaveClass('seu-link--default')
    const link02primary = getByText('seu link 02-primary').parentElement
    expect(link02primary).toHaveClass('seu-link--primary')
    const link02success = getByText('seu link 02-success').parentElement
    expect(link02success).toHaveClass('seu-link--success')
    const link02warning = getByText('seu link 02-warning').parentElement
    expect(link02warning).toHaveClass('seu-link--warning')
    const link02danger = getByText('seu link 02-danger').parentElement
    expect(link02danger).toHaveClass('seu-link--danger')
    const link02info = getByText('seu link 02-info').parentElement
    expect(link02info).toHaveClass('seu-link--info')
  })

  test('underline', () => {
    const { getByText } = render(Comp03)
    const link03 = getByText('seu link 03').parentElement
    expect(link03).not.toHaveClass('is-underline')
  })

  test('disabled', () => {
    const { getByText } = render(Comp04)
    const link04 = getByText('seu link 04').parentElement
    expect(link04).toHaveClass('is-disabled')
  })

  test('href', () => {
    const { getByText } = render(Comp05)
    const link05 = getByText('seu link 05').parentElement
    expect(link05.outerHTML).toContain('href="abc.com"')
  })

  test('default slot', () => {
    const { getByText } = render(Comp06)
    const link06default = getByText('seu link 06-default').parentElement
    expect(link06default.querySelector('.seu-link--inner')).toHaveTextContent('seu link 06-default')

    const link06icon = getByText('seu link 06-icon').parentElement
    expect(link06icon.querySelector('div')).toHaveTextContent('seu link 06-icon')
  })

  test('click', async () => {
    const { getByText } = render(Comp07)
    const link07 = getByText('seu link 07').parentElement
    const span = getByText('test07-1')
    await fireEvent.click(link07)
    expect(span).toHaveTextContent('link clicked')
  })
})
