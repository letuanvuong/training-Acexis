const speed = document.querySelector('.speed')

const video = document.querySelector('.flex')

const bar = speed.querySelector('.speed-bar')

function  handlMove(e) {
  const y = e.pageY - this.offsetTop
  const percent = y / this.offsetHeight
  const min = .4
  const max = 4
  const height = Math.round(percent * 100) + '%'
  bar.style.height = height
}

speed.addEventListener('mousemove', handlMove)