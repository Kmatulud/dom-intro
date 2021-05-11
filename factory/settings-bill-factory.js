function SettingsBillFactory(){
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;
    var totalCallCost = 0;
    var totalSmsCost = 0;
    function setCallCost(callCost){
        theCallCost = callCost;
    }
    function getCallCost(){
        return theCallCost;
    } 

    function setSmsCost(smsCost){
        theSmsCost = smsCost;
    }
    function getSmsCost(){
        return theSmsCost;

    }

    function setWarningLevel(warningLevel){
        theWarningLevel = warningLevel;
    }
    function getWarningLevel(){
        return theWarningLevel;
    }
    function setCriticalLevel(CriticalLevel){
        theCriticalLevel = CriticalLevel;
    }
    function getCriticalLevel(){
        return theCriticalLevel;
    }
    function updateCallTotal(){
        if(!hasReachedCriticalLevel()){
            totalCallCost += theCallCost;
            console.log(totalCallCost);
        }
    }
    function getCallTotal(){
        return totalCallCost;
    }
    function updateSmsTotal(){
        if(!hasReachedCriticalLevel()){
            totalSmsCost += theSmsCost;
            console.log(totalSmsCost);
        }
    }
    function getSmsTotal(){
        return totalSmsCost;
    }
    function getOverallTotal(){
        return totalCallCost + totalSmsCost;
    }
    function hasReachedCriticalLevel(){
        getOverallTotal() >= getCriticalLevel()
    }
    function checkTheLevels(myTotalSettings){
        console.log(myTotalSettings);
        if(myTotalSettings >= getWarningLevel() && myTotalSettings < getCriticalLevel()){
            return 'warning'
        }if (hasReachedCriticalLevel){
            return 'danger';
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
        hasReachedCriticalLevel
    }
}