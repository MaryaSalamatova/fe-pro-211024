async function fetchPlanets() {
  const response = await fetch('https://swapi.dev/api/planets/');
  const data = await response.json();
  const planetCards = document.getElementById('planetCards');
  planetCards.innerHTML = '';

  data.results.forEach((planet, index) => {
    const card = document.createElement('div');
    card.style.border = '1px solid black';
    card.style.margin = '10px';
    card.style.padding = '10px';

    card.innerHTML = 
      `<h3>${planet.name}</h3>
      <p>Клімат: ${planet.climate}</p>
      <p>Населення: ${planet.population}</p>
      <button class="details-btn" data-id="${index + 1}">Деталі</button>`
    ;

    planetCards.appendChild(card);
  });

  const detailButtons = document.querySelectorAll('.details-btn');
  detailButtons.forEach(button => {
    button.addEventListener('click', event => {
      const planetId = event.target.dataset.id;
      fetchPlanetDetails(planetId);
    });
  });
}

async function fetchPlanetDetails(planetId) {
  const response = await fetch (`https://swapi.dev/api/planets/${planetId}/`);
  const planet = await response.json();
  const details = document.getElementById('planetDetails');

  details.innerHTML = 
    `<h3>Деталі планети: ${planet.name}</h3>
    <p>Клімат: ${planet.climate}</p>
    <p>Населення: ${planet.population}</p>
    <p>Діаметр: ${planet.diameter}</p>
    <p>Гравітація: ${planet.gravity}</p>
    <h4>Жителі:</h4>`
  ;

  if (planet.residents.length) {
    planet.residents.forEach(async residentUrl => {
      const residentResponse = await fetch(residentUrl);
      const residentData = await residentResponse.json();
      const residentLink = document.createElement('a');
      residentLink.href = residentUrl;
      residentLink.textContent = residentData.name;
      residentLink.style.display = 'block';
      details.appendChild(residentLink);
    });
  } else {
    details.innerHTML += '<p>Немає жителів.</p>';
  }
}

// Ініціалізація
document.getElementById('fetchPlanets').addEventListener('click', fetchPlanets);