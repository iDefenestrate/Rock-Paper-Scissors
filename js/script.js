const moves = ["rock", "paper", "scissors"]


// function for one round of play
function playRound(playerSelection, computerSelection){


    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "Tie game! Player and Computer both chose ROCK.";
        }
        else if (computerSelection === "scissors") {
            playerScore++;
            return "Player wins! Player chose ROCK, Computer chose SCISSORS.";
            
        }
        else {
            computerScore++;
            return"Player loses. Player chose ROCK, Computer chose PAPER.";
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            return "Tie game! Player and Computer both chose PAPER.";
        } else if (computerSelection === "rock") {
            playerScore++;;
            return "Player wins! Player chose PAPER, Computer chose ROCK.";
            
        } else {
            computerScore++;
            return "Player loses. Player chose PAPER, Computer chose SCISSORS.";
            
            }
        }
    if (playerSelection === "scissors")
        if (computerSelection === "scissors") {
            return "Tie game! Player and Computer both chose SCISSORS.";
        }
        else if (computerSelection === "paper") {
            playerScore++;;
           return "Player wins! Player chose SCISSORS, Computer chose PAPER.";
            
        }
        else {
            computerScore++;
            return "Player loses. Player chose SCISSORS, Computer chose ROCK.";
            
        }
    }


//function to run game
function game() {
    for (let i = 0; i < 5; i++) {

        let playerSelection = userPlay();
        const computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection));
        console.log("Player Score:" + playerScore)
        console.log("Computer Score:" + computerScore)
    
    }
}

//score 
playerScore = parseInt(0);
computerScore = parseInt(0);


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
game();

