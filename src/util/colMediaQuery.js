const types = ['xs', 'sm', 'md', 'lg', 'xl']
const breakpoint = [767, 768, 992, 1200, 1920]

let rt = ''

breakpoint.forEach((value, index) => {
  let breakpointValue = value
  let compareType = 'min-width'
  if (index === 0) {
    compareType = 'max-width'
  }

  rt += `@media only screen and (${compareType}: ${breakpointValue}px) {`
  rt += `.seu-col-${types[index]}-0 {display: none;}`

  for (let i = 1; i <= 24; i++) {
    const width = +((i * 100) / 24).toFixed(5)
    rt += `.seu-col-${types[index]}-${i} {width: ${width}%;}`
    rt += `.seu-col-${types[index]}-offset-${i} {margin-left: ${width}%;}`
    rt += `.seu-col-${types[index]}-pull-${i} {position: relative; right:${width}%;}`
    rt += `.seu-col-${types[index]}-push-${i} {position: relative; left:${width}%;}`
  }
  rt += '}'
})

console.log(rt)