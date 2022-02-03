let: numeroDeCartas = null;;

validarNumeroDeCartas ()

/* Validar o número de cartas e pegar do usuário o Número de Cartas para o jogo */

function validarNumeroDeCartas () {
    let numeroDeCartas = prompt("Com quantas cartas você quer jogar? (Números Pares entre 4 e 14)" ); 

    while (numeroDeCartas < 4 || numeroDeCartas > 14 || numeroDeCartas % 2 !== 0) {
        numeroDeCartas = parseInt(prompt("Com quantas cartas você quer jogar? (Números Pares entre 4 e 14)")); 
   }
}

/* Validar o número de cartas e pegar do usuário o Número de Cartas do jogo */


/*Função para virar a carta ao clicar */

const cartas = document.querySelectorAll(".carta");

function virarCarta () {
  this.classList.toggle("virar");
}

cartas.forEach(card => card.addEventListener("click", virarCarta));

/*Função para virar a carta ao clicar */