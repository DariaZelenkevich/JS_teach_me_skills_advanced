'use strict'

import {createFriendsList} from './friensList';
import {createFemaleFriendsButton} from './femaleFriendsButton';
import {createMaleFriendsButton} from './maleFriendsButton';
import {createFriendsInOrderButton} from './friendsInOrderButton';
import {createFriendsInReversedOrderButton} from './friendsInReversedOrderButton';
import {createFriendsAgeRange} from './friendsAgeRange';

export function createFriendsPage(data) {

    const{response:{items: frendsArr}} = data;
    const  parentElement = document.getElementById('friends');

    createFriendsList(frendsArr, parentElement);
    createFemaleFriendsButton(frendsArr, parentElement);
    createMaleFriendsButton(frendsArr, parentElement);
    createFriendsInOrderButton(frendsArr,parentElement);
    createFriendsInReversedOrderButton(frendsArr, parentElement);
    createFriendsAgeRange(frendsArr, parentElement);
}