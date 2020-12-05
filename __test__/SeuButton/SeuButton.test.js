import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/svelte'

import Comp01 from './SeuButton.test.01.svelte'
import Comp02 from './SeuButton.test.02.svelte'
import Comp03 from './SeuButton.test.03.svelte'
import Comp04 from './SeuButton.test.04.svelte'
import Comp05 from './SeuButton.test.05.svelte'
import Comp06 from './SeuButton.test.06.svelte'
import Comp07 from './SeuButton.test.07.svelte'
import Comp08 from './SeuButton.test.08.svelte'
import Comp09 from './SeuButton.test.09.svelte'
import Comp10 from './SeuButton.test.10.svelte'

describe('Test of Button', () => {
  const { getByText } = render(Comp01)
  const button01 = getByText('Test Button 01').parentElement
  test('main class', () => {
    expect(button01).toHaveClass('seu-button')
    expect(button01.tagName).toBe('BUTTON')
    expect(button01.getAttribute('type')).toBe('button')
  })

  test('default class', () => {
    expect(button01).toHaveClass('seu-button--default')
    expect(button01).not.toHaveClass('is-disabled')
    expect(button01).not.toHaveClass('is-plain')
    expect(button01).not.toHaveClass('is-round')
    expect(button01).not.toHaveClass('is-circle')
    expect(button01).not.toHaveClass('is-loading')
  })

  test('disabled', () => {
    const { getByText } = render(Comp02)
    const button02 = getByText('Test Button 02').parentElement
    expect(button02).toHaveClass('is-disabled')
  })

  test('plain', () => {
    const { getByText } = render(Comp03)
    const button03 = getByText('Test Button 03').parentElement
    expect(button03).toHaveClass('is-plain')
  })

  test('type', () => {
    const { getByText } = render(Comp04)
    const button04default = getByText('Test Button 04-default').parentElement
    expect(button04default).toHaveClass('seu-button--default')
    const button04primary = getByText('Test Button 04-primary').parentElement
    expect(button04primary).toHaveClass('seu-button--primary')
    const button04success = getByText('Test Button 04-success').parentElement
    expect(button04success).toHaveClass('seu-button--success')
    const button04warning = getByText('Test Button 04-warning').parentElement
    expect(button04warning).toHaveClass('seu-button--warning')
    const button04danger = getByText('Test Button 04-danger').parentElement
    expect(button04danger).toHaveClass('seu-button--danger')
    const button04info = getByText('Test Button 04-info').parentElement
    expect(button04info).toHaveClass('seu-button--info')
    const button04text = getByText('Test Button 04-text').parentElement
    expect(button04text).toHaveClass('seu-button--text')
  })

  test('round', () => {
    const { getByText } = render(Comp05)
    const button05 = getByText('Test Button 05').parentElement
    expect(button05).toHaveClass('is-round')
  })

  test('circle', () => {
    const { getByText } = render(Comp06)
    const button06 = getByText('Test Button 06').parentElement
    expect(button06).toHaveClass('is-circle')
  })

  test('size', () => {
    const { getByText } = render(Comp07)
    const button07medium = getByText('Test Button 07-medium').parentElement
    expect(button07medium).toHaveClass('seu-button--medium')
    const button07small = getByText('Test Button 07-small').parentElement
    expect(button07small).toHaveClass('seu-button--small')
    const button07mini = getByText('Test Button 07-mini').parentElement
    expect(button07mini).toHaveClass('seu-button--mini')
  })

  test('loading', () => {
    const { getByText } = render(Comp08)
    const button08 = getByText('Test Button 08').parentElement
    expect(button08).toHaveClass('is-loading')
    expect(button08.innerHTML).toContain('<i class="seu-icon-loading"></i>')
  })

  test('icon', () => {
    const { getByText } = render(Comp09)
    const button09 = getByText('Test Button 09').parentElement
    expect(button09.innerHTML).toContain('<i class="test-icon"></i>')
  })

  test('click', async () => {
    const { getByText } = render(Comp10)
    const button10 = getByText('Test Button 10').parentElement
    const span = getByText('test10-1')
    await fireEvent.click(button10)
    expect(span).toHaveTextContent('button clicked')
  })
})
