function callForDiceOne() {
    var a = Math.random() * 6;
    a = Math.floor(a) + 1;
    document.querySelector(".image1").innerHTML = '<img src="images/dice' + a + '.png" alt="dice1">';
    return a;
}
function callForDiceTwo() {
    var a = Math.random() * 6;
    a = Math.floor(a) + 1;
    document.querySelector(".image2").innerHTML = '<img src="images/dice' + a + '.png" alt="dice1">';
    return a;
}

var first = callForDiceOne();
var second = callForDiceTwo();

if (first > second) {
    document.querySelector(".heading").textContent = "🚩Player 1 Win";
}
else if (first < second) {
    document.querySelector(".heading").textContent = "Player 2 Win🚩";
}
else {
    document.querySelector(".heading").textContent = "Match Draw";
}