const sumar = require('./sumar.js');
//no modificar la línea superior

// ejemplo captura de datos del usuario
let number1 = parseFloat(prompt("Enter a number: "))
let number2 = parseFloat(prompt("Enter a number: "))

// la función sumar debe existir en el código
const resultadoSuma = sumar(number1, number2)

console.log("El resultado de la suma es :", resultadoSuma)

