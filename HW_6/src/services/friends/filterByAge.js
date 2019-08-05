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