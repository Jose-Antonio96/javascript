// function = define code once and use it many times
// To perform some code call the function name
startProgram();

function startProgram(){
    let userName = "Lancy";
    let age = 26;
    happyBirthday(userName, age);
}

function happyBirthday(a, b){
    console.log("Happy bday to you!");
    console.log("Happy bday to you!");
    console.log("Happy bday dear", a);
    console.log("Happy bday to you!");
    console.log("You are", b, "years old!");
}