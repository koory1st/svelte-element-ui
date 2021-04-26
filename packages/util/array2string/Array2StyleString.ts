/** @format */
import {noPxStyleList} from './Util'

/**
 * array2StyleString
 * [] => null
 * ["color:red", "font-size:10px"] => "color:red;font-size:10px;"
 * ["color:red;", "font-size:10px;"] => "color:red;font-size:10px;"
 * [["color", "red"],["font-size", "10px"]] => "color:red;font-size:10px;"
 * [["color", "red"],["font-size", 10]] => "color:red;font-size:10px;"
 * [["color", "red", false],["font-size", 10, false]] => null
 * [["color", "red", true],["font-size", 10, true]] => "color:red;font-size:10px;"
 * [["color", undefined],["font-size", 10]] => "font-size:10px;"
 * [["color", null],["font-size", 10]] => "font-size:10px;"
 * [["color", ""],["font-size", 10]] => "font-size:10px;"
 * [["font-size", 0]] => "font-size:0;"
 * [["color", ""],["z-index", 10]] => "z-index:10;"
 *
 * @param input
 */
export default function array2StyleString(
  input: (
    | string
    | string[]
    | [string, number]
    | [string, null]
    | [string, undefined]
    | [string, string, boolean]
    | [string, number, boolean]
    | [string, []]
  )[],
): string | null {
  if (!input || input.length === 0) {
    return null
  }

  let rt = ''
  for (const item of input) {
    // ["color:red", "font-size:10px"]
    if (typeof item === 'string') {
      rt += item
      if (!rt.endsWith(';')) {
        rt += ';'
      }
      continue
    }

    // [["color", "red", false],["font-size", 10, false]]
    if (item.length > 2 && !item[2]) {
      continue
    }

    const key = item[0]
    let value = item[1]

    // [["color", undefined],["font-size", 10]] => "font-size:10px;"
    // [["color", null],["font-size", 10]] => "font-size:10px;"
    if (value === undefined || value === null) {
      continue
    }

    // [["color", ""],["font-size", 10]] => "font-size:10px;"
    if (typeof value === 'string' && !value) {
      continue
    }

    // [["color", "red"],["font-size", 10]]
    if (typeof value === 'number' && value && !noPxStyleList.includes(key)) {
      value = value + 'px'
    }
    rt += key + ':' + value

    if (!rt.endsWith(';')) {
      rt += ';'
    }
  }

  return rt ? rt : null
}
