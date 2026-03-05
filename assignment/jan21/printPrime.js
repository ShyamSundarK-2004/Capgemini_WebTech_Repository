var num = prompt("Enter a number to check prime or not : ");


var i = 2;
var isPrime = true;

while (i < num) {
    if (num % i == 0) {
        isPrime = false;
        break;
    }
    i++;
}

if (isPrime) {
    console.log(num);
}
