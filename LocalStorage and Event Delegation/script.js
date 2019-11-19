const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.plates')
const items = []

function add(e) {
  e.preventDefault()
  const text = (this.querySelector('[name="item"]')).value
  const item = {
    text,
    done: false
  }
  items.push(item)
  populateList(items, itemsList)
  localStorage.setItem('items', JSON.stringify(items))
  this.reset()
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i)=>{
    return `
    <li>
      <label>${plate.text}</label>
    </li>
    `
  }).join('')
}

addItems.addEventListener('submit', add)