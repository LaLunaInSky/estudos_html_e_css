import NúmeroTela from "./controlador.js";

let telas = ['imagens/tela-home.jpg', 'imagens/tela-youtube.png', 'imagens/tela-github.jpg', 'imagens/tela-instagram.jpg', 'imagens/tela-twitter.jpg', 'imagens/tela-facebook.jpg']
let cores = ['#', '#FE0000', '#148630', '#DB1E63', '#4EA9E5', '#44619C']
let links = ['#', 'https://www.youtube.com/c/CursoemV%C3%ADdeo/playlists', 'https://github.com/gustavoguanabara', 'https://www.instagram.com/gustavoguanabara/', 'https://x.com/guanabara', 'https://www.facebook.com/guanabara']

function escolhaTela() {
    let item = NúmeroTela.getNum()
    let tela = document.querySelector('section#telaAtual')
    tela.innerHTML = `<img src="${telas[item]}" alt="">`
    if (item != 0) {
        tela.innerHTML += `<a style="background-color: ${cores[item]};" href="${links[item]}" target="_blank">ACESSAR</a>`
    }
}

escolhaTela()