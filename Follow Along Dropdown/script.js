const triggers = document.querySelectorAll('.cool > li')
const backgrounds = document.querySelector('.dropdownBackground')
const nav = document.querySelector('.top')


function handlEnter () {
  this.classList.add('trigger-enter')
  setTimeout(() =>this.classList.contains('trigger-enter') &&
    this.classList.add('trigger-enter-active'), 150)
  backgrounds.classList.add('open')

  const dropdown = this.querySelector('.dropdown')
  const dropdownCoords = dropdown.getBoundingClientRect()
  const navCoords = nav.getBoundingClientRect()

  const coords = {
    width: dropdownCoords.width,
    height: dropdownCoords.height,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left
  }

  backgrounds.style.setProperty('width', `${coords.width}px`)
  backgrounds.style.setProperty('height', `${coords.height}px`)
  backgrounds.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`)
}

function handLeave () {
  this.classList.remove('trigger-enter', 'trigger-enter-active')
  backgrounds.classList.remove('open')
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handlEnter))
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handLeave))  