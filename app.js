// Variáveis globais
let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();

// Função para exibir texto na tela e, opcionalmente, falar
function exibirTextoNaTela(tag, texto, vozTrueOuFalse) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
o
    if (vozTrueOuFalse) {
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
    }
}

// Função que exibe a mensagem inicial
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto', false);
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10', true);
}

// Função para verificar o chute do usuário
function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativas = tentativas === 1 ? 'tentativa' : 'tentativas';
    let mensagemTentativas = `Descobriu o número secreto em ${tentativas} ${palavraTentativas}`;

    // Condições para verificar o chute
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você acertou!', true);
        exibirTextoNaTela('p', mensagemTentativas, true);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor', true);
    } else {
        exibirTextoNaTela('p', 'O número secreto é maior', true);
    }

    tentativas++;
    limparCampo();
}

// Função para gerar um número aleatório único entre 1 e 10
function gerarNumeroAleatorio() {
    let numero = Math.floor(Math.random() * 10) + 1;
    let quantidaDeElementosNaLIsta = listaDeNumerosSorteados.length;

    // Limpa a lista se já atingiu o limite de 10 números sorteados
    if (quantidaDeElementosNaLIsta === 10) {
        listaDeNumerosSorteados = [];
    }

    // Garante que o número sorteado seja único
    if (listaDeNumerosSorteados.includes(numero)) {
        return gerarNumeroAleatorio();
    }

    listaDeNumerosSorteados.push(numero);
    return numero;
}

// Função para limpar o campo de input
function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
