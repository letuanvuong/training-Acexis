const divs = document.querySelectorAll('div')


function logText(e) {
  console.log(this.classList.value)
}

divs.forEach(div => div.addEventListener('click', logText, {
  //capture: if = true se sap xep tu ngoai vao trong va nguoc lai neu bang false
  capture: false,
  // chi dc click 1 lan === removeEventListener
  once: true
}))