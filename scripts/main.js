// Function to decrease the quantity of a specific product
function decreaseQuantity(productId) {
    // Construct the input field ID
    var quantityInputId = 'quantity-' + productId;
    // Get the input element
    var quantityInput = document.getElementById(quantityInputId);
    var currentQuantity = parseInt(quantityInput.value);

    // Decrease the quantity, but don't go below 1
    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
    }
}

// Function to increase the quantity of a specific product
function increaseQuantity(productId) {
    // Construct the input field ID
    var quantityInputId = 'quantity-' + productId;
    // Get the input element
    var quantityInput = document.getElementById(quantityInputId);
    var currentQuantity = parseInt(quantityInput.value);

    // Increase the quantity
    quantityInput.value = currentQuantity + 1;
}

function addToCart() {
    //Remind users that the product has been added to the shopping cart
    alert('Product added to cart!');
}