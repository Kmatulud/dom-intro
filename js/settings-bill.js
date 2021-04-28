// get a reference to all the totals
var myCallTotalSettings = document.querySelector('.callTotalSettings');
var mySmsTotalSettings = document.querySelector('.smsTotalSettings');
var myTotalSettings = document.querySelector('.totalSettings');
myCallTotalSettings.innerHTML = 0.00.toFixed(2);
mySmsTotalSettings.innerHTML = 0.00.toFixed(2);
myTotalSettings.innerHTML = 0.00.toFixed(2);
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
var callTotal = 0;
var smTotal = 0;
var totals = 0;
//add an event listener for when the 'Update settings' button is pressed
function updateSettings(){
    callSetting = myCallCostSetting.value;
    smsSetting = mySmsCostSetting.value;
    warningSetting = myWarningLevelSetting.value;
    criticalSetting = myCriticalLevelSetting.value;
    myBtn.disabled = false;
}
updateSettingsBtn.addEventListener('click', updateSettings);

function addFunction(){
    
    //get the value from the billItemTypeRadio radio buttons
    var myBillItemTypeWithSettings = document.querySelector('.billItemTypeWithSettings:checked');
    // get the value entered in the billType textfield
    var billTypeEntered = myBillItemTypeWithSettings.value.trim();
    //check if the value in the bill type textbox is 'sms' or 'call'
    if (billTypeEntered === "call"){
        callTotal += parseFloat(callSetting);
    }
    else if (billTypeEntered === "sms"){
        smTotal += parseFloat(smsSetting);
    }
    
    //update the totals that is displayed on the screen.
    myCallTotalSettings.innerHTML = callTotal.toFixed(2);
    mySmsTotalSettings.innerHTML = smTotal.toFixed(2);
    // * add the appropriate value to the running total
    totals = parseFloat(myCallTotalSettings.innerHTML) + parseFloat(mySmsTotalSettings.innerHTML);
    // * display the latest total on the screen
    myTotalSettings.innerHTML = totals.toFixed(2);
     if (totals >= parseFloat(warningSetting).toFixed(2) && totals < parseFloat(criticalSetting).toFixed(2)){
        myTotalSettings.classList.add("warning");
        myTotalSettings.classList.remove("danger");
    }
    else if (totals >= parseFloat(criticalSetting).toFixed(2)){
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
myBtn.addEventListener('click', addFunction);