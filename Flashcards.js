// Banco de dados base com todas as matérias e seus flashcards padrões
const bancoFlashcards = {
    portugues: [
        { frente: "O que é intertextualidade?", verso: "Relação entre dois ou mais textos que dialogam entre si (citação, paródia, paráfrase)." },
        { frente: "Função da linguagem predominante em propagandas?", verso: "Função conativa (ou apelativa), pois busca influenciar o leitor." },
        { frente: "O que é denotação?", verso: "Sentido literal, objetivo e direto da palavra." },
        { frente: "O que é conotação?", verso: "Sentido figurado, subjetivo e contextual da palavra." },
        { frente: "O que caracteriza gêneros digitais?", verso: "Uso de multimodalidade (texto, imagem, som) e linguagem informal/interativa." }
    ],
    literatura: [
        { frente: "O que é função poética da linguagem?", verso: "Foco na forma da mensagem, uso estético da linguagem (poemas, slogans)." },
        { frente: "O que é modernismo no Brasil (1ª fase)?", verso: "Movimento de ruptura com tradições, linguagem informal e nacionalismo crítico." },
        { frente: "O que é variação linguística?", verso: "Mudanças da língua conforme região, tempo, contexto social e situação." },
        { frente: "O que é coesão textual?", verso: "Ligação entre partes do texto por conectivos e referências." },
        { frente: "Diferença entre texto literário e não literário?", verso: "Literário usa linguagem subjetiva e estética; não literário é objetivo e informativo." }
    ],
    ingles: [
        { frente: "O que são cognatos em inglês/espanhol?", verso: "Palavras parecidas com o português e mesmo significado (ex: important/importante)." },
        { frente: "O que são falsos cognatos?", verso: "Palavras parecidas com o português, mas com significado diferente." },
        { frente: "O que é skimming?", verso: "Leitura rápida para entender ideia geral do texto." },
        { frente: "O que é scanning?", verso: "Leitura rápida para buscar informações específicas." },
        { frente: "Principal habilidade cobrada em inglês no ENEM?", verso: "Interpretação de texto, não tradução literal." }
    ],
    espanhol: [
        { frente: "O que são cognatos em espanhol?", verso: "Palavras parecidas com o português e mesmo significado (ex: importante)." },
        { frente: "O que são falsos cognatos?", verso: "Palavras parecidas com o português, mas com significado diferente (ex: embarazada = grávida)." }
    ],
    artes: [
        { frente: "O que é arte contemporânea?", verso: "Arte atual que mistura diferentes linguagens e questiona padrões." },
        { frente: "O que é cultura visual?", verso: "Estudo de imagens e como elas influenciam a sociedade." },
        { frente: "O que é expressão artística?", verso: "Forma de comunicar sentimentos, ideias e críticas por meio da arte." },
        { frente: "O que é estética na arte?", verso: "Estudo do belo e da percepção sensorial da obra." },
        { frente: "Função social da arte?", verso: "Refletir, criticar e transformar." }
    ],
    historia: [
        { frente: "O que foi a Revolução Industrial?", verso: "Processo de transformação econômica com mecanização da produção, surgido na Inglaterra no século XVIII." },
        { frente: "O que foi a Era Vargas?", verso: "Período em que Getúlio Vargas governou o Brasil (1930–1945 e 1951–1954), com centralização do Estado." },
        { frente: "O que foi a Idade Média?", verso: "Período histórico europeu entre os séculos V e XV, marcado pelo feudalismo." },
        { frente: "O que foi a Guerra Fria?", verso: "Conflito ideológico entre EUA (capitalismo) e URSS (socialismo) sem confronto direto." },
        { frente: "O que foi a abolição da escravidão no Brasil?", verso: "Processo finalizado em 1888 com a Lei Áurea, sem políticas de integração dos libertos." }
    ],
    geografia: [
        { frente: "O que é globalização?", verso: "Integração econômica, cultural e tecnológica entre países." },
        { frente: "O que é urbanização?", verso: "Crescimento das cidades e aumento da população urbana." },
        { frente: "O que é clima?", verso: "Conjunto de condições atmosféricas médias de uma região ao longo do tempo." },
        { frente: "O que é efeito estufa?", verso: "Fenômeno natural que mantém a Terra aquecida, intensificado pela ação humana." },
        { frente: "O que é geopolítica?", verso: "Relação entre poder político e espaço geográfico." }
    ],
    filosofia: [
        { frente: "O que é filosofia?", verso: "Estudo racional e crítico sobre a existência, conhecimento e valores." },
        { frente: "O que defendia Sócrates?", verso: "Conhecimento através do questionamento (maiêutica)." },
        { frente: "O que é ética?", verso: "Reflexão sobre o que é certo ou errado na conduta humana." },
        { frente: "O que é empirismo?", verso: "Teoria que afirma que o conhecimento vem da experiência." },
        { frente: "O que é iluminismo?", verso: "Movimento que valorizava a razão e criticava o absolutismo." }
    ],
    sociologia: [
        { frente: "O que é socialização?", verso: "Processo de aprendizagem das normas e valores sociais." },
        { frente: "O que é cultura?", verso: "Conjunto de valores, crenças e práticas de uma sociedade." },
        { frente: "O que é estratificação social?", verso: "Divisão da sociedade em classes ou camadas sociais." },
        { frente: "O que é anomia (Durkheim)?", verso: "Falta de normas claras na sociedade." },
        { frente: "O que é fato social?", verso: "Regras e normas externas que influenciam o comportamento individual." }
    ],
    biologia: [
        { frente: "O que é fotossíntese?", verso: "Processo em que plantas produzem glicose usando luz solar." },
        { frente: "O que é DNA?", verso: "Molécula que carrega a informação genética." },
        { frente: "O que é seleção natural?", verso: "Processo evolutivo em que os mais adaptados sobrevivem." },
        { frente: "O que são ecossistemas?", verso: "Conjunto de seres vivos e ambiente interagindo." },
        { frente: "O que é cadeia alimentar?", verso: "Relação de alimentação entre seres vivos." }
    ],
    quimica: [
        { frente: "O que é átomo?", verso: "Menor unidade da matéria que mantém suas propriedades." },
        { frente: "O que é ligação iônica?", verso: "Transferência de elétrons entre átomos." },
        { frente: "O que é pH?", verso: "Medida de acidez ou basicidade de uma solução." },
        { frente: "O que é reação química?", verso: "Transformação de substâncias em outras." },
        { frente: "O que é tabela periódica?", verso: "Organização dos elementos químicos." }
    ],
    fisica: [
        { frente: "O que é velocidade?", verso: "Relação entre deslocamento e tempo." },
        { frente: "O que é força?", verso: "Interação que pode alterar o movimento de um corpo." },
        { frente: "O que é energia cinética?", verso: "Energia associada ao movimento." },
        { frente: "O que é gravidade?", verso: "Força de atração entre corpos com massa." },
        { frente: "O que é eletricidade?", verso: "Movimento de cargas elétricas." }
    ],
    matematica: [
        { frente: "Qual a fórmula da área do círculo?", verso: "A = π × r²" },
        { frente: "O que é o Teorema de Pitágoras?", verso: "Em um triângulo retângulo: a² = b² + c² (Hipotenusa² = Soma dos catetos²)." },
        { frente: "O que representa a Porcentagem?", verso: "Razão de base 100 para indicar uma parte de um todo." },
        { frente: "O que é a Média Aritmética?", verso: "Soma de todos os valores dividida pela quantidade total de elementos." },
        { frente: "O que é uma Função do 1º Grau?", verso: "Função da forma f(x) = ax + b, cujo gráfico é uma reta." }
    ]
};

const nomesMaterias = {
    portugues: "Língua Portuguesa",
    literatura: "Literatura",
    ingles: "Inglês",
    espanhol: "Espanhol",
    artes: "Artes",
    historia: "História",
    geografia: "Geografia",
    filosofia: "Filosofia",
    sociologia: "Sociologia",
    fisica: "Física",
    quimica: "Química",
    biologia: "Biologia",
    matematica: "Matemática"
};

let materiaAtual = null;
let listaCards = [];
let indiceAtual = 0;
let exibindoVerso = false;

// 💾 Carrega os flashcards salvos no navegador do usuário
function carregarDoLocalStorage() {
    const dadosSalvos = localStorage.getItem('bancoFlashcardsAEDA');
    if (dadosSalvos) {
        Object.assign(bancoFlashcards, JSON.parse(dadosSalvos));
    }
}

// 💾 Salva a lista de flashcards atualizada no navegador
function salvarNoLocalStorage() {
    localStorage.setItem('bancoFlashcardsAEDA', JSON.stringify(bancoFlashcards));
}

function carregarMateria(chave) {
    materiaAtual = chave;
    if (!bancoFlashcards[chave]) {
        bancoFlashcards[chave] = [];
    }
    listaCards = bancoFlashcards[chave];
    indiceAtual = 0;
    exibindoVerso = false;

    document.getElementById("secaoMenu").style.display = "none";
    document.getElementById("secaoCriar").style.display = "none";
    document.getElementById("secaoEstudo").style.display = "block";

    document.getElementById("tituloMateria").textContent = "Flashcards: " + nomesMaterias[chave];

    atualizarCard();
}

function atualizarCard() {
    const textoDisplay = document.getElementById("textoCartao");
    const dicaVirar = document.getElementById("dicaVirar");
    const btnExcluir = document.getElementById("btnExcluir");
    const btnProximo = document.getElementById("btnProximo");

    // Lógica para lidar com matéria sem flashcards
    if (listaCards.length === 0) {
        textoDisplay.textContent = "Nenhum flashcard cadastrado para esta matéria ainda.";
        if (dicaVirar) dicaVirar.style.display = "none";
        if (btnExcluir) btnExcluir.style.display = "none";
        if (btnProximo) btnProximo.style.display = "none";
        return;
    }

    if (dicaVirar) dicaVirar.style.display = "block";
    if (btnExcluir) btnExcluir.style.display = "inline-block";
    if (btnProximo) btnProximo.style.display = "inline-block";

    const card = listaCards[indiceAtual];

    if (exibindoVerso) {
        textoDisplay.innerHTML = "<strong>Verso:</strong> " + card.verso;
    } else {
        textoDisplay.innerHTML = "<strong>Frente (" + (indiceAtual + 1) + "/" + listaCards.length + "):</strong> " + card.frente;
    }
}

function virarCartao() {
    if (listaCards.length === 0) return;
    exibindoVerso = !exibindoVerso;
    atualizarCard();
}

function proximoFlashcard() {
    if (listaCards.length === 0) return;
    exibindoVerso = false;
    indiceAtual = (indiceAtual + 1) % listaCards.length;
    atualizarCard();
}

function abrirCriadorGlobal() {
    document.getElementById("secaoMenu").style.display = "none";
    document.getElementById("secaoEstudo").style.display = "none";
    document.getElementById("secaoCriar").style.display = "block";
}

function adicionarFlashcard() {
    const materiaSelec = document.getElementById("selectMateriaCriar").value;
    const frenteInput = document.getElementById("novaFrente");
    const versoInput = document.getElementById("novoVerso");

    const frenteTexto = frenteInput.value.trim();
    const versoTexto = versoInput.value.trim();

    if (!frenteTexto || !versoTexto) {
        alert("Por favor, preencha tanto a frente quanto o verso do flashcard.");
        return;
    }

    if (!bancoFlashcards[materiaSelec]) {
        bancoFlashcards[materiaSelec] = [];
    }

    // Adiciona o novo card
    bancoFlashcards[materiaSelec].push({ frente: frenteTexto, verso: versoTexto });

    // Salva no armazenamento local
    salvarNoLocalStorage();

    frenteInput.value = "";
    versoInput.value = "";

    alert("Flashcard criado e salvo com sucesso!");

    // Abre a matéria atualizada
    carregarMateria(materiaSelec);
    indiceAtual = bancoFlashcards[materiaSelec].length - 1;
    atualizarCard();
}

// 🗑️ Exclui o cartão que está sendo visto na tela
function excluirFlashcardAtual() {
    if (listaCards.length === 0) return;

    const confirmacao = confirm("Tem certeza de que deseja excluir este flashcard?");
    if (!confirmacao) return;

    // Remove o cartão do array da matéria
    listaCards.splice(indiceAtual, 1);

    // Salva o novo banco no localStorage
    salvarNoLocalStorage();

    // Ajusta o índice para não apontar para uma posição inválida
    if (indiceAtual >= listaCards.length) {
        indiceAtual = Math.max(0, listaCards.length - 1);
    }

    exibindoVerso = false;
    atualizarCard();
}

function voltarAoMenu() {
    document.getElementById("secaoEstudo").style.display = "none";
    document.getElementById("secaoCriar").style.display = "none";
    document.getElementById("secaoMenu").style.display = "block";
}

// Inicializa a leitura dos dados gravados localmente
carregarDoLocalStorage();
