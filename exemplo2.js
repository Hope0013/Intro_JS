// Tipos de Operadores

// Operadores Aritiméticos (+ - * / %)

var a = 10;
var b = 3;
var c;

// Soma
c = a + b;
console.log("Soma: " + c);

// Subtração
c = a - b;
console.log("Subtração: " + c);

// Multiplicação
c = a * b;
console.log("Multiplicação: " + c);

// Divisão
c = a / b;
console.log("Divisão: " + c);

// Resto de Divisão
c = a % b;
console.log("Resto da Divisão: " + c);


// Operadores Relacionais (> < >= <= == === != !==)
var a = 10;
var b = 20;
var c = "20";

console.log("Relaconais: " +(a>b)); //false
console.log("Igualdade Simples: " +(b==c)) //true
console.log("Igualdade Estrita: " +(b===c)) //false

// Operadores Lógicos (&& - E, || - OU, ! - Não)
var nota1 = 5;
var nota2 = 8;

console.log("Aprovação: " +nota1>7 && nota2>7); //false
console.log("Aprovação: " +nota1>7 || nota2>7); //true
console.log("Negação: " +!true); //false