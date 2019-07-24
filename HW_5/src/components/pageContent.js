import {filterFrendsListByGender} from '../services/index';
import {filterFrendsListByAlphabet} from '../services/index';
import {filterFrendsListByAge} from '../services/index';


const createPage = function(data) {

    const{response:{items: frendsArr}} = data;

    const friendsList = document.createElement('UL');
    friendsList.setAttribute('id', 'friendsList');

    for(let i = 0; i < frendsArr.length; i++) {
        let friendData = document.createElement('LI');
        friendData.innerText = frendsArr[i].first_name + ' ' + frendsArr[i].last_name;
        friendsList.appendChild(friendData);
    }
    document.body.appendChild(friendsList);

    const maleFriendsButton = document.createElement('BUTTON');
    maleFriendsButton.innerText = 'M';
    maleFriendsButton.addEventListener('click', function(event) {
        event.preventDefault();
        filterFrendsListByGender(frendsArr, 2);
    });

    const femaleFriendsButton = document.createElement('BUTTON');
    femaleFriendsButton.innerText = 'Ж';
    femaleFriendsButton.addEventListener('click', function(event) {
        event.preventDefault();
        filterFrendsListByGender(frendsArr, 1);
    });

    document.body.appendChild(maleFriendsButton);
    document.body.appendChild(femaleFriendsButton);


    const friendsInOrderButton = document.createElement('BUTTON');
    friendsInOrderButton.innerText = 'A';
    friendsInOrderButton.addEventListener('click', function(event) {
        event.preventDefault();
        filterFrendsListByAlphabet(frendsArr, 'in_order');
    });

    const friendsInReversedOrderButton = document.createElement('BUTTON');
    friendsInReversedOrderButton.innerText = 'Я';
    friendsInReversedOrderButton.addEventListener('click', function(event) {
        event.preventDefault();
        filterFrendsListByAlphabet(frendsArr, 'revers');
    });

    document.body.appendChild(friendsInOrderButton);
    document.body.appendChild(friendsInReversedOrderButton);

    const friendsAgeRange = document.createElement('DIV');
    friendsAgeRange.innerHTML = '<input type="range" min="5" max="99" id="rangeLine" value="0"><div id="years">5</div>';
    document.body.appendChild(friendsAgeRange);

    const rangeLine = document.getElementById('rangeLine');
    rangeLine.addEventListener('input', function() {
        filterFrendsListByAge(frendsArr);
    });


}

export default createPage;