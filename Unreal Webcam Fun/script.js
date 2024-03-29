const video = document.querySelector('.player')
const canvas = document.querySelector('.photo')
const ctx = canvas.getContext('2d')
const strip = document.querySelector('.strip')
const snap = document.querySelector('.snap')


function getVideo () {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch(err => {
      alert('Dont show')
    });
}

function paintToCanvas() {
  const width = video.videoWidth
  const height = video.videoHeight

  canvas.width = width
  canvas.height = height


  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height)
    let pixels = ctx.getImageData(0, 0, width, height)
    // pixels = redEffect(pixels)
    pixels = rgbColor(pixels)
    ctx.putImageData(pixels, 0, 0)
  }, 16)
}

function takePhoto() {
  //played the sound
  snap.currentTime =  0
  snap.play()

  //take the data out of the canvas
  const data = canvas.toDataURL('image.jpeg')
  const link = document.createElement('a')
  link.href = data
  link.setAttribute('download', 'handsome')
  link.textContent = 'Download Image'
  link.innerHTML = `<img src="${data}" alt = "img screen">`
  strip.insertBefore(link, strip.firstChild)
}

function redEffect(pixels) {
  for(let i = 0; i<pixels.data.length; i+=4){
    pixels.data[i + 0] = pixels.data[i + 0] + 100 
    pixels.data[i + 1] = pixels.data[i + 1] - 50 
    pixels.data[i + 2] = pixels.data[i + 2] * .5 
  }
  return pixels
}

function rgbColor(pixels) {
  for(let i = 0; i<pixels.data.length; i+=4){
    pixels.data[i - 150] = pixels.data[i + 0]
    pixels.data[i + 100] = pixels.data[i + 1]
    pixels.data[i - 150] = pixels.data[i + 2]
  }
  return pixels
}

getVideo()
video.addEventListener('canplay', paintToCanvas)