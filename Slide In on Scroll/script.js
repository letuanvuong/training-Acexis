const sliderImgs = document.querySelectorAll('.slide-in')


function checkLocationImage (e) {
  sliderImgs.forEach(sliderImg => {
    //khi scroll den vi tri cua img
    const sliderImageAt = (window.scrollY + window.innerHeight) - sliderImg.height / 2
    console.log(sliderImageAt)
    // tinh offSet Top cua img
    const offSetImg = sliderImg.offsetTop
    const isHaftShown = sliderImageAt > offSetImg
    const isNotScrolledPast = window.scrollY < offSetImg

    if (isHaftShown && isNotScrolledPast) {
      sliderImg.classList.add('active')
    }
    else {
      sliderImg.classList.remove('active')
    }
  })
}

function debounce (func, wait = 10, immediate = true) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

window.addEventListener('scroll', debounce(checkLocationImage))