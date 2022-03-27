const moves = ["rock", "paper", "scissors"]


//function to run game
function game() {
    playRound();
}


// function for one round of play
function playRound() {

    const playerSelection = userPlay();
    const computerSelection = computerPlay();

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
console.log(input);
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
game()

/*
//for loop to run 5 rounds of play
for (let i = 0; i < 5; i++) {
    console.log(game())
}
 */






