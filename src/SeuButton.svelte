<script>
  import { get } from 'svelte/store';
  import { css, styled } from 'SvelteStyledSystem';
  import { theme } from './theme.js';
  import buttonStyle from './SeuButtonStyle';
  export let type = 'default';
  export let size;
  export let icon = '';
  export let nativeType = 'button';
  export let disabled;
  export let loading;
  export let plain;
  export let round;
  export let circle;

  let styles = {};

  $: {
    console.log('buttonStyle', buttonStyle);
    if (type === 'default' && !plain && !disabled) {
      styles = { ...buttonStyle.default.notPlain.notDisabled };
    }

    if (type === 'default' && !plain && disabled) {
      styles = { ...buttonStyle.default.notPlain.disabled };
    }
    if (type === 'default' && plain && !disabled) {
      styles = { ...buttonStyle.default.plain.notDisabled };
    }

    if (type === 'default' && plain && disabled) {
      styles = { ...buttonStyle.default.plain.disabled };
    }
  }
</script>

<button class="seu-button" type={nativeType} use:styled={[styles, $theme]} disabled={disabled || loading} on:click>
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
