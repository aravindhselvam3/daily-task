
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


function displayCat(cat) {
  const catContainer = document.getElementById('cat-container');
  catContainer.innerHTML = ''; 

  const catTile = document.createElement('div');
  catTile.className = 'cat-tile';
  const catImage = document.createElement('img');
  catImage.src = `https://cataas.com${cat.url}`;
  catTile.appendChild(catImage);
  catContainer.appendChild(catTile);
}


document.getElementById('refresh-btn').addEventListener('click', getRandomCat);


getRandomCat();
