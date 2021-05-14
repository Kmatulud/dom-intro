var myBillTypeText = document.querySelector('.billTypeText');
var myAddButton = document.querySelector('.addToBillBtn');
var myCallTotal = document.querySelector('.callTotalOne');
var mySmsTotal = document.querySelector('.smsTotalOne');
var myTotal = document.querySelector('.totalOne');

const theTextBill = TextBillFactory();
function   textBillFunction(){
    theTextBill.check(myBillTypeText.value.trim());

    myCallTotal.innerHTML = theTextBill.getCallPriceTotal().toFixed(2);
    mySmsTotal.innerHTML = theTextBill.getSmsPriceTotal().toFixed(2);
    var overallTotal = theTextBill.getOverallTotal();
    var checkLevels = theTextBill.checkTheLevels(overallTotal);

    myTotal.innerHTML = overallTotal.toFixed(2);
    myTotal.classList.replace(myTotal.className, checkLevels);
}
myAddButton.addEventListener('click', textBillFunction);