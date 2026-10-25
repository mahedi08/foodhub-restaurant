// =========================
// ORDER FORM
// =========================

const orderButton = document.querySelector("#orderBtn");
const orderForm = document.querySelector("#orderForm");
const total = document.querySelector("#total");


// Scroll to order form

orderButton.addEventListener("click", function () {

    document.querySelector("#order").scrollIntoView({
        behavior: "smooth"
    });

});


// Calculate order

orderForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.querySelector("#customerName").value;

    const price =
        Number(document.querySelector("#food").value);

    const quantity =
        Number(document.querySelector("#quantity").value);

    const totalPrice = price * quantity;

    total.textContent =
        `Thank you, ${name}! Your total is ৳${totalPrice}.`;

});


// =========================
// SHOPPING CART
// =========================

let cart = [];

const cartButtons =
    document.querySelectorAll(".add-cart");

const cartItems =
    document.querySelector("#cartItems");

const cartTotal =
    document.querySelector("#cartTotal");


// Add food to cart

cartButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const name =
            button.dataset.name;

        const price =
            Number(button.dataset.price);

        cart.push({
            name: name,
            price: price
        });

        updateCart();

    });

});


// Update cart

function updateCart() {

    cartItems.innerHTML = "";

    let totalPrice = 0;


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

    }


    cart.forEach(function (item, index) {

        totalPrice += item.price;


        const div =
            document.createElement("div");

        div.className = "cart-item";


        div.innerHTML = `
            <span>
                ${item.name} - ৳${item.price}
            </span>

            <button onclick="removeItem(${index})">
                ❌
            </button>
        `;


        cartItems.appendChild(div);

    });


    cartTotal.textContent =
        `Total: ৳${totalPrice}`;

}


// Remove item

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();

}
// =========================
// WHATSAPP ORDER
// =========================

const whatsappBtn =
    document.querySelector("#whatsappBtn");

whatsappBtn.addEventListener("click", function () {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }


    let message =
        "Hello FoodHub! I want to place an order:%0A%0A";


    cart.forEach(function (item) {

        message +=
            `🍴 ${item.name} - ৳${item.price}%0A`;

    });


    let totalPrice = 0;

    cart.forEach(function (item) {

        totalPrice += item.price;

    });


    message +=
        `%0A💰 Total: ৳${totalPrice}`;


    // Replace this with the restaurant's WhatsApp number
    const phoneNumber = "8801761176876";


    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${message}`;


    window.open(whatsappURL, "_blank");

});