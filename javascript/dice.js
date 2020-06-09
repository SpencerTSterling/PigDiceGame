window.onload = function () {
    var newGameBtn = document.getElementById("new_game");
    newGameBtn.onclick = createNewGame;
    document.getElementById("roll").onclick = rollDie;
    document.getElementById("hold").onclick = holdDie;
};
function generateRandomValue(minValue, maxValue) {
    var random = Math.random();
    random = Math.floor(Math.random() * ((maxValue - minValue) + minValue));
    return random;
}
function changePlayers() {
    var currentPlayerName = document.getElementById("current").innerText;
    var player1Name = document.getElementById("player1").value;
    var player2Name = document.getElementById("player2").value;
}
function createNewGame() {
    var scoreOne = 0;
    var scoreTwo = 0;
    if (!isTextPresent("player1") || !isTextPresent("player2")) {
        alert("Please input a name in both textboxes.");
    }
    else {
        document.getElementById("turn").classList.add("open");
        document.getElementById("total").value = "0";
        document.getElementById("player1").setAttribute("disabled", "disabled");
        document.getElementById("player2").setAttribute("disabled", "disabled");
        changePlayers();
    }
}
function rollDie() {
    var currTotal = parseInt(document.getElementById("total").value);
}
function holdDie() {
    changePlayers();
}
function isTextPresent(id) {
    var textBox = document.getElementById(id);
    var textBoxValue = textBox.value;
    if (textBoxValue.trim() == "") {
        return false;
    }
    return true;
}
