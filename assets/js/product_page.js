//Show product page
const product = document.querySelectorAll(".product2_img");
const product_fog = document.getElementById("product_fog");
const product_page = document.getElementById("product_page");

function show_product_page(){
    product_page.style.display = "flex";
};
function hide_product_page(){
    product_page.style.display = "";
};

product_fog.addEventListener('click', hide_product_page);

product.forEach(function(element){
    element.addEventListener('click', show_product_page);
});

//Size buttons
const size_l = document.getElementById("size_l");
const size_m = document.getElementById("size_m");
const size_xl = document.getElementById("size_xl");

function size(button){
    size_l.style.backgroundColor = "";
    size_l.style.color = "";

    size_m.style.backgroundColor = "";
    size_m.style.color = "";

    size_xl.style.backgroundColor = "";
    size_xl.style.color = "";
    
    button.style.backgroundColor = "#334E2A";
    button.style.color = "white";
};

size_l.addEventListener('click', function(){
    size(size_l);
});
size_m.addEventListener('click', function(){
    size(size_m);
});
size_xl.addEventListener('click', function(){
    size(size_xl);
});



let rozmiary = [];

function size_l_add(){
    rozmiary.length = 0;
    rozmiary.push("L");
};
function size_m_add(){
    rozmiary.length = 0;
    rozmiary.push("M");
};
function size_xl_add(){
    rozmiary.length = 0;
    rozmiary.push("XL");
};



size_l.addEventListener('click', size_l_add);
size_m.addEventListener('click', size_m_add);
size_xl.addEventListener('click', size_xl_add);
//Adding product to the cart
const add_button = document.getElementById("add_button");
const cart_products = document.getElementById("cart_products");

let koszyk_index_status = 0;

function add_product(){
    const product_div = document.createElement("div");
    product_div.className = "produkt_koszykowy";
    product_div.id = "product_div";

    cart_products.append(product_div);

    koszyk_index_status++;
    console.log(koszyk_index_status);

    
    //Info about product in cart
    
    const product_div_img = document.createElement("img");
    product_div_img.className = "product_div_img";
    product_div_img.id = "product_div_img";
    product_div_img.src = "./assets/images/product1.jpg";
    product_div.appendChild(product_div_img);

    const product_div_text = document.createElement("div");
    product_div_text.className = "product_div_text";
    product_div.appendChild(product_div_text);

    const product_div_name = document.createElement("span")
    product_div_name.className = "product_div_name";
    product_div_name.textContent = "Koszulka Nike";
    product_div_text.appendChild(product_div_name);

    const product_div_description = document.createElement("span")
    product_div_description.className = "product_div_description";
    product_div_description.textContent = "129,99zł";
    product_div_text.appendChild(product_div_description);

    const product_div_size = document.createElement("span")
    product_div_size.className = "product_div_size";
    product_div_size.textContent = rozmiary[0].toString();
    product_div_text.appendChild(product_div_size);



    //Change number of items in cart
    let koszyk_index = document.querySelectorAll(".koszyk_index");
    koszyk_index.forEach(function(element){
        element.textContent = koszyk_index_status.toString();
})};

add_button.addEventListener('click', add_product);

const remove_product = document.getElementById("clear");
function remove(){
    cart_products.innerHTML = "";
};

remove_product.addEventListener('click', remove);