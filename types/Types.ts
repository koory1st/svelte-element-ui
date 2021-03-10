export interface IClickEvent {
  click?: (arg?: any) => void
}
export interface IChangeEvent {
  change?: (arg?: any) => void
}
export interface IWidthProp {
  width?: string
}

export interface ITypeProp {
  type?: string
}

export interface ISizeProp {
  size?: string
}

export interface IIconProp {
  icon?: string
}

export interface INativeTypeProp {
  nativeType?: string
}

export interface IDisabledProp {
  disabled?: boolean
}

export interface ILoadingProp {
  loading?: boolean
}

export interface IPlainProp {
  plain?: boolean
}

export interface IRoundProp {
  round?: boolean
}

export interface ICircleProp {
  circle?: boolean
}

export interface IGroupProp {
  group?: Array<string | number | boolean>
}

export interface IValueProp {
  value?: boolean | string | number
}

export interface ILabelProp {
  label?: string | number | boolean
}

export interface IIndeterminateProp {
  indeterminate?: boolean
}

export interface INameProp {
  name?: string
}

export interface IBorderProp {
  border?: boolean
}

export interface ICheckedValueProp {
  checkedValue?: string | number | boolean
}

export interface IUnCheckedValueProp {
  uncheckedValue?: string | number | boolean
}

export interface IOptionsProp {
  options?: Array<string | { label: string; value: string | number | boolean; disabled?: boolean }>
}

export interface ISpanProp {
  span?: number
}

export interface IOffsetProp {
  offset?: number
}

export interface IPullProp {
  pull?: number
}

export interface IPushProp {
  push?: number
}

export interface IXsProp {
  xs?: number
}

export interface ISmProp {
  sm?: number
}

export interface IMdProp {
  md?: number
}

export interface ILgProp {
  lg?: number
}

export interface IXlProp {
  xl?: number
}

export interface IDirectionProp {
  direction?: string
}

export interface IHeightProp {
  height?: string
}

export interface IUnderlineProp {
  underline?: boolean
}

export interface IHrefProp {
  href?: string
}

export interface IGutterProp {
  gutter?: number
}

export interface IJustifyProp {
  justify?: string
}

export interface IAlignProp {
  align?: string
}

export interface IModeProp {
  mode?: string
}

export interface IDefaultActiveProp {
  defaultActive?: string
}

export interface IDefaultOpenedsProp {
  defaultOpeneds?: string[]
}

export interface IUniqueOpenedProp {
  uniqueOpened?: boolean
}

export interface IMenuTriggerProp {
  menuTrigger?: string
}

export interface ICollapseProp {
  collapse?: boolean
}

export interface IBackgroundColorProp {
  backgroundColor?: string
}

export interface ITextColorProp {
  textColor?: string
}

export interface IActiveTextColorProp {
  activeTextColor?: string
}

export interface ICollapseTransitionProp {
  collapseTransition?: boolean
}

export interface IPopperZIndexProp {
  popperZIndex?: number
}

export interface IIndexProp {
  index?: String
}

export interface IShowTimeoutProp {
  showTimeout?: number
}

export interface IHideTimeoutProp {
  hideTimeout?: number
}

export interface IPopperClassProp {
  popperClass?: string
}

export interface IPopperAppendToBodyProp {
  popperAppendToBody?: boolean
}

export interface ITitleProp {
  title?: String
}
