function SettingsBillFactory(){
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;
    var totalCallCost = 0;
    var totalSmsCost = 0;
    var radioValue;

    function setRadioValue(string){
        radioValue = string;
    }

    function getRadioValue(){
        return radioValue;
    }

    function setCallCost(callCost){
        theCallCost = parseFloat(callCost);
    }

    function getCallCost(){
        return theCallCost;
    } 

    function setSmsCost(smsCost){
        theSmsCost = parseFloat(smsCost);
    }

    function getSmsCost(){
        return theSmsCost;

    }

    function setWarningLevel(warningLevel){
        theWarningLevel = parseFloat(warningLevel);
    }

    function getWarningLevel(){
        return theWarningLevel;
    }

    function setCriticalLevel(CriticalLevel){
        theCriticalLevel = parseFloat(CriticalLevel);
    }

    function getCriticalLevel(){
        return theCriticalLevel;
    }

    function updateCallTotal(){
        if(!hasReachedCriticalLevel()){
            totalCallCost += theCallCost;
        }
    }

    function getCallTotal(){
        return totalCallCost;
    }

    function updateSmsTotal(){
        if(!hasReachedCriticalLevel()){
            totalSmsCost += theSmsCost;
        }
    }

    function getSmsTotal(){
        return totalSmsCost;
    }

    function getOverallTotal(){
        return getCallTotal() + getSmsTotal();
    }

    function hasReachedCriticalLevel(){
        return getOverallTotal() >= getCriticalLevel();
    }

    function checkTheLevels(){
        if (hasReachedCriticalLevel()){
            return 'danger';
        }
        else if(getOverallTotal() >= getWarningLevel() && getOverallTotal() < getCriticalLevel()){
            return 'warning';
        }else{
            return 'myTotalSettings';
        }
    }

    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        updateCallTotal,
        getCallTotal,
        updateSmsTotal,
        getSmsTotal,
        getOverallTotal,
        checkTheLevels,
        hasReachedCriticalLevel,
        setRadioValue,
        getRadioValue
    }
}