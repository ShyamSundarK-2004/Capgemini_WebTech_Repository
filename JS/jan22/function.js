
// //named function
// console.log("named function : ");
// function demo() {
//     console.log(
//         "this is a named function"
//     );
// }
// demo();

// //anonymous function
// console.log("anonymous function : ");
// let msg = function () {
//     // console.log("this is a anonymous function"); nothing returned so undefined
//     return "this is a anonymous function";
// }
// console.log(msg());

// //printing tables
// console.log("printing tables : ");
// let tables = function () {
//     var num = 2;
//     for (var i = 1; i <= 10; i++) {
//         console.log(num + " x " + i + " = " + (num * i));
//     }
//     return " ";
// }
// console.log(tables());


// //even or odd
// console.log("even or odd : ");
// let check_even_odd = function eveOrodd(num) {
//     if (num % 2 == 0) {
//         console.log("even number");
//     } else {
//         console.log("odd number");
//     }
// }
// check_even_odd();

// //Arrow function
// console.log("Arrow function :");
// let arrow = () => {
//     console.log("this is a arrow function");

// }
// arrow();

// let a = (str) => str;
// console.log(a("implicit return"));//implicit return

// let b = (str1, str2) => str1 + str2;
// console.log(b("java", "dev"), "- concatenating");
// let c = (str1, str2) => str1, str2;
// console.log(c("java", "dev"), "- if no () then return str1 ");
// let d = (str1, str2) => (str1, str2);
// console.log(d("java", "dev"), "- if () then return str2");


// //Nested function
// console.log("Nested function");

// function parent() {
//     let parentMoney = 1000;
//     function child() {
//         let childMoney = 200;
//         let total = parentMoney + childMoney;
//         return total;
//     }
//     return child();
// }
// console.log(parent());


// //nested function
// function parent() {
//     let amt = 1000;
//     function child() {
//         let childamt = 200;
//     }
//     child();
//     return amt + childamt;
// }
// console.log(parent());


// //callback function
// function print(str1, func) {
//     console.log("hello", str1);
//     func();
// }
// print("shyam", callback);

// function callback() {
//     console.log("this is call back function");
// }


// //higher order fucntion
// function college(name, dept) {
//     console.log("Hello,", name);
//     dept();
// }
// college("Shyam", deptname);

// function deptname(name) {
//     console.log("Dept :", name);
// }