// extracts a section of a string and returns it as a new string without modifying the original

let fullName = "Bro Code";
let firstNameName;
let lastName;

//firstNameName = fullName.slice(0,3);
//lastName = fullName.slice(4);

//console.log(firstNameName);
//console.log(lastName);

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") +1);

console.log(firstName);
console.log(lastName);


