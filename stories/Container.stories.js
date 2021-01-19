import SeuContainerStory from './Container.storybook.svelte'
import { withKnobs, optionsKnob, text } from '@storybook/addon-knobs'

export default { title: 'SeuContainer', decorators: [withKnobs] }

export const seuContainer = () => ({
  Component: SeuContainerStory,
  props: {
    containerDirection: optionsKnob(
      'Container Direction',
      { horizontal: 'horizontal', vertical: 'vertical' },
      '',
      {
        display: 'inline-radio',
      },
      'Container Direction',
    ),
    headerHeight: text('Header Height', '60px', 'Main'),
    asideWidth: text('Aside Width', '200px', 'Main'),
    footerHeight: text('Footer Height', '60px', 'Main'),
  },
})
