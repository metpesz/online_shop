// Cart
let cart_status = 0;
const cart_and_fog = document.querySelector(".cart_and_fog");
const cart_back = document.getElementById("cart_back");
const cart_button = document.getElementById("cart_button");
const cart_fog = document.getElementById("cart_fog");
const phone_cart = document.getElementById("phone_cart");

function cart(){
    cart_and_fog.style.display = "flex";
    cart_status++
}

function cart_back1(){
    cart_and_fog.style.display = "none";
    cart_status--
}

phone_cart.addEventListener('click', cart)
cart_button.addEventListener('click', cart)
cart_back.addEventListener('click', cart_back1)
cart_fog.addEventListener('click', cart_back1)