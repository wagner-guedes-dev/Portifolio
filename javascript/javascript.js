
//imagens das habilidades sendo habilitadas ao passar o mouse

function back(){
    const res =  document.getElementById("acao");
    res.innerHTML =  "<p>/*Passe o mouse sobre a habilidade*/</p>";
    res.style.paddingTop = '100px'
}
function html(){
    const res =  document.getElementById("acao");
    res.innerHTML = '<img src="../Imagens-videos/logos-habilidades/html-logo.png" alt="HTML" width="90px" height="90px"><br><br>  <h2>HTML</h2><p> É uma linguagem de marcação utilizada na construção de páginas Web.<br> Tenho 6 meses de experiência com esta tecnologia.<br>/*Toque no ícone para desativar*/</p>';
    res.style.paddingTop = '0px'
    res.style.textAlign = 'center'
}
function css(){
    const res =  document.getElementById("acao");
    res.innerHTML = '<img src="../Imagens-videos/logos-habilidades/css-logo.png" alt="CSS" width="90px" height="90px"><br><br>  <h2>CSS</h2><p> É um mecanismo para adiconar estilo a um documento web.<br> Tenho 6 meses de experiência com esta tecnologia.</p>';
    res.style.paddingTop = '0px'
    res.style.textAlign = 'center'
}
function js(){
    const res =  document.getElementById("acao");
    res.innerHTML = '<img src="../Imagens-videos/logos-habilidades/js-logo.png" alt="JAVASCRIPT"width="90px" height="90px"><br><br>  <h2>JAVASCRIPT</h2> <p> É uma linguagem de programação.<br>Juntamente com HTML e CSS, é uma das três principais tecnologias web. <br> Tenho 3 meses de experiência com esta tecnologia.</p> ';
    res.style.paddingTop = '0px'
    res.style.textAlign = 'center'
}
function react(){
    const res =  document.getElementById("acao");
    res.innerHTML = '<img src="../Imagens-videos/logos-habilidades/react-logo.png" alt="REACT" width="100px" height="100px"><br><br>  <h2>REACT</h2> <p> O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. <br> Tenho 1 mes de experiência com esta tecnologia.</p> ';
    res.style.paddingTop = '0px'
    res.style.textAlign = 'center'
}
function git(){
    const res =  document.getElementById("acao");
    res.innerHTML = '<img src="../Imagens-videos/logos-habilidades/git-logo.png" alt="GIT" width="100px" height="100px"><br><br>  <h2>GIT</h2> <p> Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.</p> ';
    res.style.paddingTop = '0px'
    res.style.textAlign = 'center'
}
function github(){
    const res =  document.getElementById("acao");
    res.innerHTML = '<img src="../Imagens-videos/logos-habilidades/github-logo-tracado.png" alt="GITHUB" width="100px" height="100px"><br><br> <h2>GITHUB</h2> <p>GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.</p> ';
    res.style.paddingTop = '0px'
    res.style.textAlign = 'center'
}


