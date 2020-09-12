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
    type: optionsKnob(
      'type',
      {
        default: 'default',
        primary: 'primary',
        success: 'success',
        warning: 'warning',
        danger: 'danger',
        info: 'info',
      },
      'default',
      {
        display: 'inline-radio',
      },
    ),
    underline: boolean('underline', true),
    disabled: boolean('disabled', false),
    href: text('href', 'https://koory1st.github.io/svelte-element-ui'),
    icon: text('icon', 'seu-icon-search'),
  },
})
