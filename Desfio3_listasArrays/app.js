/*
//Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
console.log(listaGenerica);

//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(lenguagesDeProgramacion);

//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
 lenguagesDeProgramacion.push('Java');
 lenguagesDeProgramacion.push('Ruby');
 lenguagesDeProgramacion.push('GoLang');
 //Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
 function mostrarLenguajes(){
    for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
        console.log(lenguagesDeProgramacion[i]);        
    }
 }
 mostrarLenguajes();

 //Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
 function mostrarLenguajes(){
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(lenguagesDeProgramacion[i]);        
    }
 }
 mostrarLenguajes();

 //Crea una función que calcule el promedio de los elementos en una lista de números.
 function calcularMedia(lista){
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma / lista.length;
 }

 let numeros = [10, 20, 30, 40, 50];
 let media = calcularMedia(numeros);
 console.log('Media: ', media);

 //Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
 function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > mayor) {
            mayor = lista[i];
        }
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }
    console.log('Mayor: ', mayor);
    console.log('Menor: ', menor);
}
let lista = [2, 122, 25, 5, 121];
encontrarMayorMenor(lista);

*/

//Crea una función que devuelva la suma de todos los elementos en una lista.
function sumaNumeros(lista){
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma;
}
let numerosSuma = [10, 20, 30, 40];
let resultado = sumaNumeros(numerosSuma);
console.log(resultado);

//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function mostrarElemento(lista, elemento){
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            return i;
        }
    } 
    return -1;
}
let elementoABuscar = 4;
let lista = [0, 1, 2, 3, 4]
let mostrarLista = mostrarElemento(lista, elementoABuscar);
console.log(mostrarLista);

//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumarListas(lista1, lista2){
    if (lista1.length !== lista2.length) {
        throw new Error("Las listas deben tener el mismo tamaño");
    }
    let resultado = [];

    for (let i = 0; i < lista1.length; i++) {
        resultado.push(lista1[i] + lista2[i]);
    }

    return resultado;
}

let lista1 = [1, 2, 3, 4, 10];
let lista2 = [5, 6, 7, 8, 9];
let suma = sumarListas(lista1, lista2);
console.log(suma);

