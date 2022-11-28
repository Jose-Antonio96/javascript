// array.forEach() = executes a provided callback function once
// for each array element

let students = ["spongebob", "patrick", "squidward"];
students.forEach(capitalize);
students.forEach(print);
function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}
// substring() extracts parts of a string and returns the extracted parts in a new string.

function print(element){
    console.log(element);
}
// Solo necesitamos llamar a element para cambiar el índice de cada elemento a mayúscula

