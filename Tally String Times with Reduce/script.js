const timeNodes = Array.from(document.querySelectorAll('[data-time]'))

console.log(timeNodes)

const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat)
    return mins * 60 + secs
    console.log(mins, secs)
  })
  .reduce((total, vidSeconds) => total + vidSeconds)

let secondLeft = seconds
let hour = Math.floor(secondLeft / 3600)

secondLeft = secondLeft % 3600