/**
 * getDisabled
 *
 * only used in group mode
 *
 * @param disabledProp
 * @param groupFlg
 * @param group
 * @param max
 * @param min
 * @param innerChecked
 */
export function getDisabled(
  disabledProp: boolean,
  groupFlg: boolean,
  group: Array<string | number>,
  maxInput: string | number | null,
  minInput: string | number | null,
  innerChecked: boolean,
): boolean {
  if (!groupFlg) {
    return disabledProp
  }

  const max = Number(maxInput)
  const min = Number(minInput)

  if (max && group.length >= max && !innerChecked) {
    return true
  }

  if (min && group.length <= min && innerChecked) {
    return true
  }
  return disabledProp
}
