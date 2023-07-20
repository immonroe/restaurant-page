import './style.css';

document.addEventListener('DOMContentLoaded', function () {
  const contentDiv = document.getElementById('content');

  // Create and append other elements dynamically
  const h2 = document.createElement('h2');
  h2.textContent = 'Tabs';
  contentDiv.appendChild(h2);

  const p = document.createElement('p');
  p.textContent = 'Click on the buttons inside the tabbed menu:';
  contentDiv.appendChild(p);

  const tabDiv = document.createElement('div');
  tabDiv.classList.add('tab');
  contentDiv.appendChild(tabDiv);

  const cities = ['London', 'Paris', 'Tokyo'];

  cities.forEach(city => {
    const button = document.createElement('button');
    button.textContent = city;
    button.classList.add('tablinks');
    button.addEventListener('click', (event) => openCity(event, city));
    tabDiv.appendChild(button);
  });

  const londonDiv = createTabContent('London', 'London is the capital city of England.');
  const parisDiv = createTabContent('Paris', 'Paris is the capital of France.');
  const tokyoDiv = createTabContent('Tokyo', 'Tokyo is the capital of Japan.');

  contentDiv.appendChild(londonDiv);
  contentDiv.appendChild(parisDiv);
  contentDiv.appendChild(tokyoDiv);
});

function createTabContent(city, description) {
  const tabcontentDiv = document.createElement('div');
  tabcontentDiv.id = city;
  tabcontentDiv.classList.add('tabcontent');

  const h3 = document.createElement('h3');
  h3.textContent = city;
  tabcontentDiv.appendChild(h3);

  const p = document.createElement('p');
  p.textContent = description;
  tabcontentDiv.appendChild(p);

  return tabcontentDiv;
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
