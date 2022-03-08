import {homeInit} from './homeInit.js';
import {menuInit} from './menu.js';

const contactInit = () => {
    const content = document.getElementById('content');
    
    //empty content
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    const nav = document.createElement('nav');
        nav.classList.add('nav');

            const navList = document.createElement('ul');
            navList.classList.add('navList');

            const homeTab = document.createElement('li');
            homeTab.classList.add('navListItem');
                const homeLink = document.createElement('button');
                homeLink.classList.add('navLink', 'homeLink');
                homeLink.textContent = 'Home';
            homeTab.appendChild(homeLink);

            const menuTab = document.createElement('li');
            menuTab.classList.add('navListItem');
                const menuLink = document.createElement('button');
                menuLink.classList.add('navLink', 'menuLink');
                menuLink.textContent = 'Menu';
            menuTab.appendChild(menuLink);

            const contactTab = document.createElement('li');
            contactTab.classList.add('navListItem');
                const contactLink = document.createElement('button');
                contactLink.classList.add('navLink', 'contactLink');
                contactLink.textContent = 'Contact';
            contactTab.appendChild(contactLink);

        nav.appendChild(navList);
        navList.appendChild(homeTab);
        navList.appendChild(menuTab);
        navList.appendChild(contactTab);

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