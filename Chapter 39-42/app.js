var total = 500;
var score = [];
var percentage = [];

for (var i = 0; i < 5; i++) {
    score.push(Number(prompt('Enter course' + i + ' marks: ')));
    percentage.push((score[i] / total) * 100);
}

for (var i = 0; i < score.length; i++) {
    switch (true) {
        case (percentage[i] >= 90 && percentage[i] <= 100):
            applyAlert('A+');
            break;

        case (percentage[i] >= 75 && percentage[i] <= 89):
            applyAlert('A');
            break;

        case (percentage[i] >= 60 && percentage[i] <= 74):
            applyAlert('B');
            break;

        case (percentage[i] >= 45 && percentage[i] <= 59):
            applyAlert('C');
            break;

        case (percentage[i] >= 30 && percentage[i] <= 44):
            applyAlert('D');
            break;

        default:
            applyAlert('F');
            break;
    }
}

function applyAlert(grade) {
    alert('Grade ' + grade);
}