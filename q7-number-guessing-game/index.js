// Q7: Write a simple number guessing game. Provide a selected number and a guess. Based on those numbers, give players clues if their guess is higher, lower, or correct.
// welcome message
console.log("\n\n<=====================================THIS IS A NUMBER GUESSING GAME=================================>");
console.log("<====================================================================================================>\n\n");
// import inquirer package to my file
import inquirer from "inquirer";
// Use pre-defined methods
const randomNumber = Math.floor(Math.random() * 6 + 1);
let condition = true;
// Get user input
while (condition) {
    const answer1 = await inquirer.prompt([
        {
            name: "userGuessNumber",
            type: "number",
            message: "Guess Any Number Between 1~6: ",
        }
    ]);
    //Use condition
    if (answer1.userGuessNumber < randomNumber) {
        console.log("Your Guess Is Too Low.");
    }
    else if (answer1.userGuessNumber > randomNumber) {
        console.log("Your Guess Is Too High.");
    }
    else {
        console.log("Congratulations!You Guess Right Number.");
    }
    const answer2 = await inquirer.prompt({
        name: "againGuessNumber",
        type: "confirm",
        message: "Would You Like To Again Guess A Number? ",
        default: "false",
    });
    condition = answer2.againGuessNumber;
}
//End message
console.log("\n\n<===============================================THE END==============================================>");
console.log("<====================================================================================================>\n\n");
