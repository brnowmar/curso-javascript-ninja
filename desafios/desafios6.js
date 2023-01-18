let championchip = "copa das americas"
console.log(championchip)
let team = ["flamengo", "fluminense", "palmeiras", "botafogo", "sao paulo"]

function showTeamPosition(position){
    if(position < 1 || position > 5) {
        return console.log("Não temos a informação do time que está nessa posição.")
    }
    return "O time que está em "+ position +"º lugar é o "+ team[position - 1] +""
};

console.log(showTeamPosition(1))
console.log(showTeamPosition(2))
console.log(showTeamPosition(3))
console.log(showTeamPosition(4))
console.log(showTeamPosition(5))

var num = 20;
while(num <= 30) {
    console.log(num);
    num++;
}

function convertToHex( color ) {
    let hexa;
    switch (color){
        case "red":
            hexa ="#FF0000" 
            console.log("O hexadecimal para a cor " + color + " é " + hexa);
            break;
        case "blue":
            hexa = "#0000FF"
            console.log("O hexadecimal para a cor " + color + " é " + hexa);
            break;
        case "green":
            hexa = "#00FF00"
            console.log("O hexadecimal para a cor " + color + " é " + hexa);
            break;
        case "yellow":
            hexa = "#FFFF00"
            console.log("O hexadecimal para a cor " + color + " é " + hexa);
            break;
        case "white":
            hexa = "#FFFFFF"
            console.log("O hexadecimal para a cor " + color + " é " + hexa);
            break;
            default : 
            console.log("Não temos o equivalente hexadecimal para " + color + ".")
        
    }
}

console.log(convertToHex("new"))
