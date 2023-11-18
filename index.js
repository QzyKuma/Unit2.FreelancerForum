const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];
const careers = ['Web Developer', 'Graphic Designer', 'Writer', 'Video Editor'];

let freelancers = [
  { name: 'Alice', occupation: 'Web Developer', startingPrice: 50 },
  { name: 'Bob', occupation: 'Graphic Designer', startingPrice: 40 },
  { name: 'Charlie', occupation: 'Writer', startingPrice: 25 },
  { name: 'Eva', occupation: 'Video Editor', startingPrice: 55 },
];

function displayFreelancers() {
  const freelancersContainer = document.getElementById('freelancersContainer');

  freelancersContainer.innerHTML = '';

  const table = document.createElement('table');

  const headerRow = document.createElement('tr');
  const headers = ['Name', 'Occupation', 'Starting Price'];

  for (const headerText of headers) {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
  }

  table.appendChild(headerRow);

  for (const freelancer of freelancers) {
    const row = document.createElement('tr');

    for (const key in freelancer) {
      const cell = document.createElement('td');
      cell.textContent = freelancer[key];
      row.appendChild(cell);
    }

    table.appendChild(row);
  }

  freelancersContainer.appendChild(table);
}

function addRandomFreelancer() {
  if (freelancers.length < 20) {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomCareer = careers[Math.floor(Math.random() * careers.length)];
    const randomStartingPrice = Math.floor(Math.random() * 100) + 30;

    
    freelancers.push({
      name: randomName,
      occupation: randomCareer,
      startingPrice: randomStartingPrice
    });

    
    displayFreelancers();
  }
}


displayFreelancers();


setInterval(addRandomFreelancer, 5000);
