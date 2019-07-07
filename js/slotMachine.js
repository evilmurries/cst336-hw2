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
    playerScore = 1000;
    $("#pullBtn").prop("disabled", false);
    $("#playerInfo").show();
    $("#loseBox").hide();
}

// Event Handler for the pull button
$('#pullBtn').click(function(){
    var randomIndex;
    var slotName;
    var bet;

    bet = $("#userBet").val();

    // validate user input
    if (isNaN(bet)) {
        alert("Must input a number");
    } else if (bet == "") {
        alert("Must input a number");
    } else if (bet > playerScore) {
        alert("You do not have that much to bet!!");
    } else {

        // randomly change the image for each slot machine section
        for (var i = 0; i < 3; i++) {
            randomIndex = Math.floor(Math.random() * slotMachine.length);
            slotName = "#slot" + String(i + 1);

            //https://stackoverflow.com/questions/554273/changing-the-image-source-using-jquery
            $(slotName).attr("src", slotMachine[randomIndex]);
        }
        computeWinnings(bet);
    }
})

// Event Handler for the reset button
$('#resetBtn').click(function(){
    initGame();
    updateScore();
})

// Determines how much, if any, the player wins
function computeWinnings(playerBet) {
    var firstSlot = $("#slot1").attr("src");
    var secondSlot = $("#slot2").attr("src");
    var thirdSlot = $("#slot3").attr("src");

    if (firstSlot == secondSlot && firstSlot == thirdSlot) {
        if (firstSlot == slotMachine[0]) {
            playerScore += (playerBet * CHERRY);
        } else if (firstSlot == slotMachine[1]) {
            playerScore += (playerBet * BAR);
        } else {
            playerScore += (playerBet * SEVEN);
        }
    } else {
        playerScore -= playerBet;
    }

    updateScore();
}


// Updates the player's score
function updateScore() {
    $("#playerInfo").empty();

    if (playerScore > 0) {
        $("#playerInfo").append("<p>Your Current Score: " + playerScore + "</p>");
    } else {
        $("#pullBtn").prop("disabled", true);
        $("#playerInfo").hide();
        $("#loseBox").show();
    }
}

// Begins the game of slot machine
function startGame() {
    initGame();
    updateScore();
}