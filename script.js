let num = 6;
let result1 = ++num; // Increment the number by 1
let result2 = num++; // Increment the number by 1, but return the original value of the variable
let result3 = --num; // Decrement the number by 1
let result4 = num--; // Decrement the number by 1, but return the original value of the variable
let result5 = -num; // Change the sign of the number to negative
let result6 = Math.abs(num); // Get the absolute value of the number
let result7 = num ** 2; // Get the square of the number

document.write(`Original Number: ${num}<br>
Incremented Number: ${result1}<br>
Original Number (post-increment): ${result2}<br>
Decremented Number: ${result3}<br>
Original Number (post-decrement): ${result4}<br>
Negative Number: ${result5}<br>
Absolute Value: ${result6}<br>
Square of Number: ${result7}`);

//output
a = 1
b = 0
result = 3

let name = prompt("What is your name?");
alert("Hello, " + name + "! Nice to meet you.");


let number = prompt("Enter a number:");
if (number === null || isNaN(number)) {
    number = 5;
}

let table = "<h2>Multiplication Table of " + number + "</h2>";
for (let i = 1; i <= 10; i++) {
    table += "<p>" + number + " x " + i + " = " + (number * i) + "</p>";
}

document.write(table);


let subject1 = prompt("Enter subject 1 name:");
let subject2 = prompt("Enter subject 2 name:");
let subject3 = prompt("Enter subject 3 name:");

const TOTAL_MARKS = 100;

let obtainedMarks1 = prompt("Enter obtained marks for " + subject1 + ":");

let obtainedMarks2 = prompt("Enter obtained marks for " + subject2 + ":");
let obtainedMarks3 = prompt("Enter obtained marks for " + subject3 + ":");

let totalMarks = parseInt(obtainedMarks1) + parseInt(obtainedMarks2) + parseInt(obtainedMarks3);
let percentage = (totalMarks / (TOTAL_MARKS * 3)) * 100;

document.write("<table>");
document.write("<tr><th>Subject</th><th>Obtained Marks</th><th>Total Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + obtainedMarks1 + "</td><td>" + TOTAL_MARKS + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + obtainedMarks2 + "</td><td>" + TOTAL_MARKS + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + obtainedMarks3 + "</td><td>" + TOTAL_MARKS + "</td></tr>");
document.write("<tr><td><b>Total</b></td><td><b>" + totalMarks + "</b></td><td><b>" + (TOTAL_MARKS * 3) + "</b></td></tr>");
document.write("<tr><td><b>Percentage</b></td><td colspan='2'><b>" + percentage.toFixed(2) + "%</b></td></tr>");
document.write("</table>");