'use strict'

import {filterFrendsListByGender} from '../../services/friends/filterByGender';

export function createFemaleFriendsButton(frendsArr, parentElement) {
    const femaleFriendsButton = document.createElement('BUTTON');
    femaleFriendsButton.innerText = 'Ж';
    femaleFriendsButton.addEventListener('click', function(event) {
        event.preventDefault();
        filterFrendsListByGender(frendsArr, 1);
    });

    parentElement.appendChild(femaleFriendsButton);
}