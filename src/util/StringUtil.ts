export function styleStr2Array(style: string): Array<string> {
  return str2Array(style, ';')
}
export function styleArray2Str(arr: Array<string>): string {
  const rt = array2Str(arr, ';')
  return rt ? rt + ';' : null
}
export function classStr2Array(classStr: string): Array<string> {
  return str2Array(classStr, ' ')
}
export function classArray2Str(arr: Array<string>): string {
  return array2Str(arr, ' ')
}
function str2Array(style: string, splitStr: string): Array<string> {
  if (!style) {
    return []
  }

  return style.split(splitStr)
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
