const addBtn = document.querySelector('#add-btn');
const list = document.querySelector('#items-list');
inputField = document.querySelector('#input-field');

addBtn.addEventListener('click', (e) => {
  let inputValue = inputField.value;
  if (inputValue.length > 0) {
    const listItem = document.createElement('div');
    listItem.className = 'flex justify-between items-center my-4';

    const itemText = document.createElement('p');
    itemText.textContent = inputValue;

    const delBtn = document.createElement('button');
    delBtn.className = 'p-3 rounded-md text-white bg-red-500';
    delBtn.textContent = 'Supprimer';
    delBtn.addEventListener('click', () => {
      listItem.remove();
    });

    listItem.appendChild(itemText);
    listItem.appendChild(delBtn);
    list.appendChild(listItem);

    inputField.value = '';
  }
});
