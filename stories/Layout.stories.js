import LayoutStory from './Layout.storybook.svelte'
import { withKnobs, number, optionsKnob } from '@storybook/addon-knobs'

export default { title: 'Layout', decorators: [withKnobs] }

export const Layout = () => ({
  Component: LayoutStory,
  props: {
    rowGutter: number('row gutter', 1, { max: 100, min: 0, step: 1 }),
    rowType: optionsKnob('row type', { normal: '', flex: 'flex' }, '', {
      display: 'inline-radio',
    }),
    rowJustify: optionsKnob(
      'row justify(only avalible when type is flex above)',
      {
        start: 'start',
        end: 'end',
        center: 'center',
        'space-around': 'space-around',
        'space-between': 'space-between',
      },
      '',
      {
        display: 'inline-radio',
      },
    ),
    rowAlign: optionsKnob(
      'row align(only avalible when type is flex above)',
      {
        top: 'top',
        middle: 'middle',
        bottom: 'bottom',
      },
      '',
      {
        display: 'inline-radio',
      },
    ),
    colSpan: number('col span', 1, { range: true, max: 24, min: 0, step: 1 }),
  },
})
