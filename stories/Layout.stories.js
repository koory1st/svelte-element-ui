import LayoutStory from './Layout.storybook.svelte'
import { withKnobs, number, optionsKnob } from '@storybook/addon-knobs'

export default { title: 'Layout', decorators: [withKnobs] }

export const Layout = () => ({
  Component: LayoutStory,
  props: {
    rowGutter: number('row gutter', 0, { max: 100, min: 0, step: 1 }, 'Main'),
    rowType: optionsKnob(
      'row type',
      { normal: '', flex: 'flex' },
      '',
      {
        display: 'inline-radio',
      },
      'Main',
    ),
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
      'Main',
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
      'Main',
    ),
    colSpan: number('col span', 1, { range: true, max: 24, min: 0, step: 1 }, 'Main'),
    colOffset: number('col offset', 0, { range: true, max: 24, min: 0, step: 1 }, 'Main'),
    colPull: number('col pull', 0, { range: true, max: 24, min: 0, step: 1 }, 'Main'),
    colPush: number('col push', 0, { range: true, max: 24, min: 0, step: 1 }, 'Main'),
    colXs: number('col xs', 0, { range: true, max: 24, min: 0, step: 1 }, 'Media Query'),
    colSm: number('col sm', 0, { range: true, max: 24, min: 0, step: 1 }, 'Media Query'),
    colMd: number('col md', 0, { range: true, max: 24, min: 0, step: 1 }, 'Media Query'),
    colLg: number('col lg', 0, { range: true, max: 24, min: 0, step: 1 }, 'Media Query'),
    colXl: number('col xl', 0, { range: true, max: 24, min: 0, step: 1 }, 'Media Query'),
  },
})
