'use strict'

import {filterFrendsListByGender} from '../../services/friends/filterByGender';

export function createMaleFriendsButton(frendsArr, parentElement) {

    const maleFriendsButton = document.createElement('BUTTON');
    maleFriendsButton.innerText = 'M';
    maleFriendsButton.addEventListener('click', function(event) {
        event.preventDefault();
        filterFrendsListByGender(frendsArr, 2);
    });

    parentElement.appendChild(maleFriendsButton);
}