// Q1: Write a program that checks whether the given number is positive or negative.

// welcome message
console.log(
  "\n\n<================THIS PROGRAM CHECKS WHETHER THE GIVEN NUMBER IS POSITIVE OR NEGATIVE================>"
);
console.log(
  "<====================================================================================================>\n\n"
);

// import inquirer package to take user input
import inquirer from "inquirer";

//store user input into a varaible
let answer = await inquirer.prompt([
  {
    name: "num",
    type: "number",
    message: "Enter a number: ",
  },
]);

// use conditional statement
if (answer.num >= 0) {
  console.log(`\nThe value "${answer.num}" is positive.`);
} else {
  console.log(`\nThe value "${answer.num}" is negative.`);
}

//End message
console.log(
  "\n\n<===============================================THE END==============================================>"
);
console.log(
  "<====================================================================================================>\n\n"
);
