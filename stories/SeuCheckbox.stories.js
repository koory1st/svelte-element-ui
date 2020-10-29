import SeuCheckboxStory from './SeuCheckbox.storybook.svelte'
import { withKnobs, optionsKnob, text, boolean, array } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

export default { title: 'SeuCheckbox', decorators: [withKnobs] }

export const seuCheckboxStory = () => ({
  Component: SeuCheckboxStory,
  on: {
    change: action('be changed'),
  },
  props: {
    value: boolean('value', false),
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
    // groupValue: array('group value', ['1']),
    groupDisabled: boolean('group disabled', false),
  },
})
