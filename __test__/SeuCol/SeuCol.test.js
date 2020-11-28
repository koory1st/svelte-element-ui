import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'
import Comp01 from './SeuCol.test.01.svelte'
import Comp02 from './SeuCol.test.02.svelte'
import Comp03 from './SeuCol.test.03.svelte'
import Comp04 from './SeuCol.test.04.svelte'
import Comp05 from './SeuCol.test.05.svelte'
import Comp06 from './SeuCol.test.06.svelte'
import Comp07 from './SeuCol.test.07.svelte'
import Comp08 from './SeuCol.test.08.svelte'
import Comp09 from './SeuCol.test.09.svelte'
import Comp10 from './SeuCol.test.10.svelte'
import Comp11 from './SeuCol.test.11.svelte'
import Comp12 from './SeuCol.test.12.svelte'

describe('Test Col 01', () => {
  test('main class ', () => {
    const { getByText } = render(Comp01)

    expect(getByText('Test Col 01')).toHaveClass('seu-col')
  })

  test('span default ', () => {
    const { getByText } = render(Comp01)

    expect(getByText('Test Col 01')).toHaveClass('seu-col')
    expect(getByText('Test Col 01')).toHaveClass('seu-col-24')
  })

  test('span set to 10 ', () => {
    const { getByText } = render(Comp02)

    expect(getByText('Test Col 02')).toHaveClass('seu-col')
    expect(getByText('Test Col 02')).toHaveClass('seu-col-10')
  })

  test('offset ', () => {
    const { getByText } = render(Comp03)

    expect(getByText('Test Col 03')).toHaveClass('seu-col')
    expect(getByText('Test Col 03')).toHaveClass('seu-col-offset-3')
  })

  test('pull ', () => {
    const { getByText } = render(Comp04)

    expect(getByText('Test Col 04')).toHaveClass('seu-col')
    expect(getByText('Test Col 04')).toHaveClass('seu-col-pull-4')
  })

  test('push ', () => {
    const { getByText } = render(Comp05)

    expect(getByText('Test Col 05')).toHaveClass('seu-col')
    expect(getByText('Test Col 05')).toHaveClass('seu-col-push-5')
  })

  test('xs ', () => {
    const { getByText } = render(Comp06)

    expect(getByText('Test Col 06')).toHaveClass('seu-col')
    expect(getByText('Test Col 06')).toHaveClass('seu-col-xs-6')
  })

  test('sm ', () => {
    const { getByText } = render(Comp07)

    expect(getByText('Test Col 07')).toHaveClass('seu-col')
    expect(getByText('Test Col 07')).toHaveClass('seu-col-sm-7')
  })

  test('md ', () => {
    const { getByText } = render(Comp08)

    expect(getByText('Test Col 08')).toHaveClass('seu-col')
    expect(getByText('Test Col 08')).toHaveClass('seu-col-md-8')
  })

  test('lg ', () => {
    const { getByText } = render(Comp09)

    expect(getByText('Test Col 09')).toHaveClass('seu-col')
    expect(getByText('Test Col 09')).toHaveClass('seu-col-lg-9')
  })

  test('xl ', () => {
    const { getByText } = render(Comp10)

    expect(getByText('Test Col 10')).toHaveClass('seu-col')
    expect(getByText('Test Col 10')).toHaveClass('seu-col-xl-10')
  })

  test('all media query ', () => {
    const { getByText } = render(Comp11)

    expect(getByText('Test Col 11')).toHaveClass('seu-col')
    expect(getByText('Test Col 11')).toHaveClass('seu-col-xs-6')
    expect(getByText('Test Col 11')).toHaveClass('seu-col-sm-7')
    expect(getByText('Test Col 11')).toHaveClass('seu-col-md-8')
    expect(getByText('Test Col 11')).toHaveClass('seu-col-lg-9')
    expect(getByText('Test Col 11')).toHaveClass('seu-col-xl-10')
  })

  test('column gutter ', () => {
    const { getByText } = render(Comp12)

    expect(getByText('Test Col 12')).toHaveClass('seu-col')
    expect(getByText('Test Col 12')).toHaveStyle('padding-left:6px')
    expect(getByText('Test Col 12')).toHaveStyle('padding-right:6px')
  })
})
