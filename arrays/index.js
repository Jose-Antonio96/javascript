// variable that can store multiple elements

let fruits = ["apple", "orange", "banana"]; 

fruits[0] = "coconut"

fruits.push("lemon");
// this adds an element

fruits.pop();
// removes an element

fruits.unshift("mango"); 
// add element to the beginning

fruits.shift();
// removes element from beginning

let length = fruits.length;
let index = fruits.indexOf("kiwi");

console.log(fruits[0]);