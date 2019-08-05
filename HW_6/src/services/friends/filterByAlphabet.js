'use strict'

export function filterFrendsListByAlphabet(data, param) {
    let filteredList = JSON.parse(JSON.stringify(data));

    if(param == 'in_order') {

        filteredList = filteredList.sort(function (a, b) {
            if (a.first_name > b.first_name) {
              return 1;
            }
            if (a.first_name < b.first_name) {
              return -1;
            }
            return 0;
        });
    } else {
        filteredList = filteredList.sort(function (a, b) {
            if (a.first_name > b.first_name) {
              return 1;
            }
            if (a.first_name < b.first_name) {
              return -1;
            }
            return 0;
        }).reverse(); 
    }

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