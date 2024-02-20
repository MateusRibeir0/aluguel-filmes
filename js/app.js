// Criar função que mude o html quando clicar no botão, se tiver alugado dar opção de devolver, se não só alugar, deixando preto e branco
// Criar uma função que funcione para todos os jogos, não apenas um.
function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    // Criar variaveis que facilitem alterar a class no futuro
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeGame = gameClicado.querySelector('.dashboard__item__name');
    // Criar condicional que veja se o jogo esta alugado ou não observando a class dele.
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        alert(`Obrigado por devolver o jogo ${nomeGame.textContent}!`)
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
    
    console.log(contarElementosComClasse('dashboard__item__img--rented'));
}

// Criar função para contar quantos jogos estão alugados.

function contarElementosComClasse(classe) {
    let quantidadeAlugado = document.querySelectorAll('ul.dashboard__items .' + classe);
    return quantidadeAlugado.length;
}
