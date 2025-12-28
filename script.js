// Computer Choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

// Scores
let humanScore = 0;
let computerScore = 0;

// DOM Elements
const resultsDiv = document.getElementById("results");
const scoreDiv = document.getElementById("score");
const buttons = document.querySelectorAll("button");

// Play One Round
function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    resultsDiv.textContent = `Tie! Both chose ${humanChoice}`;
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    resultsDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    resultsDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  updateScore();
  checkWinner();
}

// Update Score Display
function updateScore() {
  scoreDiv.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
}

// Check for Game Winner
function checkWinner() {
  if (humanScore === 5 || computerScore === 5) {
    resultsDiv.textContent =
      humanScore === 5 ? "🎉 You won the game!" : "💀 You lost the game!";

    buttons.forEach(button => button.disabled = true);
  }
}

// Button Event Listeners
buttons.forEach(button => {
  button.addEventListener("click", () => {
    playRound(button.dataset.choice);
  });
});

// Initial score display
updateScore();
