import '@testing-library/jest-dom/extend-expect'

export function testElementAndResult(element) {
  if (!element) {
    throw new Error('Element is empty!')
  }

  expect(element).toMatchSnapshot()
}
