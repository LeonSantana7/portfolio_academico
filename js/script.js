const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#navbar-icon');
let navlist = document.querySelector('.navbar-header');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

const sr = ScrollReveal({
    distance: '50px',
    duration: 2500,
    reset: true
})

sr.reveal('.home-text', {delay:200 , origin:'left'})

function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i)
    });
    console.log(elemento.innerHTML);
}

const titulo = document.querySelector(".home-text h5, span");
typeWriter(titulo);

titulo.elemento('.home-text h5 > span', {delay:2000, origin:'left'})