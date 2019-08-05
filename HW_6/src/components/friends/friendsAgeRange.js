'use strict'

import {filterFrendsListByAge} from '../../services/friends/filterByAge';
import range from '../../templates/range.html';

export function createFriendsAgeRange(frendsArr, parentElement) {


    const friendsAgeRange = document.createElement('DIV');
    friendsAgeRange.innerHTML = range;

    parentElement.appendChild(friendsAgeRange);

    const rangeLine = document.getElementById('rangeLine');
    rangeLine.addEventListener('input', function() {
        filterFrendsListByAge(frendsArr);
    });
}