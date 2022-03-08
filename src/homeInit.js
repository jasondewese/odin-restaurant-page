import {menuInit} from './menu.js';
import {contactInit} from './contact.js';
import {createNav} from './createNav.js';

const homeInit = () => {
    const initialPage = document.getElementById('content');

        //empty content
        while (initialPage.firstChild) {
            initialPage.removeChild(initialPage.firstChild);
        }

        const nav = createNav();
    
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