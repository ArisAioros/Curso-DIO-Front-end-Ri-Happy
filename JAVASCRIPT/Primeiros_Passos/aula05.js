/* Faça um programa para calcular o valor de uma viagem.
Você terá 5 variavel. Sendo elas:
1 - Preço do etanol;
2 - preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por Km;
5 - Distância em Km da viagem;
Imprima no conlole o valor que será gasto para realizar esta viagem.
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distanciaEmkm = 100;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmkm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));

} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}