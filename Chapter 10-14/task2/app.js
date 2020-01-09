var course1 = prompt("Enter marks of course one:");
var course2 = prompt("Enter marks of course two:");
var course3 = prompt("Enter marks of course three:");
var course4 = prompt("Enter marks of course four:");
var course5 = prompt("Enter marks of course five:");

var totalMarks = 500;
var percentage = ((course1 + course2 + course3 + course4 + course5) * 100) / totalMarks;

alert(`Your percentage is: ${percentage}`);