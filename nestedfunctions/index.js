// nested function = functions inside other functions.
//outer functions have access to inner functions
// inner functions are "hidden" from outside 
// used in closures (future video topic)

let userName = "Lancy";
let userInbox = 0;

login();

function login(){
    displayUserName();
    displayUserInbox();

    function displayUserName(){
        console.log(`Welcome ${userName}`);
    }
    
    function displayUserInbox(){
        console.log(`You have ${userInbox} new messages`);
    }
}

