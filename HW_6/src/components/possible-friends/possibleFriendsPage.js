'use strict'

import {fillPossibleFriendItem} from './possibleFriendItem';

export function fillPossibleFriendsPage(data) {

    const{response: {items: possibleFrendsArr}} = data;
    const  parentElement = document.getElementById('possible-friends');

    possibleFrendsArr.forEach(function(friend) {
        fillPossibleFriendItem(friend, parentElement);
    })
}