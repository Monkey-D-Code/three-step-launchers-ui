var menuElement = document.querySelector('.menu');
var authElement = document.querySelector('.auth');

var menuToggler = document.querySelector('.menu-toggle');

menuToggler.addEventListener('click' , function(){
    if(menuElement.style.display === 'none'){
        menuElement.style.display = 'flex';
        authElement.style.display = 'flex';
    }else{
        menuElement.style.display = 'none';
        authElement.style.display = 'none';
    }
    
})