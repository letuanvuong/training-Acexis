const panels = document.querySelectorAll('.panel')

function addOpen(){
  this.classList.toggle('open')
}

panels.forEach(panel => panel.addEventListener('click', addOpen))

function addActive(e) {
  console.log(e.propertyName);
  if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active')
  }
}

panels.forEach(panel => panel.addEventListener('transitionend', addActive))