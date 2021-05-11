var myBillTypeText = document.querySelector('.billTypeText');
var myAddButton = document.querySelector('.addToBillBtn');
var myCallTotal = document.querySelector('.callTotalOne');
var mySmsTotal = document.querySelector('.smsTotalOne');
var myTotal = document.querySelector('.totalOne');


myAddButton.addEventListener('click', function(){
    const theTextBill = TextBillFactory();

    theTextBill.check(myBillTypeText.value.trim());

    myCallTotal.innerHTML = theTextBill.getCallPriceTotal().toFixed(2);
    mySmsTotal.innerHTML = theTextBill.getSmsPriceTotal().toFixed(2);
    var overallTotal = theTextBill.getOverallTotal();
    var checkTheLevels = theTextBill.checkLevels(overallTotal);

    myTotal.innerHTML = parseFloat(overallTotal).toFixed(2);
    myTotal.classList.replace(myTotal.className, checkTheLevels);
})