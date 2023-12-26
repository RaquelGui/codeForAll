var counter = 0;

var incrementCounterBy = function(amount){
	counter += amount;
};

var resetCounter = function(){
    counter = 0;
};

incrementCounterBy (5);
console.log(counter);
incrementCounterBy (10);
console.log(counter);
resetCounter();
console.log(counter);
