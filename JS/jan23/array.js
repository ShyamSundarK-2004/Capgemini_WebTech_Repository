
// //literal way of creating a array


// console.log(typeof (arr));

// //constructor way of creating a array

// let arr1 = new Array("java", 11, "java", "java", null, undefined, demo, "java");

// console.log(arr1[6]());

// function demo() {
//     console.log(111);
// }

// console.log(arr);


// let arr = [10, 20, 30, 40, 50];
// //creation 
// arr[5] = 123;
// //reading
// console.log(arr[3]);
// //updation
// let i = 100;
// arr[2] = i;
// //deletion
// console.log(delete (arr[1]));
// console.log(arr);


// let arr = [10, 20, 30, 40, 50];
//array methods static
// console.log(Array.isArray(arr));
// //instance methods
// arr.push(60);//add at the end
// console.log("push - ", arr);
// arr.pop();//remove at last
// console.log("pop - ", arr);
// arr.shift();//remove at first
// console.log("shift - ", arr);
// arr.unshift(100);//add at first
// console.log("unshift - ", arr);
// arr.splice(0, 2);//remove a specific part of array 
// console.log("splice remove speficic part- ", arr);
// arr.splice(0, 2, 90);
// console.log("splice remove specific part and replace element", arr);
// // console.log("includes - ", arr.includes(90));//check element present or not
// let arr1 = [100, 120, 123, 233, 448, 884, 993];
// console.log("concat - ", arr.concat(arr1));//combine two arrays
// let arr2 = ["array", "html", "css"];
// console.log("join - ", arr2.join());//join the array give as string 
// console.log(arr.reverse());//reverse a array
// let str = "hello world";
// console.log(str.split("").reverse().join(""));

let arr = [10, 20, 30, 40, 50, 60, 70];
//foreach
arr.forEach((ele) => console.log(ele));
arr.forEach((ele, ind, arr) => {
    console.log(ele, ind, arr);
})
//map
arr.map((ele) => {
    let newele = ele + 2
    console.log(newele);
})









