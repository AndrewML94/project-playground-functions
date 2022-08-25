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
  let ultimoNome = nomes[nomes.length -1];
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
  for (let index = 0; index < numero.length; index +=1) {
    if (numero[index] === maior) {
      cont +=1;
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
function fizzBuzz(numero) {
  let palavra = []
  for (let index = 0; index < numero.length; index +=1) {
    if (numero[index] % 5 === 0 && numero[index] % 3 === 0) {
      palavra.push('fizzBuzz');
    }
    else if (numero[index] % 3 === 0) {
      palavra.push('fizz');
    }
    else if (numero[index] % 5 === 0) {
      palavra.push('buzz');
    }
    else {
      palavra.push('bug!');
    }
  }
  return palavra;
}

// Desafio 9
function encode(palavra1) {
  let troca1;
  troca1 = palavra1.replace(/a/g, '1').replace(/e/g, '2').replace(/i/g, '3').replace(/o/g, '4').replace(/u/g, '5');
  return troca1;
}
function decode(palavra2) {
  let troca2;
  troca2 = palavra2.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o').replace(/5/g, 'u');
  return troca2;
}

// Desafio 10
function techList(tecnologia, nome) {
  let resultado = [];
  let organização = tecnologia.sort();
  if (tecnologia.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < tecnologia.length; index +=1) {
    resultado.push({tech: organização[index], name: nome});
  }
  return resultado;
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
