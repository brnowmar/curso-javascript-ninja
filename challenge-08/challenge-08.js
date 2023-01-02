/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
// ?
let sum = function calculateSum(number1, number2) {
  return number1 + number2;
}
/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
// ?
let value1 = 2;
let value2 = 4;
console.log('A soma de ' + value1 + ' e ' + value2 + ' é igual a ' + sum(value1, value2) + '.')
/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
// ?
console.log('O nome da função que faz a soma é ' + sum.name + '.')
/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
// ?
function showName() {
  return 'bruno loko';
}
/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
// ?
let varShowName = showName;
/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
// ?
console.log('A função ' + varShowName.name + ' retorna ' + varShowName() + '.')
/*
Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."
*/
// ?
function calculator(operator) {
  return function (firstNumber, secondNumber) {
    let result;

    switch (operator) {
      case '+':
        result = firstNumber + secondNumber;
        break;
      case '-':
        result = firstNumber - secondNumber;
        break;
      case '/':
        result = firstNumber / secondNumber;
        break;
      case '%':
        result = firstNumber % secondNumber;
        break;
      case '*':
        result = firstNumber * secondNumber;
        break;
      default:
        console.log('Operação inválida.')
        break;
    }

    return 'Resultado da operação: ' + firstNumber + ' ' + operator + ' ' + secondNumber + ' = ' + result + '.';
  }
}
/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
// ?
let simpleSum = calculator('+')
let simpleSubtraction = calculator('-')
let simpleMultiplication = calculator('*')
let simpleDivision = calculator('/')
let simpleMod = calculator('%')
/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
// ?
console.log(simpleSum(10, 20))
console.log(simpleSubtraction(10, 20))
console.log(simpleMod(10, 20))
console.log(simpleMultiplication(10, 20))
console.log(simpleDivision(10, 20))
/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/
// ?

/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/
// ?