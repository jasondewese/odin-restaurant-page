import {homeInit} from './homeInit.js';
import {contactInit} from './contact.js';
import {createNav} from './createNav.js';

import croffleImage from './Croffle.jpg';
import sweeTeaImage from './Swee-tea.jpg';
import uniTeaImage from './Uni-tea.jpg';

const menuInit = () => {
    const content = document.getElementById('content');
    
        //empty content
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }

        const nav = createNav();

        const menuWrapper = document.createElement('div');
        menuWrapper.classList.add('menuWrapper');

            const drinksWrapper = document.createElement('div');
            drinksWrapper.classList.add('drinksWrapper');

                const drinksLabel = document.createElement('div');
                drinksLabel.classList.add('drinksLabel');
                drinksLabel.textContent = 'Drinks';

                const uniTea = document.createElement('div');
                uniTea.classList.add('drink', 'uniTea');
                uniTea.textContent = 'uni-tea';

                    const uniTeaIcon = new Image();
                    uniTeaIcon.src = uniTeaImage;

                    const uniTeaDescr = document.createElement('p');
                    uniTeaDescr.textContent = 'A boba flight. Strawberry, peach, passionfruit, and blueberry tea.';

                    uniTea.appendChild(uniTeaIcon);
                    uniTea.appendChild(uniTeaDescr);

                const sweeTea = document.createElement('div');
                sweeTea.classList.add('drink', 'sweeTea');
                sweeTea.textContent = 'swee-tea';

                    const sweeTeaIcon = new Image();
                    sweeTeaIcon.src = sweeTeaImage;

                    const sweeTeaDescr = document.createElement('p');
                    sweeTeaDescr.textContent = "You're my swee-tea pie!";

                    sweeTea.appendChild(sweeTeaIcon);
                    sweeTea.appendChild(sweeTeaDescr);

            drinksWrapper.appendChild(drinksLabel);
            drinksWrapper.appendChild(uniTea);
            drinksWrapper.appendChild(sweeTea);

            const dessertWrapper = document.createElement('div');
            dessertWrapper.classList.add('dessertWrapper');

                const dessertLabel = document.createElement('div');
                dessertLabel.textContent = 'Dessert';
                dessertLabel.classList.add('dessertList');

                const croffle = document.createElement('div');
                croffle.textContent = 'croffle';
                croffle.classList.add('dessert', 'croffle');

                    const croffleIcon = new Image();
                    croffleIcon.src = croffleImage;

                    const croffleDescr = document.createElement('p');
                    croffleDescr.textContent = "Strawberry and cream croffle - It's a waffle. It's a croissant. It's your dream come true!";

                    croffle.appendChild(croffleIcon);
                    croffle.appendChild(croffleDescr);

            dessertWrapper.appendChild(dessertLabel);
            dessertWrapper.appendChild(croffle);

        menuWrapper.appendChild(drinksWrapper);
        menuWrapper.appendChild(dessertWrapper);

    content.appendChild(nav);
    content.appendChild(menuWrapper);

        /*
        const croffleImage = new Image();
        croffleImage.src = Croffle;
        menuItem.appendChild(croffleImage);
        */

        /*
        Menu
            Drinks
                Uni-tea - boba flight. Strawberry tea, peach tea, passionfruit tea, blueberry tea
                Swee-tea - You're my swee-tea pie!

            Dessert
                Strawberry and cream croffle - It's a waffle. It's a croissant. It's your dream come true!
            

        */

    document.querySelector('.homeLink').addEventListener('click', function() {
        homeInit();
    });
    document.querySelector('.contactLink').addEventListener('click', function() {
        contactInit();
    });
}

export {menuInit};