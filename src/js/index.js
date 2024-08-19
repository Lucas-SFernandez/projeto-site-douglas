const botoescarrossel = document.querySelectorAll('.botao');
const textos = document.querySelectorAll('.texto');


botoescarrossel.forEach((botao, indice) => {
  botao.addEventListener('click', () => {

    desativarBotaoSelecionado();

    selecionarBotaoCarrossel1(botao);

    esconderTextoAtivo();

    mostrarTextoDeFundo(indice);
  })
});

function mostrarTextoDeFundo(indice) {
  textos[indice].classList.add('ativo');
}

function selecionarBotaoCarrossel1(botao) {
  botao.classList.add('selecionado');
}

function esconderTextoAtivo() {
  const textoAtivo = document.querySelector('.ativo');
  textoAtivo.classList.remove('ativo');
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector('.selecionado');
  (botaoSelecionado.classList.remove('selecionado'));
}

// _________________Carrossel2________________

const botoescarrosselt = document.querySelectorAll('.botaot');
const imagens = document.querySelectorAll('.imagem');


botoescarrosselt.forEach((botaot, indice) => {
  botaot.addEventListener('click', () => {

    desativarbotaotSelecionadot();

    selecionarBotaotCarrosselt(botaot);

    esconderImagemAtiva();

    mostrarImagemDeFundo(indice);
  })
});

function mostrarImagemDeFundo(indice) {
  imagens[indice].classList.add('ativa');
}

function selecionarBotaotCarrosselt(botaot) {
  botaot.classList.add('selecionadot');
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector('.ativa');
  imagemAtiva.classList.remove('ativa');
}

function desativarbotaotSelecionadot() {
  const botaotSelecionadot = document.querySelector('.selecionadot');
  (botaotSelecionadot.classList.remove('selecionadot'));
}