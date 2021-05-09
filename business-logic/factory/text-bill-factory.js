function textBill(){
    var theCallPrice = 2.75;
    var theSmsPrice = 0.75;
    var warning = 30;
    var critical = 50;
    var theCallPriceTotal = 0;
    var theSmsPriceTotal = 0;
    function check(theBill){
        if (theBill === 'call'){
            theCallPriceTotal += theCallPrice;
        }else if(theBill === 'sms'){
            theSmsPriceTotal += theSmsPrice;
        }
    }
    function getCallPriceTotal(){
        return theCallPriceTotal;
    }

    function getSmsPriceTotal(){
        return theSmsPriceTotal;
    }
    function getOverallTotal(){
        return getCallPriceTotal() + getSmsPriceTotal();
    }

    function checkLevels(sum){
        if (sum >= warning && sum < critical){
            return 'warning';
        }else if (sum >= critical){
            return 'danger';
        }else
        return myTotal;
    }
    return {
        check,
        getCallPriceTotal,
        getSmsPriceTotal,
        getOverallTotal,
        checkLevels
    }
}