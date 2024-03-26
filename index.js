#! /usr/bin/env/ node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter Mathematics Marks", type: "number", name: "num1" },
    { message: "Enter Chemistry Marks", type: "number", name: "num2" },
    { message: "Enter English Marks", type: "number", name: "num3" },
    { message: "Enter Sindhi Marks", type: "number", name: "num4" },
    { message: "Enter Computer Marks", type: "number", name: "num5" },
]);
const marksObtain = answer.num1 + answer.num2 + answer.num3 + answer.num4 + answer.num5;
console.log("Marks Obtain=", marksObtain);
const totalmarks = 500;
console.log('Total Marks:', totalmarks);
const percentage = marksObtain / totalmarks * 100;
console.log('Percentage:', (percentage).toFixed(1), `%`);
//for Grade and Result
//conditional test
if (percentage >= 80) {
    console.log("Grade A", "+");
    console.log("Result:Passed");
}
else if (percentage >= 70) {
    console.log("Grade A");
    console.log("Result:Passed");
}
else if (percentage >= 60) {
    console.log("Grade B");
    console.log("Result:Passed");
}
else if (percentage >= 50) {
    console.log("Grade C");
    console.log("Result:Failed");
}
else {
    console.log("Result:Failed");
}
