let grades = [100, 40, 50, 60, 62, 70];

grades = grades.sort(descendingSort);

grades.forEach(print);

function descendingSort(x, y){
    return y - x;
}

function print(element){
    console.log(element);
}

function ascendingSort(x, y){
    return x - y;
}