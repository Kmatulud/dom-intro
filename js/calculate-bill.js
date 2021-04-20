//get a reference to the calculate button
var theButton = document.querySelector('.calculateBtn');
//get a reference to the billTotal element
var theBillTotal = document.querySelector('.billTotal');
//get a reference to the billString
var theBillstring = document.querySelector('.billString');
//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element
 function totalPhoneBill(callsMade){
   var newStr = callsMade.split(', ');
   var total1 = 0;
   var total2 = 0;
   for (var i = 0; i < newStr.length; i++){
     if (newStr[i].startsWith('c')){
       total1 += 2.75;
     }
     else if(newStr[i].startsWith('s')){
       total2 += 0.75;
     }
   }
   var result = total1 + total2; 
   return result.toFixed(2);
 }
//link the function to a click event on the calculate button
theButton.addEventListener('click', function(){
    var callsMade = theBillstring.value;   
    var totalBill = totalPhoneBill(callsMade);
    var roundedTotal = totalBill;
    theBillTotal.innerHTML = roundedTotal;
     if (theBillTotal >= 20.00){
        theBillTotal.classList.replace(theBillTotal.className, "warning");
    }
    // else if (theBillTotal >= 30.00){
    //     theBillTotal.classList.replace("danger");
    // }
    // else{
        
    // }
    // console.log(theBillTotal.classList);
})