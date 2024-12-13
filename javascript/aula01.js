/* Faça um programa para calcular o valor de uma viagem.
Você terá 3 variáveis, sendo elas:
1- Preço do combustível;
2- Gasto médio de combustível do carro por KM;
3- Distância em KM da viagem;
*/

const preçoCombustivel = 5.79;
const KmPorLitros = 12;
const distanciaEmKm = 1580;

const lintrosConsumidos = distanciaEmKm / KmPorLitros;
const valorGasto = lintrosConsumidos * preçoCombustivel;
console.log(valorGasto.toFixed(2));