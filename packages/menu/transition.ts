/**
 * transition used in svelte use
 * inspiring by svelte-collapse, vue and element-ui
 * @param el
 * @param parameters
 */
export default function transition(el: HTMLElement, parameters: any) {
  const defaultParams = {
    open: true,
    name: '',
    mode: 'out-in',
  }

  parameters = Object.assign(defaultParams, parameters)
  el.style.overflow = 'hidden'

  const noop = () => {}
  let transitionEndResolve: (value?: unknown) => void = noop
  let transitionEndReject: (value?: unknown) => void = noop

  const transitionEndHandler = () => {
    transitionEndResolve()
    transitionEndResolve = noop
    transitionEndReject = noop
  }

  let transitioning = false

  el.addEventListener('transitionend', transitionEndHandler, false)

  async function asyncTransitionEnd() {
    transitioning = false
    return new Promise((resolve, reject) => {
      transitionEndResolve = resolve
      transitionEndReject = reject
    })
  }

  function $beforeEnter() {
    transitioning = true
    parameters.beforeEnter && parameters.beforeEnter(el)
  }

  function $doEnter() {
    parameters.doEnter && parameters.doEnter(el)
  }

  function $afterEnter() {
    parameters.afterEnter && parameters.afterEnter(el)
  }

  function $beforeLeave() {
    parameters.beforeLeave && parameters.beforeLeave(el)
  }

  function $doLeave() {
    parameters.doLeave && parameters.doLeave(el)
  }

  async function $enter() {
    // beforeEnter
    $beforeEnter()

    setTimeout(async () => {
      // doEnter
      $doEnter()

      try {
        await asyncTransitionEnd()
        // afterEnter
        $afterEnter()
      } catch (err) {
        // interrupted by a leave transition
      }
    })
  }

  async function $leave() {
    if (transitioning) {
      transitionEndReject()
      return
    }

    $beforeLeave()

    setTimeout(async () => {
      $doLeave()
    })
  }

  function update(newParams) {
    newParams.open ? $enter() : $leave()
  }

  function destroy() {
    el.removeEventListener('transitionend', transitionEndHandler)
  }

  return { update, destroy }
}
