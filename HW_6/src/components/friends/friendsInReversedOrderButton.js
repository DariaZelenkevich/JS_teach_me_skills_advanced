'use strict'

import {filterFrendsListByAlphabet} from '../../services/friends/filterByAlphabet';

export function createFriendsInReversedOrderButton(frendsArr, parentElement) {

    const friendsInReversedOrderButton = document.createElement('BUTTON');
    friendsInReversedOrderButton.innerText = 'Я';
    friendsInReversedOrderButton.addEventListener('click', function(event) {
        event.preventDefault();
        filterFrendsListByAlphabet(frendsArr, 'revers');
    });

    parentElement.appendChild(friendsInReversedOrderButton);
}