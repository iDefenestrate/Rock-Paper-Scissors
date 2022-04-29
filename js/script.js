let theWinner = [];
let playerScore = parseInt(0);
let computerScore = parseInt(0);
const moves = ['rock', 'paper', 'scissors'];
// function
function computerPlay() {
  return moves[Math.floor(Math.random() * moves.length)];
}

// function
function startGame() {
  let img = document.querySelectorAll('img');

  img.forEach((img) =>
    img.addEventListener('click', () => {
      if (img.id) {
        playRound(img.id);
      }
    })
  );
}

// function
function resetGame() {
  theWinner = [];
  document.querySelector('.playerScore').textContent = 'Score: 0';
  document.querySelector('.computerScore').textContent = 'Score: 0';
  document.querySelector('.ties').textContent = 'Ties: 0';
  document.querySelector('.playerChoice').textContent = '';
  document.querySelector('.computerChoice').textContent = '';
  document.querySelector('.winner').textContent = '';
}

// function
function playRound(playerSelection) {
  let wins = checkWins();

  if (wins >= 5) {
    return; //ends function immediately
  }

  const computerSelection = computerPlay();
  const winner = getWinner(playerSelection, computerSelection);
  theWinner.push(winner);
  countWins();
  displayRound(playerSelection, computerSelection, winner);

  wins = checkWins();

  if (wins == 5) {
    // display end results
    // make play again button visible
    // change the text to display winner
    displayEnd();
  }
}

// function
function displayEnd() {
  let playerWins = theWinner.filter((item) => item == 'Player').length;

  let winner = document.querySelector('.winner');

  if (playerWins == 5) {
    winner.textContent = 'You won 5 games. You are victorious!';
  } else {
    winner.textContent = 'Computer won 5 games. You lose.';
  }
}

// function
function displayRound(playerSelection, computerSelection, winner) {
  document.querySelector(
    '.playerChoice'
  ).textContent = `Player chose ${playerSelection.toUpperCase()}`;
  document.querySelector(
    '.computerChoice'
  ).textContent = `Computer chose ${computerSelection.toUpperCase()}`;

  displayRoundWinner(winner);
}

// function
function displayRoundWinner(winner) {
  if (winner == 'Player') {
    document.querySelector('.winner').textContent = `You won the round!`;
  } else if (winner == 'Computer') {
    document.querySelector('.winner').textContent =
      'The Computer won the round.';
  } else {
    document.querySelector('.winner').textContent = `It's a tie!`;
  }
}

// function
function countWins() {
  const pWinTotal = theWinner.filter((item) => item == 'Player').length;
  const cWinTotal = theWinner.filter((item) => item == 'Computer').length;
  const ties = theWinner.filter((item) => item == 'Tie').length;
  let pScore = document.querySelector('.playerScore');
  pScore.textContent = `Score: ${pWinTotal}`;
  let cScore = document.querySelector('.computerScore');
  cScore.textContent = `Score: ${cWinTotal}`;
  let tieCount = document.querySelector('.ties');
  tieCount.textContent = `Ties: ${ties}`;
}

// function
function checkWins() {
  const pWinTotal = theWinner.filter((item) => item == 'Player').length;
  const cWinTotal = theWinner.filter((item) => item == 'Computer').length;
  return Math.max(pWinTotal, cWinTotal);
}

// function
function getWinner(playerSelection, computerSelection) {
  if (
    (playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')
  ) {
    return 'Player';
  } else if (playerSelection == computerSelection) {
    return 'Tie';
  } else {
    return 'Computer';
  }
}

// Run the game
startGame();
