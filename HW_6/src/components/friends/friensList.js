'use strict'

export function createFriendsList(frendsArr, parentElement) {

    const friendsList = document.createElement('UL');
    friendsList.setAttribute('id', 'friendsList');

    for(let i = 0; i < frendsArr.length; i++) {

        let friendData = document.createElement('LI');
        friendData.innerText = frendsArr[i].first_name + ' ' + frendsArr[i].last_name;
        friendsList.appendChild(friendData);
    }

    parentElement.appendChild(friendsList);
}