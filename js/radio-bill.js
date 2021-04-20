// get a reference to the sms or call radio buttons
var myCallTotalTwo = document.querySelector('.callTotalTwo');
var mySmsTotalTwo = document.querySelector('.smsTotalTwo');
//get a reference to the add button
var myRadioBillAddBtn = document.querySelector('.radioBillAddBtn');
//create a variable that will keep track of the total bill
var myTotalTwo = document.querySelector('.totalTwo');
//add an event listener for when the add button is pressed
myRadioBillAddBtn.addEventListener('click', function(){
    var callsTotal = 0;
    var smsTotal = 0;
    var myBillItemTypeRadio = document.querySelector('.billItemTypeRadio:checked');
    var thisBillItemTypeRadio = myBillItemTypeRadio.value;
    if (thisBillItemTypeRadio === 'call'){
        callsTotal += 2.75;
    }
    else if (thisBillItemTypeRadio === 'sms'){
        smsTotal += 0.75;
    }else{
        alert('please make a selection!');
    }
    myCallTotalTwo.innerHTML = callsTotal.toFixed(2);
    mySmsTotalTwo.innerHTML = smsTotal.toFixed(2);
    var totalCost = parseFloat(myCallTotalTwo.innerHTML) + parseFloat(mySmsTotalTwo.innerHTML);
    myTotalTwo.innerHTML = totalCost.toFixed(2);
    
})
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
