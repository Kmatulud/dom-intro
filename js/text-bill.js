// get a reference to the textbox where the bill type is to be entered
var myBillTypeText = document.querySelector('.billTypeText');
//get a reference to the add button
var myAddButton = document.querySelector('.addToBillBtn');
//create a variable that will keep track of the total bill
var myCallTotal = document.querySelector('.callTotalOne');
var mySmsTotal = document.querySelector('.smsTotalOne');
var myTotal = document.querySelector('.totalOne');

var callsTotal = 0;
var smsTotal = 0;
function textBillTotal(){ 
    // get the value entered in the billType textfield
    var billTypeEntered = myBillTypeText.value.trim();
    //check if the value in the bill type textbox is 'sms' or 'call'
    if (billTypeEntered === "call"){
        callsTotal += 2.75;
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }
    //update the totals that is displayed on the screen.
    myCallTotal.innerHTML = callsTotal.toFixed(2);
    mySmsTotal.innerHTML = smsTotal.toFixed(2);
    // * add the appropriate value to the running total
    var totalCost = parseFloat(myCallTotal.innerHTML) + parseFloat(mySmsTotal.innerHTML);
    // * display the latest total on the screen
    myTotal.innerHTML = totalCost.toFixed(2);
    if (totalCost.toFixed(2) >= 30.00 && totalCost.toFixed(2) < 50.00){
        myTotal.classList.add("warning");
        myTotal.classList.remove("danger");
    }
    else if (totalCost.toFixed(2) >= 50.00){
        myTotal.classList.add("danger");
        myTotal.classList.remove("warning");
    }
    else{
        myTotal.classList.remove("danger");
        myTotal.classList.remove("warning");
    }
}
//add an event listener for when the add button is pressed
myAddButton.addEventListener('click', textBillTotal);