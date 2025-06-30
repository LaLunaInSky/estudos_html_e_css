// Elemento do botão de desafios do modulo 1 
const modulo_1_desafios_botao_mostrador = document.querySelector("#modulo_1_desafios_botao_mostrador");

// Elemento do botão de exercícios do modulo 1
const modulo_1_exercicios_botao_mostrador = document.querySelector("#modulo_1_exercicios_botao_mostrador");

// Elemento do mostrador de desafios do modulo 1
const modulo_1_desafios_mostrador = document.querySelector("#modulo_1_desafios_mostrador");

// Elemento do mostradpr de exercícios do modulo 1
const modulo_1_exercicios_mostrador = document.querySelector("#modulo_1_exercicios_mostrador");

// Adiciona um evento de clique no botão de desafios do modulo 1
modulo_1_desafios_botao_mostrador.addEventListener("click", abrir_mostrador_mod_01_desafios);

// Adiciona um evento de clique no botão de exercícios do modulo 1
modulo_1_exercicios_botao_mostrador.addEventListener("click", abrir_mostrador_mod_01_exercicios);

// Difine a cor do botão clicado do modulo 1
const cor_do_fundo_do_botao_do_mod_1 = "bg-indigo-300/50";

// Função para deixar visivel o mostrador dos desafios, e esconder o mostrador dos exercícios
function abrir_mostrador_mod_01_desafios() {
    // 1º escondemos o mostrador de exercícios, caso precise!!!
    // Primeiro obtem a classe com o estilo do mostrador de exercícios e armazena o seu valor
    const estilo_mod_1_exercicios = modulo_1_exercicios_mostrador.getAttribute("class");
    
    // Verifica se o estilo obtido do mostrador de exercícios é hidden
    if (!estilo_mod_1_exercicios.includes("hidden")) {
        // Como é block irá trocar por hidden
        // Deleta toda a classe do mostrador de exercícios
        modulo_1_exercicios_mostrador.removeAttribute("class");

        // Cria um novo estilo que subtitui block por hidden
        const novo_estilo_mod_1_exercicios = estilo_mod_1_exercicios.replace("block", "hidden");

        // Atribui o novo estilo a classe vazia do mostrador de exercícios
        modulo_1_exercicios_mostrador.setAttribute("class", novo_estilo_mod_1_exercicios);

        // Remove o estilo de cor de fundo da classe do botão dos exercícios
        modulo_1_exercicios_botao_mostrador.removeAttribute("class");
    }

    // 2º mostramos o mostrador de desafios, caso precise!!!
    // Primeiro obtem a classe com o estilo do mostrador de exercícios e armazena o seu valor
    const estilo_mod_1_desafios = modulo_1_desafios_mostrador.getAttribute("class");

    // Verifica se o estilo obtido do mostrador de desafios é block
    if (!estilo_mod_1_desafios.includes("block")) {
        // Como é hidden irá trocar para block
        // Deleta toda a classe do mostrador de desafios
        modulo_1_desafios_mostrador.removeAttribute("class");

        // Cria um novo estilo que subtitui hidden por block
        const novo_estilo_mod_1_desafios = estilo_mod_1_desafios.replace("hidden", "block");

        // Atribui o novo estilo a classe vazia do mostrador de desafios
        modulo_1_desafios_mostrador.setAttribute("class", novo_estilo_mod_1_desafios);

        // Adiciona uma nova cor de fundo no botão de desafios
        modulo_1_desafios_botao_mostrador.setAttribute("class", cor_do_fundo_do_botao_do_mod_1);
    }
}

// Função para deixar visivel o mostrador dos exercícios, e esconder o mostrador dos desafios
function abrir_mostrador_mod_01_exercicios() {
    // 1º escondemos o mostrador de desafios!!!
    // Primeiro obtem a classe com o estilo do mostrador de desafios e armazena o seu valor
    const estilo_mod_1_desafios = modulo_1_desafios_mostrador.getAttribute("class");

    // Verifica se o estilo obtido do mostrador de desafios é hidden
    if (!estilo_mod_1_desafios.includes("hidden")) {
        // Como é block irá trocar por hidden
        // Deleta toda a classe do mostrador de desafios
        modulo_1_desafios_mostrador.removeAttribute("class");
    
        // Cria um novo estilo que subtitui block por hidden
        const novo_estilo_mod_1_desafios = estilo_mod_1_desafios.replace("block", "hidden");
    
        // Atribui o novo estilo a classe vazia do mostrador de desafios
        modulo_1_desafios_mostrador.setAttribute("class", novo_estilo_mod_1_desafios);

        // Remove o estilo de cor de fundo da classe do botão dos desafios
        modulo_1_desafios_botao_mostrador.removeAttribute("class");
    }


    // 2º mostramos o mostrador de exercícios!!!
    // Primeiro obtem a classe com o estilo dos exercícios e armazena o seu valor
    const estilo_mod_1_exercicios = modulo_1_exercicios_mostrador.getAttribute("class");

    // Verifica se o estilo obtido do mostrador de exercícios é block
    if (!estilo_mod_1_exercicios.includes("block")) {
        // Como é hidden irá trocar para block
        // Deleta toda a classe do mostrador de exercícios
        modulo_1_exercicios_mostrador.removeAttribute("class");
    
        // Cria um novo estilo que subtitui hidden por block
        const novo_estilo_mod_1_exercicios = estilo_mod_1_exercicios.replace("hidden", "block");
    
        // Atribui o novo estilo a classe vazia do mostrador de exercícios
        modulo_1_exercicios_mostrador.setAttribute("class", novo_estilo_mod_1_exercicios);
        
        // Adiciona uma nova cor de fundo no botão de exercícios
        modulo_1_exercicios_botao_mostrador.setAttribute("class", cor_do_fundo_do_botao_do_mod_1);
    }

}   