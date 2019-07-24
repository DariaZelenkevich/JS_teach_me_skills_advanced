'use strict'

export function filterFrendsListByAge(data) {

    let rangeLine = document.getElementById('rangeLine').value;
    let years = document.getElementById('years');
    years.innerHTML = rangeLine;

    var filteredList = data.filter(function(friend) {
        return (friend.bdate && friend.bdate.length > 7);
    })

    const friendsList = document.getElementById('friendsList');
    const friendsListFragment = document.createDocumentFragment();

    setTimeout(function(){

        for(let i = 0; i < filteredList.length; i++) {
            let birthDate = filteredList[i].bdate.split('.');
            const now = new Date();
            birthDate = new Date(birthDate.reverse());
            const age = Math.floor((now - birthDate)/(24 * 3600 * 365.25 * 1000));
            
            if(age >= years.innerText) {
    
                let friendData = document.createElement('LI');
                friendData.innerText = filteredList[i].first_name + ' ' + filteredList[i].last_name;
                friendsListFragment.appendChild(friendData);
            }
        }
        friendsList.innerText = '';
        friendsList.appendChild(friendsListFragment);
    }, 1000)
}
 
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