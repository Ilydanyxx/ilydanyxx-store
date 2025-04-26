const backendUrl = 'ТУТ_Буде_Твій_Backend_URL';

async function loadProducts() {
  const response = await fetch(`${backendUrl}/api/products`);
  const products = await response.json();

  const productsDiv = document.getElementById('products');
  productsDiv.innerHTML = '';

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><strong>${product.price} грн</strong></p>
    `;
    productsDiv.appendChild(card);
  });
}

loadProducts();
