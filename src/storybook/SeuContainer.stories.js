import SeuContainerStory from './SeuContainer.storybook.svelte';
import { withKnobs, select } from '@storybook/addon-knobs';

export default { title: 'SeuContainer', decorators: [withKnobs] };

const directionOptions = {
  vertical: 'vertical',
  horizontal: 'horizontal',
};

export const seuContainer = () => ({
  Component: SeuContainerStory,
  props: {
    direction: select(
      'direction',
      {
        vertical: 'vertical',
        horizontal: 'horizontal',
      },
      '',
      'groupId-1'
    ),
  },
});
