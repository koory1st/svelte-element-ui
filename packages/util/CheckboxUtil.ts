import { SeuPropValidateError } from './ErrorUtil'
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
  group: Array<string | number | boolean>,
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

export function getInnerCheckedValue(
  isGroup: boolean,
  checkedValue: string | number | boolean | null | undefined,
  label: string | number | boolean | null | undefined,
): boolean | string | number | null {
  // not in group
  if (!isGroup) {
    if (checkedValue !== null && checkedValue !== undefined) {
      return checkedValue
    }
    return null
  }

  // in group
  if (checkedValue !== null && checkedValue !== undefined) {
    return checkedValue
  }

  if (label !== null && label !== undefined) {
    return label
  }
  return null
}

export function getValueByInnerChecked(
  innerChecked: boolean,
  innerCheckedValue: boolean | string | number | null,
  uncheckedValue: string | number | boolean | null | undefined,
): boolean | string | number {
  if (innerChecked) {
    if (innerCheckedValue === null) {
      return true
    }
    return innerCheckedValue
  } else {
    if (uncheckedValue === null || uncheckedValue === undefined) {
      return false
    }
    return uncheckedValue
  }
}

export function validateCheckedValue(
  checkedValue: string | number | boolean | null | undefined,
  uncheckedValue: string | number | boolean | null | undefined,
) {
  if (checkedValue === null) {
    return
  }
  if (checkedValue === undefined) {
    return
  }
  if (uncheckedValue === null) {
    return
  }
  if (uncheckedValue === undefined) {
    return
  }

  if (checkedValue === uncheckedValue) {
    throw new SeuPropValidateError('checkedValue is the same with uncheckedValue')
  }
}

export function getGroupByInnerChecked(
  isGroup: boolean,
  innerChecked: boolean,
  group: Array<string | number | boolean>,
  innerCheckedValue: boolean | string | number,
): Array<string | number | boolean> {
  if (!isGroup) {
    return group
  }

  if (innerCheckedValue === null) {
    return group
  }

  const groupSet = new Set(group)
  if (innerChecked) {
    groupSet.add(innerCheckedValue)
    return Array.from(groupSet)
  }

  groupSet.delete(innerCheckedValue)
  return Array.from(groupSet)
}

export function getInnerCheckedByValue(
  isGroup: boolean,
  value: boolean | string | number,
  group: Array<string | number | boolean>,
  innerCheckedValue: boolean | string | number | null,
): boolean {
  if (!isGroup) {
    if (innerCheckedValue === null) {
      return Boolean(value)
    } else {
      return value === innerCheckedValue
    }
  } else {
    const groupSet = new Set(group)
    return groupSet.has(innerCheckedValue)
  }
}
