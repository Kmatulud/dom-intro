let myCallTotalSettings = document.querySelector('.callTotalSettings');
let mySmsTotalSettings = document.querySelector('.smsTotalSettings');
let myTotalSettings = document.querySelector('.totalSettings');
let myCallCostSetting = document.querySelector('.callCostSetting');
let mySmsCostSetting = document.querySelector('.smsCostSetting');
let myWarningLevelSetting = document.querySelector('.warningLevelSetting');
let myCriticalLevelSetting = document.querySelector('.criticalLevelSetting');

let myBtn = document.querySelector('.btn');
let updateSettingsBtn = document.querySelector('.updateSettings');


updateSettingsBtn.addEventListener('click', function(){
const theSettingsBillFactory = SettingsBillFactory();

    theSettingsBillFactory.setCallCost(myCallCostSetting.value) ;
    theSettingsBillFactory.setSmsCost(mySmsCostSetting.value);
    theSettingsBillFactory.setWarningLevel(myWarningLevelSetting.value);
    theSettingsBillFactory.setCriticalLevel(myCriticalLevelSetting.value);
})


myBtn.addEventListener('click', function(){
const theSettingsBillFactory = SettingsBillFactory();


    let myBillItemTypeWithSettings = document.querySelector('.billItemTypeWithSettings:checked');

    theSettingsBillFactory.updateCallTotal(myBillItemTypeWithSettings.value);
    theSettingsBillFactory.updateSmsTotal(myBillItemTypeWithSettings.value);
    theSettingsBillFactory.getOverallTotal(myBillItemTypeWithSettings.value);

    let getCallCost = theSettingsBillFactory.getCallCost();
    let getSmsCost = theSettingsBillFactory.getSmsCost();
    let getTotal = theSettingsBillFactory.getOverallTotal();
    let setTheLevels = theSettingsBillFactory.checkTheLevels();

    myCallTotalSettings.innerHTML = getCallCost.toFixed(2);
    mySmsTotalSettings.innerHTML = getSmsCost.toFixed(2);

    myTotalSettings.innerHTML = getTotal.toFixed(2); 
    myTotalSettings.classList.replace(myTotalSettings.className, setTheLevels);
})