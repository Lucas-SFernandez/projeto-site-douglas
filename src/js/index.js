const botoescarrossel = document.querySelectorAll('.botao');
const textos = document.querySelectorAll('.texto');


botoescarrossel.forEach((botao, indice) => {
  botao.addEventListener('click' , () => {

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

// _________________Carrossel2__________________

const botoescarrossel2 = document.querySelectorAll('.botao2');
const imagens = document.querySelectorAll('.imagem');


botoescarrossel2.forEach((botao2, indice) => {
  botao.addEventListener('click' , () => {

    desativarBotaoSelecionado();

    selecionarBotaoCarrossel(botao);

    esconderImagemAtiva();

    mostrarImagemDeFundo(indice);
  }) 
});

function mostrarImagemDeFundo(indice) {
  imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
  botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector('.ativa');
  imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector('.selecionado');
  (botaoSelecionado.classList.remove('selecionado'));
}