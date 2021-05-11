function TextBillFactory(){
    var warning = 30;
    var critical = 50;
    var theCallPriceTotal = 0;
    var theSmsPriceTotal = 0;
    var CallCost = 2.75;
    var SmsCost = 0.75;
    function check(theBill){
        if (theBill === 'call'){
            theCallPriceTotal += CallCost;
        console.log(theCallPriceTotal)
        }if(theBill === 'sms'){
            theSmsPriceTotal += SmsCost;
            console.log(theSmsPriceTotal)

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

    function checkLevels(myTotal){
        console.log(myTotal)
        if (myTotal >= warning && myTotal < critical){
            return 'warning';
        }else if (myTotal >= critical){
            return 'danger';
        }else
        return 'totalOne';
    }
    return {
        check,
        getCallPriceTotal,
        getSmsPriceTotal,
        getOverallTotal,
        checkLevels
    }
}