const moves = ["rock", "paper", "scissors"]


//function to run game
function game() {
    playRound();
}


// function for one round of play
function playRound() {

    const playerSelection = userPlay();
    const computerSelection = computerPlay();
    const product = outcome(playerSelection, computerSelection);
    console.log(product);

}

//outcomes
function outcome(playerMove, computerMove) {

    if (playerMove === computerMove) {
        return "tie";
    } else if (playerMove === "rock" && computerMove === "scissors") {
        return "Player wins. Rock beats Scissors."
    } else if (playerMove === "paper" && computerMove === "rock") {
        return "Player wins. Paper beats Rock."
    } else if (playerMove === "scissors" && computerMove === "paper") {
        return "Player wins. Scissors beats Paper."
    }  else if  (playerMove === "rock" && computerMove === "paper") {
        return "Player loses. Paper beats Rock."
    } else if (playerMove === "paper" && computerMove === "scissors") {
        return "Player loses. Scissors beats Paper."
    } else if (playerMove === "scissors" && computerMove === "rock") {
        return "Player loses. Rock beats Scissors."
    }
}


// computer choice
function computerPlay() {
    return moves[Math.floor(Math.random() * moves.length)];
}

// player choice
function userPlay() {
    let input = prompt("Rock, Paper, or Scissors?");
    while (input == null) {
        return;
    }
    input = input.toLowerCase(); 
    let check = validateInput(input);
    while (check == false) {
        input = prompt("Choose Rock, Paper, or Scissors. Make sure to spell correctly!");
        while (input == null) {
            return;
        }
        input = input.toLowerCase(); 
        check = validateInput(input);
}
return(input);
}

//function to validate input (make sure player is inputting one of the 3 options: rock, paper, or scissors
function validateInput(choice) {
    if (moves.includes(choice)) {
        return true;
    } else {
        return false;
    }
}



//run game
for (let i = 0; i < 5; i++) {
    game();
}

/*
//for loop to run 5 rounds of play
for (let i = 0; i < 5; i++) {
    console.log(game())
}
 */






