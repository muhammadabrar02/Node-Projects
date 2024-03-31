#! /usr/bin/env node

import inquirer from "inquirer";

// 2) Computer will generate a random number - Dome.

// 2) User input for guessing number - Done.

// 3) Compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1 to 6:  ",
    },
]);

if(answers.userGuessNumber === randomNumber){

    console.log("Congratulations you guessed right number.");

}else{
    console.log("You guessed wrong number");
}