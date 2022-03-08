
/* const pageInit = () => {
    const element = document.createElement('div');

    // use your function!
    element.textContent = 'Hello, Restaurant Page!';
    return element;
} */


const testFunc = () => {
    const initialPage = document.querySelector('#content');
    
    const headline = document.createElement('h1');
    headline.textContent = 'This is the restaurant name!';
    headline.classList.add('headline');

    const description = document.createElement('p');
    description.textContent = 'This restaurant is awesome! They have all of my favorite menu items at a low price, and the service is great!';
    description.classList.add('description');

    initialPage.appendChild(headline);
    initialPage.appendChild(description);
}

export  {testFunc};