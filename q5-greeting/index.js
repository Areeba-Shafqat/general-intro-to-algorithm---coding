// Q5: Write a program that greets the user based on the time of day. Display "Good Morning," "Good Afternoon," or "Good Evening" based on the time of day when you run the code.
// welcome message
console.log("\n\n<=====================================THIS PROGRAM GREETING'S YOU====================================>");
console.log("<====================================================================================================>\n\n");
const thisTime = new Date();
const thehour = thisTime.getHours();
// import inquirer package to take user input
import inquirer from "inquirer";
//store user input into a varaible
let PersonName = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter Your Name: ",
    },
]);
// use conditional statement
if (thehour >= 5 && thehour < 12) {
    console.log(`\nGood Morning! ${PersonName.name}.`);
}
else if (thehour >= 12 && thehour < 18) {
    console.log(`\nGood Afternoon! ${PersonName.name}.`);
}
else if (thehour >= 18 && thehour < 20) {
    console.log(`\nGood Evening! ${PersonName.name}.`);
}
else {
    console.log(`\nGood Night! ${PersonName.name}.`);
}
//End message
console.log("\n\n<===============================================THE END==============================================>");
console.log("<====================================================================================================>\n\n");
