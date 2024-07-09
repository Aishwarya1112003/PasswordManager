let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');  // Close search form when menu is opened
    cartItem.classList.remove('active');    // Close cart when menu is opened
};

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');      // Close menu when search form is opened
    cartItem.classList.remove('active');    // Close cart when search form is opened
};

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');      // Close menu when cart is opened
    searchForm.classList.remove('active');  // Close search form when cart is opened
};

window.onscroll = () =>{
    navbar.classList.remove('active');      // Close menu when scroll
    searchForm.classList.remove('active');  // Close search form when scroll
    cartItem.classList.remove('active');    // Close cart when scroll
}
