var correctGuesses = 0;

while (correctGuesses < 4){
    var guess = 1 + Math.floor(3*Math.random());
    
    if (guess === 1){
        correctGuesses++;
        console.log("Found" + " " + correctGuesses + " " + "characters");
    }else if (guess === 2){
            correctGuesses = 0;
            console.log("Starting over");
    }else if (guess === 3){
    }
}      
console.log("Terminal hacked!");