// Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function calcularMasaCorporal(altura, peso) {
    return peso / (altura * altura);
}
let altura = 1.78;
let peso = 70;
console.log(`La masa corporal es: ${calcularMasaCorporal(altura, peso)}`);

//Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function calculoFactorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calculoFactorial(numero - 1);
    }
}

let numero = 5;
console.log(`El calculo factorial de ${numero} es: ${calculoFactorial(numero)}`);

//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

function conversorDolar(dolar) {
    return (dolar * 4.80);
}

let dolar = 47;
let conversor = conversorDolar(dolar);
console.log(`El valor de $${dolar} dolares es equivalente a R$${conversor} reales. `);

// Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function calculadorAreaPerimetro(alto, ancho) {
    const area = alto * ancho;
    const perimetro = 2 * (alto + ancho);
    return (`El area: ${area} y su perimetro: ${perimetro}`);
}

let ancho = 25;
let alto = 50;
let resultado = calculadorAreaPerimetro(ancho, alto);
console.log(`El area y perimetro se calcularon con la anchura: ${ancho} y altura: ${alto}, resultado: ${resultado}.`)

//Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function calcularCirculo(radio) {
    const pi = 3.14;
    const area = pi * (radio * radio);
    const perimetro = 2 * pi * radio;
    return (`el area: ${area} y su perimetro: ${perimetro}.`);
}

let radio = 14;
let resultadoCirculo = calcularCirculo(radio);
console.log(`Según el valor radio: ${radio}, se calculo ${resultadoCirculo}`);

//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tablaMultiplicar(numero2) {
    for (var i = 1; i <= 12; i++) {
        const resultado = numero2 * i;
        console.log(numero2 + " x " + i + " = " + resultado);
    }
}

let numero2 = 3;
tablaMultiplicar(numero2);