// Koszule
const koszule_button = document.getElementById("koszule");
const koszule_info_page = document.getElementById("button_info1");

function koszule_info(){
    koszule.style.color = "#334E2A";
    koszule.style.backgroundColor = "white";
    koszule.style.borderRadius = "7.5px 0 0 7.5px";
    button_info1.style.display = "flex";
};
function koszule_info_reset(){
    koszule.style.color = "";
    koszule.style.backgroundColor = "";
    koszule.style.borderRadius = "";
    button_info1.style.display = "";
};

koszule_button.addEventListener('mouseover', koszule_info);
koszule_button.addEventListener('mouseout', koszule_info_reset);
koszule_info_page.addEventListener('mouseover', koszule_info)
koszule_info_page.addEventListener('mouseout', koszule_info_reset)



// Koszulki
const koszulki_button = document.getElementById("koszulki");
const koszulki_info_page = document.getElementById("button_info2");

function koszulki_info(){
    koszulki.style.color = "#334E2A";
    koszulki.style.backgroundColor = "white";
    koszulki.style.borderRadius = "7.5px 0 0 7.5px";
    button_info2.style.display = "flex";
};
function koszulki_info_reset(){
    koszulki.style.color = "";
    koszulki.style.backgroundColor = "";
    koszulki.style.borderRadius = "";
    button_info2.style.display = "";
};

koszulki_button.addEventListener('mouseover', koszulki_info);
koszulki_button.addEventListener('mouseout', koszulki_info_reset);
koszulki_info_page.addEventListener('mouseover', koszulki_info)
koszulki_info_page.addEventListener('mouseout', koszulki_info_reset)



// Spodnie
const spodnie_button = document.getElementById("spodnie");
const spodnie_info_page = document.getElementById("button_info3");

function spodnie_info(){
    spodnie.style.color = "#334E2A";
    spodnie.style.backgroundColor = "white";
    spodnie.style.borderRadius = "7.5px 0 0 7.5px";
    button_info3.style.display = "flex";
};
function spodnie_info_reset(){
    spodnie.style.color = "";
    spodnie.style.backgroundColor = "";
    spodnie.style.borderRadius = "";
    button_info3.style.display = "";
};

spodnie_button.addEventListener('mouseover', spodnie_info);
spodnie_button.addEventListener('mouseout', spodnie_info_reset);
spodnie_info_page.addEventListener('mouseover', spodnie_info)
spodnie_info_page.addEventListener('mouseout', spodnie_info_reset)



// Zegarki
const zegarki_button = document.getElementById("zegarki");
const zegarki_info_page = document.getElementById("button_info4");

function zegarki_info(){
    zegarki.style.color = "#334E2A";
    zegarki.style.backgroundColor = "white";
    zegarki.style.borderRadius = "7.5px 0 0 7.5px";
    button_info4.style.display = "flex";
};
function zegarki_info_reset(){
    zegarki.style.color = "";
    zegarki.style.backgroundColor = "";
    zegarki.style.borderRadius = "";
    button_info4.style.display = "";
};

zegarki_button.addEventListener('mouseover', zegarki_info);
zegarki_button.addEventListener('mouseout', zegarki_info_reset);
zegarki_info_page.addEventListener('mouseover', zegarki_info)
zegarki_info_page.addEventListener('mouseout', zegarki_info_reset)