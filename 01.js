/*
  01

  - Gere um novo array com apenas os números ímpares do array abaixo e exiba 
    o novo array no console.

  Dica: pesquise por remainder operator (%).
*/

const randomNumbers = [10, 30, 15, 25, 50, 40, 5]

function verificaNumbers(value) {
    return value % 2 != 0
}

const imparNumbers = randomNumbers.filter(verificaNumbers)

console.log(imparNumbers)


/* 
Quando eu devo usar o filter: 

Quando preciso de um novo array com a quantidade itens menor do q do array original
*/