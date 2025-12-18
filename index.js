console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomResult = Math.random();

  if (randomResult < 0.33) {
    return "rock";
  } else if (randomResult > 0.66) return "paper";
  else {
    return "scissors";
  }
}

function getHumanChoice() {
  const choice = prompt("Choose these options: rock, paper or scissors");

  return choice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  console.log(`The player: ${humanChoice}, the computer: ${computerChoice}`);
  console.log("You lose! Paper beats Rock");

  if (humanChoice === computerChoice) {
    console.log("That's a tie!");
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(
      `Player ${humanChoice} beats Computer ${computerChoice}! That's a score!`
    );
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerChoice++;
    console.log(
      `Missed! Computer ${computerChoice} beats Player ${humanChoice}! That's a score!`
    );
  }
}

function playGame() {
  console.log("<----Let the game begin!---->");
  console.log("You will play 5 rounds against a computer.\n");

  console.log("<----Round 1--->");
  playRound(getHumanChoice(), getComputerChoice());
  console.log(`Score: Player ${humanScore} - ${computerScore} Computer\n`);

  console.log("<----Round 2--->");
  playRound(getHumanChoice(), getComputerChoice());
  console.log(`Score: Player ${humanScore} - ${computerScore} Computer\n`);

  console.log("<----Round 3--->");
  playRound(getHumanChoice(), getComputerChoice());
  console.log(`Score: Player ${humanScore} - ${computerScore} Computer\n`);

  console.log("<----Round 4--->");
  playRound(getHumanChoice(), getComputerChoice());
  console.log(`Score: Player ${humanScore} - ${computerScore} Computer\n`);

  console.log("<----Round 5--->");
  playRound(getHumanChoice(), getComputerChoice());
  console.log(`Score: Player ${humanScore} - ${computerScore} Computer\n`);

  console.log("<---Final Result--->");
  console.log(
    `Final result: Player ${humanScore} - ${computerScore} Computer\n`
  );

  if (humanScore > computerScore) {
    console.log("Congratulations! The Player wins!");
  } else if (computerScore > humanScore) {
    console.log("Oh no, you lose!  Computer has defeated you!");
  } else {
    console.log("The game has ended with a tie!");
  }

  document.querySelector("start").textContent = "Start a new game";
}
