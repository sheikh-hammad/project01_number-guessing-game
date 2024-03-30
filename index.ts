#! /usr/bin/env node

import inquirer from "inquirer";

// 1) Generate a random number
const randomNumber = Math.floor(Math.random() * 3 + 1)
// console.log(randomNumber)

// 2) User input a guessing number
const answer = await inquirer.prompt([
  {
    name: "guessRandomNumber",
    type: "number",
    message: "Please guess a number b/w 1-3",
  },
]);

// 3) Compare the resultFF
if (randomNumber > answer.guessRandomNumber) {
  console.log("Too low");
} else if (randomNumber < answer.guessRandomNumber) {
  console.log("Too high");
} else {
  console.log("Correct answer");
}
