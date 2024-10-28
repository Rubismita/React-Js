let count = 0; // Initialize the item count

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    addToCart() {
        count++;
        this.updateCartCount();
    }

    removeFromCart() {
        if (count > 0) {
            count--;
            this.updateCartCount();
        }
    }

    updateCartCount() {
        console.log(count);
        document.getElementById("count").innerText = `Count: ${count}`;
    }
}

// Create instances for each product
const tv = new Product("TV", 1000);
const laptop = new Product("Laptop", 20000);
const phone = new Product("Phone", 15000);

function processPayment() {
    return new Promise((resolve, reject) => {
        if (count > 0) {
            setTimeout(() => {
                resolve("Payment processed successfully.");
            }, 3000);
        } else {
            reject("No items in the cart. Please add items.");
        }
    })
    .then(paymentMessage => {
        console.log(paymentMessage);
        return new Promise(resolve => {
            setTimeout(() => {
                resolve("Item shipped!");
            }, 8000);
        });
    })
    .then(shippedMessage => {
        console.log(shippedMessage);
        document.getElementById("message").innerHTML= "Item Delivered, Thank you!";
    })
    .catch(errorMessage => {
        console.error(errorMessage);
    });
}
