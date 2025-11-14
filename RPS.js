const prompt = require("prompt-sync")();
let RPS = ['Rock', 'Paper', 'Scissors'];

function Game() {
    console.clear();

    let playerInput = prompt('Rock, Paper, or Scissors: ');
    
    let opponentInput = RPS[Math.floor(Math.random() * 3)];

    console.log('Opponent picked ' + opponentInput + '!');

    // Checks if your input even exists
    if (!RPS.includes(playerInput)) {
        prompt('Not a valid input. Try again. ')
        Game()
    };

    // Win/Lose/Tie conditions
    if (playerInput == opponentInput) {
    console.log("It's a tie! You both picked " + playerInput)
    }
    else if ((opponentInput == 'Rock' && playerInput == 'Scissors') || (opponentInput == 'Scissors' && playerInput == 'Paper')
        || (opponentInput == 'Paper' && playerInput == 'Rock')) {
        console.log("You LOST! " + opponentInput + " beats " + playerInput + "!");
    }
    else if ((playerInput == 'Rock' && opponentInput == 'Scissors') || (playerInput == 'Scissors' && opponentInput == 'Paper')
    || (playerInput == 'Paper' && opponentInput == 'Rock')) {
        console.log("You WIN! " + playerInput + " beats " + opponentInput + "!");
    };

    let idk = prompt("Press ENTER to play again! Type 'stop' (case sensitive) if you want to stop playing! ");

    if (idk == "stop") {
        // This empty line stops the game. Yes this is literally how it is done. Great.
        console.clear();
    } else {
        Game(); // Restarts the game
    };
};

Game(); // Starts the game
