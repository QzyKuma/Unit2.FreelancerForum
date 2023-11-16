const Names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];
const careers = ['Web Developer', 'Graphic Designer', 'Writer', 'Video Editor'];
let freelancers = [
  { name: 'Alice', occupation: 'Web Developer', startingPrice: 50 },
  { name: 'Bob', occupation: 'Graphic Designer', startingPrice: 40 },
  { name: 'Charlie', occupation: 'writer', startingPrice: 25 },
  { name: 'eva', occupation: 'Video Editor', startingPrice: 55 },
  // Add more initial freelancers as needed
];

function makeFreelancers() {
    const freelancersContainer = document.createElement('div');
    for (const freelancer of freelancers) {
        const freelancerDiv = document.createElement('div');
  
      
        freelancerDiv.textContent = `${freelancer.name}, ${freelancer.occupation}, $${freelancer.startingPrice}`;
  
      
        freelancersContainer.appendChild(freelancerDiv);
    }
  
    document.body.appendChild(freelancersContainer);
  }

function randoFreelancers() {
    if (freelancers.length < 20) { 
        const Name = Names[Math.floor(Math.random() * Names.length)];
        const Career = careers[Math.floor(Math.random() * careers.length)];
        const StartingPrice = Math.floor(Math.random() * 100) + 30;
    
        freelancers.push({
          name: Name,
          occupation: Career,
          startingPrice: StartingPrice
        });
    
        makeFreelancers();
      }
    }

function calculateAverageStartingPrice() {
    let totalStartingPrice = 0;
    for (let i = 0; i < freelancers.length; i++) {
      totalStartingPrice += freelancers[i].startingPrice;
    }
    const averageStartingPrice = freelancers.length > 0 ? totalStartingPrice / freelancers.length : 0;
  
    return averageStartingPrice;
  }

makeFreelancers();
setInterval(randoFreelancers, 5000);
