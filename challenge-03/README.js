
// Declarar uma variável qualquer, que receba um objeto vazio.

let myNewVary = {};
/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
let pessoa = {
    nome : 'Bruno',
    sobrenome : 'silva',
    sexo : 'masculino',
    idade : 25,
    altura : 1.70,
    peso : 60,
    andando : false,
    caminhouQauntosMetros : 10,
    fazerAniversario : function(){
        return pessoa.idade += 1;
    },
    andar : function(metrosAcaminhar){
        pessoa.andando = true;
        return pessoa.caminhouQauntosMetros += metrosAcaminhar;
    },
    parar : function(){
        return pessoa.andando = false;
    },
    nomeCompleto : function(){
        return 'Olá! Meu nome é ' + pessoa.nome + ' ' + pessoa.sobrenome + '!'
    },
    mostrarIdade : function(){
        return 'Olá, eu tenho '+ pessoa.idade +' anos!' ;
    },
    mostrarAltura : function(){
        return 'Minha altura é '+pessoa.altura+'m.';
    },
    mostrarPeso : function(){
        return 'Eu peso ' + pessoa.peso + 'Kg.';
    },
    apresentacao : function(){
        let pluralDaIdade = 'anos';
        if(pessoa.idade <= 0){
            pluralDaIdade = 'ano'
        }; 
        let pluralDosMetros = 'metros';
        if(pessoa.caminhouQauntosMetros <= 0 ){
            pluralDosMetros = 'metro'
        }
        let sexoDaSentenca = 'a';
        if(pessoa.sexo === 'masculino'){
            sexoDaSentenca = 'o'
        }
        return 'Olá, eu sou ' + sexoDaSentenca +' '+ pessoa.nome + ' ' + pessoa.sobrenome +', tenho '+ pessoa.idade + ' ' + pluralDaIdade + ', '+ pessoa.altura + 'm, meu peso é ' + pessoa.peso+'kg e, só hoje, eu já caminhei '+ pessoa.caminhouQauntosMetros +' '+ pluralDosMetros + '!';
        
    }


}

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/


/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/


/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/


/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/


/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/


/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/


/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/


/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.nomeCompleto())

/*
Qual a idade da pessoa (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.mostrarIdade())// como podemos ver tenho 25 anos kkkkk

/*
Qual o peso da pessoa (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log(pessoa.mostrarPeso())// deu certo
/*
Qual a altura da pessoa (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.mostrarAltura())

/*
Faça a `pessoa` fazer 3 aniversários.
*/
//é só invocar no navegador pessoa.fazerAniversario() 3 vezes

/*
Quantos anos a `pessoa` tem agora (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
//resposta :  28

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
//resposta : pessoa.andar(10) pessoa.andar(10) pessoa.andar(10)

/*
A pessoa ainda está andando (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
//pessoa.andando() resposta true 

/*
Se a pessoa ainda está andando, faça-a parar.
*/
//pessoa.parar();

/*
E agora: a pessoa ainda está andando (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
// deu certo funciona o codigo e a pessoa para

/*
Quantos metros a pessoa andou (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
//30 metros

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/


// Agora, apresente-se ;)
console.log(pessoa.apresentacao())

