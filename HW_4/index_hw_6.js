'use strict'
fetch('https://api.vk.com/method/friends.get?fields=nickname&v=5.52&access_token=a47bd03213c864014a569558b856c9eaac961fad20aa940d70e7c6ce4b288310cd9ef24971bd8597b7945')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const {response: {items: friendsArr}} = data;
        createFrendsList(friendsArr);
    })
    .catch(function(error) {
        console.log(error);
    }
)

function createFrendsList(friendsArr) {

    const friendsList = document.createElement('UL');

    for(let i = 0; i < friendsArr.length; i++) {
        let friendData = document.createElement('LI');
        friendData.innerText = friendsArr[i].first_name + ' ' + friendsArr[i].last_name;
        friendsList.appendChild(friendData);
    }
    document.body.appendChild(friendsList);
}
