const product = document.getElementById("product_image");
const product_fog = document.getElementById("product_fog");

function show_product_page(){
    product_page.style.display = "flex";
};
function hide_product_page(){
    product_page.style.display = "";
};

product.addEventListener('click', show_product_page);
product_fog.addEventListener('click', hide_product_page);