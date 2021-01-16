export function boolNull(value: boolean | null): boolean | null {
  if (value) {
    return true
  }
  return null
}
