let x = Math.ceil(Math.random() * 6) + 1;
let y = Math.ceil(Math.random() * 6) + 1;
let z = Math.ceil(Math.random() * 6) + 1;

console.log(x);
console.log(y);
console.log(z);

document.getElementById("rollButton").onclick = function(){
     x = Math.ceil(Math.random() * 6) + 1;
     y = Math.ceil(Math.random() * 6) + 1;
     z = Math.ceil(Math.random() * 6) + 1;

     document.getElementById("xlabel").innerHTML = x;
     document.getElementById("ylabel").innerHTML = y;
     document.getElementById("zlabel").innerHTML = z;
}