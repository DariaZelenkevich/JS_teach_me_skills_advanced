'use strict'

export function fillPossibleFriendItem(friend, parentElement) {

    const possibleFriendItem = document.createElement('DIV');
    const possibleFriendItemPhotoWrapper = document.createElement('DIV');
    const possibleFriendItemPhoto = document.createElement('IMG');
    possibleFriendItemPhoto.src = friend.photo_100;
    possibleFriendItemPhotoWrapper.appendChild(possibleFriendItemPhoto);
    const possibleFriendItemName = document.createElement('H2');
    possibleFriendItemName.innerText = friend.first_name + ' ' + friend.last_name;

    const possibleFriendItemBDate = document.createElement('P');

    if(friend.bdate) {

        possibleFriendItemBDate.innerText = 'День рождения: ' + friend.bdate;
    }

    const possibleFriendItemCity = document.createElement('P');

    if(friend.city) {

        possibleFriendItemCity.innerText = 'Город: ' + friend.city.title;
    }

    possibleFriendItem.appendChild(possibleFriendItemPhotoWrapper);
    possibleFriendItem.appendChild(possibleFriendItemName);
    
    if(possibleFriendItemBDate.innerText.length > 0) {
        possibleFriendItem.appendChild(possibleFriendItemBDate);
    }

    if(possibleFriendItemCity.innerText.length > 0) {
        possibleFriendItem.appendChild(possibleFriendItemCity);
    }

    parentElement.appendChild(possibleFriendItem);
}