var count = 0;
class Product {
    constructor(name, price,) {
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
      document.getElementById("count").innerHTML = count;
    }
}

function updateCount(){
     p = new Product();
     p.addToCart();
}

function removeCount(){
    //p = new Product();
    p.removeFromCart();
}

