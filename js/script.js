
// computer choice
function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

const computerSelection = computerPlay();


// player choice
const playerPrompt = prompt("Rock, Paper, or Scissors?")
const playerSelection = playerPrompt.toLocaleLowerCase();

// Function for One Round of Play
function playRound (playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        return("You lose. Paper beats Rock.");
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return("You win. Rock beats Scissors.");
    }
    else if (playerSelection === "rock" && computerSelection === "rock") {
        return("DRAW!");
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return("You win. Paper beats Rock.");
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return("You lose. Scissors beats Paper.");
    } 
    else if (playerSelection === "paper" && computerSelection === "paper") {
        return("DRAW!");
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return("You win. Scissors beats paper.");
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return("You lose. Rock beats Scissors.");
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return("DRAW!");
    }
    else { return("Enter a valid choice!");}
}

// Run a Round

console.log(playRound(playerSelection, computerSelection));


// Game Function (5 rounds)


