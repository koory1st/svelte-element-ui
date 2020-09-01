import SeuButtonStory from './SeuButton.storybook.svelte'
import { withKnobs, optionsKnob, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
export default { title: 'SeuButton', decorators: [withKnobs] }

export const SeuButton = () => ({
  Component: SeuButtonStory,
  on: {
    click: action('be clicked'),
  },
  props: {
    type: optionsKnob(
      'Type',
      {
        default: '',
        primary: 'primary',
        success: 'success',
        warning: 'warning',
        danger: 'danger',
        info: 'info',
        text: 'text',
      },
      '',
      {
        display: 'inline-radio',
      },
    ),
    size: optionsKnob(
      'Size',
      {
        default: '',
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
    plain: boolean('plain', false),
    round: boolean('round', false),
    circle: boolean('circle', false),
    loading: boolean('loading', false),
  },
})
