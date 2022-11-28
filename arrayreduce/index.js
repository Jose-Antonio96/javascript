// array.reduce() = reduces an array to a single value

let prices = [21,1,3,52,2];
let total = prices.reduce(checkOut);

function checkOut(total, element){
    return total + element;
}

console.log(`The total is: $${total}`);