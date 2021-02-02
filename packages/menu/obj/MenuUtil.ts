import { Menu } from './Menu'
import type { Submenu } from './Submenu'
import type { MenuItem } from './MenuItem'

export function addParent(item: Submenu | MenuItem, parent: Submenu | Menu) {
  if (parent instanceof Menu) {
    // when Menu, do noting
    return
  }

  // add parent to parent list
  if (parent.parents) {
    item.parents = [...parent.parents, parent]
  } else {
    item.parents = [parent]
  }
}
