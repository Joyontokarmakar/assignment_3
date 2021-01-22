// https://github.com/Joyontokarmakar/assignment_3


// kilometerToMeter Calculator
function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;
}
var input = kilometerToMeter(2);
console.log(input);






// budgetCalculator
function budgetCalculator(watch, phone, laptop){
    var calculate = ((watch*50) + (phone*100) + (laptop*500));
    return calculate;
}
var budget = budgetCalculator(2, 5, 1);
console.log(budget);






//hotelCost Calculator
var cost = 0;
function hotelCost(days){
    if(days<=10){
        cost = days*100;
    }

    else if(days<=20){
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
var totalCost = hotelCost(30);
console.log(totalCost);






// megaFriend Calculator
function megaFriend(array)
  {
    var megaString = array[0].length;
    var result = array[0];
    for (var i = 1; i < array.length; i++) {
        var maxLength = array[i].length;
        if (maxLength > megaString) {
            result = array[i];
            megaString = maxLength;
        }
    }
    return result;
}
console.log(megaFriend(["karim", "rahim", "salim", "Zalim", "akkas", "bilkis", "khandakar"]));

