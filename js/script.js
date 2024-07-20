let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let cartItem = document.querySelector('.cart-items-container');

// Toggle the menu, search form, and cart visibility
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
};

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
};

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
};

// Cart functionality
let cart = [];

// Add to Cart functionality
document.querySelectorAll('.menu .box .btn').forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault();
        let item = button.parentElement;
        let itemName = item.querySelector('h3').innerText;
        let itemPrice = item.querySelector('.price').childNodes[0].textContent.trim();
        let itemImage = item.querySelector('.image img').src;

        let cartItem = {
            name: itemName,
            price: itemPrice,
            image: itemImage
        };

        cart.push(cartItem);
        updateCartDisplay();
    });
});

// Function to update cart display
function updateCartDisplay() {
    let cartItemsContainer = document.querySelector('.cart-items-container');
    cartItemsContainer.innerHTML = '';

    cart.forEach((item, index) => {
        let cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');

        cartItemElement.innerHTML = `
            <span class="fas fa-times" onclick="removeFromCart(${index})"></span>
            <img src="${item.image}" height="120px" weight="100px" alt="${item.name}">
            <div class="content">
                <h3>${item.name}</h3>
                <div class="price">${item.price}</div>
            </div>
        `;

        cartItemsContainer.appendChild(cartItemElement);
    });
}

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}







// ===========================================================================================

// let navbar = document.querySelector('.navbar');
// let searchForm = document.querySelector('.search-form');
// let cartItem = document.querySelector('.cart-items-container');

// document.querySelector('#menu-btn').onclick = () => {
//     navbar.classList.toggle('active');
//     searchForm.classList.remove('active');  // Close search form when menu is opened
//     cartItem.classList.remove('active');    // Close cart when menu is opened
// };

// document.querySelector('#search-btn').onclick = () => {
//     searchForm.classList.toggle('active');
//     navbar.classList.remove('active');      // Close menu when search form is opened
//     cartItem.classList.remove('active');    // Close cart when search form is opened
// };

// document.querySelector('#cart-btn').onclick = () => {
//     cartItem.classList.toggle('active');
//     navbar.classList.remove('active');      // Close menu when cart is opened
//     searchForm.classList.remove('active');  // Close search form when cart is opened
// };

// window.onscroll = () =>{
//     navbar.classList.remove('active');      // Close menu when scroll
//     searchForm.classList.remove('active');  // Close search form when scroll
//     cartItem.classList.remove('active');    // Close cart when scroll
// }







