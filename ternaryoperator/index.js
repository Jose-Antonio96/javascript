// ternary operator = shortcut for an "if/else statement"
// Takes 3 operands
// 1. a condition with ?
// 2. expression if True :
// 3. expression if False

// condition ? exprIfTrue : expreIfFalse

/*
let adult = checkAge(21);
console.log(adult);

function checkAge(age){

    if(age >= 18){
        return true;
    }
    else{
        return false;
    }
}
*/

let adult = checkAge(12);
console.log(adult);

function checkAge(age){
    return age >= 18 ? true : false;
}

checkWinner(true);

function checkWinner(win){
    win ? console.log("You win!") : console.log("You lose!");
}