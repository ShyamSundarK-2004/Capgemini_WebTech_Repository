
var a = Number(prompt("enter a value for A : "));

var b = Number(prompt("enter a value for B : "));

var action = prompt("enter a action to perform (+,-,?,*) : ");

function add(a, b) {
    console.log(a + b);
}

function sub(a, b) {
    console.log(a - b);
}

function mul(a, b) {
    console.log(a * b);
}
function div(a, b) {
    console.log(a / b);
}

switch (action) {
    case "+":
        add(a, b);
        break;
    case "-":
        sub(a, b);
        break;
    case "*":
        mul(a, b);
        break;
    case "/":
        div(a, b);
        break;
    default:
        console.log("Not a proper action ");
}

function calculator(a, b, sym) {
    if (sym == "+") {
        console.log(a + b);
    }
}

calculator(10, 2, "+");