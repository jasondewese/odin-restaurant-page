import {menuInit} from './menu.js';
import {contactInit} from './contact.js';

const homeInit = () => {
    const initialPage = document.getElementById('content');

        //empty content
        while (initialPage.firstChild) {
            initialPage.removeChild(initialPage.firstChild);
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
    
        const headline = document.createElement('h1');
        headline.textContent = 'This is the restaurant name!';
        headline.classList.add('headline');

        const description = document.createElement('p');
        description.textContent = 'This restaurant is awesome! They have all of my favorite menu items at a low price, and the service is great!';
        description.classList.add('description');

    initialPage.appendChild(nav);
    initialPage.appendChild(headline);
    initialPage.appendChild(description);

   
    document.querySelector('.menuLink').addEventListener('click', function() {
        menuInit();
    });
    document.querySelector('.contactLink').addEventListener('click', function() {
        contactInit();
    });
}

export  {homeInit};