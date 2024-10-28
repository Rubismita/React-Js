const apiUrl = 'https://fakestoreapi.com/products';

async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const container = document.getElementById('items-container');
        
        data.forEach(item => {
            const image = item.image; 
            const description = item.description; 
            const price = item.price;

            const itemDiv = document.createElement('div');
            itemDiv.className = 'item';
            itemDiv.innerHTML = `
                <img src="${image}" alt="${description}" />
                <p>${description}</p>
                <p>Price: $<span class="item-price">${price}</span></p>
                <select class="quantity">
                    <option value="Select Quanity">Select Quanity</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <button class="add-to-cart">Add to Cart</button>
            `;
            container.appendChild(itemDiv);

            // Event listener for quantity change and button click
            const quantitySelect = itemDiv.querySelector('.quantity');
            const addToCartButton = itemDiv.querySelector('.add-to-cart');

            addToCartButton.addEventListener('click', () => {
                const quantity = parseInt(quantitySelect.value);
                const totalItemPrice = (price * quantity).toFixed(2);
                updateTotalPrice(totalItemPrice);
            });
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

let totalPrice = 0;

function updateTotalPrice(itemTotal) {
    totalPrice += parseFloat(itemTotal);
    document.getElementById('total-price').innerText = `$${totalPrice.toFixed(2)}`;
}

fetchData();
