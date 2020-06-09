window.onload = function(){
    let newGameBtn = document.getElementById("new_game");
    newGameBtn.onclick = createNewGame;

    document.getElementById("roll").onclick = rollDie;

    document.getElementById("hold").onclick = holdDie;
}

/**
 * Returns a random number between minValue and maxValue
 * @param minValue is inclusive
 * @param maxValue is exclusive
 */
function generateRandomValue(minValue:number, maxValue:number):number{
    var random = Math.random();
    
    //TODO: use random to generate a number between min and max
    random = Math.floor( Math.random() * ( (maxValue - minValue) + minValue ) );
    return random;
}

/**
 * Changes the current player displayed 
 */
function changePlayers():void{
    console.log("Time to switch players");
    let currentPlayerName = document.getElementById("current").innerText;
    let player1Name = (<HTMLInputElement>document.getElementById("player1")).value;
    let player2Name = (<HTMLInputElement>document.getElementById("player2")).value;

    //swap from player to player by comparing current name to player names
    //set currentPlayerName to the next player

    if (currentPlayerName != player1Name){
        document.getElementById("current").innerText = player1Name;
    } else {
        document.getElementById("current").innerText = player2Name;
    }

}


function createNewGame(){
    // alert("you have started the game"); <-- button works

    //set player 1 and player 2 scores to 0
    let scoreOne = 0;
    let scoreTwo = 0;

    //verify each player has a name
    //if both players don't have a name display error
    if ( !isTextPresent("player1") || !isTextPresent("player2") ){
        alert("Please input a name in both textboxes.");
    } else { // rest of method only runs when text is present in both boxes

        //if both players do have a name start the game!
        document.getElementById("turn").classList.add("open");
        (<HTMLInputElement>document.getElementById("total")).value = "0";
        //lock in player names and then change players
        document.getElementById("player1").setAttribute("disabled", "disabled");
        document.getElementById("player2").setAttribute("disabled", "disabled");
        changePlayers();

    }
}

function rollDie():void{
    let currTotal = parseInt((<HTMLInputElement>document.getElementById("total")).value);
    
    //roll the die and get a random value 1 - 6 (use generateRandomValue function)

    //if the roll is 1
    //  change players
    //  set current total to 0
    
    //if the roll is greater than 1
    //  add roll value to current total

    //set the die roll to value player rolled
    //display current total on form
}

function holdDie():void{
    //get the current turn total
    //determine who the current player is
    //add the current turn total to the player's total score

    //reset the turn total to 0

    //change players
    changePlayers();
}

/**
 * Returns true if the passed-in textbox has text
 * @param id The id of the textbox
 */
function isTextPresent(id:string):boolean {
    let textBox = <HTMLInputElement>document.getElementById(id);
    let textBoxValue = textBox.value;
    if (textBoxValue.trim() == "") {
        return false;
    }
    return true;
}
