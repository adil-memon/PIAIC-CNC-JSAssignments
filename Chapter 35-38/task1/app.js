
var inputValue = prompt("Enter a string");
inputValue = inputValue.toLowerCase();
inputValue = inputValue.split(' ');

for (var i = 0; i < inputValue.length; i++) {
    // if (i === 0) {
    //     inputValue = inputValue.charAt(i).toUpperCase() + inputValue.slice(1);
    // }
    // else {
    //     if (inputValue[i] === " ") {
    //         inputValue[++i] = inputValue[++i].charAt(++i).toUpperCase() + inputValue.slice(++i);
    //     }
    // }
    inputValue[i] = inputValue[i].charAt(0).toUpperCase() + inputValue[i].substring(1);
    inputValue.join(' ');
}
console.log(inputValue);