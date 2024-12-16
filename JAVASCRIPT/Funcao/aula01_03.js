// Funções Simple

function calcularinc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarimc(inc) {
    if (inc < 18.5) {
        console.log('Abaixo do peso');
    } else if (inc >= 18.5 && inc < 25) {
        console.log('Peso narmal');
    } else if (inc >= 25 && inc < 30) {
        console.log('Acima do peso');
    } else if (inc >= 30 && inc < 40) {
        console.log('Obeso');
    } else {
        console.log('Obesedade Grave');
    }
}

// (main) significa codigo principal 

(function () {
    const peso = 75;
    const altura = 1.75;

    const inc = calcularinc(peso, altura);
    console.log(classificarimc(inc));
})();