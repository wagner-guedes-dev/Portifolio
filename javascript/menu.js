//menu hamburguer
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault(); //verifica se foi touch ou click para evitar atraso ao touch
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');//toggle = adicione quando nao tiver, remova quando tiver
}

function selecionarMenu(){
    const nav = document.getElementById('nav')
    nav.classList.remove('active');
}

btnMobile.addEventListener('click' , toggleMenu);
btnMobile.addEventListener('touchstart' , toggleMenu);
