let logos = ['imagens/logo-home.jpg', 'imagens/logo-youtube.jpg', 'imagens/logo-github.jpg', 'imagens/logo-instagram.jpg', 'imagens/logo-twitter.jpg', 'imagens/logo-facebook.jpg']

function criaçãoBotões() {
    let articleMenu = document.querySelector('article.menu')
    for (item in logos) {
        let imgBotão = document.createElement('a')
        imgBotão.setAttribute('href', 'telas.html')
        imgBotão.setAttribute('target', 'tela')
        imgBotão.setAttribute('onclick', `escolhaTela(${item})`)
        imgBotão.innerHTML = `<img src="${logos[item]}" alt="">`
        articleMenu.append(imgBotão)
    }
}

criaçãoBotões()