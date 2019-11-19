// Get out Element
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')

const toggle = player.querySelector('.toggle') 
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')

// Built out functions
function tongglePlay() {
  const method = video.paused ? 'play' : 'pause'
  video[method]()
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
  video[this.name] = this.value
  console.log(this.value)
}
// hook up the event listners
video.addEventListener('click', tongglePlay)
toggle.addEventListener('click',tongglePlay)

skipButtons.forEach(button => button.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))