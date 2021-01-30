export function styleArray2Str(arr: Array<string>): string {
  const rt = array2Str(arr, ';')
  return rt ? rt + ';' : null
}
function str2Array(style: string, splitStr: string): Array<string> {
  if (!style || !style.trim()) {
    return []
  }

  return [
    ...new Set(
      style
        .split(splitStr)
        .map(s => s.trim())
        .filter(s => s),
    ),
  ]
}

function array2Str(arr: Array<string>, joinStr: string): string {
  if (!arr || !arr.length) {
    return null
  }

  // remove space in items , then remove empty item
  const rt = arr.map(s => (s ? s.replace(/\s/g, '') : null)).filter(s => s)

  if (!rt || !rt.length) {
    return null
  }
  return rt.join(joinStr)
}
