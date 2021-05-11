function CalculateFactory(){
    let theCallsTotal = 2.75;
    let theSmssTotal = 0.75;
    let theWarningLevels = 20;
    let theCriticalLevels = 30;
    let theTotals = 0;
    function checkTheBill(billString){
       let theBillString = billString.split(',');
       for (var i = 0; i < theBillString.length; i++){
           let splitString = theBillString[i];
           if(splitString === 'call'){
               theTotals += theCallsTotal;
           }else if (splitString === 'sms'){
               theTotals += theSmssTotal;
           }
       }
    }
   
    function checkTheLevels(theTotals){
        if (theTotals >= theWarningLevels && theTotals < theCriticalLevels){
            return 'warning';
        }else if (theTotals >= theCriticalLevels){
            return 'danger';
        }else{
            return 'billTotal';
        }
    }
     function allTotals(){
        return theTotals;
    }
    
    return {
        checkTheBill,
        allTotals,
        checkTheLevels
    }
}