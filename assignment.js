// https://github.com/Joyontokarmakar/assignment_3


// kilometerToMeter Calculator
function kilometerToMeter(kilometer){
    if(kilometer>=0){ 
        var meter = kilometer*1000;
    }
    else{
        console.log("kilometer cannot be negative")
    }

    return meter;
}






// budget Calculator
function budgetCalculator(watch, phone, laptop){
    if(watch>=0 && phone>=0 && laptop>=0){
        var calculate = ((watch*50) + (phone*100) + (laptop*500));
    }
    else{
        console.log("Item number cannot be negative")
    }

    return calculate;
}






//hotelCost Calculator
var cost = 0;
function hotelCost(days){
    if(days<0){
        console.log("Number of Days cannot be negative");
    }
    else if(days >= 0 && days <= 10){
        cost = days*100;
    }
    else if( days > 10 && days <=20 ){
        var firstPhase = 10*100;
        var remainingDays = days - 10;
        var secondphase = remainingDays*80;
        cost = firstPhase + secondphase;
    }
    else{
        var firstPhase = 10*100;
        var secondphase = 10*80;
        var remainingDays = days - 20;
        var thirdPhase = remainingDays*50
        cost = firstPhase + secondphase + thirdPhase;
    }

    return cost;
}






// megaFriend large name finder array
function megaFriend(array){
    if(array.length === 0){
        console.log("empty");
    }
    else{
        var megaString = array[0].length;
        var result = array[0];
        for (var i = 1; i < array.length; i++) {
            var maxLength = array[i].length;
            if (maxLength > megaString) {
                result = array[i];
                megaString = maxLength;
            }
        }
    }

    return result;
}