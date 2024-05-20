// when hitting a menu open the navbar

const Bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close')


if (Bar){
    Bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
