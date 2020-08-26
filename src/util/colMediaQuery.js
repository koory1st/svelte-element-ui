const types = ['xs', 'sm', 'md', 'lg', 'xl']
const breakpoint = [767, 768, 992, 1200, 1920]

let rt = ''

breakpoint.forEach((value, index) => {
  let breakpointValue = value
  let compareType = 'min-width'
  if (index === 0) {
    compareType = 'max-width'
  }

  rt += `
  @media only screen and (${compareType}: ${breakpointValue}px) {`

  for (let i = 1; i <= 24; i++) {
    rt += `
  .seu-col-${types[index]}-${i} {
    width: ${((i * 100) / 24).toFixed(5)}%;
  }`
  }
  rt += '}'
})

console.log(rt)
