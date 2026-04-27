function ejercicio1(pareas){
const meses = [ "Enero ", "Febrero ", "Marzo ", "abril ", "mayo ", "Junio ", "julio ", "agosto ", "septiembre ", "octubre ", "noviembre ", "diciembre " ]

 console.log(meses);
 
}
function ejercicio2(pareas){

var valores = [true, 5, false, "hola", "adios",
2];

var texto1 = valores[3];
var texto2 = valores[4];

var textoMayor = (texto1.length > texto2.length) ? texto1 : texto2;
console.log("El texto con mas caracteres es: " + textoMayor);

var bool1 = valores[0];
var bool2 = valores[2];

var resultadoTrue = bool1 || bool2;
var resultadoFalse = bool1 && bool2;
console.log("resultado True: " + resultadoTrue);
console.log("resultado False: " + resultadoFalse);

var num1 = valores[1];
var num2 = valores[5];

console.log("Suma: " + (num1 + num2));
console.log("Resta: " + (num1 - num2));
console.log("Multiplicacion: " + (num1  * num2))
console.log("Division: " + ( num1 / num2))
console.log("Modulo: " + (num1 % num2))}
function ejercicio3(pareas){

var numero1 = 5;
var numero2 = 8;
if(numero1 < numero2) {
console.log("numero1 no es mayor que numero2");
}
if(numero2 > 0) {
console.log("numero2 es positivo");
}
if(numero1 < 0 || numero2 != 0) {
console.log("numero1 es negativo o distinto de cero");
}
if(numero1 + 1 < numero2) {
console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}}
function ejercicio4(pareas){
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
'E', 'T'];

var NumeroDNI = parseInt(prompt("Introduce el numero de DNI: "));
var LetraDNI = prompt("Introduce la letra del DNI: ").toUpperCase();

if(NumeroDNI < 0 || NumeroDNI > 99999999){
alert("el numero proporcionado no es válido");
} else{
    var resto = NumeroDNI % 23
    var letraCalculada = letras[resto];


if(letraCalculada !== LetraDNI){
    alert("La letra que ha indicado no es correcta");
}
else{
    alert("El numero y la letra del DNI son correctos");
}

 }}
function ejercicio5(pareas){
let numero = 5
let factorial = 1

for  (let i =1; i <= numero; i++){
    factorial *=i;
}

console.log("El factorial de de 5 es:", {factorial} );}
function ejercicio6(pareas){
function determinarParImpar(numero){
    if (numero % 2 === 0){
        return "El numero es par"
    } else {
        return "el numero es impar"
    }
}
let resultado = determinarParImpar(234532432);
console.log(resultado)}
function ejercicio7(pareas){
function textoMayus(texto){
 
    if(texto === texto.toUpperCase()){
        return "El texto está en mayusculas"
    } else if(texto === texto.tolowercase()){
        return "El texto está en minusculas"
    } else{
        return "el texto está en mayusculas y en minusculas"
    }

    }
    console.log(textoMayus("TEXTO MATUSCULA"))
    console.log(textoMayus("minssss"))
    console.log(textoMayus("TEXTO minscula Y mayuscula"))}
function ejercicio8(pareas){
function palindromo(texto){
     let textoLimpio = texto.toLowerCase().replace(/ /g, "");

    let textoInvertido = textoLimpio.split("").reverse().join("");

    if(textoLimpio === textoInvertido){
        return "el texto es un palindromo"
    } else {
        return "el texto no es un palindromo"
    }
}
console.log(palindromo("anita lava la tina"))}
function ejercicio9(pareas){
function persona(nombre, edad, genero){
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
}

persona.prototype.obtDetalles = function() {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Género: ${this.genero}`)

}
 function estudiante(nombre, edad, genero, curso, grupo){
    persona.call(this, nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
 }

 estudiante.prototype = Object.create(persona.prototype);
 estudiante.prototype.constructor = estudiante;

 estudiante.prototype.registrar = function(){
    console.log(`Estudiante ${this.nombre} registrado en el curso ${this.curso}.`);
 }
 
 function profesor(nombre, edad, genero, asignatura, nivel){
    persona.call(this, nombre, edad, genero)
    this.asignatura = asignatura;
    this.nivel = nivel;
 }

  profesor.prototype = Object.create(persona.prototype);
  profesor.prototype.constructor = profesor;

  profesor. prototype.asignar = function(){
    console.log(`Profesor ${this.nombre} asignado a ${this.asignatura} (${this.nivel}).`)
  }

  const alumno = new estudiante ("lucas", 20, "masculino", "programacion", "A" );
  const profe = new profesor ("Ana", 45, "femenino", "Matematicas", "superior");

  alumno.obtDetalles();
  alumno.registrar();

  profe.obtDetalles();
  profe.asignar();}
function ejercicio10(pareas){
let resultados = new Array(13).fill(0);

for (let i=0; i < 36000; i++) {
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;

    let suma = dado1 + dado2;
    resultados[suma]++;

}

console.log("resultados de las 36,000 sumas:");
for(let s = 2; s <= 12; s++){
    console.log("suma " + s, ": aparecio", resultados[s], " veces")
}}