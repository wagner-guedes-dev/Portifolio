
//imagens das habilidades sendo habilitadas
var htmlHab = document.getElementById('html-hab')
var cssHab = document.getElementById('css')
var jsHab = document.getElementById('js')
var reactHab = document.getElementById('react')
var gitHab = document.getElementById('git')
var githubHab = document.getElementById('github')


htmlHab.classList.toggle('none')
cssHab.classList.toggle('none')
jsHab.classList.toggle('none')
reactHab.classList.toggle('none')
gitHab.classList.toggle('none')
githubHab.classList.toggle('none')

var blockHtml = document.getElementById('block-html')
var blockCss = document.getElementById('block-css')
var blockJs = document.getElementById('block-js')
var blockReact = document.getElementById('block-react')
var blockGit = document.getElementById('block-git')
var blockGithub = document.getElementById('block-github')

function html(){
    //display none e display block nas habilidades *** animacao na habilidade selecionada
    htmlHab.classList.toggle('none') //html sendo animado
    htmlHab.classList.add('animation')

    cssHab.classList.add('none')
    jsHab.classList.add('none')
    reactHab.classList.add('none')
    gitHab.classList.add('none')
    githubHab.classList.add('none')

    //animacao no bloco com a logo
    blockHtml.classList.toggle('habilidade-block-animate')//bloco html sendo animado
    blockCss.classList.remove('habilidade-block-animate')

    blockJs.classList.remove('habilidade-block-animate')
    blockReact.classList.remove('habilidade-block-animate')
    blockGit.classList.remove('habilidade-block-animate')
    blockGithub.classList.remove('habilidade-block-animate')
}
function css(){
    //display none e display block nas habilidades *** animacao na habilidade selecionada
    htmlHab.classList.add('none')

    cssHab.classList.toggle('none')//css sendo animado
    cssHab.classList.add('animation')

    jsHab.classList.add('none')
    reactHab.classList.add('none')
    gitHab.classList.add('none')
    githubHab.classList.add('none')

    //animacao no bloco com a logo
    blockHtml.classList.remove('habilidade-block-animate')
    
    blockCss.classList.toggle('habilidade-block-animate')//bloco css sendo animado

    blockJs.classList.remove('habilidade-block-animate')
    blockReact.classList.remove('habilidade-block-animate')
    blockGit.classList.remove('habilidade-block-animate')
    blockGithub.classList.remove('habilidade-block-animate')
}
function js(){
    //display none e display block nas habilidades *** animacao na habilidade selecionada
    htmlHab.classList.add('none')
    cssHab.classList.add('none')

    jsHab.classList.toggle('none')//js sendo animado
    jsHab.classList.add('animation')

    reactHab.classList.add('none')
    gitHab.classList.add('none')
    githubHab.classList.add('none')

    //animacao no bloco com a logo
    blockHtml.classList.remove('habilidade-block-animate')
    blockCss.classList.remove('habilidade-block-animate')

    blockJs.classList.toggle('habilidade-block-animate')//bloco js sendo animado

    blockReact.classList.remove('habilidade-block-animate')
    blockGit.classList.remove('habilidade-block-animate')
    blockGithub.classList.remove('habilidade-block-animate')
}
function react(){
    //display none e display block nas habilidades *** animacao na habilidade selecionada
    htmlHab.classList.add('none')
    cssHab.classList.add('none')
    jsHab.classList.add('none')

    reactHab.classList.toggle('none')//react sendo animado
    reactHab.classList.add('animation')

    gitHab.classList.add('none')
    githubHab.classList.add('none')

    //animacao no bloco com a logo
    blockHtml.classList.remove('habilidade-block-animate')
    blockCss.classList.remove('habilidade-block-animate')
    blockJs.classList.remove('habilidade-block-animate')

    blockReact.classList.toggle('habilidade-block-animate')//bloco react sendo animado

    blockGit.classList.remove('habilidade-block-animate')
    blockGithub.classList.remove('habilidade-block-animate')
}
function git(){
    //display none e display block nas habilidades *** animacao na habilidade selecionada
    htmlHab.classList.add('none')
    cssHab.classList.add('none')
    jsHab.classList.add('none')
    reactHab.classList.add('none')

    gitHab.classList.toggle('none')//git sendo animado
    gitHab.classList.add('animation')

    githubHab.classList.add('none')

    //animacao no bloco com a logo
    blockHtml.classList.remove('habilidade-block-animate')
    blockCss.classList.remove('habilidade-block-animate')
    blockJs.classList.remove('habilidade-block-animate')
    blockReact.classList.remove('habilidade-block-animate')

    blockGit.classList.toggle('habilidade-block-animate')//bloco git sendo animado

    blockGithub.classList.remove('habilidade-block-animate')
}
function github(){
    //display none e display block nas habilidades *** animacao na habilidade selecionada
    htmlHab.classList.add('none')
    cssHab.classList.add('none')
    jsHab.classList.add('none')
    reactHab.classList.add('none')
    gitHab.classList.add('none')

    githubHab.classList.toggle('none')//github sendo animado
    githubHab.classList.add('animation')

    //animacao no bloco com a logo
    blockHtml.classList.remove('habilidade-block-animate')
    blockCss.classList.remove('habilidade-block-animate')
    blockJs.classList.remove('habilidade-block-animate')
    blockReact.classList.remove('habilidade-block-animate')
    blockGit.classList.remove('habilidade-block-animate')

    blockGithub.classList.toggle('habilidade-block-animate')//bloco github sendo animado
}


