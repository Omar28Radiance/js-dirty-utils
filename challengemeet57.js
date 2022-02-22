

function suma(a, b) {
    return a + b;
}
console.log(`La suma es: ${suma(8, 4)}`);
console.log(`La suma es: ${suma(28, 14)}`);

function resta(a, b) {
    return a - b;
}
console.log(`La resta es: ${resta(8, 4)}`);
console.log(`La resta es: ${resta(28, 14)}`);

function multiplicacion(a, b) {
    return a * b;
}
console.log(`La multiplicación es: ${multiplicacion(8, 4)}`);
console.log(`La multiplicación es: ${multiplicacion(28, 14)}`);

function division(a,b) {
    return a / b;
}
console.log(`La division es: ${division(8, 4)}`);
console.log(`La division es: ${division(500, 5)}`);

function numberMax(a, b) {
    let numeroMayor = a > b ? a : b;
    console.log(`Numero mayor de ${a} y ${b} es : ${numeroMayor} `);
    return numberMax;
}

numberMax(39, 20);