<script>
  import { get } from 'svelte/store';
  import { styled } from 'SvelteStyledSystem';
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
    // default
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

    // primary
    if (type === 'primary' && !plain && !disabled) {
      styles = { ...buttonStyle.primary.notPlain.notDisabled };
    }

    if (type === 'primary' && !plain && disabled) {
      styles = { ...buttonStyle.primary.notPlain.disabled };
    }
    if (type === 'primary' && plain && !disabled) {
      styles = { ...buttonStyle.primary.plain.notDisabled };
    }

    if (type === 'primary' && plain && disabled) {
      styles = { ...buttonStyle.primary.plain.disabled };
    }

    // success
    if (type === 'success' && !plain && !disabled) {
      styles = { ...buttonStyle.success.notPlain.notDisabled };
    }

    if (type === 'success' && !plain && disabled) {
      styles = { ...buttonStyle.success.notPlain.disabled };
    }
    if (type === 'success' && plain && !disabled) {
      styles = { ...buttonStyle.success.plain.notDisabled };
    }

    if (type === 'success' && plain && disabled) {
      styles = { ...buttonStyle.success.plain.disabled };
    }

    // info
    if (type === 'info' && !plain && !disabled) {
      styles = { ...buttonStyle.info.notPlain.notDisabled };
    }

    if (type === 'info' && !plain && disabled) {
      styles = { ...buttonStyle.info.notPlain.disabled };
    }
    if (type === 'info' && plain && !disabled) {
      styles = { ...buttonStyle.info.plain.notDisabled };
    }

    if (type === 'info' && plain && disabled) {
      styles = { ...buttonStyle.info.plain.disabled };
    }

    // warning
    if (type === 'warning' && !plain && !disabled) {
      styles = { ...buttonStyle.warning.notPlain.notDisabled };
    }

    if (type === 'warning' && !plain && disabled) {
      styles = { ...buttonStyle.warning.notPlain.disabled };
    }
    if (type === 'warning' && plain && !disabled) {
      styles = { ...buttonStyle.warning.plain.notDisabled };
    }

    if (type === 'warning' && plain && disabled) {
      styles = { ...buttonStyle.warning.plain.disabled };
    }

    // danger
    if (type === 'danger' && !plain && !disabled) {
      styles = { ...buttonStyle.danger.notPlain.notDisabled };
    }

    if (type === 'danger' && !plain && disabled) {
      styles = { ...buttonStyle.danger.notPlain.disabled };
    }
    if (type === 'danger' && plain && !disabled) {
      styles = { ...buttonStyle.danger.plain.notDisabled };
    }

    if (type === 'danger' && plain && disabled) {
      styles = { ...buttonStyle.danger.plain.disabled };
    }

    // text
    if (type === 'text' && !disabled) {
      styles = { ...buttonStyle.text.notDisabled };
    }

    if (type === 'text' && disabled) {
      styles = { ...buttonStyle.text.disabled };
    }

    if (disabled) {
      styles.cursor = 'not-allowed';
    }

    if (round) {
      styles.borderRadius = '20px';
    }

    if (circle) {
      styles.borderRadius = '50%';
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
