<script>
  import { get } from 'svelte/store';
  import { css, styled } from 'svelte-styled-system';
  import { theme } from './theme.js';
  export let type = 'default';
  export let size;
  export let icon = '';
  export let nativeType = 'button';
  export let disabled;
  export let loading;
  export let plain;
  export let round;
  export let circle;

  let styles = {
    border: '1px solid #dcdfe6',
    display: 'inline-block',
    lineHeight: '1',
    whiteSpace: 'nowrap',
    '-webkit-appearance': 'none',
    textAlign: 'center',
    boxSizing: 'border-box',
    outline: 'none',
    margin: '0',
    transition: '.1s',
    fontWeight: '500',
    '-moz-user-select': 'none',
    '-webkit-user-select': 'none',
    '-ms-user-select': 'none',
    p: '12px 20px',
    fontSize: '14px',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  $: type === 'default' &&
    getColorDefault(plain, {
      mainColor: '#606266',
      mainBgColor: '#fff',
      hoverBgColor: '#409eff',
      activeBgColor: '#ecf5ff',
      mainBgColorPlain: '#c6e2ff',
      mainBorderColorPlain: '#3a8ee6',
      mainBorderColor: '#dcdfe6',
    });

  $: type === 'primary' &&
    getColorSpecial(plain, {
      mainColor: '#fff',
      mainBgColor: '#409eff',
      hoverBgColor: '#66b1ff',
      activeBgColor: '#3a8ee6',
      mainBgColorPlain: '#ecf5ff',
      mainBorderColorPlain: '#b3d8ff',
    });
  $: type === 'success' &&
    getColorSpecial(plain, {
      mainColor: '#fff',
      mainBgColor: '#67c23a',
      hoverBgColor: '#85ce61',
      activeBgColor: '#5daf34',
      mainBgColorPlain: '#f0f9eb',
      mainBorderColorPlain: '#c2e7b0',
    });
  $: type === 'info' &&
    getColorSpecial(plain, {
      mainColor: '#fff',
      mainBgColor: '#909399',
      hoverBgColor: '#a6a9ad',
      activeBgColor: '#82848a',
      mainBgColorPlain: '#f4f4f5',
      mainBorderColorPlain: '#d3d4d6',
    });
  $: type === 'warning' &&
    getColorSpecial(plain, {
      mainColor: '#fff',
      mainBgColor: '#e6a23c',
      hoverBgColor: '#ebb563',
      activeBgColor: '#cf9236',
      mainBgColorPlain: '#fdf6ec',
      mainBorderColorPlain: '#f5dab1',
    });
  $: type === 'danger' &&
    getColorSpecial(plain, {
      mainColor: '#fff',
      mainBgColor: '#f56c6c',
      hoverBgColor: '#f78989',
      activeBgColor: '#dd6161',
      mainBgColorPlain: '#fef0f0',
      mainBorderColorPlain: '#fbc4c4',
    });

  $: round && getRound();

  $: circle && getCircle();

  $: disabled;

  function getRound() {
    styles = { ...styles, borderRadius: '20px', p: '12px 23px' };
  }

  function getCircle() {
    styles = { ...styles, borderRadius: '50%', p: '12px' };
  }

  function getColorDefault(
    plain,
    { mainColor, mainBgColor, hoverBgColor, activeBgColor, mainBgColorPlain, mainBorderColorPlain, mainBorderColor },
  ) {
    const main = {
      color: mainColor,
      bg: mainBgColor,
      borderColor: mainBorderColor,
    };
    const hover = {
      color: hoverBgColor,
      bg: activeBgColor,
      borderColor: mainBgColorPlain,
    };
    const active = {
      color: mainBorderColorPlain,
      borderColor: mainBorderColorPlain,
      outline: 'none',
    };

    if (plain) {
      hover.color = hoverBgColor;
      hover.bg = mainBgColor;
      hover.borderColor = hoverBgColor;

      active.color = mainBorderColorPlain;
      active.bg = mainBgColor;
      active.borderColor = active.color;
    }

    styles = {
      ...styles,
      ...main,
      _active: active,
      _hover: hover,
      _focus: hover,
    };
  }

  function getColorSpecial(
    plain,
    { mainColor, mainBgColor, hoverBgColor, activeBgColor, mainBgColorPlain, mainBorderColorPlain },
  ) {
    const main = {
      color: mainColor,
      bg: mainBgColor,
      borderColor: mainBgColor,
    };
    const hover = {
      color: mainColor,
      bg: hoverBgColor,
      borderColor: hoverBgColor,
    };
    const active = {
      color: mainColor,
      bg: activeBgColor,
      borderColor: activeBgColor,
      outline: 'none',
    };

    if (plain) {
      main.color = mainBgColor;
      main.bg = mainBgColorPlain;
      main.borderColor = mainBorderColorPlain;

      hover.color = mainColor;
      hover.bg = mainBgColor;
      hover.borderColor = mainBgColor;

      active.color = mainColor;
      active.bg = activeBgColor;
      active.borderColor = activeBgColor;
    }

    styles = {
      ...styles,
      ...main,
      _active: active,
      _hover: hover,
      _focus: hover,
    };
  }

  $: {
  }
</script>

<button class="seu-button" type={nativeType} use:styled={[styles, $theme]} disabled={disabled || loading} on:click>
  {#if loading}
    <i class="seu-icon-loading" />
  {/if}

  {#if icon && !loading}
    <i class={icon} />
  {/if}
  <slot />
</button>
