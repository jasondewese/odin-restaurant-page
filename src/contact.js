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

        const contactLabel = document.createElement('h1');
        contactLabel.textContent = 'Contact Us';
        contactLabel.classList.add('contactLabel');

        const contactWrapper = document.createElement('div');
        contactWrapper.classList.add('contactWrapper');
        

            const contactInfo = document.createElement('div');
            contactInfo.classList.add('contactInfo');
            
                const contactHeading = document.createElement('p');
                contactHeading.textContent = "Contact Information:";
                contactHeading.classList.add('contactHeading');

                const phone = document.createElement('p');
                phone.textContent = 'Phone: 123-456-7890';

                const email = document.createElement('p');
                email.textContent = "Email: communi-tea@email.address";

                const address = document.createElement('p');
                address.textContent = 'Address: 123 Communitea Lane, Dallas, TX';

            contactInfo.appendChild(contactHeading);
            contactInfo.appendChild(phone);
            contactInfo.appendChild(email);
            contactInfo.appendChild(address);

            contactWrapper.appendChild(contactInfo);
        

        const footer = document.createElement('footer');
        footer.textContent = 'This assignment is part of ';
        footer.classList.add('footer');
        const odinLink = document.createElement('a');
        odinLink.textContent = 'The Odin Project';
        odinLink.setAttribute('href', 'https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/restaurant-page');
        footer.appendChild(odinLink);


        content.appendChild(nav);
        content.appendChild(contactLabel);
        content.appendChild(contactWrapper);
        content.appendChild(footer);

    document.querySelector('.homeLink').addEventListener('click', function() {
        homeInit();
    });
    document.querySelector('.menuLink').addEventListener('click', function() {
        menuInit();
    });
}

export {contactInit};