




// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function carzy(argumentOne, ArgumentTwo){
    return argumentOne + ArgumentTwo;
};

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
let newVar = carzy(10,2) + 5;

// Qual o valor atualizado dessa variável
console.log(newVar)

// Declare uma nova variável, sem valor.
let anonVar;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function newFunction(newValor){
    newValor = 'VALOR'
    return 'O valor da variável agora é ' + newValor
};
anonVar = newFunction();

// Invoque a função criada acima.

console.log(anonVar)
// Qual o retorno da função (Use comentários de bloco).
/* O retorno da funcção é:
'O valor da variável agora é VALOR, onde VALOR é uma variavel dentro da função newvar e pode ser trocada */ 

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function crazeFunction(valorOne, valorTwo, valorThree){
    if (!valorOne ||!valorTwo || !valorThree){
        return console.log('Preencha todos os valores corretamente!')
    }else{
        return (valorOne * valorTwo * valorThree) + 2;
    }
    
};

// Invoque a função criada acima, passando só dois números como argumento.
console.log(crazeFunction(2,4))

// Qual o resultado da invocação acima (Use comentários para mostrar o valor retornado).
//'Preencha os valores corretamente.'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(crazeFunction (2,4,6))

// Qual o resultado da invocação acima (Use comentários para mostrar o valor retornado).
//valor retornaro : 50;

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function testing(a, b, c){
    if (a !== undefined && b === undefined && c === undefined){
        return a;
    }
    else if (a !== undefined && b !== undefined && c === undefined){
        return a + b;
    }
    else if (a !== undefined && b !== undefined && c !== undefined){
        return (a+b)/c;
    }
    else if (a === undefined && b === undefined && c === undefined){
        return false;
    } else {
        return null;
    }
        
    
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

console.log(testing())
console.log(testing(5))
console.log(testing(5,10))
console.log(testing(5,10,15))