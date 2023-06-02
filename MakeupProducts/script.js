const apiUrl = 'https://makeup-api.herokuapp.com/api/v1/products.json';

async function getMakeupProducts() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error:', error);
    return null;
  }
}

function processMakeupProducts(products) {
  const productsContainer = document.getElementById('products-container');

  productsContainer.innerHTML = '';

  products.forEach(product => {
    const { brand, name, price, image_link, product_link, description } = product;

    const productDiv = document.createElement('div');

    const brandHeading = document.createElement('h2');
    brandHeading.textContent = brand;
    productDiv.appendChild(brandHeading);

    const nameHeading = document.createElement('h3');
    nameHeading.textContent = name;
    productDiv.appendChild(nameHeading);

    const priceElement = document.createElement('p');
    priceElement.textContent = `Price: ${price}`;
    productDiv.appendChild(priceElement);

    const imageElement = document.createElement('img');
    imageElement.src = image_link;
    productDiv.appendChild(imageElement);

    const productLink = document.createElement('a');
    productLink.href = product_link;
    productLink.textContent = 'View Product';
    productDiv.appendChild(productLink);

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;
    productDiv.appendChild(descriptionElement);

    productsContainer.appendChild(productDiv);
  });
}

function filterProducts(products, searchQuery) {
  if (!searchQuery) {
    return products;
  }

  searchQuery = searchQuery.toLowerCase();

  return products.filter(product => {
    const brand = product.brand ? product.brand.toLowerCase() : '';
    const name = product.name ? product.name.toLowerCase() : '';
    const description = product.description ? product.description.toLowerCase() : '';

    return brand.includes(searchQuery) || name.includes(searchQuery) || description.includes(searchQuery);
  });
}

async function handleSearch() {
  const searchInput = document.getElementById('search-input');
  const searchQuery = searchInput.value.trim();

  const products = await getMakeupProducts();

  if (products) {
    const filteredProducts = filterProducts(products, searchQuery);
    processMakeupProducts(filteredProducts);
  }
}

document.getElementById('search-button').addEventListener('click', handleSearch);

(async () => {
  const products = await getMakeupProducts();
  if (products) {
    processMakeupProducts(products);
  }
})();
