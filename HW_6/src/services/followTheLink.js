'use strict'
import '../../styles/common.css';
import {getFriendsDataFromAPI} from './fetch';
import {getPossibleFriendsDataFromAPI} from './fetch';
import {createFriendsPage} from '../components/friends/friendsPage';
import {fillPossibleFriendsPage} from '../components/possible-friends/possibleFriendsPage';
import {scrollPossibleFriends} from './possible-friends/endlessScrollPossibleFriends';

export function followTheLink(link) {

    window.location.hash = link;

    const main = document.body.getElementsByTagName('MAIN')[0];

    if(main != null) {

        main.remove();
    }

    const linkContent = document.createElement('MAIN');
    document.body.appendChild(linkContent);

    switch(link){

        case 'friends':
                linkContent.id = 'friends';
                getFriendsDataFromAPI.then(data => data.clone().json()).then(data => createFriendsPage(data)).catch(error => console.log(error));
            break;
        case 'possible-friends':
            linkContent.id = 'possible-friends';
            linkContent.className = 'possible-friends';
            const step = document.getElementById('possible-friends_link');
            getPossibleFriendsDataFromAPI(+step.dataset.step).then(data => fillPossibleFriendsPage(data)).catch(error => console.log(error));
            window.addEventListener('scroll', scrollPossibleFriends);
            break;   
    }
}