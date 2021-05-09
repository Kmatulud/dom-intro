function radioFactory(){
    var callPrice = 2.75;
    var smsPrice = 0.75;
    var theWarning = 30;
    var theCritical = 50;
    var totalCall = 0;
    var totalSms = 0;
    function checkCheckedBill(checkedRadio){
        if (checkedRadio === 'call'){
            totalCall += callPrice;
        }else if(checkedRadio === 'sms'){
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

    function checkAllLevels(theSum){
        if (theSum >= theWarning && theSum < theCritical){
            return 'warning';
        }else if (theSum >= theCritical){
            return 'danger';
        }else
        return myTotalTwo;
    }
    return {
        checkCheckedBill,
        callTotal,
        smsTotal,
        overallTotal,
        checkAllLevels
    }
}