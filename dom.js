let addItemBtn = document.querySelector('.btn');
let itemList = document.querySelector('#item-list');
let form = document.querySelector('#item-form');
const h1Element = document.querySelector('h1');
const itemInput = document.querySelector('#item-input');
const itemContainer = document.querySelector('.container');
const filterInput = document.querySelector('#filter'); // ✅ Get input element, not value!
let clearButton = null;
const arrayOfItems = []


// ✅ Create a new item and add it to the list
let createListItem = (e) => {
  e.preventDefault();

  let inputItem = itemInput.value.trim();
  if (inputItem === '') return;

  let newItem = document.createElement('li');
  newItem.appendChild(document.createTextNode(inputItem));

  let deleteBtn = document.createElement('button');
  deleteBtn.className = 'remove-item btn-link text-red';
  let icon = document.createElement('i');
  icon.className = 'fa-solid fa-xmark';

  deleteBtn.appendChild(icon);
  newItem.appendChild(deleteBtn);
  itemList.appendChild(newItem);

  updateClearButton();
  addItemsToLocalStorage(inputItem)
  deleteBtn.addEventListener('click',()=>{
    deleteItemsFromLocalStorage(inputItem)
  })

  clearButton.addEventListener('click',()=>{
    localStorage.removeItem('items');
  })
  
  itemInput.value = '';
};




function deleteItemsFromLocalStorage(newItem){
  let storedItems;
  if(localStorage.getItem('items') === null){
     storedItems = [];
  }
  else{
    storedItems = JSON.parse(localStorage.getItem('items'))
    let updatedItems = storedItems.filter(item => item !== newItem)
    localStorage.setItem('items',JSON.stringify(updatedItems))
  }
}
// ✅ Clear all items in the list
let clearShoppingList = () => {
  const shoppingItems = document.querySelectorAll('li');
  shoppingItems.forEach(item => item.remove());
};

function addItemsToLocalStorage(item){
  let items;
  if(localStorage.getItem('items') === null){
    items = [];
  }
  else{
    items = JSON.parse(localStorage.getItem('items'))
  }
  items.push(item)
  localStorage.setItem('items',JSON.stringify(items))
}

// ✅ Show or hide the "Clear all items" button
function updateClearButton() {
  if (itemList.children.length > 0 && !clearButton) {
    clearButton = document.createElement('button');
    clearButton.innerHTML = 'Clear all items';
    clearButton.className = 'btn-clear';
    itemContainer.appendChild(clearButton);

    clearButton.addEventListener('click', () => {
      clearShoppingList();
      updateClearButton();
    });
  } else if (itemList.children.length === 0 && clearButton) {
    clearButton.remove();
    clearButton = null;
  }
}

// ✅ Delete a single item using event delegation
itemList.addEventListener('click', (e) => {
  if (e.target.closest('.remove-item')) {
    const li = e.target.closest('li');
    if (li) li.remove();
    updateClearButton();
  }
});

// ✅ Filter items in real-time
filterInput.addEventListener('input', () => {
  const filteredItem = filterInput.value.toLowerCase();
  const liItems = Array.from(document.getElementsByTagName('li'));

  liItems.forEach(item => {
    const itemText = item.firstChild.textContent.toLowerCase();
    item.style.display = itemText.includes(filteredItem) ? 'flex' : 'none';
  });
});

// deleteBtn.addEventListener('click',()=>{

// })
// ✅ Form submission adds a new item
form.addEventListener('submit', createListItem);
// localStorage.removeItem('name')

