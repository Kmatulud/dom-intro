let myCallTotalTwo = document.querySelector('.callTotalTwo');
let mySmsTotalTwo = document.querySelector('.smsTotalTwo');
let myRadioBillAddBtn = document.querySelector('.radioBillAddBtn');
let myTotalTwo = document.querySelector('.totalTwo');


function RadioBillBtn(){
    const theRadioFactory = RadioFactory();
    let myBillItemTypeRadio = document.querySelector('.billItemTypeRadio:checked');
    theRadioFactory.checkCheckedBill(myBillItemTypeRadio.value.trim());

    let theCallTotal = theRadioFactory.callTotal();
    let theSmsTotal = theRadioFactory.smsTotal();
    let theTotal = theRadioFactory.overallTotal();
    let theLevels = theRadioFactory.checkAllLevels(theTotal);

    myCallTotalTwo.innerHTML = theCallTotal.toFixed(2);
    mySmsTotalTwo.innerHTML = theSmsTotal.toFixed(2);

    myTotalTwo.innerHTML = theTotal.toFixed(2);
    myTotalTwo.classList.replace(myTotalTwo.className, theLevels);
}
myRadioBillAddBtn.addEventListener('click', RadioBillBtn);