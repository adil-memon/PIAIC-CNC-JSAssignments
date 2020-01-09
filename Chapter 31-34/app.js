var name = "Mohsin";
var date = "23";
var month = "3";
var year = "1999";

console.log("Hello " + name + ", Good evening");

var rightNow = new Date();
var newDate = new Date(month + " " + date + ", " + year + " 11:25:00");
console.log(newDate);

var time = rightNow.getTime() - rightNow.getHours() * 3600;
console.log(time);
var ageInYears = rightNow.getFullYear() - year;
var ageInMonths = rightNow.getMonth() - month;
var ageInDays = rightNow.getDate() - date;
var ageInHours = Math.floor();
var ageInMinutes = rightNow. * 60;
var ageInSeconds = ageInMinutes * 60;
var ageInMills = ageInSeconds * 1000;

console.log(`You are ${ageInYears} years ${ageInMonths} months ${ageInDays} days`);

console.log(newDate.getTime());
console.log(rightNow.getTime());
var msDiff = newDate.getTime() - rightNow.getTime();
var diffInDays = msDiff / (1000 * 60 * 60 * 24);
console.log(diffInDays);
