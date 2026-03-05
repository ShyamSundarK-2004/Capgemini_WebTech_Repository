
// let divContainer = document.getElementById("divContainer");
// // // console.log(divContainer);  // NUll
// divContainer.style.backgroundColor = "yellow";

// // getElementsByClassName return a collection
// let ParaContainer = document.getElementsByClassName("ParaContainer");
// console.log(ParaContainer);
// console.log(Array.isArray(ParaContainer));

// //accessing the element from getElementsByClassName by changing to array
// let newArr = Array.from(ParaContainer);
// console.log(Array.isArray(newArr));

// newArr.forEach((ele, index) => {
//     console.log(ele, index);
//     if (index % 2 != 0) {
//         ele.style.backgroundColor = "yellow";
//     } else {
//         ele.style.color = "red";
//     }
// });


//using element tagname
// let tag = document.getElementsByTagName("div");
// console.log(tag);

// Array.from(tag).forEach((ele, index) => {
//     console.log(ele);

//     ele.style.color = "red";
//     ele.style.fontSize = "30xp";
// });


//using query selector
// let tagname = document.querySelector("Para");
// console.log(tagname);
// tagname.style.color = "blue";
// let classname = document.querySelector(".ParaContainer");
// console.log(classname);
// classname.style.color = "red";
// let idname = document.querySelector("#ParaContainer");
// console.log(idname);

//queryselectorall 
// let selector = document.querySelectorAll("p");
// console.log(selector);

// selector.forEach((ele, index) => {
//     if (index % 2 != 0)
//         ele.style.color = "red"
//     else
//         ele.remove();
// });

// let para = document.getElementsByTagName("pre");
// console.log(para);
// para.innerText = "hello world";


//event listner 
let redcolor = document.getElementById('redcolor');
let bluecolor = document.getElementById('bluecolor');

redcolor.addEventListener('click', () => {
    document.body.style.color = "red";
});

bluecolor.addEventListener('click', () => {
    document.body.style.color = "blue";
});

//get input from input tag to console
let input = document.getElementById('input');
console.log(input);
input.addEventListener('input', (ele) => {
    console.log(ele.target.value);
})


let buttonid = document.getElementById('buttonid');
buttonid.addEventListener('click', () => {
    document.writeln("this form is submitted by : ")
})



