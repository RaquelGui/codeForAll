var target = Math.ceil(Math.random() * 10);
var tries = 5;
var guess;

console.log(target);

while (tries > 0){
    guess = Math.ceil(Math.random()*10);
    tries--;
    console.log(guess);
    
    if (guess === target){
        
        console.log("Congratulations");
        break;
    } else {
    console.log("Try again");
    }
}