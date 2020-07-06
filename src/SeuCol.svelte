<script>
  import { text } from 'svelte/internal'

  export let span = 24
  export let offset
  export let pull
  export let push
  export let gutter
  export let xs
  export let sm
  export let md
  export let lg
  export let xl

  let sizeClass = getSizeClass({ xs: xs, sm: sm, md: md, lg: lg, xl: xl })
  let positionClass = getPositionClass({
    span: span,
    offset: offset,
    pull: pull,
    push: push
  })

  function getSizeClass(sizeObj) {
    let rt = ''
    Object.keys(sizeObj).forEach(key => {
      let value = sizeObj[key]
      if (!value) {
        return
      }

      if (rt) {
        rt += ' '
      }

      if (typeof value === 'number' || typeof value === 'string') {
        rt += `seu-col-${key}-${value}`
      } else if (typeof value === 'object') {
        let props = value
        Object.keys(props).forEach(prop => {
          rt +=
            prop !== 'span'
              ? `seu-col-${key}-${prop}-${props[prop]}`
              : `seu-col-${key}-${props[prop]}`
        })
      }
    })

    return rt
  }

  function getPositionClass(positionObj) {
    let rt = ''
    Object.keys(positionObj).forEach(key => {
      let value = positionObj[key]
      if (!value) {
        return
      }

      if (rt) {
        rt += ' '
      }

      if (key !== 'span') {
        rt += `seu-col-${key}-${positionObj[key]}`
      } else {
        rt += `seu-col-${positionObj[key]}`
      }
    })

    return rt
  }
</script>

<style type="text/scss">
  @import './common/var.scss';
  @import './mixins/mixins.scss';

  [class*='seu-col-'] {
    float: left;
    box-sizing: border-box;
  }

  .seu-col-0 {
    display: none;
  }

  @for $i from 0 through 24 {
    .seu-col-#{$i} {
      width: (1 / 24 * $i * 100) * 1%;
    }

    .seu-col-offset-#{$i} {
      margin-left: (1 / 24 * $i * 100) * 1%;
    }

    .seu-col-pull-#{$i} {
      position: relative;
      right: (1 / 24 * $i * 100) * 1%;
    }

    .seu-col-push-#{$i} {
      position: relative;
      left: (1 / 24 * $i * 100) * 1%;
    }
  }

  @include res(xs) {
    .seu-col-xs-0 {
      display: none;
    }
    @for $i from 0 through 24 {
      .seu-col-xs-#{$i} {
        width: (1 / 24 * $i * 100) * 1%;
      }

      .seu-col-xs-offset-#{$i} {
        margin-left: (1 / 24 * $i * 100) * 1%;
      }

      .seu-col-xs-pull-#{$i} {
        position: relative;
        right: (1 / 24 * $i * 100) * 1%;
      }

      .seu-col-xs-push-#{$i} {
        position: relative;
        left: (1 / 24 * $i * 100) * 1%;
      }
    }
  }

  @include res(sm) {
    .seu-col-sm-0 {
      display: none;
    }
    @for $i from 0 through 24 {
      .seu-col-sm-#{$i} {
        width: (1 / 24 * $i * 100) * 1%;
      }

      .seu-col-sm-offset-#{$i} {
        margin-left: (1 / 24 * $i * 100) * 1%;
      }

      .seu-col-sm-pull-#{$i} {
        position: relative;
        right: (1 / 24 * $i * 100) * 1%;
      }

      .seu-col-sm-push-#{$i} {
        position: relative;
        left: (1 / 24 * $i * 100) * 1%;
      }
    }
  }

  @include res(md) {
    .seu-col-md-0 {
      display: none;
    }
    @for $i from 0 through 24 {
      .seu-col-md-#{$i} {
        width: (1 / 24 * $i * 100) * 1%;
      }

      .seu-col-md-offset-#{$i} {
        margin-left: (1 / 24 * $i * 100) * 1%;
      }

      .seu-col-md-pull-#{$i} {
        position: relative;
        right: (1 / 24 * $i * 100) * 1%;
      }

      .seu-col-md-push-#{$i} {
        position: relative;
        left: (1 / 24 * $i * 100) * 1%;
      }
    }
  }

  @include res(lg) {
    .seu-col-lg-0 {
      display: none;
    }
    @for $i from 0 through 24 {
      .seu-col-lg-#{$i} {
        width: (1 / 24 * $i * 100) * 1%;
      }

      .seu-col-lg-offset-#{$i} {
        margin-left: (1 / 24 * $i * 100) * 1%;
      }

      .seu-col-lg-pull-#{$i} {
        position: relative;
        right: (1 / 24 * $i * 100) * 1%;
      }

      .seu-col-lg-push-#{$i} {
        position: relative;
        left: (1 / 24 * $i * 100) * 1%;
      }
    }
  }

  @include res(xl) {
    .seu-col-xl-0 {
      display: none;
    }
    @for $i from 0 through 24 {
      .seu-col-xl-#{$i} {
        width: (1 / 24 * $i * 100) * 1%;
      }

      .seu-col-xl-offset-#{$i} {
        margin-left: (1 / 24 * $i * 100) * 1%;
      }

      .seu-col-xl-pull-#{$i} {
        position: relative;
        right: (1 / 24 * $i * 100) * 1%;
      }

      .seu-col-xl-push-#{$i} {
        position: relative;
        left: (1 / 24 * $i * 100) * 1%;
      }
    }
  }
</style>

<div class="seu-col {sizeClass} {positionClass}">
  <slot />
</div>
