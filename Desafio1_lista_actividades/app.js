//Crear una función que muestre "¡Hola, mundo!" en la consola.
function saludo(){
    console.log("¡Hola, mundo!")
}

//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function saludoParametro(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}

function llamarSaludo() {
    let nombre = document.getElementById("nombre").value;

    saludoParametro(nombre);
}

//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function duplicarNumero() {
    let numeroUsuario = document.getElementById("numero").value;
    let duplicado = numeroUsuario * 2;

    resultadoNumero(duplicado);
}

function resultadoNumero(duplicado) {
   let elementoHTML = document.getElementById("resultado");
   elementoHTML.innerHTML = `El doble es: ${duplicado}`;
}

//Crear una función que reciba tres números como parámetros y devuelva su promedio

function operacionPromedio() {
    const num1 = parseInt(document.getElementById("numero1").value);
    const num2 = parseInt(document.getElementById("numero2").value);
    const num3 = parseInt(document.getElementById("numero3").value);

    const promedio = promedioNumeros(num1, num2, num3);

    const elementoHTML = document.getElementById('resultadoPromedio');
    elementoHTML.innerHTML = `El promedio es: ${promedio}`;
}

function promedioNumeros(num1, num2, num3){
    return (num1 + num2 + num3) / 3;
}

//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos
function numeroMayor() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);

    const operacionMayor = operacionNumMayor(num1, num2);

    const elementoHTML = document.getElementById('resultadoNumeroMayor');
    elementoHTML.innerHTML = `El numero mayor es: ${operacionMayor}`;
}

function operacionNumMayor(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function numeroMultiplicado() {
    const numero = document.getElementById("numer1").value;

    const resultadoMultiplicar = operacionMultiplicar(numero);

    const elementoHTML = document.getElementById("resultadoMultiplicar");
    elementoHTML.innerHTML = `El número multiplicado por si mismo es ${resultadoMultiplicar}`;
}

function operacionMultiplicar(numero) {
    return numero * numero;
}