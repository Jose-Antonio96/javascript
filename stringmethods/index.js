// string properties and methods

let userName = "Bro Code";
let phonenumber ="123-456-7890";

console.log(userName.length);
console.log(userName.charAt(0));
//Character at a certain index

console.log(userName.indexOf("o"))

console.log(userName.lastIndexOf("o"))

userName = userName.trim();
//Remueve el espacio en blanco al principio y al final

userName = userName.toUpperCase();
userName = userName.toLowerCase();

phonenumber = phonenumber.replaceAll("-", "/")

console.log(userName);
console.log(phonenumber);