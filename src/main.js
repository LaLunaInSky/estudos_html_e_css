// Elementos dos botões de desafios dos modulos 
const modulos_desafios_botoes_mostradores = [
    document.querySelector("#modulo_1_desafios_botao_mostrador"),
    document.querySelector("#modulo_2_desafios_botao_mostrador"),
    document.querySelector("#modulo_3_desafios_botao_mostrador"),
    document.querySelector("#modulo_4_desafios_botao_mostrador")
];

// Elementos dos botões de exercícios dos modulos
const modulos_exercicios_botoes_mostradores = [
    document.querySelector("#modulo_1_exercicios_botao_mostrador"),
    document.querySelector("#modulo_2_exercicios_botao_mostrador"),
    document.querySelector("#modulo_3_exercicios_botao_mostrador"),
    document.querySelector("#modulo_4_exercicios_botao_mostrador")
];

// Elementos dos mostradores de desafios dos modulos
const modulos_desafios_mostradores = [
    document.querySelector("#modulo_1_desafios_mostrador"),
    document.querySelector("#modulo_2_desafios_mostrador"),
    document.querySelector("#modulo_3_desafios_mostrador"),
    document.querySelector("#modulo_4_desafios_mostrador")
];

// Elementos dos mostradores de exercícios dos modulos
const modulos_exercicios_mostradores = [
    document.querySelector("#modulo_1_exercicios_mostrador"),
    document.querySelector("#modulo_2_exercicios_mostrador"),
    document.querySelector("#modulo_3_exercicios_mostrador"),
    document.querySelector("#modulo_4_exercicios_mostrador")
];

// Adiciona um evento de clique no botão de desafios do modulo 1
modulos_desafios_botoes_mostradores.map(adicionar_evento_de_clique_no_botão_desafios);

function adicionar_evento_de_clique_no_botão_desafios(btn) {
    btn.addEventListener("click", abrir_mostrador_do_modulo_selecionado_de_desafios, true);
}

// Adiciona um evento de clique nos botões de exercícios dos modulos
modulos_exercicios_botoes_mostradores.map(adicionar_evento_de_clique_no_botão_exercícios);

function adicionar_evento_de_clique_no_botão_exercícios(btn) {
    btn.addEventListener("click", abrir_mostrador_do_modulo_selecionado_de_exercicios, true);
}

// Difine a cor dos botões dos modulos clicados
const cores_de_fundo_dos_botoes_dos_modulos = [
    "bg-indigo-300/50",
    "bg-blue-300/50",
    "bg-amber-300/50",
    "bg-purple-300/50"
];

// Função para deixar visivel o mostrador dos desafios, e esconder o mostrador dos exercícios
function abrir_mostrador_do_modulo_selecionado_de_desafios(evento) {
    // Descobrindo o index do botão clicado
    const número_do_index_do_botão_clicado = Number(evento.currentTarget.getAttribute("id").replace("_desafios_botao_mostrador", "").replace("modulo_", "")) - 1;

    // 1º escondemos o mostrador de exercícios, caso precise!!!
    // Primeiro obtem a classe com o estilo do mostrador de exercícios e armazena o seu valor
    const estilo_do_modulo_de_exercicios_selecionado = modulos_exercicios_mostradores[número_do_index_do_botão_clicado].getAttribute("class");
    
    // Verifica se o estilo obtido do mostrador de exercícios é hidden
    if (!estilo_do_modulo_de_exercicios_selecionado.includes("hidden")) {
        // Como é block irá trocar por hidden
        // Deleta toda a classe do mostrador de exercícios
        modulos_exercicios_mostradores[número_do_index_do_botão_clicado].removeAttribute("class");

        // Cria um novo estilo que subtitui block por hidden
        const novo_estilo_do_modulo_de_exercicios_selecionado = estilo_do_modulo_de_exercicios_selecionado.replace("block", "hidden");

        // Atribui o novo estilo a classe vazia do mostrador de exercícios
        modulos_exercicios_mostradores[número_do_index_do_botão_clicado].setAttribute("class", novo_estilo_do_modulo_de_exercicios_selecionado);

        // Remove o estilo de cor de fundo da classe do botão dos exercícios
        modulos_exercicios_botoes_mostradores[número_do_index_do_botão_clicado].removeAttribute("class");
    }

    // 2º mostramos o mostrador de desafios, caso precise!!!
    // Primeiro obtem a classe com o estilo do mostrador de exercícios e armazena o seu valor
    const estilo_do_modulo_de_desafios_selecionado = modulos_desafios_mostradores[número_do_index_do_botão_clicado].getAttribute("class");

    // Verifica se o estilo obtido do mostrador de desafios é block
    if (!estilo_do_modulo_de_desafios_selecionado.includes("block")) {
        // Como é hidden irá trocar para block
        // Deleta toda a classe do mostrador de desafios
        modulos_desafios_mostradores[número_do_index_do_botão_clicado].removeAttribute("class");

        // Cria um novo estilo que subtitui hidden por block
        const novo_estilo_do_modulo_de_desafios_selecionado = estilo_do_modulo_de_desafios_selecionado.replace("hidden", "block");

        // Atribui o novo estilo a classe vazia do mostrador de desafios
        modulos_desafios_mostradores[número_do_index_do_botão_clicado].setAttribute("class", novo_estilo_do_modulo_de_desafios_selecionado);

        // Adiciona uma nova cor de fundo no botão de desafios
        modulos_desafios_botoes_mostradores[número_do_index_do_botão_clicado].setAttribute("class", cores_de_fundo_dos_botoes_dos_modulos[número_do_index_do_botão_clicado]);
    }
}

// Função para deixar visivel o mostrador dos exercícios, e esconder o mostrador dos desafios
function abrir_mostrador_do_modulo_selecionado_de_exercicios(evento) {
    // Descobrindo o index do botão clicado
    const número_do_index_do_botão_clicado = Number(evento.currentTarget.getAttribute("id").replace("_exercicios_botao_mostrador", "").replace("modulo_", "")) - 1;

    // 1º escondemos o mostrador de desafios!!!
    // Primeiro obtem a classe com o estilo do mostrador de desafios e armazena o seu valor
    const estilo_do_modulo_de_desafios_selecionado = modulos_desafios_mostradores[número_do_index_do_botão_clicado].getAttribute("class");

    // Verifica se o estilo obtido do mostrador de desafios é hidden
    if (!estilo_do_modulo_de_desafios_selecionado.includes("hidden")) {
        // Como é block irá trocar por hidden
        // Deleta toda a classe do mostrador de desafios
        modulos_desafios_mostradores[número_do_index_do_botão_clicado].removeAttribute("class");
    
        // Cria um novo estilo que subtitui block por hidden
        const novo_estilo_do_modulo_de_desafios_selecionado = estilo_do_modulo_de_desafios_selecionado.replace("block", "hidden");
    
        // Atribui o novo estilo a classe vazia do mostrador de desafios
        modulos_desafios_mostradores[número_do_index_do_botão_clicado].setAttribute("class", novo_estilo_do_modulo_de_desafios_selecionado);

        // Remove o estilo de cor de fundo da classe do botão dos desafios
        modulos_desafios_botoes_mostradores[número_do_index_do_botão_clicado].removeAttribute("class");
    }


    // 2º mostramos o mostrador de exercícios!!!
    // Primeiro obtem a classe com o estilo dos exercícios e armazena o seu valor
    const estilo_do_modulo_de_exercicios_selecionado = modulos_exercicios_mostradores[número_do_index_do_botão_clicado].getAttribute("class");

    // Verifica se o estilo obtido do mostrador de exercícios é block
    if (!estilo_do_modulo_de_exercicios_selecionado.includes("block")) {
        // Como é hidden irá trocar para block
        // Deleta toda a classe do mostrador de exercícios
        modulos_exercicios_mostradores[número_do_index_do_botão_clicado].removeAttribute("class");
    
        // Cria um novo estilo que subtitui hidden por block
        const novo_estilo_do_modulo_de_exercicios_selecionado = estilo_do_modulo_de_exercicios_selecionado.replace("hidden", "block");
    
        // Atribui o novo estilo a classe vazia do mostrador de exercícios
        modulos_exercicios_mostradores[número_do_index_do_botão_clicado].setAttribute("class", novo_estilo_do_modulo_de_exercicios_selecionado);
        
        // Adiciona uma nova cor de fundo no botão de exercícios
        modulos_exercicios_botoes_mostradores[número_do_index_do_botão_clicado].setAttribute("class", cores_de_fundo_dos_botoes_dos_modulos[número_do_index_do_botão_clicado]);
    }
}