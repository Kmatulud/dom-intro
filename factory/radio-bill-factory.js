function RadioFactory(){
    var callPrice = 2.75;
    var smsPrice = 0.75;
    var theWarning = 30;
    var theCritical = 50;
    var totalCall = 0;
    var totalSms = 0;

    function checkCheckedBill(myBillItemTypeRadio){
        if (myBillItemTypeRadio === 'call'){
            totalCall += callPrice;
        }else if(myBillItemTypeRadio === 'sms'){
            totalSms += smsPrice;
        }
    }

    function callTotal(){
        return totalCall
    }

    function smsTotal(){
        return totalSms;
    }

    function overallTotal(){
        return callTotal() + smsTotal();
    }

    function checkAllLevels(callSms){
        if (callSms >= theWarning && callSms < theCritical){
            return 'warning';
        }else if (callSms >= theCritical){
            return 'danger';
        }else
        return 'myTotalTwo';
    }
    
    return {
        checkCheckedBill,
        callTotal,
        smsTotal,
        overallTotal,
        checkAllLevels
    }
}