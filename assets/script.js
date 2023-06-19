// menu
let menu_status = 0;
let menu_and_fog = document.querySelector(".menu_and_fog");
let menu_button = document.getElementById("menu_button");
let back_menu_button = document.getElementById("back_menu_button");
let menu_fog = document.getElementById("fog");

function menu(){
    menu_and_fog.style.display = "flex";
    menu_status++;
};
function back_menu(){
    menu_and_fog.style.display = "none";
};

menu_button.addEventListener('click', menu);
back_menu_button.addEventListener('click', back_menu);
menu_fog.addEventListener('click', back_menu)


// scroll
function scroll_categories(){
    const scroll_categories = document.getElementById("categories");
    scroll_categories.scrollIntoView({behavior: "smooth"})
};