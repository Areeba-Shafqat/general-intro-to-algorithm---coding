// Q4: Create a program to check a student's grade and percentage.
// welcome message
console.log("\n\n<===========================THIS PROGRAM CHECKS STUDENT'S GRADE AND PERCENTAGE=======================>");
console.log("<====================================================================================================>\n\n");
// import inquirer package to take user input
import inquirer from "inquirer";
//store user input into a varaible
let subjects = await inquirer.prompt([
    {
        name: "isl",
        type: "number",
        message: "Enter marks Of Islamiat: "
    },
    {
        name: "eng",
        type: "number",
        message: "Enter marks Of English: "
    }, {
        name: "urdu",
        type: "number",
        message: "Enter marks Of Urdu: "
    },
    {
        name: "math",
        type: "number",
        message: "Enter marks Of Mathematics: "
    },
    { name: "sci",
        type: "number",
        message: "Enter marks Of Science: " },
    {
        name: "drawing",
        type: "number",
        message: "Enter marks Of Drawing: "
    },
    { name: "sindhi",
        type: "number",
        message: "Enter marks Of Sindhi: " }
]);
let totalMarks = (subjects.isl + subjects.eng + subjects.urdu + subjects.math + subjects.sci + subjects.drawing + subjects.sindhi);
let percentage = totalMarks / 6;
console.log(`\nTotal Marks= ${totalMarks}. \nPercentage= ${percentage.toFixed(1)}%`);
// use conditional statement
if (percentage > 80) {
    console.log(`Students Grade Is "A-one."`);
}
else if (percentage > 70) {
    console.log(`Students Grade Is "A."`);
}
else if (percentage > 60) {
    console.log(`Students Grade Is "B."`);
}
else if (percentage > 50) {
    console.log(`Students Grade Is "C."`);
}
else if (percentage > 40) {
    console.log(`Students Grade Is "D".`);
}
else {
    console.log(`You Have Got "F".`);
}
//End message
console.log("\n\n<===============================================THE END==============================================>");
console.log("<====================================================================================================>\n\n");
