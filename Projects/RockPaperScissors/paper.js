function computerPlay() {
  let select = Math.floor(Math.random() * 3);
  let options = ["rock", "paper", "scissors"];
  let selection = options[select];
  return selection;
}
function playRound(playerSelection, computerSelection) {
  let result = null;

  playerSelection = playerSelection.toLowerCase();
  let ps = playerSelection;
  let cs = computerSelection;

  if (ps === cs) {
    return -1;
  }

  if (
    (ps == "rock" && cs == "scissors") ||
    (ps == "paper" && cs == "rock") ||
    (ps == "scissors" && cs == "paper")
  ) {
    result = 1;
  } else {
    result = 0;
  }
  return result;
}

let playerScore = 0;
let computerScore = 0;
const results = document.querySelector(".results");
const playerScoreBoard = document.querySelector("#playerScore");
const computerScoreBoard = document.querySelector("#computerScore");

function game(playerSelection) {
  let computerSelection = computerPlay();

  let result = playRound(playerSelection, computerSelection);
  if (result === -1) {
    results.textContent = "its a tie, play again!";
    return;
  }
  if (result) {
    results.textContent = `You won! ${playerSelection} beats ${computerSelection}.`;

    playerScore++;
  } else {
    results.textContent = `You lost! ${computerSelection} beats ${playerSelection}.`;
    computerScore++;
  }

  if (playerScore === 5) {
    updateScore(playerScore, computerScore);
    playerScore = 0;
    computerScore = 0;
    results.textContent = "You won the match!";
    setTimeout(function () {
      updateScore(playerScore, computerScore);
    }, 300);
  } else if (computerScore === 5) {
    updateScore(playerScore, computerScore);

    playerScore = 0;
    computerScore = 0;
    results.textContent = "You lost the match";
    setTimeout(function () {
      updateScore(playerScore, computerScore);
    }, 300);
  } else {
    updateScore(playerScore, computerScore);
  }
}

function updateScore(playerScore, computerScore) {
  playerScoreBoard.textContent = playerScore;
  computerScoreBoard.textContent = computerScore;
}
function resetGame() {
  playerScore = computerScore = 0;
  playerScoreBoard.textContent = playerScore;
  computerScoreBoard.textContent = computerScore;
}
