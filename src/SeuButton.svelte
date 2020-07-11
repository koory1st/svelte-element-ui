<script>
  export let type = 'default';
  export let size;
  export let icon = '';
  export let nativeType = 'button';
  export let disabled;
  export let loading;
  export let plain;
  export let autofocus;
  export let round;
  export let circle;

  let classStr;
  $: buttonDisabled = disabled;
  $: buttonSize = size;
  $: {
    classStr = 'seu-button';
    classStr += type ? ` seu-button--${type}` : '';
    classStr += buttonSize ? ` seu-button--${buttonSize}` : '';
    classStr += buttonDisabled ? ' is-disabled' : '';
    classStr += loading ? ' is-loading' : '';
    classStr += plain ? ' is-plain' : '';
    classStr += round ? ' is-round' : '';
    classStr += circle ? ' is-circle' : '';
  }
</script>

<button class={classStr} {autofocus} type={nativeType} on:click>
  {#if loading}
    <i class="seu-icon-loading" />
  {/if}

  {#if icon && !loading}
    <i class={icon} />
  {/if}

  <slot />
</button>
