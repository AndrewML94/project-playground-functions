// Desafio 11
function generatePhoneNumber(numbers) {
  let conta = {};
  if (numbers.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  numbers.forEach((contar) => { conta[contar] = (conta[contar] || 0) + 1 });
  let valorMaximo = Math.max(...Object.values(conta));
  for (const key in conta) {
    if (key < 0 || key > 9 || valorMaximo >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let formatacao = '(' + numbers[0] + numbers[1] + ')' + ' ' + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + '-' + numbers[7] + numbers[8] + numbers[9] + numbers[10];
  return formatacao;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let soma1 = lineA + lineB;
  let soma2 = lineA + lineC;
  let soma3 = lineB + lineC;
  let absoluto1 = Math.abs(lineA, lineB);
  let absoluto2 = Math.abs(lineA, lineC);
  let absoluto3 = Math.abs(lineB, lineC);
  if (lineC < soma1 && lineC > absoluto1 || lineB < soma2 && lineB > absoluto2 || lineA < soma3 && lineA > absoluto3) {
    return true;
  }
    return false;
}

// Desafio 13
function hydrate(tomarAgua) {
  let numero = /\d+/g;
  let numeroString = tomarAgua.match(numero);
  let soma = 0;
  for (let index = 0; index < numeroString.length; index += 1) {
    soma += parseInt(numeroString[index]);
  }
  if (soma > 1) {
    return soma + ' copos de água';
  }
  return '1 copo de água';
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
