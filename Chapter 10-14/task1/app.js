var num1 = Number(prompt("Input first number:"));
var num2 = Number(prompt("Input second number:"));
var op = prompt("Input a operator:");

if (op === "+") {
    alert(num1 + op + num2 + " = "(num1 + num2));
} else if (op === "-") {
    alert(num1 + op + num2 + " = "(num1 - num2));
} else if (op === "*") {
    alert(num1 + op + num2 + " = "(num1 * num2));
} else if (op === "/") {
    alert(num1 + op + num2 + " = "(num1 / num2));
} else if (op === "%") {
    alert(num1 + op + num2 + " = "(num1 % num2));
} else {
    alert(`Invalid operator`);
}