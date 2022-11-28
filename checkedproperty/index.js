document.getElementById("myButton").onclick = function(){

    const myCheckBox = document.getElementById("myCheckBox")
    const visaBtn = document.getElementById("visaBtn")
    const masterCardBtn = document.getElementById("masterCardBtn")
    const paypalBtn = document.getElementById("paypalBtn")
    if(myCheckBox.checked){
        console.log("You are not subscribed!");
        }
        else{
            console.log("You are subscribed!");
        }

    if(visaBtn.checked){
            console.log("You are paying with Visa!");
        }
        else if(masterCardBtn.checked){
            console.log("You are paying with mastercard!");
        }
        else if(paypalBtn.checked){
            console.log("You are paying with paypal!");
        }
        else{
            console.log("You must select a payment type!");
    }
}