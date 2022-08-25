// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(nomes) {
  let primeiroNome = nomes[0];
  let ultimoNome = nomes[nomes.length-1];
  let virgula = ',';
  return ultimoNome.toString() + virgula + ' ' + primeiroNome.toString();
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = 0;
  let empate = 0;
  if (wins >= 1) {
    vitoria = wins * 3;
  }
  if (ties >= 1) {
    empate = ties * 1;
  }
  return vitoria + empate;
}

// Desafio 6
function highestCount(numero) {
  let maior = Math.max.apply(Math, numero);
  let cont = 0;
  for (let index = 0; index < numero.length; index+=1) {
    if (numero[index] === maior) {
      cont+=1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let posicao;
  if (mouse - cat1 > mouse - cat2) {
    posicao = 'cat1';
  }
  if (mouse - cat2 > mouse - cat1) {
    posicao = 'cat2';
  }
  if (mouse - cat1 === cat2 - mouse) {
    posicao = 'os gatos trombam e o rato foge';
  }
  return posicao;
}
// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
