//  Template literals = delimited with (`)
// instead of double or single quotes allows embedded variables and expressions
//Flexible way to show output
let userName = "Lancy";
let items = 3;
let total = 75;

/*
console.log("Hello", userName);
console.log("You have", items, "items in your cart");
console.log("Your total is $", total);
*/
/*
console.log(`Hello ${userName}`);
console.log(`You have ${items} items in your cart`);
console.log(`Your total is $${total}`);
*/
let text =
`<p>Hello ${userName} 
<p>You have ${items} items in your cart
<p>Your total is $${total}`;

document.getElementById("myLabel").innerHTML = text;