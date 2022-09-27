let count = 0
let uncheckedCount = 0
const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  let text = prompt('Enter a new item: ')
  let component = createComponent(text)
  list.appendChild(component)
  count++;
  uncheckedCount++
  itemCountSpan.innerText = count
  uncheckedCountSpan.innerText = uncheckedCount
}

function createComponent(text){
  const div = document.createElement('div')
  div.className = 'todo-container'
  div.setAttribute('checker', false)
  let checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.className = 'todo-checkbox'
  checkbox.setAttribute('onClick','setCount(this)')
  div.appendChild(checkbox)
  let itemName = document.createElement('p')
  itemName.innerText = text
  div.appendChild(itemName)
  let btn = document.createElement('button')
  btn.className = 'todo-delete'
  btn.innerText = 'Delete'
  btn.setAttribute('onClick', 'del(this)')
  div.appendChild(btn)
  return div
}

function setCount(ele){
  
  if(ele.checked){
    uncheckedCount--
    ele.parentNode.checker = true
  }else{
    uncheckedCount++
    ele.parentNode.checker = false
  }
  uncheckedCountSpan.innerText = uncheckedCount
}


function del(ele){
  if(!(ele.parentNode.checker)){
    uncheckedCount--
  }
  ele.parentNode.remove()
  count--
  itemCountSpan.innerText = count
  uncheckedCountSpan.innerText = uncheckedCount
}