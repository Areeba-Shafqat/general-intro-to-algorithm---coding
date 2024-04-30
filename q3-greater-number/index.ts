// Q3: Write a program to determine the greater of two numbers.

// welcome message
console.log(
  "\n\n<=======================THIS PROGRAM FINDS WHICH OF THE GIVEN NUMBER IS GREATEST=====================>"
);
console.log(
  "<====================================================================================================>\n\n"
);

// import inquirer package to take user input
import inquirer from "inquirer";

//store user input into a varaible
let answers = await inquirer.prompt([
  {
    name: "num1",
    type: "number",
    message: "Enter First Number: ",
  },
  { name: "num2", type: "number", message: "Enter Second Number: " },
]);

// use conditional statement
if (answers.num1 > answers.num2) {
  console.log(`\nThe number "${answers.num1}" is greatest number.`);
} else {
  console.log(`\nThe number "${answers.num2}" is greatest number.`);
}

//End message
console.log(
  "\n\n<===============================================THE END==============================================>"
);
console.log(
  "<====================================================================================================>\n\n"
);
