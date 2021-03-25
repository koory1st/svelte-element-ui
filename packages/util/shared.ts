export function isDef(val: any) {
  return val !== undefined && val !== null
}
export function isKorean(text: string) {
  const reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi
  return reg.test(text)
}
