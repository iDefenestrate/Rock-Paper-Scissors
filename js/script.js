
// computer choice
function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

const computerSelection = computerPlay();


// player choice
const playerSelection = prompt("Rock, Paper, or Scissors?")


// Function for One Round of Play
function playRound (playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        alert("You lose. Paper beats Rock.");
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        alert("You win. Rock beats Scissors.");
    }
    else if (playerSelection === "rock" && computerSelection === "rock") {
        alert("DRAW!");
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        alert("You win. Paper beats Rock.");
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert("You lose. Scissors beats Paper.");
    } 
    else if (playerSelection === "paper" && computerSelection === "paper") {
        alert("DRAW!");
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert("You win. Scissors beats paper.");
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert("You lose. Rock beats Scissors.");
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        alert("DRAW!");
    }
    else { alert("Enter a valid choice!");}
}

// Run a Round

console.log(playRound(playerSelection, computerSelection));