
let age = prompt("Enter your age :");
console.log("age :     ", age);

if (age >= 18 && age < 100) {
    console.log("can vote");
} else if (age < 18) {
    console.log("can't vote");
} else if (age >= 100) {
    console.log("you died");
}