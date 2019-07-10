'use strict';

const input = document.getElementById('input');
const button = document.getElementById('button');
const list = document.getElementById('list');

const createListItem = function() {

    let item = document.createElement('li');

    let itemText = document.createElement('span');
    itemText.innerText = input.value;
    item.appendChild(itemText);

    let itemRemovingButton = document.createElement('button');
    itemRemovingButton.innerText = 'Удалить'; 
    itemRemovingButton.classList.add('item-removing-button');
    item.appendChild(itemRemovingButton);

    let itemChangingButton = document.createElement('button');
    itemChangingButton.innerText = 'Редактировать';
    itemChangingButton.classList.add('item-changing-button');
    item.appendChild(itemChangingButton);

    list.appendChild(item);
    input.value = '';
}



list.addEventListener('click', function(event) {

    let target = event.target;
    let targetItem = target.parentNode;

    if(target.classList.contains('item-removing-button')) {
        
        targetItem.remove();
    } else if (target.classList.contains('item-changing-button')) {

        let itemToChange = targetItem.firstChild;

        if(targetItem.hasAttribute('changing')){

            itemToChange.innerText = input.value;
            targetItem.removeAttribute('changing');
            input.value = '';
            button.removeAttribute('disabled');
        } else {

            input.value = itemToChange.innerText;
            targetItem.setAttribute('changing', 'changing');
            button.setAttribute('disabled', true);
        }

    } else {

        return;
    }
});

button.addEventListener('click', createListItem);