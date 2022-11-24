
//imagens daos projetos sendo habilitadas
var pizzaria = document.getElementById('pizzaria')
var flixwag = document.getElementById('flixwag')
var minhastarefas = document.getElementById('minhastarefas')
var quiz = document.getElementById('quiz')
var financeiro = document.getElementById('financeiro')



pizzaria.classList.toggle('none')
flixwag.classList.toggle('none')
minhastarefas.classList.toggle('none')
quiz.classList.toggle('none')
financeiro.classList.toggle('none')


var btnpizza = document.getElementById('pizzaria-button')
var btnflixwag = document.getElementById('flixwag-button')
var btnminhastarefas = document.getElementById('minhastarefas-button')
var btnquiz = document.getElementById('quiz-button')
var btnfinanceiro = document.getElementById('financeiro-button')


function funcpizza(){
    
    pizzaria.classList.toggle('none') 
    pizzaria.classList.add('animation')

    flixwag.classList.add('none')
    minhastarefas.classList.add('none')
    quiz.classList.add('none')
    financeiro.classList.add('none')
  

    
    btnpizza.classList.toggle('habilidade-block-animate')
    btnflixwag.classList.remove('habilidade-block-animate')

    btnminhastarefas.classList.remove('habilidade-block-animate')
    btnquiz.classList.remove('habilidade-block-animate')
    btnfinanceiro.classList.remove('habilidade-block-animate')



    //projeto pizzaria drag to scroll
    const dragPizzaria = document.querySelector('.drag-pizzaria');
    let isDown = false;
    let startX;
    let scrollLeft;

    dragPizzaria.addEventListener('mousedown', (e) => {
    isDown = true;
    dragPizzaria.classList.add('active');
    startX = e.pageX - dragPizzaria.offsetLeft;
    scrollLeft = dragPizzaria.scrollLeft;
    });
    dragPizzaria.addEventListener('mouseleave', () => {
    isDown = false;
    dragPizzaria.classList.remove('active');
    });
    dragPizzaria.addEventListener('mouseup', () => {
    isDown = false;
    dragPizzaria.classList.remove('active');
    });
    dragPizzaria.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - dragPizzaria.offsetLeft;
    const walk = (x - startX) * 1; //scroll-fast
    dragPizzaria.scrollLeft = scrollLeft - walk;
    });
    
}
function funcflixwag(){
    
    pizzaria.classList.add('none')

    flixwag.classList.toggle('none')
    flixwag.classList.add('animation')

    minhastarefas.classList.add('none')
    quiz.classList.add('none')
    financeiro.classList.add('none')
    


    btnpizza.classList.remove('habilidade-block-animate')
    
    btnflixwag.classList.toggle('habilidade-block-animate')

    btnminhastarefas.classList.remove('habilidade-block-animate')
    btnquiz.classList.remove('habilidade-block-animate')
    btnfinanceiro.classList.remove('habilidade-block-animate')

    //projeto dragFlixWag drag to scroll
    const dragFlixWag = document.querySelector('.drag-flixwag');

    dragFlixWag.addEventListener('mousedown', (e) => {
    isDown = true;
    dragFlixWag.classList.add('active');
    startX = e.pageX - dragFlixWag.offsetLeft;
    scrollLeft = dragFlixWag.scrollLeft;
    });
    dragFlixWag.addEventListener('mouseleave', () => {
    isDown = false;
    dragFlixWag.classList.remove('active');
    });
    dragFlixWag.addEventListener('mouseup', () => {
    isDown = false;
    dragFlixWag.classList.remove('active');
    });
    dragFlixWag.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - dragFlixWag.offsetLeft;
    const walk = (x - startX) * 1; //scroll-fast
    dragFlixWag.scrollLeft = scrollLeft - walk;
    });

    
}
function funcminhastarefas(){
   
    pizzaria.classList.add('none')
    flixwag.classList.add('none')

    minhastarefas.classList.toggle('none')
    minhastarefas.classList.add('animation')

    quiz.classList.add('none')
    financeiro.classList.add('none')
    

 
    btnpizza.classList.remove('habilidade-block-animate')
    btnflixwag.classList.remove('habilidade-block-animate')

    btnminhastarefas.classList.toggle('habilidade-block-animate')

    btnquiz.classList.remove('habilidade-block-animate')
    btnfinanceiro.classList.remove('habilidade-block-animate')


    //projeto minhas dragTarefas drag to scroll
    const dragTarefas = document.querySelector('.drag-minhas-tarefas');

    dragTarefas.addEventListener('mousedown', (e) => {
    isDown = true;
    dragTarefas.classList.add('active');
    startX = e.pageX - dragTarefas.offsetLeft;
    scrollLeft = dragTarefas.scrollLeft;
    });
    dragTarefas.addEventListener('mouseleave', () => {
    isDown = false;
    dragTarefas.classList.remove('active');
    });
    dragTarefas.addEventListener('mouseup', () => {
    isDown = false;
    dragTarefas.classList.remove('active');
    });
    dragTarefas.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - dragTarefas.offsetLeft;
    const walk = (x - startX) * 1; //scroll-fast
    dragTarefas.scrollLeft = scrollLeft - walk;
    });
    
}
function funcquiz(){

    pizzaria.classList.add('none')
    flixwag.classList.add('none')
    minhastarefas.classList.add('none')

    quiz.classList.toggle('none')
    quiz.classList.add('animation')

    financeiro.classList.add('none')
    


    btnpizza.classList.remove('habilidade-block-animate')
    btnflixwag.classList.remove('habilidade-block-animate')
    btnminhastarefas.classList.remove('habilidade-block-animate')

    btnquiz.classList.toggle('habilidade-block-animate')

    btnfinanceiro.classList.remove('habilidade-block-animate')


    //projeto dragQuiz drag to scroll
    const dragQuiz = document.querySelector('.drag-quiz');

    dragQuiz.addEventListener('mousedown', (e) => {
    isDown = true;
    dragQuiz.classList.add('active');
    startX = e.pageX - dragQuiz.offsetLeft;
    scrollLeft = dragQuiz.scrollLeft;
    });
    dragQuiz.addEventListener('mouseleave', () => {
    isDown = false;
    dragQuiz.classList.remove('active');
    });
    dragQuiz.addEventListener('mouseup', () => {
    isDown = false;
    dragQuiz.classList.remove('active');
    });
    dragQuiz.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - dragQuiz.offsetLeft;
    const walk = (x - startX) * 1; //scroll-fast
    dragQuiz.scrollLeft = scrollLeft - walk;
    });

    
}
function funcfinanceiro(){

    pizzaria.classList.add('none')
    flixwag.classList.add('none')
    minhastarefas.classList.add('none')
    quiz.classList.add('none')

    financeiro.classList.toggle('none')
    financeiro.classList.add('animation')

    

    
    btnpizza.classList.remove('habilidade-block-animate')
    btnflixwag.classList.remove('habilidade-block-animate')
    btnminhastarefas.classList.remove('habilidade-block-animate')
    btnquiz.classList.remove('habilidade-block-animate')

    btnfinanceiro.classList.toggle('habilidade-block-animate')



    //projeto controle funanceiro drag to scroll
const dragfinanceiro = document.querySelector('.drag-financeiro');

dragfinanceiro.addEventListener('mousedown', (e) => {
  isDown = true;
  dragfinanceiro.classList.add('active');
  startX = e.pageX - dragfinanceiro.offsetLeft;
  scrollLeft = dragfinanceiro.scrollLeft;
});
dragfinanceiro.addEventListener('mouseleave', () => {
  isDown = false;
  dragfinanceiro.classList.remove('active');
});
dragfinanceiro.addEventListener('mouseup', () => {
  isDown = false;
  dragfinanceiro.classList.remove('active');
});
dragfinanceiro.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - dragfinanceiro.offsetLeft;
  const walk = (x - startX) * 1; //scroll-fast
  dragfinanceiro.scrollLeft = scrollLeft - walk;
});

    
}



