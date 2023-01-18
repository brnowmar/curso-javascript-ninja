
let arr = [1, true, 10.2, {b: 3, c: 4}, [1, 2, 3, 4, 5], function numeral(num){return num;}]

function addItem ( item ) {
    arr.push(item);
    return arr;
}

console.log(addItem(["ninja", 7, 12]))
console.log("O primeiro array tem " + arr.length +" itens.")
console.log("O segundo array tem "+ arr[6].length +" itens.")
console.log("O segundo elemento do segundo array é " + arr[6][1] + ".")
console.log(arr)

//  let counter2 = 20;
//  while(counter2 >= 20 && counter2 <= 31) {
//      counter2 % 2 === 1 ? console.log(counter2) : "";
//      counter2++;
//  }

// let counter3 = 0;
// while (counter3 <= 100) {counter3++;
//     counter3 % 2 !== 0 ? console.log(counter3) : "";
// }
let i = 100;
    for ( i <= 120; i % 2 === 0; i++ ) {
        console.log(i);
    }

