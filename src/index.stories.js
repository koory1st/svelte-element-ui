import MyButton from './Button.svelte';

export default { title: 'MyButton' };

export const withText = () => ({
  Component: MyButton,
  props: {
    buttonText: 'some text',
  },
});
