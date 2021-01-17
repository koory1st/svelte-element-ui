export class SeuPropValidateError extends Error {
  constructor(message) {
    super(message)
    this.name = 'SeuPropValidateError'
  }
}
