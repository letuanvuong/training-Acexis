const nav = document.querySelector('#main')
const topOfNav = nav.offsetTop


function fixedNav() {
  if(window.scrollY >= topOfNav){
    document.body.classList.add('pin-header')
  }else{
    document.body.classList.remove('pin-header')
  }
}

window.addEventListener('scroll', fixedNav)