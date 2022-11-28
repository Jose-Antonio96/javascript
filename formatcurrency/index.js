//  tolocateString() = returns a string with a language
// sensitive representation of this number

// number.toLocaleString(locale, {options});

// "locale" = specify that language (undefined = default)
// "options" = objetc with formatting options like currency, percent, unit or measurement, etc

let myNum = 100;

//myNum = myNum.toLocaleString("en-US"); //US English
/*
console.log(myNum);

myNum = myNum.toLocaleString("hi-IN"); //Hindi

myNum = myNum.toLocaleString("de-DE"); //standard german
*/
/*
myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"})



myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"})
*/
//myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"})

//myNum = myNum.toLocaleString(undefined, {style: "percent"})

myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});

console.log(myNum);

//Celsius, Kilometers, grams, etc