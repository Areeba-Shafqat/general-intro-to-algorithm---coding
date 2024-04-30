// Q2: Write a program that checks if a number is even or odd.

// welcome message
console.log(
  "\n\n<=====================THIS PROGRAM CHECKS WHETHER THE GIVEN NUMBER IS EVEN OR ODD====================>"
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
    message: "Enter the number: ",
  },
]);

// use conditional statement
if (answer.num % 2 == 0) {
  console.log(`\nThe number "${answer.num}" is even.`);
} else {
  console.log(`\nThe number "${answer.num}" is odd.`);
}

//End message
console.log(
  "\n\n<===============================================THE END==============================================>"
);
console.log(
  "<====================================================================================================>\n\n"
);
