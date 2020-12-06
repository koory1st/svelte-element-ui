import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/svelte'

import Comp01 from './SeuButtonGroup.test.01.svelte'
// import Comp02 from './SeuAside.test.02.svelte'

describe('Test of Button Group 01', () => {
  test('main class', () => {
    const { getByText } = render(Comp01)
    expect(getByText('Test SeuButtonGroup 01')).toHaveClass('seu-button-group')
  })
})
