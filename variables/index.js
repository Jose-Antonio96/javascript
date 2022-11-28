// let es para variables que pueden ser reasignadas
// const es para aquellas que no serán reasignadas
// var no es recomendado de usar

// strings, numbers, y booleans 

let firstName = "Lancy";
let age = 26;
let student = true;

console.log("Hello", firstName);
console.log("My age is", age);
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;