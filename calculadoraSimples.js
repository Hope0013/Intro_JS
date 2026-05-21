// Calculadora Simples em JavaScript
// Usar a biblioteca Prompt Sync
var prompt = require("prompt-sync")(); //Import da biblioteca

//Funções de Cálculo

//Soma
function soma(a, b){
    return (a+b);
}
//Subtração
function subtracao(a, b){
    return(a-b);
}
//Divisão
function divisao(a, b){
    return(a/b);
}
//Múltiplicação
function multiplicacao(a, b){
    return(a*b);
}

//Menu
function menu(){
    let operacao;
    let numero1;
    let numero2;
    let resultado;
    console.log("===Calculadora Simples===");
    console.log("|1. Soma                |");
    console.log("|2. Subtração           |");
    console.log("|3. Divisão             |");
    console.log("|4. Múltiplicação       |");
    console.log("==========================")
    console.log("====Escolha a Operação====")
    operacao = prompt();
    numero1 = Number(prompt("Digite o 1º Número: "));
    numero2 = Number(prompt("Digite o 2º Número: "));
    switch (operacao) {
      case "1":
        resultado = soma(numero1, numero2);
        console.log("O resultado da conta é: " + resultado);
        break;

      case "2":
        resultado = subtracao(numero1, numero2);
        console.log("O resultado da conta é: " + resultado);
        break;

      case "3":
        if (numero2 == 0) {
          console.log("Não podemos dividir por zero! Escolha outro número.");
          resultado = null;
        } else {
        resultado = divisao(numero1, numero2);
        console.log("O resultado da conta é: " + resultado);
        }
        break;

      case "4":
        resultado = multiplicacao(numero1, numero2);
        console.log("O resultado da conta é: " + resultado);
        break;

      default:
        console.log("Escolha uma operação válida!")
        break;
    }
}
    
var continuar = true;
while (continuar){
    menu();
    let escolha = prompt("1. Continuar // 2. Sair");
    if (escolha == 2){
        continuar = false;
        console.log("Saindo...");
    }
}
