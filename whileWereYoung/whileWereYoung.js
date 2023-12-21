var target = Math.floor(Math.random() * 11);
console.log(target);
var guess = Math.floor(Math.random()*11);
function guessNumber (target,guess){
    while (guess!==target){
        guess = Math.floor(Math.random()*11);
        console.log(guess);
    }
}
guessNumber(target,guess);