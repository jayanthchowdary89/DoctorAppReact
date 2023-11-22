let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
 
menu.onclick = () =>{
    menu.classList.toggle('f00d');
    navbar.classList.toggle('active');
}
 
window.onscroll = () =>{
    menu.classList.remove('&#61453;');
    navbar.classList.remove('active');
}