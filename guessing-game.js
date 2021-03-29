function guessingGame() {
    const randomInt = Math.floor(Math.random() * 10);
    let numOfGuess = 0;
    let youWon = false;
    return function guessed(guess) {
        numOfGuess++;
        if(youWon === true){
            console.log("What are you doing? You already won!")
        }else if(guess < randomInt){
            console.log(`${guess} is too low`);
        }else if(guess > randomInt){
            console.log(`${guess} is too high`);
        }else if(guess === randomInt){
            console.log(`You win! You found ${guess} in ${numOfGuess} guesses`);
            youWon = true;
        }
    }
}


