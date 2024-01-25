let burgerMenu = document.querySelector('.nav_burger');
let navBar = document.querySelector('.nav_list');
let navItems = document.querySelectorAll('.nav_list li a');

burgerMenu.addEventListener('click', () => {
    navBar.classList.toggle('move');
    if(navBar.classList.contains('move')){
        burgerMenu.classList.add('activeBurger');
    } else {
        burgerMenu.classList.remove('activeBurger')
    }
})

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navBar.classList.remove('move');
        burgerMenu.classList.add('activeBurger');
    })
});

