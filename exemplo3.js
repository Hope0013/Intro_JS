// Estrutura de Dados

// Condicionais (If/Else // Switch Case)

// If/ Else

var precoProduto = 150;
// Se o preço do produto for >=100 - Desconto de 10%

if (precoProduto >= 100) {
  console.log("Valor a pagar: " + precoProduto * 0.9);
} else {
  console.log("Valor a pagar: " + precoProduto);
}

// Condicional Intermediário (Else If)
// Se preco >200 15% de desconto | preço >100 10% de desconto | preço <100 sem desconto
var precoProduto = 250;

if (precoProduto >= 200) {
  console.log("Valor a pagar: " + precoProduto * 0.85);
} else if (precoProduto >= 100) {
  console.log("Valor a pagar: " + precoProduto * 0.9);
} else {
  console.log("Valor a pagar: " + precoProduto);
}

// Switch Case
var mes = 4;

switch (mes) {
  case 1:
    console.log("Janeiro");
    break;
  case 2:
    console.log("Fevereiro");
    break;
  case 3:
    console.log("Março");
    break;
  case 4:
    console.log("Abril");
    break;
  default:
    console.log("Outro Mês");
    break;
}

// Estrutura de Repetição

// For (contáveis)
for(let i=0; i<= 100; i++){
    console.log(i)
}

// While (incontáveis)
var continuar = true;
var numEscolhido = 3;
var contador = 0;

while (continuar){
    contador++;
    let numeroSorteado = Math.round(Math.random()*10);
    if (numeroSorteado == numEscolhido){
        continuar = false
        console.log("Acertou!")
        console.log("Tentativas = " +contador);
    }
}

// Funções (functions)
// Ações especificas que podem ser chamadas a qualquer momento dentro do código

function ola(nome){
    return "Olá, " +nome;
}
function hello(nome){
    console.log("Hello, " +nome)
}

// Chamando a function
console.log(ola("Ana"));
hello ("Ana");