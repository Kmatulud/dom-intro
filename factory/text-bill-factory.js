function TextBillFactory(){
    var CallTotal = 0;
    var SmsTotal = 0;
    var warning = 30;
    var critical = 50;

    function check(billTypeTextElem){
        var itemBillType = billTypeTextElem.trim();
        if(itemBillType === "call"){
            CallTotal += 2.75;
        }else if(itemBillType === "sms"){
            SmsTotal += 0.75;
        }
    }

    function getCallPriceTotal(){
        return CallTotal;
    }

    function getSmsPriceTotal(){
        return SmsTotal;
    }

    function getOverallTotal(){
        return SmsTotal + CallTotal;
    }

    function checkTheLevels(callSms){
        if(callSms >= critical){
            return "danger"
        }
        else if(callSms >= warning && callSms < critical){
            return "warning"
        }else{
            return 'myTotal';
        }  
    }

    return{
        check,
        getCallPriceTotal,
        getOverallTotal,
        getSmsPriceTotal,
        checkTheLevels
    }
}