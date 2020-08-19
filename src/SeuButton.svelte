<script type="ts">
  import SeuButtonStyle from './SeuButtonStyle.svelte';
  import { get } from 'svelte/store';
  export let type = 'default';
  export let size;
  export let icon = '';
  export let nativeType = 'button';
  export let disabled;
  export let loading;
  export let plain;
  export let round;
  export let circle;

  let classList = ['seu-button'];

  $: {
    if (disabled) {
      classList.push('is-disabled');
    }

    if (plain) {
      classList.push('is-plain');
    }

    classList.push(`seu-button--${type || 'default'}`);

    if (round) {
      classList.push('is-round');
    }

    if (circle) {
      classList.push('is-circle');
    }

    if (size) {
      classList.push(`seu-button--${size}`);
    }
  }
</script>

<button class={classList.join(' ')} type={nativeType} disabled={disabled || loading} on:click>
  {#if loading}
    <i class="seu-icon-loading" />
  {/if}

  {#if icon && !loading}
    <i class={icon} />
  {/if}
  <span>
    <slot />
  </span>
</button>
