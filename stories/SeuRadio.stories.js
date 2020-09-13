import SeuRadioStory from './SeuRadio.storybook.svelte'
import { withKnobs, optionsKnob, text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

export default { title: 'SeuRadio', decorators: [withKnobs] }

export const seuLinkStory = () => ({
  Component: SeuRadioStory,
  on: {
    click: action('be clicked'),
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
    size: optionsKnob(
      'size',
      {
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
  },
})
