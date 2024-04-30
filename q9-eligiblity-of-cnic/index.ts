// Q9: Write a simple JavaScript program that checks if a person is eligible for a CNIC (show a message with the person's name).

// welcome message
console.log(
  "\n\n<============================THIS PROGRAM CHECK'S ELIGIBILITY CRITERIA OF CNIC=======================>"
);
console.log(
  "<====================================================================================================>\n\n"
);

// import inquirer package to take user input
import inquirer from "inquirer";

//store user input into a varaible
let cnic = await inquirer.prompt([
  {
    name: "name",
    type: "input",
    message: "Enter Your Name: ",
  },
  {
    name: "age",
    type: "number",
    message: "Enter Your Age: ",
  },
]);

// use conditional statement
if (cnic.age >= 18) {
  console.log(`\n${cnic.name}! You Are Eligible For CNIC.`);
} else {
  console.log(`\n${cnic.name}! You Are Not Eligible For CNIC.`);
}

//End message
console.log(
  "\n\n<===============================================THE END==============================================>"
);
console.log(
  "<====================================================================================================>\n\n"
);
