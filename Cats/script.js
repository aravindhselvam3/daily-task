// Function to make API request and get a random cat image
function getRandomCat() {
  fetch('https://cataas.com/cat?json=true')
    .then(response => response.json())
    .then(data => {
      displayCat(data);
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

// Function to display the cat image on the webpage
function displayCat(cat) {
  const catContainer = document.getElementById('cat-container');
  catContainer.innerHTML = ''; // Clear previous content

  const catTile = document.createElement('div');
  catTile.className = 'cat-tile';
  const catImage = document.createElement('img');
  catImage.src = `https://cataas.com${cat.url}`;
  catTile.appendChild(catImage);
  catContainer.appendChild(catTile);
}

// Event listener for the refresh button
document.getElementById('refresh-btn').addEventListener('click', getRandomCat);

// Initial loading of a random cat
getRandomCat();
