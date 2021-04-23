// get a reference to all the totals
var myCallTotalSettings = document.querySelector('.callTotalSettings');
var mySmsTotalSettings = document.querySelector('.smsTotalSettings');
var myTotalSettings = document.querySelector('.totalSettings');
// get refences to all the settings fields
var myCallCostSetting = document.querySelector('.callCostSetting');
var mySmsCostSetting = document.querySelector('.smsCostSetting');
var myWarningLevelSetting = document.querySelector('.warningLevelSetting');
var myCriticalLevelSetting = document.querySelector('.criticalLevelSetting');
//get a reference to the add button
var myBtn = document.querySelector('.btn');
//get a reference to the 'Update settings' button
var updateSettingsBtn = document.querySelector('.updateSettings')
// create a variables that will keep track of all the settings
var callSetting = 0;
var smsSetting = 0;
var warningSetting = 0;
var criticalSetting = 0;
// create a variables that will keep track of all three totals.
var callsTotal = 0;
var smsTotal = 0;
var total = 0;
//add an event listener for when the 'Update settings' button is pressed
function updateSettings(){
    callSetting = myCallCostSetting.value;
    smsSetting = mySmsCostSetting.value;
    warningSetting = myWarningLevelSetting.value;
    criticalSetting = myCriticalLevelSetting.value;
    myBtn.disabled = false;
    alert('settings updated!');
}
updateSettingsBtn.addEventListener('click', updateSettings);

function addSettings(){
    
    //get the value from the billItemTypeRadio radio buttons
    var myBillItemTypeWithSettings = document.querySelector('.billItemTypeWithSettings:checked');
    // get the value entered in the billType textfield
    var billTypeEntered = myBillItemTypeWithSettings.value.trim();
    //check if the value in the bill type textbox is 'sms' or 'call'
    if (billTypeEntered === "call"){
        callsTotal += parseFloat(callSetting);
    }
    else if (billTypeEntered === "sms"){
        smsTotal += parseFloat(smsSetting);
    }
    
    //update the totals that is displayed on the screen.
    myCallTotalSettings.innerHTML = callsTotal.toFixed(2);
    mySmsTotalSettings.innerHTML = smsTotal.toFixed(2);
    // * add the appropriate value to the running total
    var totalCost = parseFloat(myCallTotalSettings.innerHTML) + parseFloat(mySmsTotalSettings.innerHTML);
    // * display the latest total on the screen
    myTotalSettings.innerHTML = totalCost.toFixed(2);
    if (totalCost.toFixed(2) >= parseFloat(warningSetting).toFixed(2) && totalCost.toFixed(2) < parseFloat(criticalSetting).toFixed(2)){
        myTotalSettings.classList.add("warning");
        myTotalSettings.classList.remove("danger");
        console.log(warningSetting);
    }
    else if (totalCost.toFixed(2) === parseFloat(criticalSetting).toFixed(2)){
        myTotalSettings.classList.add("danger");
        myTotalSettings.classList.remove("warning");
        myBtn.disabled = true;
    }
    else{
        myTotalSettings.classList.remove("danger");
        myTotalSettings.classList.remove("warning");
    }
}
//add an event listener for when the add button is pressed
myBtn.addEventListener('click', addSettings);
// get a reference to the sms or call radio buttons
//add an event listener for when the add button is pressed
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
