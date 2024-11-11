import NúmeroTela from "./controlador.js";

var logos = ['imagens/logo-home.jpg', 'imagens/logo-youtube.jpg', 'imagens/logo-github.jpg', 'imagens/logo-instagram.jpg', 'imagens/logo-twitter.jpg', 'imagens/logo-facebook.jpg']

function setarTela(number) {
    //var num = NúmeroTela.getNum()
    return console.log(number)
}

function criaçãoBotões() {
    let articleMenu = document.querySelector('article.menu')

    for (var item in logos) {
        articleMenu.innerHTML += `<a href="telas.html" target="tela" onclick="setarTela(${item})"><img src="${logos[item]}" alt=""></a>`
    }
}

criaçãoBotões()