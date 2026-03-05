
var num = prompt("Enter a number to reverse :");

let temp = num;
let rev = 0;
do {
    let rem = temp % 10;
    rev = rev * 10 + rem;
    temp = Math.floor(temp / 10);
} while (temp != 0);

console.log("Reversed Value is :", rev);