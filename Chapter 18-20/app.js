/* Optimize  version of previous assignment */

var courses = [];
var coursesInput = [];

for (var i = 0; i < 5; ++i) {
    coursesInput[i] = prompt("Enter course " + i + ": ");
    courses.push(coursesInput[i]);
}

console.log(courses);
courses.splice(0, 5);

for (var i = 0; i < 5; ++i) {
    coursesInput[i] = prompt("Edit course " + i + ": ", courses[i]);
    courses.push(coursesInput[i]);
}
console.log(courses);