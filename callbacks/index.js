// callbacks = a function passed as an argument to another function
// Ensures a function is not going to run before a task is completed
// Example: wait for a life to load

sum(2, 3, displayConsole);

function sum(x, y , callback){
    let result = x + y;
    callback(result);
}

function displayConsole(output){
    console.log(output);
}

function displayDOM(output){
    document.getElementById("myLabel").innerHTML = output;
}

//Tenemos dos funciones. Estas dos ultimas van a funcionar DESPUES
// de la funcion sum. Llamamos a la función sum para hacer funcionar esto
// y entre parentesis ponemos el nombre de la función que queremos hacer esperar
