'use strict'

import {createHeader} from './header';
import {followTheLink} from '../services/followTheLink';

export function init() {

    createHeader();

    const navMenu = document.getElementById('nav_menu');
    
    navMenu.addEventListener('click', function(event) {
    
        if(event.target.dataset.link) {
    
            followTheLink(event.target.dataset.link);
        }
    })
}

