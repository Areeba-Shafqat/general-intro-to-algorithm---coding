// Q8: Write a simple calculator program.
//    1. Addition
//    2. Subtraction
//    3. Multiplication
//    4. Division
// welcome message
console.log("\n\n<======================================THIS IS A SIMPLE CALCULATOR===================================>");
console.log("<====================================================================================================>\n\n");
// import inquirer package to my file
import inquirer from "inquirer";
// import inquirer.prompt() function to take input from end user
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select One Of The Operators To Perform Operation",
        type: "list",
        name: "operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Power"],
    },
]);
// Aplly Condition to check equality of operators
if (answer.operators === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operators === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operators === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operators === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operators === "Power") {
    console.log(Math.pow(answer.firstNumber, answer.secondNumber));
}
else {
    console.log("Please Select Valid Operator");
}
;
//End message
console.log("\n\n<===============================================THE END==============================================>");
console.log("<====================================================================================================>\n\n");
