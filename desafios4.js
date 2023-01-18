var carro = {
    marca : "honda",
    modelo : "203",
    placa : "287TRE",
    ano : 2010,
    cor : "azul",
    quantasPortas : 4,
    assentos : 5,
    quantidadeDePessoas : 0,
    mudarCor : function(novaCor){
        return carro.cor = novaCor;
    },
    obterCor : function(){
        return carro.cor;
    },
    obterModelo : function (){
        return carro.modelo;
    },
    obterMarca : function (){
        return carro.marca
    },
    obterMarcaEModelo : function (){
        return "esse carro é um " + carro.obterMarca() + " " + carro.obterModelo() + "."
    },
    addPessoas : function (pessoasQueVaoEntrar){
        if (carro.quantidadeDePessoas > carro.assentos) {
            var quantasPessoasCabem = carro.assentos - pessoasQueVaoEntrar;
            return "só cabem mais " + quantasPessoasCabem + " pessoas!"
        }
        
        if (carro.quantidadeDePessoas === carro.assentos && carro.quantidadeDePessoas >= carro.assentos) {
           
        return "o carro ja esta lotado!"
    };


    carro.quantidadeDePessoas += pessoasQueVaoEntrar;
    return "ja temos " + carro.quantidadeDePessoas + " pessoas no carro! "


    
    

       
    }

};

console.log(carro.obterMarcaEModelo())