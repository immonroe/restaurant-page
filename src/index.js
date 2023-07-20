import './style.css';

document.addEventListener('DOMContentLoaded', function () {
    const contentDiv = document.getElementById('content');

    // Create and append the background image container
    const backgroundImageContainer = document.createElement('div');
    backgroundImageContainer.classList.add('background-image');
    contentDiv.appendChild(backgroundImageContainer);

    // Create and append the navigation
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const navItems = ['Home', 'Menu', 'Contact'];

    navItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    contentDiv.appendChild(nav);

    // Create and append the main content
    const main = document.createElement('main');
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    const h3 = document.createElement('h3');
    h3.textContent = 'About';
    mainContent.appendChild(h3);

    const description = document.createElement('div');
    description.classList.add('description');
    description.textContent = 'Only those with an "in" can eat at The Inn!';
    mainContent.appendChild(description);

    main.appendChild(mainContent);
    contentDiv.appendChild(main);

    // Create and append the footer
    const footer = document.createElement('footer');
    const span = document.createElement('span');
    span.textContent = 'Created by Immanuel Monroe';
    footer.appendChild(span);
    contentDiv.appendChild(footer);
});