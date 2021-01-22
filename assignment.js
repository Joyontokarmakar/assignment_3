// function kilometerToMeter(kilometer){
//     var meter = kilometer*1000;
//     return meter;
// }

// var input = kilometerToMeter(2);
// console.log(input);



function budgetCalculator(watch, phone, laptop){
    var calculate = ((watch*50) + (phone*100) + (laptop*500));
    return calculate;
}

var budget = budgetCalculator(2, 5, 1);
console.log(budget);