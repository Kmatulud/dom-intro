var theBtn = document.querySelector('.calculateBtn');
var theBillTotal = document.querySelector('.billTotal');
var theBillstring = document.querySelector('.billString');


theBtn.addEventListener('click', function(){
    const theCalculateFactory = CalculateFactory();

    theCalculateFactory.checkTheBill(theBillstring.value.trim());
    let overallTotal = theCalculateFactory.allTotals();
    let classNameLevels = theCalculateFactory.checkTheLevels(overallTotal);

    theBillTotal.innerHTML =  overallTotal.toFixed(2);
    theBillTotal.classList.replace(theBillTotal.className, classNameLevels);
})