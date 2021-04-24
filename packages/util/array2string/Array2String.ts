/** @format */

import {ArgumentError} from './ErrorUtil'
/**
 * array2string
 *
 *  [] => null
 *  ["abc"] => "abc"
 *  ["abc","efg"] => "abc efg"
 *  ["abc","", "efg"] => "abc efg"
 *  ["abc", ["efg"]] => "abc efg"
 *  ["abc", ["efg", false]] => "abc"
 *  ["abc", ["efg", true]] => "abc efg"
 *
 * @param arrayInput
 */
export default function array2string(arrayInput: (string | string[] | [string, boolean])[]): string | null {
  if (!arrayInput || arrayInput.length === 0) {
    return null
  }
  let rtValue = ''

  for (const item of arrayInput) {
    if (typeof item === 'string') {
      if (item) {
        if (rtValue) {
          rtValue += ' '
        }
        rtValue += item
      }
      continue
    }

    if (item instanceof Array) {
      const classString = item[0]
      if (typeof classString !== 'string') {
        throw new ArgumentError('Error type of 1st argument.')
      }
      if (item.length === 1) {
        if (classString) {
          if (rtValue) {
            rtValue += ' '
          }
          rtValue += classString
        }
        continue
      }

      if (classString && item[1]) {
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
