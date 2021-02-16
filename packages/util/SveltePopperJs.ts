/**
 * origin code
 * https://github.com/bryanmylee/svelte-popperjs
 */
import { createPopper } from '@popperjs/core/dist/esm'

function createPopperActions(initOptions: any) {
  var popperInstance = null
  var referenceNode: HTMLElement
  var contentNode: HTMLElement
  var options = initOptions
  var initPopper = function () {
    if (referenceNode && contentNode) {
      popperInstance = createPopper(referenceNode, contentNode, options)
    }
  }
  var deinitPopper = function () {
    if (popperInstance) {
      popperInstance.destroy()
      popperInstance = null
    }
  }
  const referenceAction = function (node: HTMLElement) {
    referenceNode = node
    initPopper()
    return {
      destroy: function () {
        deinitPopper()
      },
    }
  }
  var contentAction = function (node: HTMLElement, initOptions?: any) {
    contentNode = node
    if (initOptions) {
      options = Object.assign(options, initOptions)
    }
    initPopper()
    return {
      update: function (newOptions: any) {
        options = newOptions
        if (popperInstance && options) {
          popperInstance.setOptions(options)
        }
      },
      destroy: function () {
        deinitPopper()
      },
    }
  }
  return {
    referenceAction,
    contentAction,
    getInstance: function () {
      return popperInstance
    },
  }
}

export { createPopperActions }
