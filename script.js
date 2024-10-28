var main = document.querySelector("main#main")
var exercícosTotal = 1
var desafiosTotal = 1

function sectionMódulo(númeroDoMódulo, quantidadeDeDesafios, quantidadeDeExercícios) {
    var númeroDoMódulo = Number(númeroDoMódulo)
    var quantidadeDeDesafios = Number(quantidadeDeDesafios)
    var quantidadeDeExercícios = Number(quantidadeDeExercícios)

    var section = document.createElement('section')
    section.setAttribute('class', 'container')
    section.setAttribute('id', `modulo${númeroDoMódulo}`)
    main.appendChild(section)
    
    //Criando o h1 na section
    var h1 = document.createElement('h1')
    h1.innerText = `Módulo ${númeroDoMódulo}`
    section.appendChild(h1)

    //criando a ul na section
    var ulMain = document.createElement('ul')
    section.appendChild(ulMain)

    //criando a li Desafio na ulMain
    var liDesafios = document.createElement('li')
    liDesafios.innerHTML = '<h2>Desafios</h2>'
    ulMain.appendChild(liDesafios)

    //criando a li Exercicios na ulMain
    var liExercícios = document.createElement('li')
    liExercícios.innerHTML = '<h2>Exercícios</h2>'
    ulMain.appendChild(liExercícios)

    //criando a ulDesafios na liDesafios
    var ulDesafios = document.createElement('ul')
    liDesafios.appendChild(ulDesafios)

    //criando a ulExercícios na liExercícios
    var ulExercícios = document.createElement('ul')
    liExercícios.appendChild(ulExercícios)

    var quantidadeDeDesafiosFinal = desafiosTotal + quantidadeDeDesafios
    var quantidadeDeExercícosFinal = exercícosTotal + quantidadeDeExercícios

    for (desafiosTotal ;desafiosTotal != quantidadeDeDesafiosFinal; desafiosTotal += 1) {
        var liResultado = document.createElement('li')
        if (desafiosTotal <= 9) {
            liResultado.innerHTML = `<h3><a href="https://lalunainsky.github.io/Estudos_HTML_e_CSS/M%C3%B3dulo_${númeroDoMódulo}/Desafios/d_00${desafiosTotal}/" target="_blank">d_00${desafiosTotal}</a></h3>`
            ulDesafios.appendChild(liResultado)
        } else if (desafiosTotal <= 99) {
            liResultado.innerHTML = `<h3><a href="https://lalunainsky.github.io/Estudos_HTML_e_CSS/M%C3%B3dulo_${númeroDoMódulo}/Desafios/d_0${desafiosTotal}/" target="_blank">d_0${desafiosTotal}</a></h3>`
            ulDesafios.appendChild(liResultado)
        } else {
            liResultado.innerHTML = `<h3><a href="https://lalunainsky.github.io/Estudos_HTML_e_CSS/M%C3%B3dulo_${númeroDoMódulo}/Desafios/d_${desafiosTotal}/" target="_blank">d_${desafiosTotal}</a></h3>`
            ulDesafios.appendChild(liResultado)
        }
    }

    for (exercícosTotal ;exercícosTotal != quantidadeDeExercícosFinal; exercícosTotal += 1) {
        var liResultado = document.createElement('li')
        if (exercícosTotal <= 9) {
            liResultado.innerHTML = `<h3><a href="https://lalunainsky.github.io/Estudos_HTML_e_CSS/M%C3%B3dulo_${númeroDoMódulo}/Exercícios/ex_00${exercícosTotal}/" target="_blank">ex_00${exercícosTotal}</a></h3>`
            ulExercícios.appendChild(liResultado)
        } else if (exercícosTotal <= 99) { 
            liResultado.innerHTML = `<h3><a href="https://lalunainsky.github.io/Estudos_HTML_e_CSS/M%C3%B3dulo_${númeroDoMódulo}/Exercícios/ex_0${exercícosTotal}/" target="_blank">ex_0${exercícosTotal}</a></h3>`
            ulExercícios.appendChild(liResultado)
        } else {
            liResultado.innerHTML = `<h3><a href="https://lalunainsky.github.io/Estudos_HTML_e_CSS/M%C3%B3dulo_${númeroDoMódulo}/Exercícios/ex_${exercícosTotal}/" target="_blank">ex_${exercícosTotal}</a></h3>`
            ulExercícios.appendChild(liResultado)
        }
    }
}

sectionMódulo(1, 9, 22)
sectionMódulo(2, 1, 14)
sectionMódulo(3, 2, 9)