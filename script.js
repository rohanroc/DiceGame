
function callForDice(diceNumber) {
    var a = Math.random() * 6;
    a = Math.floor(a) + 1;
    document.querySelector(".image"+ diceNumber).innerHTML = '<img src="images/dice' + a + '.png" alt="dice' + diceNumber +'">';
    return a;
}

var first = callForDice(1);
var second = callForDice(2);

if (first > second) {
    document.querySelector(".heading").textContent = "🚩Player 1 Win";
}
else if (first < second) {
    document.querySelector(".heading").textContent = "Player 2 Win🚩";
}
else {
    document.querySelector(".heading").textContent = "Match Draw";
}
