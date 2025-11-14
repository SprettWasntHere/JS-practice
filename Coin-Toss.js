const prompt = require("prompt-sync")();
const coinSides = ["HEADS", "TAILS"];

while true {
    console.clear();
    
    let randomChoice = coinSides[Math.floor(Math.random() * 2)];
    
    let answer = prompt("Heads or Tails? ");

    if (answer == '') {
        break;
    };
    
    if (!coinSides.includes(answer.toUpperCase())) {
        prompt("Sorry, your input is invalid. :( ")
        continue;
    };
    
    if (answer.toUpperCase() == randomChoice) {
        prompt("You win! You guessed ${answer} and it was CORRECT! :D Press ENTER to play again!")
    } else {
        prompt("You lost. You guessed ${answer} but it was " + randomChoice.toLowerCase() + ". :( Press ENTER to play again!")
    };
    continue;
};


GameLoop();
