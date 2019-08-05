'use strict'

import {getPossibleFriendsDataFromAPI} from '../fetch';
import {fillPossibleFriendsPage} from '../../components/possible-friends/possibleFriendsPage';

export function scrollPossibleFriends() {

    const step = document.getElementById('possible-friends_link');

    const main = document.getElementsByTagName('main')[0];

    if(main.id === 'possible-friends') {
        
        if (main.scrollTop + main.clientHeight >= document.body.scrollHeight) {
           
            step.dataset.step = +step.dataset.step + 20;
            getPossibleFriendsDataFromAPI(+step.dataset.step).then(data => fillPossibleFriendsPage(data)).catch(error => console.log(error));
        }

    }

}