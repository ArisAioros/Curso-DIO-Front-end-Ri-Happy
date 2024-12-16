/*Operador de condicional if() {} */
const numero = 5;
const numeroDivixivelPor5 = (numero % 5) === 0;

if (numero === 0) {
    console.log('O númerio é invalido');
} else if (numero === 5) {
    console.log('O númerio é invalido')
} else if (numeroDivixivelPor5) {
console.log('Sim');
} else {
    console.log('Não');
}