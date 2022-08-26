// Desafio 11
function generatePhoneNumber(numbers) {
  let conta = {};
  if (numbers.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  numbers.forEach((contar) => {conta[contar] = (conta[contar] || 0) + 1})
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
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
