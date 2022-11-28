let letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

let num = prompt("Please enter your DNI number");
let letter = prompt("Please enter your DNI letter");
letter = letter.toUpperCase();

if(num < 0 || num > 99999999){
    alert("Please enter your real DNI number")
    }
    else{
        let calculatedletter = letters[num % 23];
        //The number is divided by 23 and the remainder is replaced by a letter determined by it's position in the array, from 0 to 22.
        //For example, if the DNI number is 12345678, this, divided by 23 leaves a remainder of 14, therefore the letter is Z: 12345678Z.
        if(calculatedletter != letter) {
          alert("Letter or DNI number not correct");
        }
        else {
          alert("Letter and DNI number are correct");
        }
      }
