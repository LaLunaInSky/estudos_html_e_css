let logos = ['imagens/logo-home.jpg', 'imagens/logo-youtube.jpg', 'imagens/logo-github.jpg', 'imagens/logo-instagram.jpg', 'imagens/logo-twitter.jpg', 'imagens/logo-facebook.jpg']
let telas = ['imagens/tela-home.jpg', 'imagens/tela-youtube.jpg', 'imagens/tela-github.jpg', 'imagens/tela-instagram.jpg', 'imagens/tela-twitter.jpg', 'imagens/tela-facebook.jpg']

function criaçãoBotões() {
    let sectionMain = document.querySelector('section')
    for (item in logos) {
        let imgBotão = document.createElement('a')
        imgBotão.setAttribute('href', '#')
        imgBotão.setAttribute('target', '_self')
        imgBotão.innerHTML = `<img src="${logos[item]}" alt="">`
        sectionMain.append(imgBotão)
    }
}

function escolhaTela(num) {

}

criaçãoBotões()