import SeuRadioStory from './SeuRadio.storybook.svelte'
import { withKnobs, optionsKnob, text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

export default { title: 'SeuRadio', decorators: [withKnobs] }

export const seuRadioStory = () => ({
  Component: SeuRadioStory,
  on: {
    change: action('be changed'),
  },
  props: {
    value: optionsKnob(
      'value',
      {
        1: '1',
        2: '2',
      },
      '1',
      {
        display: 'inline-radio',
      },
    ),
    label1: text('label1', '1'),
    label2: text('label2', '2'),
    border: boolean('border', false),
    size: optionsKnob(
      'size',
      {
        default: 'default',
        medium: 'medium',
        small: 'small',
        mini: 'mini',
      },
      '',
      {
        display: 'inline-radio',
      },
    ),
    disabled: boolean('disabled', false),
    groupValue: optionsKnob(
      'group value',
      {
        1: '1',
        2: '2',
        3: '3',
      },
      '1',
      {
        display: 'inline-radio',
      },
    ),
    groupDisabled: boolean('group disabled', false),
  },
})
