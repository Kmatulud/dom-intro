// get a reference to the sms or call radio buttons
var myCallTotalTwo = document.querySelector('.callTotalTwo');
var mySmsTotalTwo = document.querySelector('.smsTotalTwo');
//get a reference to the add button
var myRadioBillAddBtn = document.querySelector('.radioBillAddBtn');
//create a variable that will keep track of the total bill
var myTotalTwo = document.querySelector('.totalTwo');

var smsTotal = 0;
var callsTotal = 0;
function textBillTotal(){
    //get the value from the billItemTypeRadio radio buttons
    var myBillItemTypeRadio = document.querySelector('.billItemTypeRadio:checked');
    // get the value entered in the billType textfield
    var billTypeEntered = myBillItemTypeRadio.value.trim();
    //check if the value in the bill type textbox is 'sms' or 'call'
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
    myCallTotalTwo.innerHTML = callsTotal.toFixed(2);
    mySmsTotalTwo.innerHTML = smsTotal.toFixed(2);
    // * add the appropriate value to the running total
    var totalCost = parseFloat(myCallTotalTwo.innerHTML) + parseFloat(mySmsTotalTwo.innerHTML);
    // * display the latest total on the screen
    myTotalTwo.innerHTML = totalCost.toFixed(2);
    if (totalCost.toFixed(2) >= 30.00 && totalCost.toFixed(2) < 50.00){
        myTotalTwo.classList.add("warning");
        myTotalTwo.classList.remove("danger");
    }
    else if (totalCost.toFixed(2) >= 50.00){
        myTotalTwo.classList.add("danger");
        myTotalTwo.classList.remove("warning");
    }
    else{
        myTotalTwo.classList.remove("danger");
        myTotalTwo.classList.remove("warning");
    }
}
//add an event listener for when the add button is pressed
myRadioBillAddBtn.addEventListener('click', textBillTotal);