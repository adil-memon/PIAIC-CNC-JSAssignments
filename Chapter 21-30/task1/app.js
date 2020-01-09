var num1 = Number(prompt("Input a number:"));
num1 = Math.ceil(num1);

var text = "This is a dummt text";
var sliceText = text.slice(0, num1);
var revString = "";

for (var i = sliceText.length; i >= 0; i--) {
    revString += sliceText[i];
}
console.log(revString);