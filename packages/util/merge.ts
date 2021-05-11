export default function (target, ...rest) {
  for (let i = 0, j = rest.length; i < j; i++) {
    let source = rest[i] || {}
    for (let prop in source) {
      if (source.hasOwnProperty(prop)) {
        let value = source[prop]
        if (value !== undefined) {
          target[prop] = value
        }
      }
    }
  }

  return target
}
