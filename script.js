document.addEventListener('DOMContentLoaded', function() {
  const candyForm = document.getElementById('candyForm');
  const purchaseForm = document.getElementById('purchaseForm');

  candyForm.addEventListener('submit', addCandy);
  purchaseForm.addEventListener('submit', buyCandy);

  fetchCandies();
});

// Fetch candies from the CRUD API
function fetchCandies() {
  fetch('https://https://crudcrud.com/api/873aee75ec34481da3b4de3b61f2e17e/candies')
  
    .then(response => response.json())
    .then(candies => {
      const candyTable = document.getElementById('candyTable');
      candyTable.innerHTML = `
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      `;

      const candySelect = document.getElementById('candySelect');
      candySelect.innerHTML = '';

      candies.forEach(candy => {
        const row = `
          <tr>
            <td>${candy.name}</td>
            <td>$${candy.price.toFixed(2)}</td>
            <td>${candy.quantity}</td>
            <td><button onclick="deleteCandy(${candy.id})">Delete</button></td>
          </tr>
        `;
        candyTable.innerHTML += row;

        const option = document.createElement('option');
        option.value = candy.id;
        option.textContent = candy.name;
        candySelect.appendChild(option);
      });
    })
    .catch(error => {
      console.log('Error fetching candies:', error);
    });
}

// Add a new candy
function addCandy(event) {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const priceInput = document.getElementById('price');
  const quantityInput = document.getElementById('quantity');

  const newCandy = {
    name: nameInput.value,
    price: parseFloat(priceInput.value),
    quantity: parseInt(quantityInput.value)
  };

  fetch('https://https://crudcrud.com/api/873aee75ec34481da3b4de3b61f2e17e
  /candies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newCandy)
  })
    .then(response => response.json())
    .then(() => {
      fetchCandies();
      nameInput.value = '';
      priceInput.value = '';
      quantityInput.value = '';
    })
    .catch(error => {
      console.log('Error adding candy:', error);
    });
}

// Buy a candy
function buyCandy(event) {
  event.preventDefault();

  const candySelect = document.getElementById('candySelect');
  const quantityToBuyInput = document.getElementById('quantityToBuy');

  const candyId = candySelect.value;
  const quantityToBuy = parseInt(quantityToBuyInput.value);

  fetch(`https://https://crudcrud.com/api/873aee75ec34481da3b4de3b61f2e17e
  /candies/${candyId}`)
    .then(response => response.json())
    .then(candy => {
      if (candy.quantity >= quantityToBuy) {
        const updatedCandy = {
          ...candy,
          quantity: candy.quantity - quantityToBuy
        };

        fetch(`https://https://crudcrud.com/api/873aee75ec34481da3b4de3b61f2e17e
        /candies/${candyId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedCandy)
        })
          .then(response => response.json())
          .then(() => {
            fetchCandies();
            quantityToBuyInput.value = '';
            alert(`You bought ${quantityToBuy} ${candy.name}(s).`);
          })
          .catch(error => {
            console.log('Error updating candy:', error);
          });
      } else {
        alert(`Insufficient quantity. Only ${candy.quantity} ${candy.name}(s) available.`);
      }
    })
    .catch(error => {
      console.log('Error fetching candy:', error);
    });
}

// Delete a candy
function deleteCandy(candyId) {
  fetch(`https://https://crudcrud.com/api/873aee75ec34481da3b4de3b61f2e17e
  /candies/${candyId}`, {
    method: 'DELETE'
  })
    .then(() => {
      fetchCandies();
      alert('Candy deleted.');
    })
    .catch(error => {
      console.log('Error deleting candy:', error);
    });
}