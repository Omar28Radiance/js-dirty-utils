
// function showNumber(number) {
//     console.log(`El número ingresado" es ${number}`);
// };

// function suma(a,b){
//     console.log (`La suma de ${a} mas ${b} es ${a+b}`)
// }
// suma(10,84)


// function resta(a,b){
//     console.log (`La resta de ${a} menos ${b} es ${a-b}`)
// }
// resta(15,5)

// const multiplicacion=(a,b)=> console.log(`La multiplicacion de ${a} por ${b} es ${a*b}`)

// multiplicacion(10,5)

// const division=(a,b)=> console.log(`La division de ${a} entre ${b} es ${a/b}`)

// division(100,25)

// function numberMax(a, b) {
//     let numeroMayor = a > b ? a : b;
//     console.log(`Numero mayor de ${a} y ${b} es : ${numeroMayor} `);
//     return numberMax;
// }

// numberMax(39, 20);
/** 
 * @description console.log fn wrapper
 * @param {*} msn 
*/
// const logger = (msn) => console.log(msn);

/** 
 * @description sum two intg
 * @param {Number} num1
 * @param {Number} num2 
*/
const add = (num1,num2) => logger(num1 + num2);

// add(1,2);
const getGreater = (a,b) => {
    const getNum = Math.max(a,b);
    logger(`the greater num is ${getNum}`);

    return getNum;
}

getGreater(200000,2000001);

//en la linea donde se ubica "let numeroMayor" este se le como: "si a es mayor a b, entonces retorna a y si no retorna b" y continuar desde minuto 23