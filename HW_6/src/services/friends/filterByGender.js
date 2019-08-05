'use strict'

export function filterFrendsListByGender(data, param) {

    let filteredList = data.filter(function(friend) {
        return friend.sex == param;
    })

    const friendsList = document.getElementById('friendsList');
    const friendsListFragment = document.createDocumentFragment();

    for(let i = 0; i < filteredList.length; i++) {
        
        let friendData = document.createElement('LI');
        friendData.innerText = filteredList[i].first_name + ' ' + filteredList[i].last_name;
        friendsListFragment.appendChild(friendData);
    }
    friendsList.innerText = '';
    friendsList.appendChild(friendsListFragment);
}