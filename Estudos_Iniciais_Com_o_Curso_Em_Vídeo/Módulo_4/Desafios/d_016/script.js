let logos = ['imagens/logo-home.jpg', 'imagens/logo-youtube.jpg', 'imagens/logo-github.jpg', 'imagens/logo-instagram.jpg', 'imagens/logo-twitter.jpg', 'imagens/logo-facebook.jpg']
let telas = ['imagens/tela-home.jpg', 'imagens/tela-youtube.png', 'imagens/tela-github.jpg', 'imagens/tela-instagram.jpg', 'imagens/tela-twitter.jpg', 'imagens/tela-facebook.jpg']

function criaçãoBotões() {
    let articleMenu = document.querySelector('article.menu')
    for (item in logos) {
        let imgBotão = document.createElement('a')
        imgBotão.setAttribute('href', '#')
        imgBotão.setAttribute('target', '_self')
        imgBotão.setAttribute('onclick', `escolhaTela(${item})`)
        imgBotão.innerHTML = `<img src="${logos[item]}" alt="">`
        articleMenu.append(imgBotão)
    }
}

function escolhaTela(num) {
    let item = Number(num)
    let iframeTela = document.querySelector('iframe')
    iframeTela.style.background = `transparent url('${telas[item]}') top center no-repeat`;
    iframeTela.style.backgroundSize = 'cover';
}

criaçãoBotões()