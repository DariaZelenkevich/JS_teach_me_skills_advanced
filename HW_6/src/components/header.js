import navMenu from '../templates/navMenu.html';

export function createHeader() {

    const header = document.createElement('HEADER');
    header.innerHTML = navMenu;
    document.body.appendChild(header);
}

