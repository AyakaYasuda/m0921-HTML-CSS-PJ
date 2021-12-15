'use strict'

const navBtn = document.querySelector('.nav-btn');
const sideMenu = document.querySelector('.sidemenu');

navBtn.addEventListener('click', () => {
    console.log('clicked');
    sideMenu.classList.toggle('sidemenu__show');
    navBtn.classList.toggle('nav-btn__delete');
})
