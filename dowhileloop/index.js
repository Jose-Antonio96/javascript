// do while loop = do something, then check condition, repeat if condition is true

let userName;

do{
    userName = window.prompt("Enter your name");
}while(userName == "")

console.log("Hello", userName);