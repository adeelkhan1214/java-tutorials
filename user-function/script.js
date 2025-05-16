
function rndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const min = 1;
const max = 100;
const secretNumber = rndNumber(min, max);
let attempts = 0;

console.log(`Guess a number between ${min} and ${max}`);


function guessNumber() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function askGuess() {
        readline.question('Your guess: ', (input) => {
            const userGuess = parseInt(input);
            attempts++;

            if (isNaN(userGuess)) {
                console.log('Please enter a valid number!');
                askGuess();
                return;
            }

            if (userGuess === secretNumber) {
                console.log(` Congratulations! You guessed ${secretNumber} in ${attempts} attempts!`);
                readline.close();
            } else if (userGuess < secretNumber) {
                console.log('Too low! Try again.');
                askGuess();
            } else {
                console.log('Too high! Try again.');
                askGuess();
            }
        });
    }

    askGuess();
}

// Start the game
guessNumber();