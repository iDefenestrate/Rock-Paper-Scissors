
// computer choice
function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

// player choice

function userPlay() {
    const playerPrompt = prompt("Rock, Paper, or Scissors?");
    const playerInput = playerPrompt.toLocaleLowerCase();
    return playerInput;
}



// Function for One Round of Play
function playRound() {


    const playerSelection = userPlay();
    const computerSelection = computerPlay();

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


function game() {
    console.log(playRound());
}

for (let i = 0; i < 5; i++) {
   console.log(game())
}
 







