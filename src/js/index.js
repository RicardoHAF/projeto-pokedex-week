/* OBJETIVO 1- Ao clicar na seta de avançar, tem que aparecer o póximo cartão da lista.

    Passo 1- pegar o elemento HTML da seta avançar.
    Passo 2- saber quando o usuário clicar na seta avançar
    Passo 3- fazer aparecer o proximo cartao da lista
    Passo 4- buscar o cartao que esta selecionado e esconder

   OBJETIVO 2- Ao clicar na seta de voltar, tem que aparecer o cartão anterior da lista.

    Passo 1- pegar o elemento HTML da seta voltar.
    Passo 2- saber quando o usuário clicar na seta voltar
    Passo 3- fazer aparecer o cartao anterior da lista
    Passo 4- buscar o cartao que esta selecionado e esconder
*/

const btnAvancar = document.getElementById('btn-avançar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado')
    cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado')
}

btnAvancar.addEventListener('click', function (){
    if(cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);
});

btnVoltar.addEventListener('click', function (){

    if(cartaoAtual === 0) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);
});
