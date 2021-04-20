// get a reference to the textbox where the bill type is to be entered
var myBillTypeText = document.querySelector('.billTypeText');
//get a reference to the add button
var myAddButton = document.querySelector('.addToBillBtn');
//create a variable that will keep track of the total bill
var myCallTotal = document.querySelector('.callTotalOne');
var mySmsTotal = document.querySelector('.smsTotalOne');
var myTotal = document.querySelector('.totalOne');
//add an event listener for when the add button is pressed
var callsTotal = 0;
var smsTotal = 0;
function textBillTotal(){
    
    // get the value entered in the billType textfield
    var billTypeEntered = myBillTypeText.value.trim();
    // update the correct total
    if (billTypeEntered === "call"){
        callsTotal += 2.75;
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }
    else{
        alert('input correct value');
    }
    
    //update the totals that is displayed on the screen.
    myCallTotal.innerHTML = callsTotal.toFixed(2);
    mySmsTotal.innerHTML = smsTotal.toFixed(2);

    var totalCost = parseFloat(myCallTotal.innerHTML) + parseFloat(mySmsTotal.innerHTML);
    myTotal.innerHTML = totalCost.toFixed(2);
}

myAddButton.addEventListener('click', textBillTotal);
    
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
