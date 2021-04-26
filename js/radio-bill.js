// get a reference to the sms or call radio buttons
var myCallTotalTwo = document.querySelector('.callTotalTwo');
var mySmsTotalTwo = document.querySelector('.smsTotalTwo');
//get a reference to the add button
var myRadioBillAddBtn = document.querySelector('.radioBillAddBtn');
//create a variable that will keep track of the total bill
var myTotalTwo = document.querySelector('.totalTwo');
myCallTotalTwo.innerHTML = 0.00.toFixed(2);
mySmsTotalTwo.innerHTML = 0.00.toFixed(2);
myTotalTwo.innerHTML = 0.00.toFixed(2);
var radioSmsTotal = 0;
var radioCallsTotal = 0;
function textBillTotal(){
    //get the value from the billItemTypeRadio radio buttons
    var myBillItemTypeRadio = document.querySelector('.billItemTypeRadio:checked');
    // get the value entered in the billType textfield
    var billType = myBillItemTypeRadio.value.trim();
    //check if the value in the bill type textbox is 'sms' or 'call'
    if (billType === "call"){
        radioCallsTotal += 2.75;
    }
    else if (billType === "sms"){
        radioSmsTotal += 0.75;
    }
    //update the totals that is displayed on the screen.
    myCallTotalTwo.innerHTML = radioCallsTotal.toFixed(2);
    mySmsTotalTwo.innerHTML = radioSmsTotal.toFixed(2);
    // * add the appropriate value to the running total
    var radioTotal = parseFloat(myCallTotalTwo.innerHTML) + parseFloat(mySmsTotalTwo.innerHTML);
    // * display the latest total on the screen
    myTotalTwo.innerHTML = radioTotal.toFixed(2);
    if (radioTotal.toFixed(2) >= 30.00 && radioTotal.toFixed(2) < 50.00){
        myTotalTwo.classList.add("warning");
        myTotalTwo.classList.remove("danger");
    }
    else if (radioTotal.toFixed(2) >= 50.00){
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