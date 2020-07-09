import { writable } from 'svelte/store';

export const theme = writable({
  // demo: 560px, 768px, 1024px at base 16
  breakpoints: ['35rem', '48rem', '64rem'],
  color: {
    primary: 'dodgerblue',
    secondary: 'papayawhip',
    grey: '#eee',
  },
  space: {
    s: '0.5rem',
    m: '1rem',
    l: '2rem',
  },
});
