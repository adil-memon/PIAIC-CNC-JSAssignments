var courses = [];

var course1 = prompt("Enter first course: ");
var course2 = prompt("Enter second course: ");
var course3 = prompt("Enter third course: ");
var course4 = prompt("Enter fourth course: ");
var course5 = prompt("Enter fifth course: ");

courses.push(course1);
courses.push(course2);
courses.push(course3);
courses.push(course4);
courses.push(course5);

console.log(courses);

course1 = prompt("Edit first course: ", courses[0]);
course2 = prompt("Edit second course: ", courses[1]);
course3 = prompt("Edit third course: ", courses[2]);
course4 = prompt("Edit fourth course: ", courses[3]);
course5 = prompt("Edit fifth course: ", courses[4]);

courses.splice(0, 5);

courses.push(course1);
courses.push(course2);
courses.push(course3);
courses.push(course4);
courses.push(course5);

console.log(courses);