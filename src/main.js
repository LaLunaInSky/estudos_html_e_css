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

/// - ///

// Elementos dos desafios dentro dos mostradores dos modulos
const elementos_dos_mostradores_dos_modulos_de_desafios = [
    document.querySelector("#modulo_1_desafios"),
    document.querySelector("#modulo_2_desafios"),
    document.querySelector("#modulo_3_desafios"),
    document.querySelector("#modulo_4_desafios")
];

// Total de desafios!!
let quantidade_de_desafios_dos_modulos = [
    [], [], [], []
];

// Define o início da variavel desafio
let desafio = 0;

// Cria um loop com o total de desafios e distribui os mesmos em cada modulo de acordo com o nescessário
while (desafio < 17) {
    desafio++;

    if (desafio < 10) {
        quantidade_de_desafios_dos_modulos[0].push(`d_00${desafio}`);
    } else if (desafio < 11) {
        quantidade_de_desafios_dos_modulos[1].push(`d_0${desafio}`);
    } else if (desafio < 16) {
        quantidade_de_desafios_dos_modulos[2].push(`d_0${desafio}`);
    } else if (desafio < 18) {
        quantidade_de_desafios_dos_modulos[3].push(`d_0${desafio}`);
    }
}

// Adiconando os desafios em cada elemento dos desafios dentro dos mostradores dos modulos
// Criando um map de cada elemento e mandando o mesmo elemento para uma funcção de distribuição
elementos_dos_mostradores_dos_modulos_de_desafios.map(distribuidor_de_desafios_para_cada_elemento);

// Uma função de distruição de desafios para cada elemento informado para a função
function distribuidor_de_desafios_para_cada_elemento(elemento) {

    // Armazena em uma variavel o número do modulo do elemento
    const número_do_modulo = Number(elemento.getAttribute("id").replace("modulo_", "").replace("_desafios", "")) - 1;

    // Cria um loop com o index de cada desafio baseado nos desafios armazenados na lista de quantidade_de_desafios_dos_modulos
    for (index_desafio in quantidade_de_desafios_dos_modulos[número_do_modulo]) {

        // Cria um novo elemento de um a
        const a = document.createElement("a");
        
        // Cria um textNode para o a com o nome do desafio obtido da lista quantidade_de_desafios_dos_modulos puxado pelo index obtido no loop
        const textNode_a = document.createTextNode(quantidade_de_desafios_dos_modulos[número_do_modulo][index_desafio]);

        // Adiciona a viarivel textNode_h5 como um novo filho da variavel a
        a.appendChild(textNode_a);

        // Adiciona o href no a
        a.setAttribute("href", `https://lalunainsky.com/estudos_html_e_css/estudos_iniciais/modulo_${número_do_modulo + 1}/desafios/${quantidade_de_desafios_dos_modulos[número_do_modulo][index_desafio]}/`);

        // Adiciona o target no a
        a.setAttribute("target", "_blank");

        // Adiciona a variavel h5 como novo filho do elemento
        elemento.appendChild(a);
    }
}

/// - ///

// Elementos dos exercícios dentro dos mostradores dos modulos
const elementos_dos_mostradores_dos_modulos_de_exercicios = [
    document.querySelector("#modulo_1_exercicios"),
    document.querySelector("#modulo_2_exercicios"),
    document.querySelector("#modulo_3_exercicios"),
    document.querySelector("#modulo_4_exercicios")
];

// Total de exercícios!!
let quantidade_de_exercicios_dos_modulos = [
    [], [], [], []
];

// Define o início da variavel exercicio
let exercicio = 0;

// Cria um loop com o total de exercícios e distribui os mesmos em cada modulo de acordo com o necessário
while (exercicio < 72) {
    exercicio++;

    if (exercicio < 23) {
        quantidade_de_exercicios_dos_modulos[0].push(exercicio < 10 ? `ex_00${exercicio}`: `ex_0${exercicio}`)
    } else if (exercicio < 37) {
        quantidade_de_exercicios_dos_modulos[1].push(`ex_0${exercicio}`);
    } else if (exercicio < 52) {
        quantidade_de_exercicios_dos_modulos[2].push(`ex_0${exercicio}`);
    } else if (exercicio < 73) {
        quantidade_de_exercicios_dos_modulos[3].push(`ex_0${exercicio}`);
    }
}

// Adicionando os exercícios em cada elemento dos exercícios dentro dos mostradores dos modulos
// Criando um map de cada elemento e mandando o mesmo elemento para uma funcção de distribuição
elementos_dos_mostradores_dos_modulos_de_exercicios.map(distribuidor_de_exercícios_para_cada_elemento)

// Uma função de distruição de exercícios para cada elemento informado para a função
function distribuidor_de_exercícios_para_cada_elemento(elemento) {
    
    // Armazena em uma variavel o número do modulo do elemento
    const número_do_modulo = Number(elemento.getAttribute("id").replace("modulo_", "").replace("_exercicios", "")) - 1;
    
    // Cria um loop com o index de cada exercício baseado nos exercícios armazenados na lista de quantidade_de_exercicios_dos_modulos
    for (index_exercicio in quantidade_de_exercicios_dos_modulos[número_do_modulo]) {

        // Cria um novo elemento de um a
        const a = document.createElement("a");

        // Cria um textNode para o a com o nome do exercício obtido da lista quantidade_de_exercicios_dos_modulos puxado pelo index obtido no loop
        const textNode_a = document.createTextNode(quantidade_de_exercicios_dos_modulos[número_do_modulo][index_exercicio]);

        // Adiciona a viarivel textNode_h5 como um novo filho da variavel a
        a.appendChild(textNode_a);

        // Adiciona href no a
        a.setAttribute("href", `https://lalunainsky.com/estudos_html_e_css/estudos_iniciais/modulo_${número_do_modulo + 1}/exercicios/${quantidade_de_exercicios_dos_modulos[número_do_modulo][index_exercicio]}/`);

        // Adiciona target no a
        a.setAttribute("target", "_blank");

        // Adiciona a variavel h5 como novo filho do elemento
        elemento.appendChild(a);
    }
}