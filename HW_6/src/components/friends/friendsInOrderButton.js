'use strict'

import {filterFrendsListByAlphabet} from '../../services/friends/filterByAlphabet';

export function createFriendsInOrderButton(frendsArr, parentElement) {

    const friendsInOrderButton = document.createElement('BUTTON');
    friendsInOrderButton.innerText = 'A';
    friendsInOrderButton.addEventListener('click', function(event) {
        event.preventDefault();
        filterFrendsListByAlphabet(frendsArr, 'in_order');
    });

    parentElement.appendChild(friendsInOrderButton);
}