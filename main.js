
const um = document.getElementById("um");
const dois = document.getElementById("dois");
const tres = document.getElementById("tres");
const quatro = document.getElementById("quatro");
const cinco = document.getElementById("cinco");
const seis = document.getElementById("seis");
const sete = document.getElementById("sete");
const oito = document.getElementById("oito");
const nove = document.getElementById("nove");

let vezX = true;
let acabou = false;

let memClick = []; // ["um", "dois"]

function reset() {
  for (let i = 0; i < memClick.length; i++){
    if (memClick[i][1] == "X"){
      document.getElementById(memClick[i][0]).innerHTML = "";
    }
    else if (memClick[i][1] == "O") {
      document.getElementById(memClick[i][0]).innerHTML = "";
    }
  }
  memClick = [];
  acabou = false;
  vezX = true;
}

function verificador() { // verifica se houve vitória
  if ((um.textContent == dois.textContent && dois.textContent == tres.textContent && um.textContent != "") || 
  (quatro.textContent == cinco.textContent && cinco.textContent == seis.textContent && quatro.textContent != "") ||
  (sete.textContent == oito.textContent && oito.textContent == nove.textContent && sete.textContent != "") ||
  (um.textContent == quatro.textContent && quatro.textContent == sete.textContent && um.textContent != "") ||
  (dois.textContent == cinco.textContent && cinco.textContent == oito.textContent && dois.textContent != "") ||
  (tres.textContent == seis.textContent && seis.textContent == nove.textContent && tres.textContent != "") ||
  (um.textContent == cinco.textContent && cinco.textContent == nove.textContent && um.textContent != "") ||
  (tres.textContent == cinco.textContent && cinco.textContent == sete.textContent && tres.textContent != "")) {
    return true;
  } else {                  // saber se o jogo vai acabar
    return false;
  }

}

function clicouMeliante(event) { // lógica do click

 if (acabou == false) { // terminar o jogo se for true
  let elemento = event.target; // o que foi clicado

  for (let i = 0; i < memClick.length; i++) {
    if (memClick[i][0] == elemento.id) {
      return true;
    }
  }

  let symbolX = document.createTextNode("X"); // X
  let symbolO = document.createTextNode("O"); // O

  if (vezX == true) {
    elemento.innerHTML = "X";
    memClick.push([elemento.id, "X"]);
    vezX = false;
  } else {
    elemento.innerHTML = "O";      
    memClick.push([elemento.id, "O"]);
    vezX = true;
  }

  //[["um", "X"], ["dois", "O"]]

  console.log(memClick);
  acabou = verificador(); // chama verificador
  }
}

// procura um evento (click no caso) em sua respectiva box, e chama Função:
um.addEventListener("click", clicouMeliante);
dois.addEventListener("click", clicouMeliante);
tres.addEventListener("click", clicouMeliante);
quatro.addEventListener("click", clicouMeliante);
cinco.addEventListener("click", clicouMeliante);
seis.addEventListener("click", clicouMeliante);
sete.addEventListener("click", clicouMeliante);
oito.addEventListener("click", clicouMeliante);
nove.addEventListener("click", clicouMeliante);
