let burger = document.querySelector('.navbar-burger')
let burgerMenu = document.getElementById('navbar-menu')

burger.addEventListener('click',function(){
  burgerMenu.classList.toggle('is-active');
})