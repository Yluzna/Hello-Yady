//prompt ("dime tu nombre")
console.log('Hola mundo')
let nombre = 'Viviana'
console.log(nombre)

let a = 20;
let b = 15;

console.log (a + b)

var miListaDeCompras =[["cereal", 3], ["leche", 2], ["galletas", 4], ["pan", 3,], ["refresco", 7]];
//cereal
console.log(" voy a comprar " + miListaDeCompras [0][1] + " unidades de " + miListaDeCompras [0][0]+ ".");
//leche
console.log(" voy a comprar " + miListaDeCompras [1][1] + " unidades de " + miListaDeCompras [1][0]+ ".");
//galletas
console.log(" voy a comprar " + miListaDeCompras [2][1] + " unidades de " + miListaDeCompras [2][0]+ ".");
//pan
console.log(" voy a comprar " + miListaDeCompras [3][1] + " unidades de " + miListaDeCompras [3][0]+ ".");
//refresco
console.log(" voy a comprar " + miListaDeCompras [4][1] + " unidades de " + miListaDeCompras [4][0]+ ".");

function mostrarMensaje() {
    console.log ("¡hola, mundo!");
}
function mostrarMensaje();
function mostrarMensaje();
function mostrarMensaje();
function mostrarMensaje();

function concatenarTresCadenas(cadena1, cadena2, cadena3) { console.log (cadena1 + ""+ cadena 2+ ""+ cadena3)}
concatenarTresCadenas("Estoy", "aprendiendo", "a programar");

//R 1 
let Greeting ="¡feliz cumpleaños pepita!"
console.log(Greeting)

let fruits ["mango", "pera", ""];

let filteredGreetings = Greetings.filter(salut =>{
    return salut == "Happy birthday Pepita"
    console.log(filteredGreetings)
}
//R1 

function felicitarCumpleaños(idioma) {
    switch (idioma.toLowerCase()) {
        case 'español':
            return '¡feliz cumpleaños pepita! 🎉🥳🎂';
        case 'inglés':
            return 'Happy birthday! Pepita 🎉🥳🎂';
        case 'alemán':
            return 'Alles Gute zum Geburtstag, Pepita! 🎉🥳🎂';
        default:
            return '🎉🎈🍰 ¡Feliz día! 🍰🎈🎉';
    }
}


console.log(felicitarCumpleaños('español'));
console.log(felicitarCumpleaños('inglés'));
console.log(felicitarCumpleaños('alemán'));
console.log(felicitarCumpleaños('francés'));




 // R 2
function rollDice(){
    return Math.floor(Math.random () * 6) +1;
}
var total = rollDice();
console.log (total);


// R 3

function tablaMultiplicar(numero){
    for(let i = 1; i <= 10; i++) {
       let resultado = numero * i;
       console.log (numero + " x " + i)
  }
}

tablaMultiplicar(4)

//R4
const sleepsheep = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, false];

function contarOvejas(sheepArray) {
    let contador = 0;

    for (let i = 0; i < sheepArray.length; i++) {
        if (sheepArray[i] === true) {
            contador++;
        }
    }

    return contador;
}

const cantidadOvejasDormidas = contarOvejas(sleepsheep);
console.log("Cantidad de ovejas dormidas: " + cantidadOvejasDormidas);