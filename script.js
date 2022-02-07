
let imgFront = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot" ];
let cartasEscolhidas = [];
let firstCard = null;
let secondCard = null;
let lockCard = false;
let numeroDeCartas = 0;
let ismatch = null;
let contador = 0;
let ponto = 0;

const clock = document.querySelector(".relogio")
let intervalo = null;

validarNumeroDeCartas ()

/* Validar o número de cartas e pegar do usuário o Número de Cartas para o jogo */

function validarNumeroDeCartas () {
    numeroDeCartas = prompt("Com quantas cartas você quer jogar? (Números Pares entre 4 e 14)" ); 

    while (numeroDeCartas < 4 || numeroDeCartas > 14 || numeroDeCartas % 2 !== 0) {
        numeroDeCartas = parseInt(prompt("Com quantas cartas você quer jogar? (Números Pares entre 4 e 14)")); 
   }
   preencherJogo(numeroDeCartas);
}

function preencherJogo(numeroDeCartas) {
   for (let i = 0; i < numeroDeCartas/2; i++) {
       cartasEscolhidas.push(imgFront[i]);
       cartasEscolhidas.push(imgFront[i]);
   }

   cartasEscolhidas.sort(comparador);


   let ul = document.querySelector("ul");
   for (let i = 0; i < numeroDeCartas; i++) {
       ul.innerHTML += `<li class="carta" data-identifier="carta" data-parrots="${cartasEscolhidas[i]}">
       <div class="back" data-identifier="back-face">
           <img src="./imagens/front.png" alt="parrot">
       </div>
       <div class="front" data-identifier="front-face">
           <img src="./imagens/${cartasEscolhidas[i]}.gif" alt="${cartasEscolhidas[i]}"
       </div>
   </li>`
   }
   const cartas = document.querySelectorAll(".carta");
   cartas.forEach(card => card.addEventListener("click", virarCarta));

   intervalo = setInterval(aumentarContagem, 1000);
   clock.innerHTML = 0;
}

/*Função para virar a carta ao clicar */

function virarCarta () {
    if (lockCard === true) {
        return false;
    }
  this.classList.toggle("virar");
  contador ++;

  if (firstCard === null){
      firstCard = this

      return false;
  }

    secondCard = this;
    
    checkForMatch()
}

function checkForMatch() {
   
    
    if (firstCard.dataset.parrots === secondCard.dataset.parrots) {
        ponto ++;
        console.log(ponto)
        ismatch = cleanCards ();
    } else {
        disableCards ()
    }

    console.log(numeroDeCartas);
    
    if (ponto === numeroDeCartas/2) {
        setTimeout(endGame, 1000)
    }
       
}

function removeFlip () {
    firstCard.classList.remove("virar");
    secondCard.classList.remove("virar");
    
    cleanCards ()
}

function disableCards () {
    lockCard = true;
    setTimeout(removeFlip, 1000)
}

function cleanCards () {
    firstCard = null;
    secondCard = null;
    lockCard = false;
}

function comparador() { 
	return Math.random() - 0.5; 
}

function endGame (){
    msg = prompt(`Parabéns, você ganhou em ${contador} jogadas, deseja jogar novamente? (Sim ou Não)?`)
    if (msg === "Sim"){
        numeroDeCartas = 0;
        contador = 0;
        ponto = 0;
        let ul = document.querySelector("ul");
        ul.innerHTML = "";
        cleanCards ()
        validarNumeroDeCartas ()
    }else {
        alert("Obrigado por jogar");
    }
}

function aumentarContagem () {
    if (endGame) {
        clearInterval(intervalo);
    } else {
        clock.innerHTML = parseInt(clock.innerHTML) + 1
    }
} 