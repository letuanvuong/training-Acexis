let countdown
const displayTimer = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('[data-time]')

function timer (seconds) {

  //clear any existing timer
  clearInterval(countdown)
  const now = Date.now()
  const then = now + seconds * 1000

  displayTimeLeft(seconds)
  displayEndTime(then)

  countdown = setInterval(() => {
    const secondLeft = Math.round((then - Date.now()) / 1000)
    if (secondLeft <= 0) {
      clearInterval(countdown)
      return
    }
    displayTimeLeft(secondLeft)
  }, 1000)
}

function displayTimeLeft (seconds) {
  const minutes = Math.floor(seconds / 60)
  const remenderSeconds = seconds % 60
  const display = `${minutes} : ${remenderSeconds < 10 ? '0' : ''}${remenderSeconds}`
  displayTimer.textContent = display
}

function displayEndTime (timestamp) {
  const end = new Date(timestamp)
  const hour = end.getHours()
  const minutes = end.getMinutes()
  endTime.textContent = `Be back at ${hour}:${minutes}`
}

function startTime () {
  const seconds = parseInt(this.dataset.time)
  timer(seconds)
}

buttons.forEach(button => button.addEventListener('click', startTime))

document.customForm.addEventListener('submit', function (e) {
  e.preventDefault()
  const mins = this.minutes.value
  timer(mins * 60)
  this.reset()
})