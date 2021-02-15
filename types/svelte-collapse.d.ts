declare module 'svelte-collapse' {
  const collapse: (
    node: HTMLElement,
    parameters: any,
  ) => {
    update?: (parameters: any) => void
    destroy?: () => void
  }

  export default collapse
}
