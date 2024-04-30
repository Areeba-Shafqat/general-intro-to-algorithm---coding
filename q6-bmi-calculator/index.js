// welcome message
console.log("\n\n<===============================THIS IS A BODY MASS INDEX (BMI) CALCULATOR===========================>");
console.log("<====================================================================================================>\n\n");
// import inquirer package to take user input
import inquirer from "inquirer";
//store user input into a varaible
let bmi = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter Your Name: ",
    },
    {
        name: "weight",
        type: "number",
        message: "Enter Your Weight(in KG): ",
    },
    {
        name: "height",
        type: "number",
        message: "Enter Your Height(in meters): ",
    },
]);
// using mathematical operation
let bmiAnswer = bmi.weight / (bmi.height * bmi.height);
console.log(`\n${bmi.name}! Your BMI Is ${bmiAnswer.toFixed(2)}. `);
// use conditional statement
if (bmiAnswer < 18.5) {
    console.log(`${bmi.name}! Is Underweight.`);
}
else if (bmi >= 18.5 && bmi < 25) {
    console.log(`${bmi.name}! Is Healthy`);
}
else if (bmi >= 25 && bmi < 30) {
    console.log(`${bmi.name}! Is Overweight.`);
}
else {
    console.log(`${bmi.name}! Is Suffering from Obesity.`);
}
//End message
console.log("\n\n<===============================================THE END==============================================>");
console.log("<====================================================================================================>\n\n");
