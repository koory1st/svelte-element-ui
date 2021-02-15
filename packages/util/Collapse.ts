/**
 * origin package: svelte-collapse
 */
interface Param {
  open: boolean
  direction?: string
  duration?: number
  easing?: string
}

export default function collapse(node, params: Param) {
  const defaultParams: Param = {
    open: true,
    direction: 'vertical',
    duration: 0.2,
    easing: 'ease',
  }

  params = Object.assign(defaultParams, params)

  const noop = (callback: FrameRequestCallback) => {}
  let transitionEndResolve = noop
  let transitionEndReject = noop

  const listener = node.addEventListener('transitionend', () => {
    transitionEndResolve(null)
    transitionEndResolve = noop
    transitionEndReject = noop
  })

  // convenience functions
  async function asyncTransitionEnd() {
    return new Promise((resolve, reject) => {
      transitionEndResolve = resolve
      transitionEndReject = reject
    })
  }

  async function nextFrame() {
    return new Promise(requestAnimationFrame)
  }

  function transition() {
    const st = params.direction === 'vertical' ? 'height' : 'width'
    return `${st} ${params.duration}s ${params.easing}`
  }

  // set initial styles
  node.style.overflow = 'hidden'
  node.style.transition = transition()
  if (params.direction === 'vertical') {
    node.style.height = params.open ? 'auto' : '0px'
  } else {
    node.style.width = params.open ? 'auto' : '0px'
  }

  async function enter() {
    // height is already in pixels
    // start the transition
    if (params.direction === 'vertical') {
      node.style.height = node.scrollHeight + 'px'
    } else {
      node.style.width = node.scrollWidth + 'px'
    }

    // wait for transition to end,
    // then switch back to height auto
    try {
      await asyncTransitionEnd()
      if (params.direction === 'vertical') {
        node.style.height = 'auto'
      } else {
        node.style.width = 'auto'
      }
    } catch (err) {
      // interrupted by a leave transition
    }
  }

  async function leave() {
    if (params.direction === 'vertical') {
      if (node.style.height === 'auto') {
        // temporarily turn transitions off
        node.style.transition = 'none'
        await nextFrame()

        // set height to pixels, and turn transition back on
        node.style.height = node.scrollHeight + 'px'
        node.style.transition = transition()
        await nextFrame()

        // start the transition
        node.style.height = '0px'
      } else {
        // we are interrupting an enter transition
        transitionEndReject(null)
        node.style.height = '0px'
      }
    } else {
      if (node.style.width === 'auto') {
        // temporarily turn transitions off
        node.style.transition = 'none'
        await nextFrame()

        // set height to pixels, and turn transition back on
        node.style.width = node.scrollWidth + 'px'
        node.style.transition = transition()
        await nextFrame()

        // start the transition
        node.style.width = '0px'
      } else {
        // we are interrupting an enter transition
        transitionEndReject(null)
        node.style.width = '0px'
      }
    }
  }

  function update(newParams) {
    params = Object.assign(params, newParams)
    params.open ? enter() : leave()
  }

  function destroy() {
    node.removeEventListener('transitionend', listener)
  }

  return { update, destroy }
}
