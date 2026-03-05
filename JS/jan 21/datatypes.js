// primitive datatypes
console.log('Primitive Datatypes');

//number type
let number = 10;
console.log(number);
console.log(typeof number);

//String type
let str = "hello"
let str1 = 'a'
console.log(str);
console.log(str1);
console.log(typeof str);
console.log(typeof str1);

//boolean type
let bool = true;
console.log(bool);
console.log(typeof bool);

//null type
let a = null;
console.log(a);
console.log(typeof a);

//undefined type
let b;
console.log(b);
console.log(typeof b);

//symbol type
let sym = Symbol()
console.log(sym);
console.log(typeof sym);

//bigInt type
let bigInt = 21123456781234567898765432123456789009876543212345678987654321n;
console.log(bigInt);
console.log(typeof bigInt);

//bigInt with number
let num = 100;
// console.log(num + bigInt); this thorws error

//bigInt with boolean
let c = true;
// console.log(b + bigInt); throws error

let str2 = "bigint"
console.log(str2 + bigInt);//this works becoz it considers bigint as string


















