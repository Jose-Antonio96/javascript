// Type conversion = change the datatype of a value to another 
// STrings, numbers or booleans
/*
let age = window.prompt("How old are you?");

console.log(typeof age);
age = Number(age);
age += 1;

console.log("happy birthday! You are", age, "years old");
//Si solo se le añade un número, lo concatena. 21 sería 211
*/
let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z =Boolean("pizza");
//Si está en blanco da falso, sino da verdadero. Útil para obligar user input
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

