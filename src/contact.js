import {homeInit} from './homeInit.js';
import {menuInit} from './menu.js';
import {createNav} from './createNav.js';

const contactInit = () => {
    const content = document.getElementById('content');
    
        //empty content
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }

        const nav = createNav();

        const contactItem = document.createElement('div');
        contactItem.classList.add('menuItem');
        contactItem.textContent = 'This will be the useful contact info';

        content.appendChild(nav);
        content.appendChild(contactItem);

    document.querySelector('.homeLink').addEventListener('click', function() {
        homeInit();
    });
    document.querySelector('.menuLink').addEventListener('click', function() {
        menuInit();
    });
}

export {contactInit};