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

export function getClass(settingList: Array<string | [string, boolean?]>): string | null {
  if (!settingList || settingList.length == 0) {
    return null
  }
  let rtValue = ''

  for (let setting of settingList) {
    if (typeof setting === 'string') {
      if (setting) {
        if (rtValue) {
          rtValue += ' '
        }
        rtValue += setting
      }
      continue
    }

    if (setting instanceof Array) {
      const classString = setting[0]
      if (typeof classString !== 'string') {
        throw new Error('Error type of 1st argument.')
      }
      if (setting.length === 1) {
        if (classString) {
          if (rtValue) {
            rtValue += ' '
          }
          rtValue += classString
        }
        continue
      }

      if (classString && setting[1]) {
        if (rtValue) {
          rtValue += ' '
        }
        rtValue += classString
        continue
      }
    }
  }

  return rtValue
}
