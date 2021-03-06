//Homework week 3 - create a game with JavaScript
// Game: guess the number from 1 to 10 (both inclusive)

const prompt = require('prompt-sync')();

// Variable definitions to cover scnearios
var noPlay = "Ohh, I'm sad that you don't want to play :( but that's ok. Have a nice day!";
var rules = "\nQuick recap of the rules: \nI will guess a number between 1 and 10 and give you 3 chances to guess my number.\n";
var guessesTaken = 0;
var possibleNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

//Game logic
//Selection of a random number between 1 and 10, both inclusive
var randomNum = possibleNum[Math.floor(Math.random() * possibleNum.length) + 1];
//DISCOVER RANDOMNUM: uncomment the below line for test purposes only
//console.log(randomNum);
var name = prompt("Welcome! My name is Sara, what's your name? : ");
console.log(`\nNice to meet you ${name} :) \nThis is my first JavaScript coding and I thought it would be great to play a game. \n`);
var wannaPlay = prompt(`Do you want to play? Respond Y/N : `);
//CASE 1: the user wants to play
if (wannaPlay.toUpperCase() === "Y") {
    //Print the rules of the game and ask for the first guess
    console.log(rules);
    while (guessesTaken < 3) {
        var guess = prompt(`${name}, what's your guess? : `);
        //Go through: is the guess a num between 1-10 and not being that
        if (possibleNum.includes(guess, 0)) {
            //Add +1 to the guesses count
            guessesTaken += 1;
            //Check out the guess
            //1st case: user guessed the number
            if (guess === randomNum) {
                console.log(`Cooooorrect! The number I guessed was ${randomNum}, great job :) \n`);
                break;
                //2nd case: num not guessed but all 3 guesses now used (no more guess prompt)  
            } else if (guess != randomNum && guessesTaken === 3) {
                console.log(`Oh no, you did not guess my number! \nThe secret number was ${randomNum}\n... GaMe OvEr ... \n`);
                //3rd case: guesses under 3 and last guess was not the one. The guess prompt again
            } else {
                console.log(`Mmm... nope! ${guess} was not the number I had in mind.\n`);
                guess;
            }

            //The below is to cover the case of the user inputting a non valid character for the game
        } else {
            console.log("Sorry, it seems to me that you did not input a number between 1-10. Try again. \n");
            guess;
        }
    }

    //CASE 2: the used does not want to play
} else if (wannaPlay.toUpperCase() === "N") {
    console.log(noPlay);
    //CASE 3: the user enters something else than Y or N
} else {
    console.log("You have not entered a valid response. Please only type Y or N. \n");
    wannaPlay;
};