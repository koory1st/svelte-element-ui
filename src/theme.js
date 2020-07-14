import { writable } from 'svelte/store';

export const theme = writable({
  // demo: 560px, 768px, 1024px at base 16
  breakpoints: ['768px', '992px', '1200px', '1920px'],
  w: {
    xs: '10%',
    sm: '20%',
  },
});
