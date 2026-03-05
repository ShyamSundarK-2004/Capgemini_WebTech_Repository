var otp = "";
var i = 1;

do {
    var digit = Math.floor(Math.random() * 10);
    otp = otp + digit;
    i++;
} while (i <= 4);

console.log(otp);
