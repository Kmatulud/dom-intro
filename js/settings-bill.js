let myCallTotalSettings = document.querySelector('.callTotalSettings');
let mySmsTotalSettings = document.querySelector('.smsTotalSettings');
let myTotalSettings = document.querySelector('.totalSettings');
let myCallCostSetting = document.querySelector('.callCostSetting');
let mySmsCostSetting = document.querySelector('.smsCostSetting');
let myWarningLevelSetting = document.querySelector('.warningLevelSetting');
let myCriticalLevelSetting = document.querySelector('.criticalLevelSetting');

let myBtn = document.querySelector('.btn');
let updateSettingsBtn = document.querySelector('.updateSettings');

const theSettingsBillFactory = SettingsBillFactory();
function updateFunction(){
    theSettingsBillFactory.setCallCost(myCallCostSetting.value) ;
    theSettingsBillFactory.setSmsCost(mySmsCostSetting.value);
    theSettingsBillFactory.setWarningLevel(myWarningLevelSetting.value);
    theSettingsBillFactory.setCriticalLevel(myCriticalLevelSetting.value);
    theSettingsBillFactory.setWarningLevel(myWarningLevelSetting.value);
    theSettingsBillFactory.setCriticalLevel(myCriticalLevelSetting.value);
}
updateSettingsBtn.addEventListener('click', updateFunction);


function settingsFunction(){
    let myBillItemTypeWithSettings = document.querySelector('.billItemTypeWithSettings:checked');
    if(myBillItemTypeWithSettings){
        theSettingsBillFactory.setRadioValue(myBillItemTypeWithSettings.value)
    }
    
    theSettingsBillFactory.getSmsCost();
    theSettingsBillFactory.getCallCost();

    if (theSettingsBillFactory.getRadioValue() === "call"){
        theSettingsBillFactory.updateCallTotal();
    }
    
    if (theSettingsBillFactory.getRadioValue() === "sms"){
        theSettingsBillFactory.updateSmsTotal();
    }


    mySmsTotalSettings.innerHTML =  theSettingsBillFactory.getSmsTotal().toFixed(2);
    myCallTotalSettings.innerHTML = theSettingsBillFactory.getCallTotal().toFixed(2);
    myTotalSettings.innerHTML = theSettingsBillFactory.getOverallTotal().toFixed(2);

    var checkLevels = theSettingsBillFactory.checkTheLevels();

    theSettingsBillFactory.getWarningLevel();
    theSettingsBillFactory.getCriticalLevel();
    myTotalSettings.classList.replace(myTotalSettings.className, checkLevels);
}
myBtn.addEventListener('click', settingsFunction);