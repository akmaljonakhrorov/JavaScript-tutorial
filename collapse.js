



const menu_btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');


menu_btn.addEventListener('click', ()=> {

    if(menu.classList.contains('show')) {
        menu.classList.remove('show')
    } else
     {
        menu.classList.add('show')
     }
})





