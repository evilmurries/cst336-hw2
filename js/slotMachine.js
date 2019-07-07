//VARIABLES
var playerScore;
var CHERRY = 5;
var BAR = 10;
var SEVEN = 25;
var slotMachine = ["img/cherry.png", "img/bar.png", "img/seven.png"];


//LISTENERS
window.onload = startGame();

// FUNCTIONS

// Initializes the game variables
function initGame() {
    playerScore = 0;
}

// Event Handler for the pull button
$('#pullBtn').click(function(){
    var randomIndex;
    var slotName;
    
    // randomly change the image for each slot machine section
    for (var i = 0; i < 3; i++) {
        randomIndex = Math.floor(Math.random() * slotMachine.length);
        slotName = "#slot" + String(i + 1);
        //alert(slotName + " " + slotMachine[randomIndex]);

        //https://stackoverflow.com/questions/554273/changing-the-image-source-using-jquery
        $(slotName).attr("src", slotMachine[randomIndex]);
    }
    computeWinnings();
})

// Event Handler for the reset button
$('#resetBtn').click(function(){
    playerScore = 0;
    updateScore();
})

// Determines how much, if any, the player wins
function computeWinnings() {

}


// Updates the player's score
function updateScore() {
    $("#playerInfo").empty();
    $("#playerInfo").append("<p>Your Current Score: " + playerScore + "</p>");
}

// Begins the game of slot machine
function startGame() {
    initGame();
    updateScore();
}