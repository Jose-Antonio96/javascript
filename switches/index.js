// statement that examines a value for a match against many case clases. More efficient than many "else if" statement

let grade = 65;

switch(true){
    case grade >=90:
        console.log("you did great!");
        break;
    case grade >=80:
        console.log("You did good!");
        break;
    case grade >=70:
        console.log("You did okay!");
        break;
    case grade >=60:
        console.log("You passed... barely");
        break;
    case grade >60:
        console.log("You fucked up!");
        break;
    default:
        console.log(grade, "is not a letter grade!");

}