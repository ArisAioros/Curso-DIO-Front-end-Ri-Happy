// Funções Simple

function incrementarjuros(valor, percentualjuros) {
    const valorDeAcrecimo = (percentualjuros / 100) * valor;
    return valor + valorDeAcrecimo;
}

console.log(incrementarjuros(100, 10));
console.log(incrementarjuros(100, 12));
console.log(incrementarjuros(100, 20));
console.log(incrementarjuros(198, 17.59));
