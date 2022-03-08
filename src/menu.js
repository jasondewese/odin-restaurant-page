import {homeInit} from './homeInit.js';
import {contactInit} from './contact.js';
import {createNav} from './createNav.js';

const menuInit = () => {
    const content = document.getElementById('content');
    
    //empty content
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    const nav = createNav();

    const menuItem = document.createElement('div');
    menuItem.classList.add('menuItem');
    menuItem.textContent = 'This will be the awesome menu';

    content.appendChild(nav);
    content.appendChild(menuItem);

    document.querySelector('.homeLink').addEventListener('click', function() {
        homeInit();
    });
    document.querySelector('.contactLink').addEventListener('click', function() {
        contactInit();
    });
}

export {menuInit};