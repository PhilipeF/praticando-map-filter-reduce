/*
  02

  - Exiba no console quantos números abaixo de 501 o array abaixo possui.
*/

const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691]

// const numeroMenorQ501 = crazyNumbers.reduce((accumulator, crazyNumbers) => {
//   if (crazyNumbers < 501) {
//     return accumulator + 1
//   }  
//   return accumulator
// }, 0)

// console.log(numeroMenorQ501)

// Também poderia fazer assim 

const numeroMenorQ501 = crazyNumbers.reduce((accumulator, crazyNumbers) =>
  crazyNumbers < 501 ? accumulator + 1 : accumulator, 0)

  console.log(numeroMenorQ501)



