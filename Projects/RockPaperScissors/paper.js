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
    return "It's a tie play again!";
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
function game() {
  let computerSelection = null;
  let playerSelection = null;
  let result = null;
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let computerSelection = computerPlay();
    let playerSelection = prompt("choose your move");
    result = playRound(playerSelection, computerSelection);
    if (typeof result == "string") {
      console.log("its a tie, play again!");
      i--;
      continue;
    }
    if (result) {
      console.log(`You won! ${playerSelection} beats ${computerSelection}.`);
      playerScore++;
    } else {
      console.log(`You lost! ${computerSelection} beats ${playerSelection}.`);
      computerScore++;
    }
    if (playerScore === 3) {
      console.log("you won the match!");
      console.log(`Score you:${playerScore}, computer:${computerScore}`);

      break;
    } else if (computerScore === 3) {
      console.log("you lost :(");
      console.log(`Score you:${playerScore}, computer:${computerScore}`);
      break;
    }
  }
}
