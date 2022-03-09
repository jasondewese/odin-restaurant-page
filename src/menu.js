import {homeInit} from './homeInit.js';
import {contactInit} from './contact.js';
import {createNav} from './createNav.js';

import Croffle from './Croffle.jpg';
import Sweetea from './Swee-tea.jpg';
import Unitea from './Uni-tea.jpg';

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

        const croffleImage = new Image();
        croffleImage.src = Croffle;
        menuItem.appendChild(croffleImage);

    document.querySelector('.homeLink').addEventListener('click', function() {
        homeInit();
    });
    document.querySelector('.contactLink').addEventListener('click', function() {
        contactInit();
    });
}

export {menuInit};