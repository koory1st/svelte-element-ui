export class SeuPropValidateError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'SeuPropValidateError'
  }
}
