//logica da animaçao do scroll

//otimizar as funcoes ativadas pelo scroll
const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};


//animaçao nas imagens
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  target.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  })
}

animeScroll();

if(target.length) {
  window.addEventListener('scroll', debounce(function() {
    animeScroll();
  }, 200));
}

//animacão no texto
const targettext = document.querySelectorAll('[data-anime-text]');
const animationtextClass = 'animatetext';

function animetextScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  targettext.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationtextClass);
    } else {
      element.classList.remove(animationtextClass);
    }
  })
}

animetextScroll();

if(target.length) {
  window.addEventListener('scroll', debounce(function() {
    animetextScroll();
  }, 200));
}