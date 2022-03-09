import {menuInit} from './menu.js';
import {contactInit} from './contact.js';
import {createNav} from './createNav.js';

import boba from './boba-icon-removebg.png';

const homeInit = () => {
    const homePage = document.getElementById('content');

        //empty content
        while (homePage.firstChild) {
            homePage.removeChild(homePage.firstChild);
        }

        const nav = createNav();
    
        const headline = document.createElement('div');
        headline.classList.add('headline');

        const bobaIcon1 = new Image();
        bobaIcon1.src = boba;
        bobaIcon1.classList.add('bobaIcon');

        const bobaIcon2 = new Image();
        bobaIcon2.src = boba;
        bobaIcon2.classList.add('bobaIcon');

        const storeName = document.createElement('h1');
        storeName.textContent = 'Communi-tea';
        storeName.classList.add('storeName');

        headline.appendChild(bobaIcon1);
        headline.appendChild(storeName);
        headline.appendChild(bobaIcon2);

        const descrWrapper = document.createElement('div');
        descrWrapper.classList.add('descrWrapper');

            const description = document.createElement('div');
            description.classList.add('description');

                const restrDescr = document.createElement('p');
                restrDescr.classList.add('restrDescr');
                restrDescr.textContent = 'A great selection of tasty tea, sweets, and plenty of board games to play while you enjoy. Groups and events welcome. We are all about communi-tea!'

                const quote = document.createElement('p');
                quote.textContent = "If you're looking for a great time where you can have your favorite drinks and desserts while playing games with friends, you have to try Communi-tea!";
                quote.classList.add('quote');

                const quoteAuthor = document.createElement('p');
                quoteAuthor.textContent = '- Satisfied Customer';
                quoteAuthor.classList.add('quoteAuthor');

                description.appendChild(restrDescr);
                description.appendChild(quote);
                description.appendChild(quoteAuthor);

            const hours = document.createElement('div');
            hours.textContent = 'Store hours';
            hours.classList.add('hours');

                const monday = document.createElement('p');
                monday.textContent = 'Mon: 9 am - 9 pm';
                monday.classList = 'monday';

                const tuesday = document.createElement('p');
                tuesday.textContent = 'Tue: 9 am - 9 pm';
                tuesday.classList = 'tuesday';

                const wednesday = document.createElement('p');
                wednesday.textContent = 'Wed: 9 am - 9 pm';
                wednesday.classList = 'wednesday';

                const thursday = document.createElement('p');
                thursday.textContent = 'Thur: 9 am - 9 pm';
                thursday.classList = 'thursday';

                const friday = document.createElement('p');
                friday.textContent = 'Fri: 9 am - 9 pm';
                friday.classList = 'friday';

                const saturday = document.createElement('p');
                saturday.textContent = 'Sat: 10 am - 8 pm';
                saturday.classList = 'saturday';

                const sunday = document.createElement('p');
                sunday.textContent = 'Sun: 12 pm - 6 pm';
                sunday.classList = 'sunday';

                hours.appendChild(monday);
                hours.appendChild(tuesday);
                hours.appendChild(wednesday);
                hours.appendChild(thursday);
                hours.appendChild(friday);
                hours.appendChild(saturday);
                hours.appendChild(sunday);                

            const location = document.createElement('div');
            location.textContent = 'Store location';
            location.classList.add('location');

                const address = document.createElement('p');
                address.textContent = '123 Communitea Lane, Dallas, TX';
                address.classList.add('address');

                location.appendChild(address);

        descrWrapper.appendChild(description);
        descrWrapper.appendChild(hours);
        descrWrapper.appendChild(location);

        const footer = document.createElement('footer');
        footer.textContent = 'This assignment is part of ';
        footer.classList.add('footer');
        const odinLink = document.createElement('a');
        odinLink.textContent = 'The Odin Project';
        odinLink.setAttribute('href', 'https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/restaurant-page');
        footer.appendChild(odinLink);

    homePage.appendChild(nav);
    homePage.appendChild(headline);
    homePage.appendChild(descrWrapper);
    homePage.appendChild(footer);


   
    document.querySelector('.menuLink').addEventListener('click', function() {
        menuInit();
    });
    document.querySelector('.contactLink').addEventListener('click', function() {
        contactInit();
    });
}

export  {homeInit};