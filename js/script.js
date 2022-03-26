let options = ["rock", "paper", "scissors"]


// computer choice
function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
}

// player choice
function userPlay() {
    let input = prompt("Rock, Paper, or Scissors?");
    return input;}



// function for one round of play
function playRound() {

    const playerSelection = userPlay();
    const computerSelection = computerPlay();


    if (playerSelection === "rock" && computerSelection === "paper") {
        return("You lose. Paper beats Rock.");
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return("You win. You chose Rock, Computer chose Scissors.");
    }
    else if (playerSelection === "rock" && computerSelection === "rock") {
        return("It's a tie! You and Computer both chose Rock!");
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return("You win! You chose Paper, Computer chose Rock.");
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return("You lose. You chose Scissors, Computer chose Paper.");
    } 
    else if (playerSelection === "paper" && computerSelection === "paper") {
        return("It's a tie! You and Computer both chose Paper!");
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return("You win! You chose Scissors, Computer chose paper.");
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return("You lose. You chose Rock, Computer chose Scissors.");
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return("It's a tie! You and Computer both chose Scissors!");
    }
    else { return("Enter a valid choice!");}
    
}

//function to run one round of play
function game() {
    
    console.log(playRound());


}


//for loop to run 5 rounds of play
for (let i = 0; i < 5; i++) {
    console.log(game())
}
 







