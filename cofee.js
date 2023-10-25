let search_btn=document.querySelector('#search-btn');
let search_bar=document.querySelector('.search-bar');


search_btn.onclick=()=>{
    search_bar.classList.toggle('active');
    nav.classList.remove('active');
    cart.classList.remove('active');   
}

let cart=document.querySelector('.cart-container');
let cart_btn=document.querySelector('#cart-btn');

cart_btn.onclick=()=>{
    cart.classList.toggle('active');
    search_bar.classList.remove('active');
    nav.classList.remove('active');
}

let nav=document.querySelector('.ul');
let menu_btn=document.querySelector('#menu-btn');
menu_btn.onclick=()=>{
    nav.classList.toggle('active');
    cart.classList.remove('active');   
    search_bar.classList.remove('active');
}

window.onscroll=()=>{

    nav.classList.remove('active');
    cart.classList.remove('active');   
    search_bar.classList.remove('active');


}

